'use strict';

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const root = path.join(__dirname, '..');
const jsDir = path.join(root, 'assets', 'js');

// Files concatenated (in order) into assets/js/bundle.min.js.
// Keep this list in sync with the <script src> tags used across the site.
const SOURCES = [
  'main.js',
  'notifications.js',
  'typing-animation.js',
  'video-fallback.js',
  'stuck-reveal.js'
];

async function build() {
  const input = {};
  for (const file of SOURCES) {
    const full = path.join(jsDir, file);
    input[path.join('assets', 'js', file)] = fs.readFileSync(full, 'utf8');
  }

  const result = await minify(input, {
    compress: {
      drop_console: false,
      passes: 2
    },
    mangle: true,
    format: {
      comments: false,
      preamble: '/* PM SHRI KV Aliganj Library - bundled site scripts. Run `npm run build:js` after editing assets/js/*.js */'
    },
    sourceMap: {
      filename: 'bundle.min.js',
      url: 'bundle.min.js.map'
    }
  });

  if (!result || !result.code) {
    throw new Error('terser produced no output');
  }

  fs.writeFileSync(path.join(jsDir, 'bundle.min.js'), result.code, 'utf8');
  if (result.map) {
    fs.writeFileSync(path.join(jsDir, 'bundle.min.js.map'), result.map, 'utf8');
  }

  console.log('bundle.min.js: ' + result.code.length + ' bytes (' + SOURCES.join(', ') + ')');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
