const fs = require('fs');
const path = require('path');

const chunkFile = path.join(process.cwd(), '_next', 'static', 'chunks', 'app', '%5B%5B...slug%5D%5D', 'page-dd2cbc31fb87629a.js');
const content = fs.readFileSync(chunkFile, 'utf8');

const idx = content.indexOf('/img/future-sahayata.jpg');
if (idx !== -1) {
  console.log('Future Missions Data in JS chunk:');
  console.log(content.substring(idx - 200, idx + 2500));
} else {
  console.log('Not found in chunk!');
}
