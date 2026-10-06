'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'assets', 'css', 'style.css');
const out = path.join(root, 'assets', 'css', 'style.min.css');

// clean-css is used through its Node API instead of clean-css-cli so the
// chokidar/braces chain (3 high-severity advisories) never enters node_modules.
let CleanCSS;
try {
  CleanCSS = require('clean-css');
} catch (e) {
  console.error('clean-css not installed. Run: npm install');
  process.exit(1);
}

const input = fs.readFileSync(src, 'utf8');
const result = new CleanCSS({ level: 2, rebase: false }).minify(input);

const problems = [].concat(result.errors || [], result.warnings || []);
if ((result.errors || []).length) {
  (result.errors || []).forEach((e) => console.error('error: ' + e));
  process.exit(1);
}
if (!result.styles) {
  console.error('clean-css produced no output');
  process.exit(1);
}

fs.writeFileSync(out, result.styles, 'utf8');
const suffix = problems.length ? ' (' + problems.length + ' note(s))' : '';
console.log('style.min.css: ' + fs.statSync(out).size + ' bytes' + suffix);
