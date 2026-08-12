/* Makes every string and image on the converted pages editable in Sanity.

   Walks the generated page components, replaces each literal text node with
   t(text, 'key', "original") and each image src with img(images, 'key', '/…'),
   makes the page fetch its content, and writes the matching Sanity documents
   to legacy/tools/_page-blocks.json for the seed script to publish.

   The original text stays in the code as the fallback, so an empty dataset
   renders exactly what the site renders today.

   Run: node legacy/tools/cms-extract.js [--write] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')
/* --only=/route limits the run while checking the output is sound */
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7)

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name === 'page.tsx') out.push(p)
  }
  return out
}

function routeOf(file) {
  const rel = path.relative(path.join(ROOT, 'app'), file).split(path.sep).slice(0, -1)
  return '/' + rel.join('/')
}

/* Only literal text that sits on its own line, plus img src attributes.
   Anything holding an expression is left untouched. */
const SKIP_TEXT = /^[\s{}()<>/&;:.,|·—–-]*$/

function extract(source) {
  const lines = source.split('\n')
  const blocks = []
  let n = 0
  let section = ''

  /* Only touch the markup the component returns. Everything above it --
     imports, the metadata object, constants -- is code, and rewriting a
     string there produces a syntax error rather than editable content. */
  const startAt = lines.findIndex((l) => /^\s*return \(/.test(l))
  if (startAt === -1) return { source, blocks }

  /* A tag whose attributes span several lines puts bare attributes such as
     `required` on their own line, which looks exactly like a text node.
     Track whether we are inside an attribute list and leave those alone. */
  let inTag = false

  const out = lines.map((line, idx) => {
    if (idx <= startAt) return line

    const wasInTag = inTag
    const opens = (line.match(/<[a-zA-Z][^>]*$/) || []).length > 0
    const closes = /^[^<]*\/?>/.test(line)
    if (wasInTag && closes) inTag = false
    if (opens) inTag = true
    /* src is itself an attribute, so it runs before the in-tag guard */
    const src = line.match(/^(\s*)src="(\/[^"]+)"(,?)\s*$/)
    if (src) {
      const key = 'i' + ++n
      blocks.push({ _type: 'imageBlock', _key: key, key, section, currentSrc: src[2], alt: '' })
      return `${src[1]}src={img(images, '${key}', ${JSON.stringify(src[2])})}${src[3]}`
    }

    if (wasInTag) return line

    const h = line.match(/<h[1-4][^>]*>([^<{]{3,60})</)
    if (h) section = h[1].trim()

    /* a whole line that is only text */
    const whole = line.match(/^(\s*)([^<>{}\n]+)$/)
    if (whole && !SKIP_TEXT.test(whole[2]) && whole[2].trim().length > 1) {
      const raw = whole[2].trim()
      if (/^[a-zA-Z-]+=/.test(raw) || raw.endsWith('=') || raw.startsWith('//')) return line
      if (/^(import|export|const|return|function)\b/.test(raw)) return line
      const key = 'k' + ++n
      blocks.push({ _type: 'textBlock', _key: key, key, section, text: raw })
      return `${whole[1]}{t(text, '${key}', ${JSON.stringify(raw)})}`
    }

    /* <tag ...>text</tag> on one line */
    const inline = line.match(/^(\s*<[a-zA-Z][^>]*>)([^<>{}]{2,})(<\/[a-zA-Z]+>,?\s*)$/)
    if (inline && !SKIP_TEXT.test(inline[2])) {
      const raw = inline[2].trim()
      const key = 'k' + ++n
      blocks.push({ _type: 'textBlock', _key: key, key, section, text: raw })
      return `${inline[1]}{t(text, '${key}', ${JSON.stringify(raw)})}${inline[3]}`
    }

    return line
  })

  return { source: out.join('\n'), blocks }
}

/* Turn the component into one that fetches its own content. */
function wire(source, route) {
  let out = source

  if (!out.includes("from '@/lib/sanity/content'")) {
    const helper = "import { getPageContent, img, t } from '@/lib/sanity/content'\n"
    const first = out.indexOf('import ')
    out = first === -1 ? helper + out : out.slice(0, first) + helper + out.slice(first)
  }

  /* find the default export and give it the fetch */
  const m = out.match(/export default (async )?function (\w+)\(([^)]*)\) \{\r?\n/)
  if (!m) return null

  const nl = out.includes('\r\n') ? '\r\n' : '\n'
  const fetchLine = `  const { text, images } = await getPageContent(${JSON.stringify(route)})${nl}`

  const header = `export default async function ${m[2]}(${m[3]}) {${nl}`
  const at = m.index + m[0].length
  out = out.slice(0, m.index) + header + fetchLine + out.slice(at)

  return out
}

/* ---------- run ---------- */
const pages = walk(path.join(ROOT, 'app')).filter((f) => !f.includes('studio'))
const docs = []
let totalText = 0
let totalImages = 0
let rewritten = 0

console.log('route'.padEnd(42), 'text', 'images')

for (const file of pages) {
  const route = routeOf(file)
  if (ONLY && route !== ONLY) continue
  const src = fs.readFileSync(file, 'utf8')

  if (src.includes("from '@/lib/sanity/content'")) {
    console.log(route.padEnd(42), '  (already wired)')
    continue
  }

  const { source, blocks } = extract(src)
  if (!blocks.length) continue

  const textCount = blocks.filter((b) => b._type === 'textBlock').length
  const imgCount = blocks.filter((b) => b._type === 'imageBlock').length
  totalText += textCount
  totalImages += imgCount
  console.log(route.padEnd(42), String(textCount).padStart(4), String(imgCount).padStart(6))

  docs.push({
    _id: 'page-' + (route === '/' ? 'home' : route.slice(1).replace(/\//g, '-')),
    _type: 'page',
    title: route === '/' ? 'Home' : route.slice(1),
    path: route,
    blocks,
  })

  if (WRITE) {
    const wired = wire(source, route)
    if (!wired) {
      console.log('   ! could not find the default export, skipped:', route)
      continue
    }
    fs.writeFileSync(file, wired, 'utf8')
    rewritten++
  }
}

console.log(
  '\ntotal:',
  totalText,
  'text blocks,',
  totalImages,
  'images across',
  docs.length,
  'pages'
)

if (WRITE) {
  fs.writeFileSync(path.join(__dirname, '_page-blocks.json'), JSON.stringify(docs, null, 1), 'utf8')
  console.log('rewrote', rewritten, 'components')
  console.log('wrote legacy/tools/_page-blocks.json')
} else {
  console.log('\n(dry run — pass --write to rewrite the components and emit the documents)')
}
