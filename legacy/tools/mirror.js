const fs = require('fs');
const path = require('path');

const baseUrl = 'https://sanatan-dharma-website-wine.vercel.app';
const baseDir = process.cwd();

const targetRoutes = [
  '/',
  '/about',
  '/donate',
  '/membership',
  '/need-help',
  '/contact',
  '/portal/login',
  '/csr-partner',
  '/legal-documents'
];

const visited = new Set();
const missingImg = new Set();
const downloadedFiles = new Set();
const queue = [];

function normalizeUrl(urlStr) {
  try {
    if (!urlStr || urlStr.startsWith('data:') || urlStr.startsWith('javascript:') || urlStr.startsWith('mailto:') || urlStr.startsWith('tel:')) {
      return null;
    }
    const fullUrl = urlStr.startsWith('http') ? urlStr : new URL(urlStr, baseUrl).toString();
    if (!fullUrl.startsWith(baseUrl)) {
      return null;
    }
    return fullUrl;
  } catch (e) {
    return null;
  }
}

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
  downloadedFiles.add(cleanPath);
}

async function fetchAndProcess(urlStr) {
  const fullUrl = normalizeUrl(urlStr);
  if (!fullUrl || visited.has(fullUrl)) return;
  visited.add(fullUrl);

  const parsedUrl = new URL(fullUrl);
  const pathname = parsedUrl.pathname;

  console.log(`[Fetching] ${pathname}`);

  try {
    const res = await fetch(fullUrl, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) {
      console.log(`  └─ [${res.status}] Failed`);
      if (pathname.includes('/img/')) {
        missingImg.add(pathname);
      }
      return;
    }

    const contentType = res.headers.get('content-type') || '';
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    saveFile(pathname, buffer);
    console.log(`  └─ Saved (${buffer.length} bytes)`);

    if (contentType.includes('text/html') || contentType.includes('javascript') || contentType.includes('css') || pathname.endsWith('.js') || pathname.endsWith('.css') || !path.extname(pathname)) {
      const text = buffer.toString('utf-8');
      extractAndEnqueue(text);
    }
  } catch (err) {
    console.log(`  └─ Error: ${err.message}`);
    if (pathname.includes('/img/')) {
      missingImg.add(pathname);
    }
  }
}

function extractAndEnqueue(text) {
  const attrRegex = /(?:href|src|action)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = attrRegex.exec(text)) !== null) {
    const val = match[1];
    const norm = normalizeUrl(val);
    if (norm && !visited.has(norm)) {
      queue.push(norm);
    }
  }

  const cssUrlRegex = /url\(\s*["']?([^"'\)]+)["']?\s*\)/gi;
  while ((match = cssUrlRegex.exec(text)) !== null) {
    const val = match[1];
    const norm = normalizeUrl(val);
    if (norm && !visited.has(norm)) {
      queue.push(norm);
    }
  }

  const imgRegex = /["'](\/(?:img|images|assets)\/[^"'\s\)\>]+|\b(?:img|images|assets)\/[^"'\s\)\>]+\.(?:png|jpg|jpeg|svg|webp|gif|ico|avif))["']/gi;
  while ((match = imgRegex.exec(text)) !== null) {
    let val = match[1];
    if (!val.startsWith('/')) val = '/' + val;
    const norm = normalizeUrl(val);
    if (norm && !visited.has(norm)) {
      queue.push(norm);
    }
  }

  const nextChunkRegex = /["'](\/_next\/static\/[^"'\s\)\>]+)["']/gi;
  while ((match = nextChunkRegex.exec(text)) !== null) {
    const val = match[1];
    const norm = normalizeUrl(val);
    if (norm && !visited.has(norm)) {
      queue.push(norm);
    }
  }
}

async function main() {
  console.log('Starting site mirroring for:', baseUrl);
  
  for (const route of targetRoutes) {
    queue.push(baseUrl + route);
  }

  while (queue.length > 0) {
    const nextUrl = queue.shift();
    await fetchAndProcess(nextUrl);
  }

  const commonImgNames = [
    '/img/logo.png', '/img/logo.svg', '/img/logo.jpg',
    '/img/hero.jpg', '/img/hero.png', '/img/hero.webp',
    '/img/favicon.ico', '/favicon.ico',
    '/img/banner.jpg', '/img/banner.png',
    '/img/act-child.jpg', '/img/act-women.jpg',
    '/img/future-sahayata.jpg', '/img/future-bhojanalaya.jpg',
    '/img/future-skill.jpg', '/img/future-ashray.jpg', '/img/future-gurukul.png',
    '/img/campaign-food.jpg', '/img/campaign-girl.jpg', '/img/campaign-medical.jpg',
    '/img/about-us.jpg', '/img/donate-bg.jpg', '/img/contact-bg.jpg',
    '/img/sanatan.png', '/img/sanatan.jpg', '/img/sanatan-logo.png'
  ];

  for (const imgPath of commonImgNames) {
    const norm = normalizeUrl(imgPath);
    if (norm && !visited.has(norm)) {
      await fetchAndProcess(norm);
    }
  }

  console.log('\n================ Summary ================');
  console.log(`Downloaded ${downloadedFiles.size} total files.`);
  console.log(`Missing /img/ assets count: ${missingImg.size}`);
  if (missingImg.size > 0) {
    console.log('Missing /img/ assets list:');
    Array.from(missingImg).forEach(img => console.log(' - ' + img));
  } else {
    console.log('No missing /img/ assets found.');
  }

  fs.writeFileSync(path.join(baseDir, 'missing_img_assets.json'), JSON.stringify(Array.from(missingImg), null, 2));
}

main().catch(err => {
  console.error('Fatal error during crawl:', err);
});
