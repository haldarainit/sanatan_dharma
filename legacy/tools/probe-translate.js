/* Checks the language switcher for real: sets the cookie the switcher writes,
   loads the page in Chrome, waits for Google's translator and reads back what
   the visitor would see.

   Run: node legacy/tools/probe-translate.js <url> <langCode|hi> */
const http = require('http')
const { spawn } = require('child_process')
const net = require('net')

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9334

function get(path) {
  return new Promise((res, rej) => {
    http
      .get({ host: '127.0.0.1', port: PORT, path }, (r) => {
        let d = ''
        r.on('data', (c) => (d += c))
        r.on('end', () => res(JSON.parse(d)))
      })
      .on('error', rej)
  })
}

function waitPort(port, ms = 15000) {
  const t0 = Date.now()
  return new Promise((res, rej) => {
    ;(function tick() {
      const s = net.connect(port, '127.0.0.1')
      s.on('connect', () => {
        s.destroy()
        res()
      })
      s.on('error', () => {
        s.destroy()
        if (Date.now() - t0 > ms) return rej(new Error('timeout'))
        setTimeout(tick, 250)
      })
    })()
  })
}

/* what the page shows, in a form that is easy to eyeball */
const READ = `(() => {
  const pick = (sel) => document.querySelector(sel)?.textContent?.trim().slice(0, 90) || null
  const devanagari = (document.body.innerText.match(/[\\u0900-\\u097F]/g) || []).length
  const latin = (document.body.innerText.match(/[A-Za-z]/g) || []).length
  return {
    htmlLang: document.documentElement.lang,
    htmlClass: document.documentElement.className.includes('translated') ? 'translated' : '',
    cookie: (document.cookie.match(/googtrans=[^;]*/) || [''])[0],
    googleScript: !!document.getElementById('google-translate-script'),
    switcherLabel: pick('[aria-label="Select Language"]'),
    h1: pick('h1'),
    firstHeading: pick('h2'),
    bodyTop: getComputedStyle(document.body).top,
    devanagariChars: devanagari,
    latinChars: latin,
    sample: document.body.innerText.replace(/\\s+/g, ' ').slice(0, 120),
    untranslated: (() => {
      const hits = []
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
      let n
      while ((n = walk.nextNode())) {
        const t = (n.textContent || '').trim()
        if (t.length < 3 || !/[\\u0900-\\u097F]/.test(t)) continue
        const el = n.parentElement
        if (!el || el.closest('.notranslate')) continue
        const where = el.closest('section[id]')?.id || el.closest('section')?.className?.split(' ')[0] || '?'
        hits.push(where + ' :: ' + t.slice(0, 44))
      }
      return [...new Set(hits)].slice(0, 16)
    })(),
  }
})()`

async function main() {
  const url = process.argv[2]
  const lang = process.argv[3] || 'hi'

  const chrome = spawn(
    CHROME,
    [
      '--headless=new', '--disable-gpu', '--no-sandbox',
      `--remote-debugging-port=${PORT}`,
      '--user-data-dir=' + process.env.TEMP + '/cdp-tr-' + Date.now(),
      'about:blank',
    ],
    { stdio: 'ignore' }
  )

  try {
    await waitPort(PORT)
    const targets = await get('/json/list')
    const page = targets.find((t) => t.type === 'page')
    const WebSocket = require('ws')
    const ws = new WebSocket(page.webSocketDebuggerUrl, { perMessageDeflate: false })
    let id = 0
    const pending = new Map()
    ws.on('message', (m) => {
      const msg = JSON.parse(m)
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg)
        pending.delete(msg.id)
      }
    })
    const send = (method, params) =>
      new Promise((res) => {
        const i = ++id
        pending.set(i, res)
        ws.send(JSON.stringify({ id: i, method, params }))
      })
    await new Promise((r) => ws.on('open', r))

    await send('Page.enable')
    await send('Runtime.enable')
    await send('Network.enable')

    const errors = []
    ws.on('message', (m) => {
      const msg = JSON.parse(m)
      if (msg.method === 'Runtime.exceptionThrown') {
        errors.push(
          (msg.params.exceptionDetails.exception?.description ||
            msg.params.exceptionDetails.text ||
            '').slice(0, 200)
        )
      }
    })

    /* exactly the cookie the switcher writes */
    const host = new URL(url).hostname
    if (lang !== 'hi') {
      await send('Network.setCookie', {
        name: 'googtrans', value: `/hi/${lang}`, domain: host, path: '/',
      })
    }

    await send('Page.navigate', { url })
    /* the translator is fetched after hydration and rewrites in passes */
    await new Promise((r) => setTimeout(r, lang === 'hi' ? 5000 : 9000))

    /* the translator works through the document in passes and picks up more
       as it is scrolled, so walk the page before reading it */
    if (lang !== 'hi') {
      for (let y = 0; y < 26; y++) {
        await send('Runtime.evaluate', { expression: 'window.scrollBy(0, window.innerHeight)' })
        await new Promise((r) => setTimeout(r, 700))
      }
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' })
      await new Promise((r) => setTimeout(r, 15000))
    }

    const out = await send('Runtime.evaluate', {
      expression: READ,
      returnByValue: true,
    })
    console.log(JSON.stringify(out.result?.result?.value ?? out.result, null, 1))
    if (errors.length) console.log('page errors:\n  ' + errors.slice(0, 4).join('\n  '))
  } finally {
    chrome.kill()
  }
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
