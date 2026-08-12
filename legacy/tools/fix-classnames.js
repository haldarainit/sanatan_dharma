/* Replace class names I invented with the ones the stylesheets actually
   define. A wrong class fails silently -- the element just renders unstyled --
   so these are mapped against the real definitions, not from memory. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(ROOT, p), s, 'utf8');

const EDITS = [
  {
    file: 'components/donate/CopyButton.tsx',
    subs: [['sd-pay-copy', 'sd-bank-copy']],
  },
  {
    file: 'components/donate/PayTabs.tsx',
    /* the parent already carries sd-donate-scan; an extra unstyled wrapper
       only adds a stacking context */
    subs: [
      ['<div className="sd-pay">', '<>'],
      ['    </div>\n  )\n}', '    </>\n  )\n}'],
    ],
  },
  {
    file: 'components/donate/PaymentConfirmForm.tsx',
    subs: [
      ['sd-pcf sd-pcf--done', 'sd-pcf sd-pcf-done'],
      ['sd-pcf-dots', 'sd-pcf-steps'],
      ["'sd-pcf-dot'", "'sd-pcf-step'"],
      ['sd-pcf-dot-num', 'sd-pcf-stepno'],
      ['sd-pcf-hint', 'sd-pcf-drop'],
      ['className="sd-pcf-btn sd-pcf-btn--ghost"', 'className="sd-pcf-back"'],
      ['className="sd-pcf-btn"', 'className="sd-pcf-next sd-btn sd-btn--pay-now"'],
    ],
  },
  {
    file: 'components/MembershipWizard.tsx',
    subs: [['sd-mem-h ', 'sd-mem-head ']],
  },
];

for (const { file, subs } of EDITS) {
  let s = read(file);
  const before = s;
  for (const [from, to] of subs) s = s.split(from).join(to);
  if (s !== before) {
    write(file, s);
    console.log(file + ': ' + subs.length + ' substitution(s) applied');
  } else {
    console.log(file + ': already clean');
  }
}

/* the donation flow's own step rail has no counterpart in the stylesheet --
   the original had none -- so define it rather than leave it unstyled */
const CSS_MARK = '18. Donation flow step rail';
const cssPath = path.join(ROOT, 'styles/sd-site.css');
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes(CSS_MARK)) {
  css += `

/* --------------------------------------------------------------------------
   ${CSS_MARK}
   The scraped flow showed no progress indicator. The React version adds one,
   so it needs real rules rather than class names that resolve to nothing.
   -------------------------------------------------------------------------- */
.sd-dn-dots { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; position: relative; margin: 0 0 22px; }
.sd-dn-dots::before { content: ""; position: absolute; top: 15px; left: 8%; right: 8%; height: 3px; background: #EFE7DC; border-radius: 2px; }
.sd-dn-dot { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1 1 0; min-width: 0; text-align: center; }
.sd-dn-dot-num { width: 30px; height: 30px; border-radius: 999px; display: grid; place-items: center; background: #fff; border: 3px solid #EFE7DC; color: #94a3b8; font-size: 12px; font-weight: 800; }
.sd-dn-dot span:last-child { font-size: 10.5px; font-weight: 700; color: #94a3b8; line-height: 1.3; }
.sd-dn-dot.is-active .sd-dn-dot-num { background: #FF6F00; border-color: #FF6F00; color: #fff; }
.sd-dn-dot.is-active span:last-child { color: #0D1B2A; }
.sd-dn-dot.is-done .sd-dn-dot-num { background: #16A34A; border-color: #16A34A; color: #fff; }
@media (min-width: 640px) { .sd-dn-dot span:last-child { font-size: 11.5px; } }
`;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('\nstyles/sd-site.css: added the donation step-rail rules');
} else {
  console.log('\nstyles/sd-site.css: step-rail rules already present');
}
