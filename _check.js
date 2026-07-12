'use strict';
// データ検証: id重複 / 空文字 / fig参照切れ / 禁止文字 / 書き損じアーティファクト
// 使い方: node _check.js
const fs = require('fs');
const vm = require('vm');

const sandbox = { window: {}, console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ['./figures.js', './data/guide.ja.js', './i18n.js']) {
  vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
}
const FIG = sandbox.window.FIGURES;
const C = sandbox.window.OUCHI_CONTENT.ja;

let ng = 0;
const bad = (msg) => { ng++; console.log('NG: ' + msg); };

// --- 禁止文字・書き損じ検出（全テキスト共通） ---
function checkText(where, s) {
  if (typeof s !== 'string' || !s.trim()) return bad(where + ' が空');
  if (s.includes('—')) bad(where + ' にダッシュ（—）: ' + s.slice(0, 30));
  if (s.includes('・・') && !s.includes('・・・')) bad(where + ' に「・・」: ' + s.slice(0, 30));
  const s2 = s.replace(/[0-9０-９約]+(?:cm|mm|kg|ml|km)/g, '0');  // 単位表記は書き損じ扱いしない
  if (/(?<![A-Za-z])[a-z]{2,}(?![A-Za-z])/.test(s2)) bad(where + ' に小文字英単語（書き損じ疑い）: ' + s.slice(0, 40));
  if (s.includes('**') || s.includes('<script')) bad(where + ' に不正文字列: ' + s.slice(0, 30));
  if (s.length > 220) bad(where + ' が長すぎ(' + s.length + '字)');
}

// --- tech ---
const catIds = new Set();
C.tech.forEach(cat => {
  if (catIds.has(cat.id)) bad('tech id重複: ' + cat.id);
  catIds.add(cat.id);
  checkText('tech.' + cat.id + '.title', cat.title);
  checkText('tech.' + cat.id + '.sub', cat.sub);
  if (!cat.emoji) bad('tech.' + cat.id + ' emojiなし');
  if (!cat.procs || !cat.procs.length) bad('tech.' + cat.id + ' procsなし');
  const procIds = new Set();
  (cat.procs || []).forEach(proc => {
    if (procIds.has(proc.id)) bad('proc id重複: ' + proc.id);
    procIds.add(proc.id);
    checkText('proc.' + proc.id + '.title', proc.title);
    if (!proc.steps || !proc.steps.length) bad('proc.' + proc.id + ' stepsなし');
    (proc.steps || []).forEach((st, i) => {
      checkText(proc.id + '.step' + (i + 1), st.t);
      if (st.c) checkText(proc.id + '.step' + (i + 1) + '.c', st.c);
      if (st.m) checkText(proc.id + '.step' + (i + 1) + '.m', st.m);
      if (st.fig && !FIG[st.fig]) bad(proc.id + '.step' + (i + 1) + ' fig参照切れ: ' + st.fig);
      if (st.link) {
        const cat2 = C.tech.find(c2 => c2.id === st.link.cat);
        if (!cat2 || !cat2.procs.some(p2 => p2.id === st.link.proc)) bad(proc.id + '.step' + (i + 1) + ' link参照切れ: ' + st.link.cat + '/' + st.link.proc);
      }
    });
    (proc.points || []).forEach((p, i) => {
      const where = proc.id + '.point' + (i + 1);
      if (typeof p === 'string') return checkText(where, p);
      checkText(where, p.t);
      if (p.link) {
        const cat2 = C.tech.find(c2 => c2.id === p.link.cat);
        if (!cat2 || !cat2.procs.some(p2 => p2.id === p.link.proc)) bad(where + ' link参照切れ: ' + p.link.cat + '/' + p.link.proc);
      }
    });
    (proc.ng || []).forEach((p, i) => checkText(proc.id + '.ng' + (i + 1), p));
  });
});

// --- danger / self ---
const dIds = new Set();
C.danger.forEach(card => {
  if (dIds.has(card.id)) bad('danger id重複: ' + card.id);
  dIds.add(card.id);
  checkText('danger.' + card.id + '.title', card.title);
  if (card.fig && !FIG[card.fig]) bad('danger.' + card.id + ' fig参照切れ: ' + card.fig);
  if (!card.when || !card.when.length) bad('danger.' + card.id + ' whenなし');
  if (!card.act || !card.act.length) bad('danger.' + card.id + ' actなし');
  if ((!card.call || !card.call.length) && (!card.see || !card.see.length)) bad('danger.' + card.id + ' call/seeなし');
  ['when', 'act', 'see', 'call'].forEach(k => (card[k] || []).forEach((s, i) => {
    const where = 'danger.' + card.id + '.' + k + (i + 1);
    if (typeof s === 'string') return checkText(where, s);
    checkText(where, s.t);
    if (s.link) {
      const cat2 = C.tech.find(c2 => c2.id === s.link.cat);
      if (!cat2 || !cat2.procs.some(p2 => p2.id === s.link.proc)) bad(where + ' link参照切れ: ' + s.link.cat + '/' + s.link.proc);
    }
  }));
});
const sIds = new Set();
C.self.forEach(card => {
  if (sIds.has(card.id)) bad('self id重複: ' + card.id);
  sIds.add(card.id);
  checkText('self.' + card.id + '.title', card.title);
  if (!card.secs || !card.secs.length) bad('self.' + card.id + ' secsなし');
  (card.secs || []).forEach((sec, i) => {
    checkText('self.' + card.id + '.sec' + (i + 1) + '.h', sec.h);
    if (!sec.body || !sec.body.length) bad('self.' + card.id + '.sec' + (i + 1) + ' bodyなし');
    (sec.body || []).forEach((p, j) => checkText('self.' + card.id + '.sec' + (i + 1) + '.p' + (j + 1), p));
    if (sec.link) {
      if (!/^https:\/\//.test(sec.link.href || '')) bad('self.' + card.id + '.sec' + (i + 1) + ' link.hrefがhttpsでない');
      if (!sec.link.label) bad('self.' + card.id + '.sec' + (i + 1) + ' link.labelなし');
    }
    if (sec.ref) {
      const cat2 = C.tech.find(c2 => c2.id === sec.ref.cat);
      if (!cat2 || !cat2.procs.some(p2 => p2.id === sec.ref.proc)) bad('self.' + card.id + '.sec' + (i + 1) + ' ref参照切れ');
    }
  });
});

// --- cpr（心肺蘇生ガイド） ---
if (!C.cpr) { bad('cprなし'); } else {
  ['open', 'title', 'intro', 'firstTitle', 'first', 'stepsTitle', 'metroStart', 'metroStop', 'metroHint', 'note'].forEach(k => checkText('cpr.' + k, C.cpr[k]));
  if (!C.cpr.steps || C.cpr.steps.length < 5) bad('cpr.stepsが少ない');
  (C.cpr.steps || []).forEach((s, i) => checkText('cpr.step' + (i + 1), s));
}

// --- figures が全てSVG文字列を返すか ---
Object.keys(FIG).forEach(id => {
  let s;
  try { s = FIG[id](); } catch (e) { return bad('FIGURES.' + id + ' が例外: ' + e.message); }
  if (typeof s !== 'string' || !s.startsWith('<svg') || !s.endsWith('</svg>')) bad('FIGURES.' + id + ' がSVGでない');
  if (s.includes('NaN') || s.includes('undefined')) bad('FIGURES.' + id + ' に NaN/undefined');
});

// --- 集計 ---
const nSteps = C.tech.reduce((a, c) => a + c.procs.reduce((b, p) => b + p.steps.length, 0), 0);
const nProcs = C.tech.reduce((a, c) => a + c.procs.length, 0);
const usedFigs = new Set();
C.tech.forEach(c => c.procs.forEach(p => p.steps.forEach(s => { if (s.fig) usedFigs.add(s.fig); })));
C.danger.forEach(c => { if (c.fig) usedFigs.add(c.fig); });
const unused = Object.keys(FIG).filter(id => !usedFigs.has(id));
console.log('---');
console.log('技術カテゴリ: ' + C.tech.length + ' / 手順: ' + nProcs + ' / ステップ: ' + nSteps);
console.log('きけん: ' + C.danger.length + ' / まもる: ' + C.self.length);
console.log('図解: ' + Object.keys(FIG).length + '点（未使用: ' + (unused.length ? unused.join(',') : 'なし') + '）');
if (ng) { console.log('NG合計: ' + ng); process.exit(1); }
console.log('ALL OK');
