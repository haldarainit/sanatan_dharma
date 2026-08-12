/* HTML -> JSX converter for the rebuild.
   Parses the scraped markup properly (no regex over tags) and emits JSX that
   React accepts: renamed attributes, self-closed voids, object styles.
   Used by convert-page.js; not part of the running app. */
const { parse } = require('node-html-parser');

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);

/* attributes React spells differently from HTML */
const ATTR = {
  class: 'className', for: 'htmlFor', charset: 'charSet', tabindex: 'tabIndex',
  colspan: 'colSpan', rowspan: 'rowSpan', maxlength: 'maxLength',
  minlength: 'minLength', readonly: 'readOnly', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', autoplay: 'autoPlay', novalidate: 'noValidate',
  contenteditable: 'contentEditable', spellcheck: 'spellCheck',
  crossorigin: 'crossOrigin', datetime: 'dateTime', enctype: 'encType',
  formaction: 'formAction', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen',
  marginwidth: 'marginWidth', marginheight: 'marginHeight', srcset: 'srcSet',
  usemap: 'useMap', accesskey: 'accessKey', inputmode: 'inputMode',
  playsinline: 'playsInline', referrerpolicy: 'referrerPolicy',
  fetchpriority: 'fetchPriority', nomodule: 'noModule', itemprop: 'itemProp',
  /* SVG */
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset', 'stroke-opacity': 'strokeOpacity',
  'stroke-miterlimit': 'strokeMiterlimit', 'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
  'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor', 'dominant-baseline': 'dominantBaseline',
  'vector-effect': 'vectorEffect', 'shape-rendering': 'shapeRendering',
  'paint-order': 'paintOrder', 'color-interpolation-filters': 'colorInterpolationFilters',
  'flood-color': 'floodColor', 'flood-opacity': 'floodOpacity',
  'gradientunits': 'gradientUnits', 'gradienttransform': 'gradientTransform',
  'patternunits': 'patternUnits', 'preserveaspectratio': 'preserveAspectRatio',
  'viewbox': 'viewBox', 'xmlns:xlink': 'xmlnsXlink', 'xlink:href': 'xlinkHref',
};

/* attributes React treats as boolean; bare presence means true */
const BOOL = new Set(['disabled', 'checked', 'selected', 'readOnly', 'required',
  'hidden', 'multiple', 'noValidate', 'autoFocus', 'autoPlay', 'controls',
  'loop', 'muted', 'open', 'reversed', 'default', 'playsInline', 'allowFullScreen',
  'noModule', 'itemScope', 'async', 'defer']);

/* attributes React types as numbers; a bare string fails typecheck */
const NUMERIC = new Set(['rows', 'cols', 'size', 'span', 'maxLength', 'minLength',
  'tabIndex', 'colSpan', 'rowSpan', 'start', 'marginWidth', 'marginHeight']);

function camel(prop) {
  if (prop.startsWith('--')) return prop;            // custom property, keep quoted
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleToObject(css) {
  const out = [];
  /* split on ';' that are not inside url(...) or quotes */
  let depth = 0, quote = null, buf = '';
  for (const ch of css) {
    if (quote) { buf += ch; if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; buf += ch; continue; }
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(buf); buf = ''; continue; }
    buf += ch;
  }
  if (buf.trim()) out.push(buf);

  const pairs = [];
  for (const decl of out) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) continue;
    const key = camel(prop);
    const quoted = /^[a-zA-Z][a-zA-Z0-9]*$/.test(key) ? key : `'${key}'`;
    pairs.push(`${quoted}: ${JSON.stringify(val)}`);
  }
  return pairs.length ? `{{ ${pairs.join(', ')} }}` : null;
}

function attrName(raw) {
  const lower = raw.toLowerCase();
  if (ATTR[lower]) return ATTR[lower];
  if (ATTR[raw]) return ATTR[raw];
  if (lower.startsWith('data-') || lower.startsWith('aria-')) return lower;
  /* already camelCase in the React SSR output (e.g. fetchPriority) */
  if (/[A-Z]/.test(raw)) return raw;
  return lower;
}

/* Whitespace between inline elements is meaningful in HTML but JSX drops any
   run that contains a newline. Where both sides are inline we re-emit it as
   an explicit {' '} so "Our" + <span>Missions</span> does not become
   "OurMissions". */
const INLINE = new Set(['span', 'a', 'strong', 'em', 'b', 'i', 'u', 's', 'small',
  'sup', 'sub', 'code', 'abbr', 'mark', 'label', 'cite', 'q', 'time', 'bdi',
  'br', 'img', 'svg', 'button', 'del', 'ins', 'kbd', 'samp', 'var']);

function isInlineish(node) {
  if (!node) return false;
  if (node.nodeType === 3) return !/^\s*$/.test(node.rawText);
  if (node.nodeType !== 1) return false;
  return INLINE.has(String(node.rawTagName || '').toLowerCase());
}

/* JSX text: braces and angle brackets must not leak into the parser */
function jsxText(text) {
  if (/^\s*$/.test(text)) return text.includes('\n') ? '' : text;
  if (text.includes('{') || text.includes('}')) {
    return '{' + JSON.stringify(text) + '}';
  }
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderAttrs(node) {
  const parts = [];
  for (const [rawKey, rawVal] of Object.entries(node.attributes)) {
    const key = attrName(rawKey);
    if (key === 'style') {
      const obj = styleToObject(rawVal);
      if (obj) parts.push(`style=${obj}`);
      continue;
    }
    /* React SSR emits these for hydration only */
    if (key === 'data-reactroot') continue;
    if (BOOL.has(key)) {
      if (rawVal === '' || rawVal === key || rawVal === 'true') { parts.push(key); continue; }
      if (rawVal === 'false') continue;
    }
    if (key === 'value') { parts.push(`defaultValue=${JSON.stringify(rawVal)}`); continue; }
    if (NUMERIC.has(key) && /^\d+$/.test(rawVal)) { parts.push(`${key}={${rawVal}}`); continue; }
    /* inline handlers cannot survive as strings; flag them for hand conversion */
    if (/^on[a-z]+$/.test(key)) { parts.push(`data-legacy-${key}=${JSON.stringify(rawVal)}`); continue; }
    parts.push(`${key}=${JSON.stringify(rawVal)}`);
  }
  return parts;
}

function convert(node, indent, opts) {
  const pad = '  '.repeat(indent);

  if (node.nodeType === 3) {               // text (handled by renderChildren)
    const t = jsxText(node.rawText);
    return t.trim() ? pad + t.trim() : '';
  }
  if (node.nodeType === 8) {               // comment
    const body = String(node.rawText || '').replace(/\*\//g, '* /').trim();
    return body ? `${pad}{/* ${body} */}` : '';
  }
  if (node.nodeType !== 1) return '';

  const tag = node.rawTagName;
  if (!tag) return node.childNodes.map(c => convert(c, indent, opts)).filter(Boolean).join('\n');
  if (opts.drop && opts.drop.has(tag.toLowerCase())) return '';

  const attrs = renderAttrs(node);
  const attrStr = attrs.length
    ? (attrs.join(' ').length > 90
      ? '\n' + attrs.map(a => pad + '  ' + a).join('\n') + '\n' + pad
      : ' ' + attrs.join(' '))
    : '';

  if (VOID.has(tag.toLowerCase())) return `${pad}<${tag}${attrStr}${attrStr.endsWith('\n' + pad) ? '' : ' '}/>`;

  const kids = renderChildren(node, indent + 1, opts);
  if (!kids.length) return `${pad}<${tag}${attrStr}></${tag}>`;

  /* single short text child stays inline */
  if (kids.length === 1 && node.childNodes.length === 1 && node.childNodes[0].nodeType === 3) {
    const inline = kids[0].trim();
    if (inline.length < 70 && !inline.includes('\n')) {
      return `${pad}<${tag}${attrStr}>${inline}</${tag}>`;
    }
  }
  return `${pad}<${tag}${attrStr}>\n${kids.join('\n')}\n${pad}</${tag}>`;
}

function renderChildren(node, indent, opts) {
  const pad = '  '.repeat(indent);
  const kids = node.childNodes;
  const out = [];
  for (let i = 0; i < kids.length; i++) {
    const c = kids[i];
    if (c.nodeType === 3) {
      const raw = c.rawText;
      const prev = kids[i - 1];
      const next = kids[i + 1];
      if (/^\s*$/.test(raw)) {
        if (raw.length && isInlineish(prev) && isInlineish(next)) out.push(pad + "{' '}");
        continue;
      }
      const lead = /^\s/.test(raw) && isInlineish(prev);
      const trail = /\s$/.test(raw) && isInlineish(next);
      const t = jsxText(raw.trim());
      if (!t) continue;
      out.push(pad + (lead ? "{' '}" : '') + t + (trail ? "{' '}" : ''));
      continue;
    }
    const s = convert(c, indent, opts);
    if (s) out.push(s);
  }
  return out;
}

function htmlToJsx(html, opts = {}) {
  /* React's SSR text separators sit between a tag and the space that follows
     it, which would hide that space from the inline-adjacency check. They
     carry no meaning outside hydration, so drop them first. */
  html = html.replace(/<!--\s*-->/g, '').replace(/<!--\/?\$(?:\?|!)?-->/g, '');
  const root = parse(html, {
    lowerCaseTagName: false,
    comment: true,
    blockTextElements: { script: true, style: true, pre: true },
  });
  const drop = new Set(opts.drop || []);
  return root.childNodes
    .map(c => convert(c, opts.indent || 0, { drop }))
    .filter(Boolean)
    .join('\n');
}

module.exports = { htmlToJsx, styleToObject, attrName };
