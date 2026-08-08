const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('Volunteer • Ecosystem');

if (idx !== -1) {
  console.log('Volunteer Ecosystem Section in index.html:');
  console.log(html.substring(idx - 200, idx + 3000));
} else {
  console.log('Not found in index.html by text search!');
}

const chunkFile = path.join(process.cwd(), '_next', 'static', 'chunks', 'app', '%5B%5B...slug%5D%5D', 'page-dd2cbc31fb87629a.js');
const jsContent = fs.readFileSync(chunkFile, 'utf8');
const jsIdx = jsContent.indexOf('sanatani_sena.jpeg');
if (jsIdx !== -1) {
  console.log('\nVolunteer Carousel Data in JS chunk:');
  console.log(jsContent.substring(jsIdx - 300, jsIdx + 1500));
}
