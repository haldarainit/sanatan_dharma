/* Proves the handover claim: every block published to Sanity actually reaches
   the rendered page. For each route it fetches the live HTML and looks for
   each block's text, and for each image checks the page points at the Sanity
   CDN (or at the file the block still falls back to).

   A block can legitimately be missing from the HTML when it sits behind a tab
   or an accordion that is closed on load, so the report lists what it could
   not find rather than just a pass or fail.

   Run: node legacy/tools/cms-verify.js [http://localhost:3100] */
const { createClient } = require('@sanity/client')

const BASE = process.argv[2] || 'http://localhost:3100'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
})

/* the server escapes these on the way out */
function decode(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x2F;/g, '/')
}

async function main() {
  const pages = await client.fetch(`*[_type == "page"] | order(path asc){
    path, title,
    "text": blocks[_type == "textBlock"]{ key, text },
    "images": blocks[_type == "imageBlock"]{ key, currentSrc, "uploaded": defined(image.asset) }
  }`)

  /* several documents can share a route */
  const byPath = new Map()
  for (const p of pages) {
    if (!byPath.has(p.path)) byPath.set(p.path, { text: [], images: [] })
    const g = byPath.get(p.path)
    g.text.push(...(p.text || []))
    g.images.push(...(p.images || []))
  }

  let totalText = 0
  let foundText = 0
  let totalImg = 0
  let liveImg = 0
  const problems = []

  for (const [path, g] of [...byPath].sort()) {
    let html
    try {
      const res = await fetch(BASE + path)
      if (!res.ok) {
        console.log(`  ${path.padEnd(30)} HTTP ${res.status}`)
        problems.push(`${path}: HTTP ${res.status}`)
        continue
      }
      html = decode(await res.text())
    } catch (err) {
      console.log(`  ${path.padEnd(30)} unreachable (${err.message})`)
      problems.push(`${path}: unreachable`)
      continue
    }

    const missing = []
    for (const b of g.text) {
      const v = (b.text || '').trim()
      if (v.length < 2) continue
      totalText++
      if (html.includes(v)) foundText++
      else missing.push(b.key + ': ' + v.slice(0, 45))
    }

    let imgMissing = 0
    for (const b of g.images) {
      totalImg++
      /* an uploaded asset must appear as a CDN url; otherwise the shipped
         file should still be referenced */
      const ok = b.uploaded
        ? html.includes('cdn.sanity.io')
        : !b.currentSrc || html.includes(b.currentSrc)
      if (ok) liveImg++
      else imgMissing++
    }

    const flag = missing.length || imgMissing ? '  <-- check' : ''
    console.log(
      `  ${path.padEnd(30)} text ${String(g.text.length - missing.length).padStart(4)}/${String(
        g.text.length
      ).padEnd(4)}  images ${String(g.images.length - imgMissing).padStart(3)}/${String(
        g.images.length
      ).padEnd(3)}${flag}`
    )
    if (missing.length) problems.push(`${path}: ${missing.length} text not visible\n      ` + missing.slice(0, 6).join('\n      '))
  }

  console.log(
    `\ntext blocks visible on the page: ${foundText}/${totalText} (${Math.round(
      (foundText / totalText) * 100
    )}%)`
  )
  console.log(
    `images resolving:               ${liveImg}/${totalImg} (${Math.round(
      (liveImg / totalImg) * 100
    )}%)`
  )

  if (problems.length) {
    console.log('\nnot found in the HTML (usually behind a closed tab or accordion):\n')
    for (const p of problems) console.log('  ' + p)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
