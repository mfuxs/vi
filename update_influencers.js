import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import path from 'path';

XLSX.set_fs(fs);

const excelFile = 'vi/daten/CreatorInnen-Übersicht Vertical Influence – Extern - Boksi.xlsx';
const dataPath = 'vi/data.ts';

// 1. Read existing data.ts to get cases part
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// 2. Read Excel
const workbook = XLSX.readFile(excelFile);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(sheet);

function formatFollowers(num) {
  if (!num) return undefined;
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return num.toString();
}

const influencers = [];
const dataRows = rawData.filter(row => {
    const name = row['__EMPTY'];
    return name && name !== 'Name' && !name.includes('Figures') && !name.includes('Pattform');
});

const imgDir = 'vi/public/images/creators';
const files = fs.existsSync(imgDir) ? fs.readdirSync(imgDir) : [];

dataRows.forEach((row, index) => {
  const name = row['__EMPTY'];
  const vertical = row['__EMPTY_1'] || 'General';
  
  const tiktok = row['__EMPTY_3'] || 0;
  const insta = row['__EMPTY_5'] || 0;
  const youtube = row['__EMPTY_7'] || 0;
  const bio = row['__EMPTY_18'] || '';

  const total = (typeof tiktok === 'number' ? tiktok : 0) + 
                (typeof insta === 'number' ? insta : 0) + 
                (typeof youtube === 'number' ? youtube : 0);

  const safeName = name.trim().replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  
  const imgFile = files.find(f => f.startsWith(safeName + '.'));
  const imageUrl = imgFile ? `/vi/images/creators/${imgFile}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;

  const platforms = [];
  const stats = {};
  if (tiktok > 0) { platforms.push('TikTok'); stats.tiktok = formatFollowers(tiktok); }
  if (insta > 0) { platforms.push('Instagram'); stats.instagram = formatFollowers(insta); }
  if (youtube > 0) { platforms.push('YouTube'); stats.youtube = formatFollowers(youtube); }
  
  if (platforms.length === 0) platforms.push('Instagram');

  influencers.push({
    id: (index + 1).toString(),
    name: name,
    handle: '@' + name.replace(/\s+/g, '').toLowerCase(),
    niche: vertical, 
    category: vertical,
    followers: formatFollowers(total),
    imageUrl: imageUrl,
    bio: bio,
    platforms: platforms,
    platformStats: stats
  });
});

// Reconstruct data.ts
const caseStudiesMarker = 'export const caseStudies: CaseStudy[] = [';
const caseStudiesIndex = dataContent.indexOf(caseStudiesMarker);

if (caseStudiesIndex === -1) {
    console.error("Could not find caseStudies in data.ts");
    process.exit(1);
}

const caseStudiesPart = dataContent.substring(caseStudiesIndex);

const newContent = `import { Influencer, CaseStudy } from './types';

// DATA MANAGEMENT
// WICHTIG: Hier können Influencer und Cases bearbeitet, hinzugefügt oder gelöscht werden.
// Das Design passt sich automatisch an.

export const influencers: Influencer[] = ${JSON.stringify(influencers, null, 2)};

${caseStudiesPart}`;

fs.writeFileSync(dataPath, newContent);
console.log('Updated data.ts with new influencer data.');
