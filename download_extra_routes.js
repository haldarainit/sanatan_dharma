const fs = require('fs');
const path = require('path');

const baseUrl = 'https://sanatan-dharma-website-wine.vercel.app';
const baseDir = process.cwd();

const routesToFetch = [
  '/activities',
  '/future-activities',
  '/festival-calendar',
  '/donate',
  '/start-fundraiser',
  '/view-fundraisers',
  '/media/news-and-events',
  '/media/photo-gallery',
  '/media/video-gallery',
  '/news-and-events',
  '/photo-gallery',
  '/video-gallery',
  '/portal/login',
  '/portal/profile',
  '/portal/verification',
  '/portal/announcements',
  '/csr-partner',
  '/seva-partner',
  '/need-help',
  '/raise-complaint',
  '/legal-documents',
  '/contact',
  '/volunteer',
  '/sanatani-sena'
];

function saveFile(pathname, contentBuffer) {
  let cleanPath = pathname.split('?')[0].split('#')[0];
  if (cleanPath.startsWith('/')) cleanPath = cleanPath.slice(1);
  if (!cleanPath) cleanPath = 'index.html';

  let targetFile = path.join(baseDir, cleanPath);
  
  if (!path.extname(cleanPath)) {
    targetFile = path.join(baseDir, cleanPath, 'index.html');
    if (cleanPath !== 'index.html') {
      const htmlAltFile = path.join(baseDir, cleanPath + '.html');
      fs.mkdirSync(path.dirname(htmlAltFile), { recursive: true });
      fs.writeFileSync(htmlAltFile, contentBuffer);
    }
  }

  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.writeFileSync(targetFile, contentBuffer);
  console.log(`[Saved] ${cleanPath}`);
}

async function main() {
  for (const r of routesToFetch) {
    try {
      const fullUrl = baseUrl + r;
      console.log(`Fetching: ${fullUrl}`);
      const res = await fetch(fullUrl, { signal: AbortSignal.timeout(6000) });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        saveFile(r, buf);
      } else {
        console.log(`Failed [${res.status}]: ${r}`);
      }
    } catch (e) {
      console.log(`Error ${r}: ${e.message}`);
    }
  }
}

main();
