'use strict';

// Headless-browser smoke test: npm run smoke
// Loads every page through a local static server and reports console errors,
// page errors, failed requests and Content Security Policy violations.

const fs = require('fs');
const path = require('path');
const http = require('http');

const root = path.resolve(__dirname, '..');
const EXCLUDE = ['node_modules', '.git'];
const PORT = Number(process.env.SMOKE_PORT || 8123);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE.indexOf(e.name) >= 0) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) htmlFiles.push(path.relative(root, full).split(path.sep).join('/'));
  }
})(root);

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
];
const executablePath = CANDIDATES.find((p) => p && fs.existsSync(p));

if (!executablePath) {
  console.log('smoke test skipped: no Chrome/Chromium found (set CHROME_PATH to enable)');
  process.exit(0);
}

let puppeteer;
try {
  puppeteer = require('puppeteer-core');
} catch (e) {
  console.log('smoke test skipped: puppeteer-core not installed (run npm install)');
  process.exit(0);
}

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  const file = path.resolve(root, '.' + path.posix.sep + rel.replace(/\\/g, '/'));
  // Path containment: never serve anything outside the project root (traversal guard)
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('forbidden');
    return;
  }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('not found');
    return;
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--mute-audio']
  });

  let issuePages = 0;
  for (const rel of htmlFiles) {
    const page = await browser.newPage();
    const lines = [];
    // Chrome's built-in PDF viewer and other browser-internal resources are not
    // site assets; reporting them produces a false positive on every PDF embed.
    const isBrowserInternal = (u) => /^(chrome-extension|devtools|chrome|edge|moz-extension|resource):/.test(u);
    page.on('console', (m) => {
      const t = m.text();
      if (m.type() !== 'error' && m.type() !== 'warning') return;
      // Browsers request /favicon.ico implicitly; a 404 there is noise, and the
      // generic console text carries no URL, so resolve it via the location.
      const loc = typeof m.location === 'function' ? m.location() : null;
      if (loc && loc.url && loc.url.indexOf('favicon.ico') >= 0) return;
      lines.push('[' + m.type() + '] ' + t);
    });
    page.on('pageerror', (e) => lines.push('[pageerror] ' + e.message));
    page.on('requestfailed', (r) => {
      const u = r.url();
      if (isBrowserInternal(u) || u.indexOf('favicon.ico') >= 0) return;
      lines.push('[failed] ' + u + ' ' + (r.failure() ? r.failure().errorText : ''));
    });
    page.on('response', (r) => {
      const u = r.url();
      if (r.status() >= 400 && u.indexOf('favicon.ico') < 0 && !isBrowserInternal(u)) {
        lines.push('[http ' + r.status() + '] ' + u);
      }
    });
    await page.evaluateOnNewDocument(() => {
      window.__csp = [];
      document.addEventListener('securitypolicyviolation', (e) => {
        window.__csp.push(e.effectiveDirective + ' | blocked=' + e.blockedURI + (e.sample ? ' | sample=' + e.sample : ''));
      });
    });
    try {
      // "/" is required: without it the URL becomes "http://127.0.0.1:8123index.html"
      await page.goto('http://127.0.0.1:' + PORT + '/' + encodeURI(rel), { waitUntil: 'networkidle2', timeout: 45000 });
      await new Promise((r) => setTimeout(r, 600));
      const csp = await page.evaluate(() => window.__csp);
      csp.forEach((c) => lines.push('[csp] ' + c));
    } catch (e) {
      lines.push('[nav-error] ' + String(e.message).split('\n')[0]);
    }
    await page.close();

    const unique = Array.from(new Set(lines)).filter((l) => !/favicon\.ico/.test(l));
    if (unique.length) {
      issuePages++;
      console.log('\n' + rel);
      unique.forEach((l) => console.log('   - ' + l.slice(0, 400)));
    }
  }

  await browser.close();
  server.close();
  console.log('\nchecked ' + htmlFiles.length + ' pages, ' + issuePages + ' with issues');
  process.exitCode = issuePages ? 1 : 0;
})().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
