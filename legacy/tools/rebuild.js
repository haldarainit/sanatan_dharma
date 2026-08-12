/* Regenerates every converted page from legacy/html in one idempotent pass.
   Hand-written pages (donate, membership, need-help, contact, raise-complaint)
   are NOT touched -- they live as real components under app/ and components/.
   Run: node legacy/tools/rebuild.js */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const T = (f) => path.join(__dirname, f);
const run = (script, args) =>
  execFileSync(process.execPath, [T(script), ...args], { cwd: ROOT, encoding: 'utf8' });

const ROUTES = [
  'about', 'activities', 'festival-calendar', 'future-activities', 'legal-documents',
  'news-and-events', 'photo-gallery', 'video-gallery', 'sanatani-sena', 'seva-partner',
  'csr-partner', 'start-fundraiser', 'view-fundraisers', 'verification', 'volunteer',
  'media/news-and-events', 'media/photo-gallery', 'media/video-gallery',
  'portal/login', 'portal/profile', 'portal/verification', 'portal/announcements',
];

console.log('1. converting content pages');
process.stdout.write(run('convert-page.js', ROUTES));

console.log('\n2. unwrapping nested <main>');
for (const f of ['app/start-fundraiser/page.tsx', 'app/view-fundraisers/page.tsx']) {
  const p = path.join(ROOT, f);
  let s = fs.readFileSync(p, 'utf8');
  if ((s.match(/<main\b/g) || []).length === 1) {
    s = s.replace('<main className=', '<div className=').replace('</main>', '</div>');
    fs.writeFileSync(p, s, 'utf8');
    console.log('   ' + f);
  }
}

console.log('\n3. splitting the homepage into sections');
process.stdout.write(run('split-page.js', ['.', 'home', '--write']).split('\n').slice(-3).join('\n'));

const names = JSON.parse(fs.readFileSync(T('_names.json'), 'utf8'));
fs.writeFileSync(
  path.join(ROOT, 'app', 'page.tsx'),
  `import type { Metadata } from 'next'
${names.map((n) => `import ${n} from '@/components/home/${n}'`).join('\n')}

export const metadata: Metadata = {
  title: 'Sanatan Dharm Manav Kalyan Foundation',
  description:
    'Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.',
}

export default function HomePage() {
  return (
    <>
${names.map((n) => `      <${n} />`).join('\n')}
    </>
  )
}
`,
  'utf8'
);
console.log('   app/page.tsx composed from ' + names.length + ' sections');

console.log('\n4. swapping the missions slider for its component');
{
  const p = path.join(ROOT, 'components/home/FutureMissionsSection.tsx');
  let s = fs.readFileSync(p, 'utf8');
  for (;;) {
    const a = s.indexOf('<script>');
    if (a === -1) break;
    s = s.slice(0, a) + s.slice(s.indexOf('</script>', a) + 9);
  }
  const L = s.split('\n');
  let tab = L.findIndex((l) => /id="fm-tabs"/.test(l));
  if (tab > -1) {
    let open = tab;
    while (open > 0 && !/^\s*<div\b/.test(L[open])) open--;
    let wrap = L.findIndex((l) => /View All Missions/.test(l));
    while (wrap > 0 && !/^\s{8}<div\b/.test(L[wrap])) wrap--;
    s = [...L.slice(0, open), '        <FutureMissions />', ...L.slice(wrap)].join('\n');
    if (!s.includes("from '@/components/FutureMissions'")) {
      s = s.replace(/^(import Link from 'next\/link')/m, `$1\nimport FutureMissions from '@/components/FutureMissions'`);
    }
    fs.writeFileSync(p, s, 'utf8');
    console.log('   FutureMissionsSection now renders <FutureMissions />');
  }
}

console.log('\n5. lifting inline <style> into styles/page-sections.css');
{
  const FILES = [
    'app/view-fundraisers/page.tsx',
    'components/home/ActiveFundraisers.tsx',
    'components/home/FutureMissionsSection.tsx',
    'components/home/SevaActivities.tsx',
    'components/home/StartFundraising.tsx',
  ];
  let css = `/* Section styles lifted out of inline <style> blocks during the Next.js
   rebuild. Same rules, now in one stylesheet the build can process. */
`;
  for (const f of FILES) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    let s = fs.readFileSync(p, 'utf8');
    let n = 0;
    for (;;) {
      const a = s.indexOf('<style>');
      if (a === -1) break;
      const b = s.indexOf('</style>', a);
      if (b === -1) break;
      const inner = s.slice(a + 7, b);
      const m = inner.match(/\{("(?:[^"\\]|\\.)*")\}/s);
      const rules = m ? JSON.parse(m[1]) : inner;
      css += `\n/* --- ${f} --- */\n` + rules.replace(/\r\n/g, '\n').replace(/^\s*\n/gm, '').trimEnd() + '\n';
      s = s.slice(0, a) + s.slice(b + 8);
      n++;
    }
    if (n) {
      fs.writeFileSync(p, s, 'utf8');
      console.log(`   ${f}: ${n}`);
    }
  }
  fs.writeFileSync(path.join(ROOT, 'styles/page-sections.css'), css, 'utf8');
}

console.log('\ndone.');
