import axios from 'axios';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import { InfluencerSchema, CaseStudySchema } from '../src/schemas';

// --- KONFIGURATION ---
// Hier die "Veröffentlichte CSV-URL" aus Google Sheets eintragen:
// Datei -> Im Web veröffentlichen -> Als CSV -> Gesamtes Dokument
const CREATORS_CSV_URL = process.env.CREATORS_CSV_URL || '';
const CASES_CSV_URL = process.env.CASES_CSV_URL || '';

const DATA_DIR = path.resolve('src/data');

function sanitize(text: string): string {
  if (!text) return '';
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function syncCreators() {
  if (!CREATORS_CSV_URL) {
    console.log('Skipping Creators Sync: No URL provided.');
    return;
  }

  console.log(`Fetching Creators from: ${CREATORS_CSV_URL.substring(0, 50)}...`);
  const response = await axios.get(CREATORS_CSV_URL);
  console.log('CSV Data received (first 100 chars):', response.data.substring(0, 100));
  
  const records = parse(response.data, {
    columns: true,
    skip_empty_lines: true,
  });

  const formatted = records.map((row: any) => ({
    id: row.id,
    name: sanitize(row.name),
    handle: sanitize(row.handle),
    niche: sanitize(row.niche),
    category: sanitize(row.category),
    followers: sanitize(row.followers),
    imageUrl: row.imageUrl ? row.imageUrl.replace(/^\/vi\//, '/').replace(/^\//, '') : '',
    imageName: sanitize(row.image_name) || undefined,
    canvaLink: row.canva_link || undefined,
    bio: sanitize(row.bio),
    platforms: row.platforms.split(',').map((p: string) => sanitize(p.trim())),
    platformStats: {
      tiktok: sanitize(row.tiktok) || undefined,
      instagram: sanitize(row.instagram) || undefined,
      youtube: sanitize(row.youtube) || undefined,
      tiktokHandle: sanitize(row.tiktok_handle) || undefined,
      instagramHandle: sanitize(row.instagram_handle) || undefined,
      youtubeHandle: sanitize(row.youtube_handle) || undefined,
    },
    demographics: {
      gender: {
        male: sanitize(row.gender_male) || undefined,
        female: sanitize(row.gender_female) || undefined,
      },
      age: (row.age_data && typeof row.age_data === 'string') ? row.age_data.split(',').map((s: string) => {
        const parts = s.split(':').map(v => v.trim());
        return { 
          range: parts[0] || 'Unknown', 
          percentage: parts[1] || '0%' 
        };
      }).filter(p => p.range !== 'Unknown') : undefined,
      topCountries: (row.country_data && typeof row.country_data === 'string') ? row.country_data.split(',').map((s: string) => {
        const parts = s.split(':').map(v => v.trim());
        return { 
          country: parts[0] || 'Unknown', 
          percentage: parts[1] || '0%' 
        };
      }).filter(p => p.country !== 'Unknown') : undefined,
    }
  }));

  const validated = formatted.map((item: any) => {
    const res = InfluencerSchema.safeParse(item);
    if (!res.success) {
      console.warn(`Validation failed for ${item.name || 'Unknown'}:`, JSON.stringify(res.error.format()));
      return null;
    }
    return res.data;
  }).filter((i): i is any => i !== null);

  fs.writeFileSync(
    path.join(DATA_DIR, 'creators.json'),
    JSON.stringify(validated, null, 2)
  );
  console.log(`Successfully synced ${validated.length} creators.`);
}

async function syncCases() {
  if (!CASES_CSV_URL) {
    console.log('Skipping Cases Sync: No URL provided.');
    return;
  }

  console.log(`Fetching Cases from: ${CASES_CSV_URL.substring(0, 50)}...`);
  const response = await axios.get(CASES_CSV_URL);
  console.log('CSV Data received (first 100 chars):', response.data.substring(0, 100));

  const records = parse(response.data, {
    columns: true,
    skip_empty_lines: true,
  });

  const formatted = records.map((row: any) => {
    const stats = [];
    if (row.stat1_label) stats.push({ label: row.stat1_label, value: row.stat1_value });
    if (row.stat2_label) stats.push({ label: row.stat2_label, value: row.stat2_value });
    if (row.stat3_label) stats.push({ label: row.stat3_label, value: row.stat3_value });

    return {
      id: row.id,
      client: sanitize(row.client),
      title: sanitize(row.title),
      description: sanitize(row.description),
      stats: stats.map(s => ({ label: sanitize(s.label), value: sanitize(s.value) })),
      imageUrl: row.imageUrl.replace(/^\/vi\//, '/').replace(/^\//, ''),
      tags: row.tags.split(',').map((t: string) => sanitize(t.trim())),
      pdfUrl: row.pdfUrl || undefined
    };
  });

  const validated = formatted.map((item: any) => {
    const res = CaseStudySchema.safeParse(item);
    if (!res.success) {
      console.warn(`Validation failed for case ${item.title}:`, res.error.errors[0].message);
      return null;
    }
    return res.data;
  }).filter(Boolean);

  fs.writeFileSync(
    path.join(DATA_DIR, 'cases.json'),
    JSON.stringify(validated, null, 2)
  );
  console.log(`Successfully synced ${validated.length} cases.`);
}

async function run() {
  try {
    await syncCreators();
    await syncCases();
  } catch (error: any) {
    console.error('Sync failed:', error.message);
    process.exit(1);
  }
}

run();
