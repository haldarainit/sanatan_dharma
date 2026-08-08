const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const files = fs.readdirSync(cwd);

for (const f of files) {
  if (f.endsWith('.html')) {
    const fullPath = path.join(cwd, f);
    let html = fs.readFileSync(fullPath, 'utf8');
    
    // Replace opacity:0 and height:0px in style attributes
    html = html.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/gi, 'style="opacity:1"');
    html = html.replace(/style="[^"]*height\s*:\s*0px[^"]*"/gi, 'style="opacity:1;height:auto"');
    
    fs.writeFileSync(fullPath, html);
    console.log('Fixed opacity in:', f);
  }
}
