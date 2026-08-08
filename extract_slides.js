const fs = require('fs');
const path = require('path');

const chunksDir = path.join(process.cwd(), '_next', 'static', 'chunks');
let foundSlides = [];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match slide objects or arrays containing image paths and titles
  const matches = content.match(/\[\s*\{[^\]]*?img:[^\]]*?\}(?:\s*,\s*\{[^\]]*?\})*\s*\]/gi);
  if (matches) {
    console.log('Matches in:', path.basename(filePath));
    matches.forEach(m => console.log('Slide data:', m.substring(0, 500)));
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.js')) searchFile(full);
  });
}

walk(chunksDir);
