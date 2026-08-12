const fs = require('fs');
const path = require('path');

const chunksDir = path.join(process.cwd(), '_next', 'static', 'chunks');
const routes = new Set();

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      // Match paths in quotes or route definitions
      const matches = content.matchAll(/["'](\/[a-zA-Z0-9_\-\/]+)["']/gi);
      for (const m of matches) {
        const route = m[1];
        if (!route.startsWith('/_next') && !route.startsWith('/img') && !route.startsWith('/people') && !route.startsWith('/certificates')) {
          routes.add(route);
        }
      }
    }
  }
}

walk(chunksDir);
console.log('Discovered routes in JS chunks:', Array.from(routes));
