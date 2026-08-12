/* QR sub-tabs and the volunteer carousel. Same approach as wire-home.js:
   targeted edits, converted markup left intact. Idempotent. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(ROOT, p), s, 'utf8');

/* ---------- QR sub-tabs inside the Scan & Pay panel ---------- */
{
  const P = 'components/donate/panels.tsx';
  let s = read(P);
  if (s.includes("'use client'")) {
    console.log('QR sub-tabs: already wired');
  } else {
    const KEYS = ['gpay', 'indianbank', 'razorpay'];

    for (const k of KEYS) {
      const tab = new RegExp(
        '<button type="button" className="sd-pay-subtab( is-active)?" data-sd-qr="' + k + '">'
      );
      s = s.replace(
        tab,
        '<button\n' +
          '          type="button"\n' +
          "          className={'sd-pay-subtab' + (qr === '" + k + "' ? ' is-active' : '')}\n" +
          "          aria-selected={qr === '" + k + "'}\n" +
          "          onClick={() => setQr('" + k + "')}\n" +
          '        >'
      );

      const pane = new RegExp(
        '<div className="sd-qr-pane( is-active)?" data-sd-qrpane="' + k + '">'
      );
      s = s.replace(
        pane,
        "<div className={'sd-qr-pane' + (qr === '" + k + "' ? ' is-active' : '')}>"
      );
    }

    s = s.replace(
      /export function QrPanel\(\) \{\n  return \(/,
      'export function QrPanel() {\n' +
        "  const [qr, setQr] = useState<string>('gpay')\n\n" +
        '  return ('
    );
    s = "'use client'\n\nimport { useState } from 'react'\n" + s;
    write(P, s);
    console.log('QR sub-tabs: 3 tabs + 3 panes wired');
  }
}

/* ---------- Volunteer Ecosystem carousel ---------- */
{
  const P = 'components/home/JoinTheMission.tsx';
  let s = read(P);
  if (s.includes("'use client'")) {
    console.log('Volunteer carousel: already wired');
  } else {
    /* the track slides by whole cards */
    s = s.replace(
      /style=\{\{ transform: "translateX\(0px\)" \}\}/,
      'style={{ transform }}'
    );

    s = s.replace(
      /(<button\n(\s+))(aria-label="Previous")/,
      '$1onClick={() => go(index - 1)}\n$2$3'
    );
    s = s.replace(
      /(<button\n(\s+))(aria-label="Next")/,
      '$1onClick={() => go(index + 1)}\n$2$3'
    );

    let d = 0;
    s = s.replace(
      /<button\n(\s+)aria-label="Go to slide \d"\n\s+className="h-2 rounded-full transition-all duration-300 cursor-pointer w-\d bg-(?:orange-600|gray-300)"\n(\s*)><\/button>/g,
      (_m, pad, tail) => {
        const n = d++;
        return (
          '<button\n' +
          pad + 'aria-label="Go to slide ' + (n + 1) + '"\n' +
          pad + 'aria-current={index === ' + n + '}\n' +
          pad + 'onClick={() => go(' + n + ')}\n' +
          pad + "className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + " +
          '(index === ' + n + " ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}\n" +
          tail + '></button>'
        );
      }
    );

    /* one entry per direct child of the track */
    const cards = (s.match(/className="flex-none w-full sm:w-\[calc\(50%-12px\)\]/g) || []).length;

    s = s.replace(
      /export default function JoinTheMission\(\) \{\n  return \(/,
      'export default function JoinTheMission() {\n' +
        '  const { index, go, transform } = useVolunteerCarousel(' + cards + ')\n\n' +
        '  return ('
    );
    s = "'use client'\n\nimport { useVolunteerCarousel } from './useVolunteerCarousel'\n" + s;
    write(P, s);
    console.log('Volunteer carousel: ' + cards + ' cards, ' + d + ' dots wired');
  }
}

console.log('\ndone.');
