/* The earlier extractors only lifted images whose src began with "/" and sat
   on its own line, so two shapes were left hardcoded:

     - remote stock photos (https://images.pexels.com/...) on the gallery and
       media pages, which are exactly the pictures the client will want to
       replace with their own
     - a src written inline on the <img> tag itself

   This finds both and points them at Sanity, keeping the current URL as the
   fallback so nothing changes on screen until an image is uploaded.

   Run: node legacy/tools/cms-extract-images.js [--write] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')

/* A src already wrapped in img() is done; a data: URI is not an asset. */
const SRC = /src="((?:https?:|\/)[^"]+)"/

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name.endsWith('.tsx')) out.push(p)
  }
  return out
}

/* app/media/photo-gallery/page.tsx -> /media/photo-gallery */
function routeOf(file) {
  const rel = path.relative(path.join(ROOT, 'app'), file).replace(/\\/g, '/')
  if (!rel.endsWith('/page.tsx') && rel !== 'page.tsx') return null
  const r = '/' + rel.replace(/\/?page\.tsx$/, '')
  return r === '/' ? '/' : r
}

function prefixOf(file) {
  return path
    .basename(file, '.tsx')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

/* Keys must not collide with the ones the earlier passes wrote. Those share a
   single counter across text and images, so start above every number in use. */
function nextNumber(source) {
  let max = 0
  for (const m of source.matchAll(/'[a-z0-9-]*[ki](\d+)'/g)) {
    max = Math.max(max, Number(m[1]))
  }
  return max + 1
}

/* the nearest alt gives the Studio a label an editor can recognise */
function labelNear(lines, idx) {
  for (let i = idx; i < Math.min(idx + 4, lines.length); i++) {
    const m = lines[i].match(/alt="([^"]{2,80})"/)
    if (m) return m[1]
  }
  for (let i = idx; i > Math.max(idx - 12, 0); i--) {
    const m = lines[i].match(/<h[1-4][^>]*>([^<{]{3,60})</)
    if (m) return m[1].trim()
  }
  return 'Image'
}

const targets = [...walk(path.join(ROOT, 'app')), ...walk(path.join(ROOT, 'components'))]
const perDoc = new Map()
let touched = 0

for (const file of targets) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/')

  /* the QR codes are generated from the UPI id, not uploaded pictures */
  if (rel === 'components/donate/panels.tsx') continue

  const src = fs.readFileSync(file, 'utf8')
  if (!SRC.test(src)) continue

  /* only files that can actually receive the map */
  if (!/\bimages\b/.test(src)) {
    console.log('  ! no images prop, skipped:', rel)
    continue
  }

  const isHome = rel.startsWith('components/home/')
  const route = isHome ? '/' : routeOf(file)
  if (!route) {
    console.log('  ! not owned by a page, skipped:', rel)
    continue
  }

  const prefix = isHome ? prefixOf(file) + '-i' : 'i'
  let n = nextNumber(src)

  const lines = src.split('\n')
  const blocks = []

  const out = lines.map((line, idx) => {
    if (!SRC.test(line)) return line
    return line.replace(SRC, (_whole, url) => {
      const key = `${prefix}${n++}`
      blocks.push({
        _type: 'imageBlock',
        _key: key,
        key,
        section: labelNear(lines, idx),
        currentSrc: url,
        alt: '',
      })
      return `src={img(images, '${key}', ${JSON.stringify(url)})}`
    })
  })

  if (!blocks.length) continue
  console.log(`  ${rel.padEnd(44)} +${blocks.length}  ->  ${route}`)
  touched++

  if (!perDoc.has(route)) perDoc.set(route, [])
  perDoc.get(route).push(...blocks)

  if (WRITE) fs.writeFileSync(file, out.join('\n'), 'utf8')
}

console.log(`\n${touched} files, ${[...perDoc.values()].flat().length} images newly editable`)

if (!WRITE) {
  console.log('\n(dry run — pass --write)')
  process.exit(0)
}

/* merge into the block files the seeder publishes, leaving existing blocks
   in place so nothing already edited in the Studio is lost */
for (const name of ['_page-blocks.json', '_home-blocks.json']) {
  const p = path.join(__dirname, name)
  if (!fs.existsSync(p)) continue
  const docs = JSON.parse(fs.readFileSync(p, 'utf8'))
  let added = 0
  for (const doc of docs) {
    const extra = perDoc.get(doc.path)
    if (!extra) continue
    const have = new Set(doc.blocks.map((b) => b.key))
    for (const b of extra) if (!have.has(b.key)) doc.blocks.push(b), added++
    perDoc.delete(doc.path)
  }
  fs.writeFileSync(p, JSON.stringify(docs, null, 1), 'utf8')
  console.log(`updated ${name} (+${added} blocks)`)
}

for (const [route] of perDoc) {
  console.log('  ! no block file owns', route, '- its images will not publish')
}
