/* Logs into the admin panel in a real browser, checks the rendered result and
   saves screenshots at desktop and phone widths. */
import http from 'node:http'
import net from 'node:net'
import fs from 'node:fs'
import { spawn } from 'node:child_process'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9340
const [BASE, EMAIL, PASSWORD] = process.argv.slice(2)

const get = (p) =>
  new Promise((res, rej) => {
    http.get({ host: '127.0.0.1', port: PORT, path: p }, (r) => {
      let d = ''
      r.on('data', (c) => (d += c))
      r.on('end', () => res(JSON.parse(d)))
    }).on('error', rej)
  })

const waitPort = (port, ms = 15000) => {
  const t0 = Date.now()
  return new Promise((res, rej) => {
    ;(function tick() {
      const s = net.connect(port, '127.0.0.1')
      s.on('connect', () => { s.destroy(); res() })
      s.on('error', () => {
        s.destroy()
        if (Date.now() - t0 > ms) return rej(new Error('timeout'))
        setTimeout(tick, 250)
      })
    })()
  })
}

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + process.env.TEMP + '/cdp-admin-' + Date.now(),
  'about:blank',
], { stdio: 'ignore' })

try {
  await waitPort(PORT)
  const page = (await get('/json/list')).find((t) => t.type === 'page')
  const { default: WebSocket } = await import('ws')
  const ws = new WebSocket(page.webSocketDebuggerUrl, { perMessageDeflate: false })
  let id = 0
  const pending = new Map()
  ws.on('message', (m) => {
    const x = JSON.parse(m)
    if (x.id && pending.has(x.id)) { pending.get(x.id)(x); pending.delete(x.id) }
  })
  const send = (method, params) =>
    new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })) })
  await new Promise((r) => ws.on('open', r))

  await send('Page.enable'); await send('Runtime.enable')

  const errors = []
  ws.on('message', (m) => {
    const x = JSON.parse(m)
    if (x.method === 'Runtime.exceptionThrown') {
      errors.push((x.params.exceptionDetails.exception?.description || '').split('\n')[0].slice(0, 120))
    }
  })

  const evalIn = async (expr) => {
    const r = await send('Runtime.evaluate', {
      expression: `(async () => { ${expr} })()`, awaitPromise: true, returnByValue: true,
    })
    if (r.result?.exceptionDetails) {
      errors.push('EVAL: ' + (r.result.exceptionDetails.exception?.description || '').split('\n')[0])
    }
    return r.result?.result?.value
  }

  const shoot = async (name) => {
    const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })
    if (r.result?.data) {
      fs.writeFileSync(name, Buffer.from(r.result.data, 'base64'))
      return name
    }
    return null
  }

  /* ---- desktop ---- */
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: BASE + '/admin' })
  await new Promise((r) => setTimeout(r, 6000))

  const atLogin = await evalIn(`return location.pathname`)

  const login = await evalIn(`
    const wait = (ms) => new Promise(r => setTimeout(r, ms))
    const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set
    const email = document.querySelector('#email'), pw = document.querySelector('#password')
    set.call(email, ${JSON.stringify(EMAIL)}); email.dispatchEvent(new Event('input', { bubbles: true }))
    set.call(pw, ${JSON.stringify(PASSWORD)}); pw.dispatchEvent(new Event('input', { bubbles: true }))
    await wait(200)
    document.querySelector('form button[type=submit]').click()
    await wait(9000)
    return { path: location.pathname, err: document.querySelector('[role=alert]')?.textContent || null }
  `)

  const dash = await evalIn(`
    const q = (s) => document.querySelector(s)
    const cs = (s, p) => { const e = q(s); return e ? window.getComputedStyle(e)[p] : null }
    return {
      greeting: q('header p')?.textContent?.trim() || null,
      logoAlt: q('aside img')?.getAttribute('alt'),
      logoSrc: (q('aside img')?.getAttribute('src')) || null,
      navItems: [...document.querySelectorAll('aside nav a')].map(a => a.textContent.trim()),
      activeNav: q('aside nav a[aria-current=page]')?.textContent?.trim() || null,
      tiles: [...document.querySelectorAll('main [class*="rounded-xl"] p.font-serif')].length,
      emptyState: !!document.body.innerText.includes('Nothing has come in yet'),
      sidebarBg: cs('aside', 'backgroundColor'),
      pageBg: cs('body', 'backgroundColor'),
      publicHeaderPresent: !!document.querySelector('header a[href="/donate"]'),
      scrollsSideways: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }
  `)

  const desktopShot = await shoot('admin-desktop.png')

  /* ---- phone ---- */
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true })
  await new Promise((r) => setTimeout(r, 1200))
  const mobile = await evalIn(`
    return {
      sidebarHidden: window.getComputedStyle(document.querySelector('aside')).display === 'none',
      burgerVisible: !!document.querySelector('button[aria-label="Open menu"]'),
      scrollsSideways: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }
  `)
  const mobileShot = await shoot('admin-mobile.png')

  console.log(JSON.stringify({ atLogin, login, dash, mobile, shots: [desktopShot, mobileShot], errors }, null, 1))
} finally {
  chrome.kill()
}
