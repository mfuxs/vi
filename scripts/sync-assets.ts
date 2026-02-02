import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// --- KONFIGURATION ---
const SERVICE_ACCOUNT_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
const FOLDER_ID = process.env.GDRIVE_FOLDER_ID;
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
      .on('error', (err: any) => {
        dest.close();
        reject(err);
      })
      .pipe(dest)
      .on('finish', () => {
        dest.close();
        resolve(true);
      })
      .on('error', (err: any) => {
        dest.close();
        reject(err);
      });
  });
}

async function run() {
  if (!SERVICE_ACCOUNT_KEY || !FOLDER_ID) {
    console.log('Skipping Asset Sync: GOOGLE_SERVICE_ACCOUNT_KEY or GDRIVE_FOLDER_ID not provided.');
    return;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });

  console.log('Listing files in Google Drive folder...');
  const res = await drive.files.list({
    q: `'${FOLDER_ID}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
  });
  const driveFiles = res.data.files || [];
  console.log(`Found ${driveFiles.length} files in Drive.`);

  const driveMap = new Map();
  driveFiles.forEach(file => {
    const nameWithoutExt = file.name!.split('.').slice(0, -1).join('.').toLowerCase();
    driveMap.set(nameWithoutExt, file);
  });

  if (!fs.existsSync(CREATORS_JSON_PATH)) {
    console.error('creators.json not found!');
    return;
  }
  const creators = JSON.parse(fs.readFileSync(CREATORS_JSON_PATH, 'utf-8'));
  let updatedCount = 0;

  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  for (const creator of creators) {
    const cleanHandle = creator.handle.replace('@', '').toLowerCase();
    const lookupName = (creator.imageName || cleanHandle).toLowerCase();
    const driveFile = driveMap.get(lookupName);

    if (driveFile) {
      const tempPath = path.join(ASSETS_DIR, `${cleanHandle}.tmp`);
      const webpFileName = `${cleanHandle}.webp`;
      const finalPath = path.join(ASSETS_DIR, webpFileName);
      
      console.log(`Syncing image for ${creator.name} (${driveFile.name})...`);
      
      try {
        await downloadFile(drive, driveFile.id, tempPath);
        
        await sharp(tempPath, { failOn: 'none' })
          .resize(1200, 1500, { fit: 'cover', position: 'top' })
          .webp({ quality: 80 })
          .toFile(finalPath);
        
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        
        const newUrl = `images/creators/${webpFileName}`;
        if (creator.imageUrl !== newUrl) {
          creator.imageUrl = newUrl;
        }
        updatedCount++;
      } catch (err: any) {
        console.error(`Failed to process image for ${creator.name}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    } else {
      console.log(`No image found in Drive for handle: ${creator.handle}`);
    }
  }

  fs.writeFileSync(CREATORS_JSON_PATH, JSON.stringify(creators, null, 2));
  console.log(`Successfully synced ${updatedCount} images and updated creators.json.`);
}

run().catch(err => {
  console.error('Asset Sync failed:', err);
  process.exit(1);
});