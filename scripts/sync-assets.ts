import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import sharp from 'sharp';

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

      .on('error', (err: any) => {

        dest.close();

        fs.unlink(destPath, () => {}); // Delete temp file on error

        reject(err);

      })

      .pipe(dest)

      .on('finish', () => { // 'finish' indicates writing is done

        dest.close();

        resolve(true);

      })

      .on('error', (err: any) => {

        dest.close();

        fs.unlink(destPath, () => {});

        reject(err);

      });

  });

}



async function run() {

  // ... (existing code) ...



  for (const creator of creators) {

    const cleanHandle = creator.handle.replace('@', '').toLowerCase();

    const lookupName = (creator.imageName || cleanHandle).toLowerCase();

    const driveFile = driveMap.get(lookupName);



    if (driveFile) {

      const ext = driveFile.name.split('.').pop();

      const localFileName = `${cleanHandle}.${ext}`;

      const localPath = path.join(ASSETS_DIR, localFileName);

      const tempPath = localPath + '.tmp';

      

      console.log(`Syncing image for ${creator.name} (${driveFile.name})...`);

      

      try {

        await downloadFile(drive, driveFile.id, tempPath);

        

        const webpFileName = `${cleanHandle}.webp`;

        const finalPath = path.join(ASSETS_DIR, webpFileName);

        

        // Optimize with Sharp

        await sharp(tempPath)

          .failOnError(false) // Tolerate minor errors in input images

          .resize(1200, 1500, { fit: 'cover', position: 'top' })

          .webp({ quality: 80 })

          .toFile(finalPath);

        

        fs.unlinkSync(tempPath);

        

        // Update creator imageUrl in JSON

        creator.imageUrl = `images/creators/${webpFileName}`;

        updatedCount++;

      } catch (err: any) {

        console.error(`Failed to process image for ${creator.name}:`, err.message);

        // Don't crash, just skip this image

        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);

      }

    } else {

      console.log(`No image found in Drive for handle: ${creator.handle}`);

    }

  }

  // ... (existing code) ...

}

  // 5. Speichere aktualisierte creators.json
  fs.writeFileSync(CREATORS_JSON_PATH, JSON.stringify(creators, null, 2));
  console.log(`Successfully synced ${updatedCount} images and updated creators.json.`);
}

run().catch(err => {
  console.error('Asset Sync failed:', err);
  process.exit(1);
});
