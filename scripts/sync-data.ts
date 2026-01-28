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

async function syncCreators() {
  if (!CREATORS_CSV_URL) {
    console.log('Skipping Creators Sync: No URL provided.');
    return;
  }

  console.log('Fetching Creators from Google Sheets...');
  const response = await axios.get(CREATORS_CSV_URL);
  const records = parse(response.data, {
    columns: true,
    skip_empty_lines: true,
  });

  const formatted = records.map((row: any) => ({
    id: row.id,
    name: row.name,
    handle: row.handle,
    niche: row.niche,
    category: row.category,
    followers: row.followers,
    imageUrl: row.imageUrl,
    bio: row.bio,
    platforms: row.platforms.split(',').map((p: string) => p.trim()),
    platformStats: {
      tiktok: row.tiktok || undefined,
      instagram: row.instagram || undefined,
      youtube: row.youtube || undefined,
      tiktokHandle: row.tiktok_handle || undefined,
      instagramHandle: row.instagram_handle || undefined,
      youtubeHandle: row.youtube_handle || undefined,
    }
  }));

  const validated = formatted.map((item: any) => {
    const res = InfluencerSchema.safeParse(item);
    if (!res.success) {
      console.warn(`Validation failed for ${item.name}:`, res.error.errors[0].message);
      return null;
    }
    return res.data;
  }).filter(Boolean);

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

  console.log('Fetching Cases from Google Sheets...');
  const response = await axios.get(CASES_CSV_URL);
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
      client: row.client,
      title: row.title,
      description: row.description,
      stats: stats,
      imageUrl: row.imageUrl,
      tags: row.tags.split(',').map((t: string) => t.trim()),
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
