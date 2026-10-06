'use strict';

// Static health check for the site. Run with: npm run check
// Verifies: inline scripts, CSP coverage, subresource integrity, link targets,
// accessibility hooks, JS syntax and mojibake.

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const root = path.resolve(__dirname, '..');
const EXCLUDE = ['node_modules', '.git'];
const htmlFiles = [];
const jsFiles = [];
const cssFiles = [];

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE.indexOf(e.name) >= 0) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) htmlFiles.push(full);
    else if (e.name.endsWith('.js')) jsFiles.push(full);
    else if (e.name.endsWith('.css')) cssFiles.push(full);
  }
})(root);

let issues = 0;
function report(label, lines) {
  if (!lines.length) return;
  issues += lines.length;
  console.log('\n=== ' + label + ' ===');
  lines.forEach((l) => console.log('  ' + l));
}

console.log('files: html=' + htmlFiles.length + ' js=' + jsFiles.length + ' css=' + cssFiles.length);

const inlineScripts = [];
for (const f of htmlFiles) {
  const h = fs.readFileSync(f, 'utf8');
  const re = /<script(?![^>]*\bsrc=)[^>]*>/g;
  let m;
  while ((m = re.exec(h))) inlineScripts.push(path.relative(root, f) + ' -> ' + m[0]);
}
report('inline <script> blocks (externalise them so script-src can be strict)', inlineScripts);

const metaMissing = [];
for (const f of htmlFiles) {
  const rel = path.relative(root, f);
  if (rel.indexOf('google') === 0) continue; // Google verification stub
  const h = fs.readFileSync(f, 'utf8');
  const missing = [];
  if (!/Content-Security-Policy/.test(h)) missing.push('CSP');
  if (!/name="description"/.test(h)) missing.push('meta description');
  if (missing.length) metaMissing.push(rel + ' -> ' + missing.join(', '));
}
report('pages missing security/SEO meta', metaMissing);

const unsafeInline = [];
for (const f of htmlFiles) {
  const h = fs.readFileSync(f, 'utf8');
  const m = h.match(/script-src[^;"]*/);
  if (m && m[0].indexOf('unsafe-inline') >= 0) unsafeInline.push(path.relative(root, f) + ' -> ' + m[0]);
}
report("script-src containing 'unsafe-inline'", unsafeInline);

const noIntegrity = [];
for (const f of htmlFiles) {
  const h = fs.readFileSync(f, 'utf8');
  const re = /<(?:script|link)\b[^>]*https:\/\/[^>]*>/g;
  let m;
  while ((m = re.exec(h))) {
    const tag = m[0];
    if (/fonts\.googleapis|preconnect|dns-prefetch/.test(tag)) continue;
    if (!/integrity=/.test(tag)) noIntegrity.push(path.relative(root, f) + ' -> ' + tag.slice(0, 120));
  }
}
report('CDN assets missing integrity', noIntegrity);

const consoles = [];
for (const f of jsFiles) {
  if (path.relative(root, f).indexOf('scripts' + path.sep) === 0) continue;
  const s = fs.readFileSync(f, 'utf8');
  const n = (s.match(/console\.log\(/g) || []).length;
  if (n) consoles.push(path.relative(root, f) + ' -> ' + n);
}
report('console.log in site scripts', consoles);

const broken = [];
for (const f of htmlFiles) {
  const h = fs.readFileSync(f, 'utf8');
  const re = /(?:href|src)="([^"#][^"]*)"/g;
  let m;
  while ((m = re.exec(h))) {
    let u = m[1];
    if (/^(https?:|mailto:|data:|tel:|#)/.test(u)) continue;
    u = u.split('#')[0].split('?')[0];
    if (!u) continue;
    let dec = u;
    try { dec = decodeURIComponent(u); } catch (e) {}
    // Browsers resolve HTML entities in attribute values before fetching;
    // mirror that here so "&amp;" style paths are validated correctly.
    dec = dec.replace(/&(amp|lt|gt|quot|apos|#39|#169);/g, (m, e) => (
      { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'", '#169': '©' }[e]
    ));
    if (!fs.existsSync(path.resolve(path.dirname(f), dec))) broken.push(path.relative(root, f) + ' -> ' + m[1]);
  }
}
report('broken local links / assets', broken);

const noExpanded = [];
for (const f of htmlFiles) {
  const h = fs.readFileSync(f, 'utf8');
  const re = /<button[^>]*hamburger[^>]*>/g;
  let m;
  while ((m = re.exec(h))) if (!/aria-expanded/.test(m[0])) noExpanded.push(path.relative(root, f) + ' -> ' + m[0].slice(0, 100));
}
report('hamburger buttons without aria-expanded', noExpanded);

const badSyntax = [];
for (const f of jsFiles) {
  const r = cp.spawnSync(process.execPath, ['--check', f], { encoding: 'utf8' });
  if (r.status !== 0) badSyntax.push(path.relative(root, f) + ': ' + (r.stderr || '').split('\n')[0]);
}
report('JavaScript syntax errors', badSyntax);

const mojibake = [
  [/\u00C2[\u00A0-\u00FF]/g, 'C2+latin (UTF-8 lead byte)'],
  [/\u00C3[\u0080-\u00BF]/g, 'C3+continuation'],
  [/\u00E2[\u20AC\u009C\u201A\u201E]/g, 'e2+euro (curly quote mojibake)'],
  [/\uFFFD/g, 'replacement character']
];
const moji = [];
for (const f of htmlFiles.concat(cssFiles)) {
  const s = fs.readFileSync(f, 'utf8');
  const hits = [];
  for (let i = 0; i < mojibake.length; i++) {
    const n = (s.match(mojibake[i][0]) || []).length;
    if (n) hits.push(mojibake[i][1] + '=' + n);
  }
  if (hits.length) moji.push(path.relative(root, f) + ' -> ' + hits.join(', '));
}
report('mojibake', moji);

const doubleBom = [];
for (const f of htmlFiles.concat(jsFiles, cssFiles)) {
  const b = fs.readFileSync(f);
  if (b.length >= 6 && b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf && b[3] === 0xef && b[4] === 0xbb && b[5] === 0xbf) {
    doubleBom.push(path.relative(root, f));
  }
}
report('files with a duplicated UTF-8 BOM', doubleBom);

console.log('\n' + (issues ? issues + ' issue(s) found' : 'all checks passed'));
process.exitCode = issues ? 1 : 0;
