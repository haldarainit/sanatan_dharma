const fs = require('fs');
const path = require('path');

const chunkFile = path.join(process.cwd(), '_next', 'static', 'chunks', 'app', '%5B%5B...slug%5D%5D', 'page-dd2cbc31fb87629a.js');
const content = fs.readFileSync(chunkFile, 'utf8');

const heroMatch = content.match(/\[\{img:"\/img\/slide-ganga-aarti\.jpg"[\s\S]*?\}\]/);
if (heroMatch) {
  console.log('Hero Slides Array:');
  console.log(heroMatch[0]);
} else {
  console.log('Hero match not found directly, searching substring...');
  const idx = content.indexOf('/img/slide-ganga-aarti.jpg');
  if (idx !== -1) {
    console.log(content.substring(idx - 100, idx + 2000));
  }
}
