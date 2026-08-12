/* Drive the rebuilt pages through Chrome DevTools Protocol so React state
   changes are exercised for real (no injected <script> in the source). */
const http = require('http');
const { spawn } = require('child_process');
const net = require('net');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9333;

function get(path) {
  return new Promise((res, rej) => {
    http.get({ host: '127.0.0.1', port: PORT, path }, (r) => {
      let d = '';
      r.on('data', (c) => (d += c));
      r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
}

function waitPort(port, ms = 15000) {
  const t0 = Date.now();
  return new Promise((res, rej) => {
    (function tick() {
      const s = net.connect(port, '127.0.0.1');
      s.on('connect', () => { s.destroy(); res(); });
      s.on('error', () => {
        s.destroy();
        if (Date.now() - t0 > ms) return rej(new Error('timeout'));
        setTimeout(tick, 250);
      });
    })();
  });
}

async function main() {
  const url = process.argv[2];
  const expr = process.argv[3];

  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    `--remote-debugging-port=${PORT}`, '--user-data-dir=' + process.env.TEMP + '/cdp-' + Date.now(),
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    await waitPort(PORT);
    const targets = await get('/json/list');
    const page = targets.find((t) => t.type === 'page');
    const WebSocket = require('ws');
    const ws = new WebSocket(page.webSocketDebuggerUrl, { perMessageDeflate: false });
    let id = 0;
    const pending = new Map();
    ws.on('message', (m) => {
      const msg = JSON.parse(m);
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
    });
    const send = (method, params) =>
      new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
    await new Promise((r) => ws.on('open', r));

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Log.enable');

    /* collect console + uncaught errors before anything on the page runs */
    const logs = [];
    ws.on('message', (m) => {
      const msg = JSON.parse(m);
      if (msg.method === 'Runtime.consoleAPICalled' && /error|warning/.test(msg.params.type)) {
        logs.push(msg.params.type + ': ' + msg.params.args.map((a) => a.value || a.description || '').join(' ').slice(0, 300));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        logs.push('EXCEPTION: ' + (msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text || '').slice(0, 300));
      }
      if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
        logs.push('LOG: ' + msg.params.entry.text.slice(0, 300));
      }
    });

    await send('Page.navigate', { url });
    await new Promise((r) => setTimeout(r, 6500)); /* the homepage is heavy; hydration lands well after load */
    if (logs.length) console.log('--- console ---\n' + logs.slice(0, 6).join('\n') + '\n---------------');

    const out = await send('Runtime.evaluate', {
      expression: `(async () => { ${expr} })()`,
      awaitPromise: true,
      returnByValue: true,
    });
    if (out.result?.exceptionDetails) console.log('EXCEPTION', JSON.stringify(out.result.exceptionDetails.exception));
    console.log(JSON.stringify(out.result?.result?.value ?? out.result, null, 1));
    ws.close();
  } finally {
    chrome.kill();
  }
}
main().catch((e) => { console.error('FAILED', e.message); process.exit(1); });
