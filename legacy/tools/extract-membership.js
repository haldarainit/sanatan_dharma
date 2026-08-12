/* Lift the membership config out of the vanilla script into lib/membership.ts
   so the React wizard renders from typed data instead of a string blob. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..');
const src = fs.readFileSync(path.join(ROOT, 'legacy/js/sd-membership.js'), 'utf8');

/* grab a top-level `var NAME = <literal>;` declaration by brace/bracket balance */
function grab(name) {
  const re = new RegExp('var\\s+' + name + '\\s*=\\s*');
  const m = src.match(re);
  if (!m) throw new Error('not found: ' + name);
  const start = m.index + m[0].length;
  const open = src[start];
  if (open !== '{' && open !== '[') {
    /* plain string/number literal, read to the terminating semicolon */
    const end = src.indexOf(';', start);
    return src.slice(start, end);
  }
  const close = open === '{' ? '}' : ']';
  let depth = 0, quote = null;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  throw new Error('unbalanced: ' + name);
}

const ctx = vm.createContext({});
const names = ['STANDARD', 'NETWORK', 'NOTICE', 'TIME_OPTIONS', 'NETWORK_RULE', 'PLEDGE', 'CATEGORIES', 'BASIC'];
const values = {};
for (const n of names) {
  try {
    const literal = grab(n);
    /* CATEGORIES references STANDARD/NETWORK by name, so bind each value into
       the context as we go */
    values[n] = vm.runInContext('var ' + n + ' = (' + literal + '); ' + n, ctx);
  } catch (e) {
    console.log('skip ' + n + ': ' + e.message);
  }
}

console.log('categories:', values.CATEGORIES ? values.CATEGORIES.length : 0);
if (values.CATEGORIES) values.CATEGORIES.forEach((c) => console.log('  -', c.id, '|', c.hi, '|', c.en));
console.log('basic fields:', values.BASIC ? values.BASIC.length : 0);
console.log('fee scales:', Object.keys(values.STANDARD || {}).join(', '));

const ts = `/* Membership ecosystem config, lifted from the vanilla implementation
   during the Next.js rebuild. Five categories, each with its own form. */

export type FeeScale = Record<string, [number, number]>

export type Category = {
  id: string
  badge: string
  en: string
  hi: string
  img: string
  card: string
  formTitle: string
  aboutTitle?: string
  about: string
  roles: string[]
  interests: string[]
  skills: string[]
  declaration: string
  fees: FeeScale
  networkRule: boolean
  pledge: boolean
}

export type BasicField = {
  id: string
  label: string
  en?: string
  type?: string
  req?: boolean
  options?: string[]
}

export const STANDARD: FeeScale = ${JSON.stringify(values.STANDARD, null, 2)}

export const NETWORK: FeeScale = ${JSON.stringify(values.NETWORK, null, 2)}

export const NOTICE = ${JSON.stringify(values.NOTICE)}

export const TIME_OPTIONS: string[] = ${JSON.stringify(values.TIME_OPTIONS, null, 2)}

export const NETWORK_RULE = ${JSON.stringify(values.NETWORK_RULE)}

export const PLEDGE = ${JSON.stringify(values.PLEDGE)}

export const BASIC: BasicField[] = ${JSON.stringify(values.BASIC, null, 2)}

export const CATEGORIES: Category[] = ${JSON.stringify(values.CATEGORIES, null, 2)}
`;
fs.writeFileSync(path.join(ROOT, 'lib/membership.ts'), ts, 'utf8');
console.log('\nwrote lib/membership.ts', ts.length, 'chars');
