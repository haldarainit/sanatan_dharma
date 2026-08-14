/* Runs an expression at a given viewport width, so behaviour that depends on
   a media query can be checked at both phone and laptop sizes.

   Run: node legacy/tools/probe-viewport.js <url> <width> <expr> */
const http = require('http')
const { spawn } = require('child_process')
const net = require('net')

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9339

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

async function main() {
  const url = process.argv[2]
  const width = Number(process.argv[3] || 1280)
  const expr = process.argv[4]
  const mobile = width < 768

  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    `--remote-debugging-port=${PORT}`,
    '--user-data-dir=' + process.env.TEMP + '/cdp-vp-' + Date.now(),
    'about:blank',
  ], { stdio: 'ignore' })

  try {
    await waitPort(PORT)
    const page = (await get('/json/list')).find((t) => t.type === 'page')
    const WebSocket = require('ws')
    const ws = new WebSocket(page.webSocketDebuggerUrl, { perMessageDeflate: false })
    let id = 0
    const pending = new Map()
    ws.on('message', (m) => {
      const msg = JSON.parse(m)
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id) }
    })
    const send = (method, params) => new Promise((res) => {
      const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params }))
    })
    await new Promise((r) => ws.on('open', r))

    await send('Page.enable')
    await send('Runtime.enable')
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height: mobile ? 844 : 900,
      deviceScaleFactor: 1,
      mobile,
    })

    await send('Page.navigate', { url })
    await new Promise((r) => setTimeout(r, 6500))

    const out = await send('Runtime.evaluate', {
      expression: `(async () => { ${expr} })()`,
      awaitPromise: true,
      returnByValue: true,
    })
    if (out.result?.exceptionDetails) {
      console.log('EXCEPTION', out.result.exceptionDetails.exception?.description?.split('\n')[0])
    }
    console.log(JSON.stringify(out.result?.result?.value ?? out.result, null, 1))
  } finally {
    chrome.kill()
  }
}

main().catch((e) => { console.error(e.message); process.exit(1) })
