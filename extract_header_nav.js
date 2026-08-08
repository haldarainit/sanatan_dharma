const fs = require('fs');
const path = require('path');

const chunkFile = path.join(process.cwd(), '_next', 'static', 'chunks', 'app', '%5B%5B...slug%5D%5D', 'page-dd2cbc31fb87629a.js');
const content = fs.readFileSync(chunkFile, 'utf8');

const idx = content.indexOf('Need Help');
if (idx !== -1) {
  console.log('Header Nav Data in JS chunk:');
  console.log(content.substring(idx - 1000, idx + 1500));
} else {
  console.log('Not found by Need Help search!');
}
