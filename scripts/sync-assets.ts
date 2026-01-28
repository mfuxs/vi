import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

// --- KONFIGURATION ---
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY; // JSON String aus GitHub Secrets
const FOLDER_ID = process.env.GDRIVE_FOLDER_ID; // Die ID deines Google Drive Ordners
const CREATORS_JSON_PATH = path.resolve('src/data/creators.json');
const ASSETS_DIR = path.resolve('public/images/creators');

async function downloadFile(drive: any, fileId: string, destPath: string) {
  const dest = fs.createWriteStream(destPath);
  const response = await drive.files.get(
    { fileId: fileId, alt: 'media' },
    { responseType: 'stream' }
  );
  
  return new Promise((resolve, reject) => {
    response.data
      .on('end', () => resolve(true))
      .on('error', (err: any) => reject(err))
      .pipe(dest);
  });
}

async function run() {
  if (!SERVICE_ACCOUNT_KEY || !FOLDER_ID) {
    console.log('Skipping Asset Sync: GOOGLE_SERVICE_ACCOUNT_KEY or GDRIVE_FOLDER_ID not provided.');
    return;
  }

  // Auth
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });

  // 1. Liste alle Dateien im Drive-Ordner
  console.log('Listing files in Google Drive folder...');
  const res = await drive.files.list({
    q: `'${FOLDER_ID}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
  });
  const driveFiles = res.data.files || [];
  console.log(`Found ${driveFiles.length} files in Drive.`);

  // 2. Erstelle eine Map: Dateiname (ohne Endung) -> FileInfo
  const driveMap = new Map();
  driveFiles.forEach(file => {
    const nameWithoutExt = file.name!.split('.').slice(0, -1).join('.').toLowerCase();
    driveMap.set(nameWithoutExt, file);
  });

  // 3. Lade creators.json
  if (!fs.existsSync(CREATORS_JSON_PATH)) {
    console.error('creators.json not found!');
    return;
  }
  const creators = JSON.parse(fs.readFileSync(CREATORS_JSON_PATH, 'utf-8'));
  let updatedCount = 0;

  // 4. Abgleich und Download
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  for (const creator of creators) {
    const cleanHandle = creator.handle.replace('@', '').toLowerCase();
    const lookupName = (creator.imageName || cleanHandle).toLowerCase();
    const driveFile = driveMap.get(lookupName);

    if (driveFile) {
      const ext = driveFile.name.split('.').pop();
      const localFileName = `${cleanHandle}.${ext}`;
      const localPath = path.join(ASSETS_DIR, localFileName);
      
      console.log(`Syncing image for ${creator.name} (${driveFile.name})...`);
      await downloadFile(drive, driveFile.id, localPath);
      
      // Update creator imageUrl in JSON (relativer Pfad für das Frontend)
      creator.imageUrl = `images/creators/${localFileName}`;
      updatedCount++;
    } else {
      console.log(`No image found in Drive for handle: ${creator.handle}`);
    }
  }

  // 5. Speichere aktualisierte creators.json
  fs.writeFileSync(CREATORS_JSON_PATH, JSON.stringify(creators, null, 2));
  console.log(`Successfully synced ${updatedCount} images and updated creators.json.`);
}

run().catch(err => {
  console.error('Asset Sync failed:', err);
  process.exit(1);
});
