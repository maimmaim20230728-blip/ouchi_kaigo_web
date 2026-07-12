'use strict';
// 起動スモークテスト: 実在idだけ返す疑似DOMでapp.jsを起動し、参照切れを検出
// 使い方: node _smoke.js
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('./index.html', 'utf8');
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

function makeEl(tag) {
  return {
    tagName: (tag || 'div').toUpperCase(),
    children: [], style: {}, dataset: {},
    textContent: '', value: '', placeholder: '', src: '', href: '',
    disabled: false, selectedIndex: 0, title: '', hidden: false, innerHTML: '',
    firstChild: null,
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); },
      remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, f) { if (f === undefined) f = !this._s.has(c); if (f) this._s.add(c); else this._s.delete(c); return f; },
      contains(c) { return this._s.has(c); }
    },
    appendChild(c) { this.children.push(c); return c; },
    removeChild(c) { const i = this.children.indexOf(c); if (i >= 0) this.children.splice(i, 1); return c; },
    setAttribute() {}, getAttribute() { return null; },
    addEventListener() {}, removeEventListener() {},
    focus() {}, click() {},
    scrollIntoView() {}, scrollTo() {}, remove() {},
    getBoundingClientRect() { return { top: 0, left: 0, width: 100, height: 50, bottom: 50, right: 100 }; },
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; }
  };
}

const created = {};
function byId(id) {
  if (!ids.has(id)) return null; // 実在しないid＝本物同様nullを返す→参照切れが例外になる
  if (!created[id]) created[id] = makeEl();
  return created[id];
}

const documentStub = {
  documentElement: Object.assign(makeEl('html'), { lang: '' }),
  head: makeEl('head'),
  body: makeEl('body'),
  title: '',
  createElement: (t) => makeEl(t),
  addEventListener() {},
  getElementById: byId,
  querySelector(sel) {
    sel = String(sel).trim();
    const m = /^#([A-Za-z0-9_-]+)$/.exec(sel);
    if (m) return byId(m[1]);
    return makeEl();
  },
  querySelectorAll() { return []; }
};

const sandbox = {
  console,
  document: documentStub,
  navigator: {},
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  location: { hostname: 'smoke.test', protocol: 'https:' },
  addEventListener() {},
  scrollTo() {},
  setTimeout: () => 0, setInterval: () => 0, clearInterval() {}, clearTimeout() {}
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const src = ['./i18n.js', './audio.js', './tap.js', './figures.js', './data/guide.ja.js', './app.js']
  .map(f => fs.readFileSync(f, 'utf8')).join('\n');
vm.createContext(sandbox);
try {
  vm.runInContext(src, sandbox, { filename: 'app-bundle.js' });
  console.log('SMOKE OK: 起動時に例外なし');
} catch (e) {
  console.log('SMOKE NG:');
  console.log(e.stack.split('\n').slice(0, 6).join('\n'));
  process.exit(1);
}
