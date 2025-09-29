import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website configuration
const SITE_URL = 'https://audevhub.space';
const BUILD_DATE = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// Define all routes with their priorities and change frequencies
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: BUILD_DATE
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: BUILD_DATE
  },
  {
    path: '/events',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: BUILD_DATE
  },
  {
    path: '/networking',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: BUILD_DATE
  },
  {
    path: '/resources',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: BUILD_DATE
  }
];

// Generate sitemap XML
function generateSitemap() {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlFooter = '\n</urlset>';

  const urls = routes.map(route => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  return xmlHeader + urls + xmlFooter;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`🔗 Sitemap URL: ${SITE_URL}/sitemap.xml`);
}

// Run the script
writeSitemap();

export { generateSitemap, writeSitemap };