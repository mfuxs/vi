import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { influencers } from '../src/data';

const BASE_URL = 'https://vertical-influence.de'; // Adjust if needed or use env var

const staticRoutes = [
    '/',
    '/portfolio',
    '/cases',
    '/contact',
    '/impressum',
    '/datenschutz'
];



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
    const influencerRoutes = influencers.map(inf => `/portfolio/${inf.id}`);
    const allRoutes = [...staticRoutes, ...influencerRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
            .map(route => {
                return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
