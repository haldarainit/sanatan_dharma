/* Give the converted homepage markup its behaviour back, as React state.
   Targeted edits only -- no restructuring of the converted trees.
   Idempotent: each step no-ops if already applied. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(ROOT, p), s, 'utf8');

/* ---------- Join the Mission: 3-card accordion ---------- */
{
  const P = 'components/home/SevaActivities.tsx';
  let s = read(P);
  if (s.includes("'use client'")) {
    console.log('Join the Mission: already wired');
  } else {
    /* the inline script is replaced by state */
    for (;;) {
      const a = s.indexOf('<script>');
      if (a === -1) break;
      s = s.slice(0, a) + s.slice(s.indexOf('</script>', a) + 9);
    }

    const PANELS = ['sd-mj-panel-active', 'sd-mj-panel-upcoming', 'sd-mj-panel-completed'];

    /* cards, in document order */
    let ci = 0;
    s = s.replace(/<article className="(sd-mj-card[^"]*)" data-sd-mj="">/g, (_m, cls) => {
      const n = ci++;
      return `<article className={'${cls}' + (open === ${n} ? ' is-open' : '')}>`;
    });

    /* toggles, matched by the panel they control */
    PANELS.forEach((panel, n) => {
      const re = new RegExp(
        '<button\\s+type="button"\\s+className="sd-mj-toggle"\\s+aria-expanded="false"\\s+aria-controls="' +
          panel + '"\\s*>'
      );
      s = s.replace(
        re,
        `<button\n            type="button"\n            className="sd-mj-toggle"\n            aria-expanded={open === ${n}}\n            aria-controls="${panel}"\n            onClick={() => setOpen(open === ${n} ? null : ${n})}\n          >`
      );
    });

    /* click labels, in document order */
    let li = 0;
    s = s.replace(
      /<span className="sd-mj-clicklabel" data-sd-mj-label="">[^<]*<\/span>/g,
      () => {
        const n = li++;
        return `<span className="sd-mj-clicklabel">{open === ${n} ? 'Click to Close' : 'Click to View'}</span>`;
      }
    );

    s = s.replace(
      /export default function SevaActivities\(\) \{\n  return \(/,
      'export default function SevaActivities() {\n' +
        '  /* opening one card closes the others */\n' +
        '  const [open, setOpen] = useState<number | null>(null)\n\n' +
        '  return ('
    );
    s = `'use client'\n\nimport { useState } from 'react'\n` + s;
    write(P, s);
    console.log(`Join the Mission: ${ci} cards, ${li} labels wired`);
  }
}

/* ---------- Our Missions: View All reveal ---------- */
{
  const P = 'components/home/OurMissions.tsx';
  let s = read(P);
  if (s.includes("'use client'")) {
    console.log('View All: already wired');
  } else {
    const hidden = (s.match(/sd-mis-more/g) || []).length;

    /* the extra cards use the hidden attribute, which the stylesheet honours */
    s = s.replace(
      /className="([^"]*sd-mis-more)"\n/g,
      'className="$1"\n            hidden={!showAll}\n'
    );

    s = s.replace(
      /<button\n(\s+)type="button"\n\s+data-sd-missions-toggle=""\n(\s+)className="([^"]+)"\n\s*>/,
      '<button\n$1type="button"\n$2className="$3"\n$2aria-expanded={showAll}\n$2onClick={() => setShowAll((v) => !v)}\n          >'
    );
    s = s.replace(/<span>View All<\/span>/, "<span>{showAll ? 'View Less' : 'View All'}</span>");

    s = s.replace(
      /export default function OurMissions\(\) \{\n  return \(/,
      'export default function OurMissions() {\n' +
        '  const [showAll, setShowAll] = useState(false)\n\n' +
        '  return ('
    );
    s = `'use client'\n\nimport { useState } from 'react'\n` + s;
    write(P, s);
    console.log(`View All: ${hidden} extra cards wired`);
  }
}

console.log('\ndone.');
