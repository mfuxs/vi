import axios from 'axios';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

const TRANSLATIONS_CSV_URL = process.env.TRANSLATIONS_CSV_URL || '';
const DATA_DIR = path.resolve('src/data');

function sanitize(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function syncTranslations() {
  if (!TRANSLATIONS_CSV_URL) {
    console.log('Skipping Translations Sync: No URL provided.');
    // Erstelle eine leere Datei, falls sie nicht existiert, um Build-Fehler zu vermeiden
    if (!fs.existsSync(path.join(DATA_DIR, 'translations.json'))) {
      fs.writeFileSync(path.join(DATA_DIR, 'translations.json'), '{}');
    }
    return;
  }

  console.log(`Fetching Translations from: ${TRANSLATIONS_CSV_URL.substring(0, 50)}...`);
  const response = await axios.get(TRANSLATIONS_CSV_URL);
  
  const records = parse(response.data, {
    columns: true,
    skip_empty_lines: true,
  });

  const translations: Record<string, Record<string, string>> = {};

  records.forEach((row: any) => {
    const id = row.identifier;
    if (!id) return;

    translations[id] = {};
    // Alle Spalten außer 'identifier' werden als Sprachen behandelt
    Object.keys(row).forEach(key => {
      if (key !== 'identifier') {
        translations[id][key] = sanitize(row[key]);
      }
    });
  });

  fs.writeFileSync(
    path.join(DATA_DIR, 'translations.json'),
    JSON.stringify(translations, null, 2)
  );
  console.log(`Successfully synced ${Object.keys(translations).length} translation keys.`);
}

syncTranslations().catch(err => {
  console.error('Translation Sync failed:', err);
  process.exit(1);
});
