/* The homepage is assembled from 23 section components, so walking
   app/**\/page.tsx never reached its content -- app/page.tsx is only imports
   and <Section /> tags. This lifts the text and images out of each section,
   keys them per component so an editor can tell them apart, and has the page
   pass the content down.

   Run: node legacy/tools/cms-extract-home.js [--write] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')
const HOME_DIR = path.join(ROOT, 'components', 'home')

const SKIP_TEXT = /^[\s{}()<>/&;:.,|·—–-]*$/

/* keys are prefixed with the section so the Studio groups them readably */
function prefixOf(file) {
  return path
    .basename(file, '.tsx')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

function extract(source, prefix, sectionLabel) {
  const lines = source.split('\n')
  const blocks = []
  let n = 0
  let heading = sectionLabel

  /* The JSX return -- not a `return () => {` cleanup inside a hook, which
     also starts with "return (". The next meaningful line must open a tag. */
  const startAt = lines.findIndex(
    (l, i) =>
      /^\s*return \(\s*$/.test(l) &&
      /^\s*</.test(lines.slice(i + 1).find((x) => x.trim()) || '')
  )
  if (startAt === -1) return { source, blocks }

  /* A line only holds JSX text when we are not inside a JSX expression.
     Inside style={{ ... }} or any {...} block the lines are JavaScript, and
     lifting them produces a syntax error rather than editable content. */
  let exprDepth = 0
  let inTag = false

  const out = lines.map((line, idx) => {
    if (idx <= startAt) return line

    const opens = (line.match(/\{/g) || []).length
    const closes = (line.match(/\}/g) || []).length
    const depthBefore = exprDepth
    exprDepth += opens - closes
    if (depthBefore > 0) return line

    /* Never lift a line sitting inside a tag's attribute list -- a bare
       boolean attribute such as `required` looks exactly like one-word text.
       Image sources are the one thing we do want from in there. */
    const isSrcLine = /^\s*src="\//.test(line)
    if (inTag) {
      if (/\/?>\s*$/.test(line)) inTag = false
      if (!isSrcLine) return line
    } else if (/<[a-zA-Z][^>]*$/.test(line)) {
      inTag = true
      return line
    }

    const h = line.match(/<h[1-4][^>]*>([^<{]{3,60})</)
    if (h) heading = `${sectionLabel} — ${h[1].trim()}`

    /* images first: an src line also looks like a bare text line */
    const src = line.match(/^(\s*)src="(\/[^"]+)"(,?)\s*$/)
    if (src) {
      const key = `${prefix}-i${++n}`
      blocks.push({
        _type: 'imageBlock',
        _key: key,
        key,
        section: heading,
        currentSrc: src[2],
        alt: '',
      })
      return `${src[1]}src={img(images, '${key}', ${JSON.stringify(src[2])})}${src[3]}`
    }

    const whole = line.match(/^(\s*)([^<>{}\n]+)$/)
    if (whole && !SKIP_TEXT.test(whole[2]) && whole[2].trim().length > 1) {
      const raw = whole[2].trim()
      if (/^[a-zA-Z-]+=/.test(raw) || raw.endsWith('=') || raw.startsWith('//')) return line
      if (/^(import|export|const|return|function)\b/.test(raw)) return line
      const key = `${prefix}-k${++n}`
      blocks.push({ _type: 'textBlock', _key: key, key, section: heading, text: raw })
      return `${whole[1]}{t(text, '${key}', ${JSON.stringify(raw)})}`
    }

    const inline = line.match(/^(\s*<[a-zA-Z][^>]*>)([^<>{}]{2,})(<\/[a-zA-Z]+>,?\s*)$/)
    if (inline && !SKIP_TEXT.test(inline[2])) {
      const raw = inline[2].trim()
      const key = `${prefix}-k${++n}`
      blocks.push({ _type: 'textBlock', _key: key, key, section: heading, text: raw })
      return `${inline[1]}{t(text, '${key}', ${JSON.stringify(raw)})}${inline[3]}`
    }

    return line
  })

  return { source: out.join('\n'), blocks }
}

/* give the component text/images props, keeping any it already has */
function addProps(source, name) {
  const nl = source.includes('\r\n') ? '\r\n' : '\n'
  let out = source

  if (!out.includes("from '@/lib/sanity/content'")) {
    const helper = `import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'${nl}`
    const first = out.indexOf('import ')
    out = first === -1 ? helper + out : out.slice(0, first) + helper + out.slice(first)
  }

  const re = new RegExp(
    `export default function ${name}\\(([^)]*)\\)(?::\\s*[^{]+)?\\s*\\{`
  )
  const m = out.match(re)
  if (!m) return null

  const existing = m[1].trim()
  let replacement
  if (!existing) {
    replacement = `export default function ${name}({ text, images }: { text?: TextMap; images?: ImageMap }) {`
  } else {
    /* merge into the existing destructured props and their type */
    const withProp = existing
      .replace(/^\{\s*/, '{ text, images, ')
      .replace(/\}\s*:\s*\{/, ' }: { text?: TextMap; images?: ImageMap; ')
    replacement = `export default function ${name}(${withProp}) {`
  }

  return out.slice(0, m.index) + replacement + out.slice(m.index + m[0].length)
}

/* ---------- run ---------- */
const files = fs.readdirSync(HOME_DIR).filter((f) => f.endsWith('.tsx'))
const blocks = []
let changed = 0

console.log('section'.padEnd(28), 'text', 'images')

for (const f of files) {
  const file = path.join(HOME_DIR, f)
  const src = fs.readFileSync(file, 'utf8')
  const name = path.basename(f, '.tsx')

  if (src.includes("from '@/lib/sanity/content'")) {
    console.log(name.padEnd(28), ' (already wired)')
    continue
  }

  const prefix = prefixOf(f)
  const label = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
  const res = extract(src, prefix, label)
  if (!res.blocks.length) {
    console.log(name.padEnd(28), '    0      0')
    continue
  }

  const textCount = res.blocks.filter((b) => b._type === 'textBlock').length
  const imgCount = res.blocks.filter((b) => b._type === 'imageBlock').length
  console.log(name.padEnd(28), String(textCount).padStart(4), String(imgCount).padStart(6))
  blocks.push(...res.blocks)

  if (WRITE) {
    const wired = addProps(res.source, name)
    if (!wired) {
      console.log('   ! could not add props to', name, '- skipped')
      continue
    }
    fs.writeFileSync(file, wired, 'utf8')
    changed++
  }
}

const text = blocks.filter((b) => b._type === 'textBlock').length
const images = blocks.filter((b) => b._type === 'imageBlock').length
console.log(`\ntotal: ${text} text blocks, ${images} images`)

if (WRITE) {
  const doc = {
    _id: 'page-home',
    _type: 'page',
    title: 'Home',
    path: '/',
    blocks,
  }
  fs.writeFileSync(
    path.join(__dirname, '_home-blocks.json'),
    JSON.stringify([doc], null, 1),
    'utf8'
  )
  console.log('rewrote', changed, 'components')
  console.log('wrote legacy/tools/_home-blocks.json')
} else {
  console.log('\n(dry run — pass --write)')
}
