'use strict';
// 多言語 構造パリティ検証: 各翻訳が ja と同一構造か / fig・link 参照が一致するか /
// ラテン文字言語に日本語(かな・漢字)が残っていないか / i18nキー欠落。
// 使い方: node _check_lang.js         … 全言語
//         node _check_lang.js en fr   … 指定言語のみ
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const sandbox = { window: {}, console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('./figures.js', 'utf8'), sandbox, { filename: 'figures.js' });
vm.runInContext(fs.readFileSync('./i18n.js', 'utf8'), sandbox, { filename: 'i18n.js' });

const dataDir = './data';
const guideFiles = fs.readdirSync(dataDir).filter(f => /^guide\.[a-z]{2}\.js$/.test(f));
guideFiles.forEach(f => vm.runInContext(fs.readFileSync(path.join(dataDir, f), 'utf8'), sandbox, { filename: f }));

const FIG = sandbox.window.FIGURES;
const I18N = sandbox.window.OUCHI_I18N;
const CONTENT = sandbox.window.OUCHI_CONTENT;
const JA = CONTENT.ja;

let ng = 0;
const bad = (msg) => { ng++; console.log('NG: ' + msg); };

// ---- ラテン文字言語で日本語(かな/漢字)残留を検出 ----
const CJK = /[぀-ヿ㐀-䶿一-鿿]/; // かな + CJK漢字
function scanJP(where, obj) {
  if (typeof obj === 'string') {
    if (CJK.test(obj)) bad(where + ' に日本語(未翻訳)が残存: ' + obj.slice(0, 40));
  } else if (Array.isArray(obj)) {
    obj.forEach((v, i) => scanJP(where + '[' + i + ']', v));
  } else if (obj && typeof obj === 'object') {
    for (const k in obj) {
      if (k === 'fig' || k === 'link' || k === 'ref' || k === 'id' || k === 'emoji') continue; // 構造キーは除外
      if (k === 'href') continue;
      scanJP(where + '.' + k, obj[k]);
    }
  }
}

// ---- 手順(proc)の構造シグネチャ ----
function stepSig(st) {
  return [st.fig || '-', st.link ? st.link.cat + '/' + st.link.proc : '-'].join('|');
}
function pointSig(p) {
  if (typeof p === 'string') return 'str';
  return 'obj:' + (p.link ? p.link.cat + '/' + p.link.proc : '-');
}
function compareProc(lang, catId, jp, tp) {
  const w = lang + ' ' + catId + '/' + jp.id;
  if (jp.steps.length !== tp.steps.length) return bad(w + ' step数 ' + tp.steps.length + ' != ja ' + jp.steps.length);
  jp.steps.forEach((js, i) => {
    const ts = tp.steps[i];
    if (stepSig(js) !== stepSig(ts)) bad(w + ' step' + (i + 1) + ' fig/link不一致 ja[' + stepSig(js) + '] != [' + stepSig(ts) + ']');
    if (!!js.c !== !!ts.c) bad(w + ' step' + (i + 1) + ' c有無不一致 (ja ' + !!js.c + ')');
    if (!!js.m !== !!ts.m) bad(w + ' step' + (i + 1) + ' m有無不一致 (ja ' + !!js.m + ')');
  });
  const jpn = jp.points || [], tpn = tp.points || [];
  if (jpn.length !== tpn.length) bad(w + ' points数不一致 ' + tpn.length + ' != ' + jpn.length);
  else jpn.forEach((p, i) => { if (pointSig(p) !== pointSig(tpn[i])) bad(w + ' point' + (i + 1) + ' 型/link不一致'); });
  const jng = jp.ng || [], tng = tp.ng || [];
  if (jng.length !== tng.length) bad(w + ' ng数不一致');
}

// ---- カード(danger/self)の構造 ----
function itemLink(x) { return (typeof x === 'string') ? 'str' : ('obj:' + (x.link ? x.link.cat + '/' + x.link.proc : '-')); }

function checkLang(lang) {
  const C = CONTENT[lang];
  if (!C) return bad(lang + ' の guide が無い');
  if (!I18N[lang]) bad(lang + ' の i18n が無い');
  else {
    for (const k in I18N.ja) if (!(k in I18N[lang])) bad(lang + ' i18n キー欠落: ' + k);
  }
  // tech
  if (C.tech.length !== JA.tech.length) bad(lang + ' techカテゴリ数不一致');
  JA.tech.forEach((jc, ci) => {
    const tc = C.tech[ci];
    if (!tc || tc.id !== jc.id) return bad(lang + ' techカテゴリid不一致 pos' + ci + ' (ja ' + jc.id + ')');
    if (jc.procs.length !== tc.procs.length) return bad(lang + ' ' + jc.id + ' procs数不一致');
    jc.procs.forEach((jp, pi) => {
      const tp = tc.procs[pi];
      if (!tp || tp.id !== jp.id) return bad(lang + ' proc id不一致 ' + jc.id + ' pos' + pi + ' (ja ' + jp.id + ')');
      compareProc(lang, jc.id, jp, tp);
    });
  });
  // danger
  if (C.danger.length !== JA.danger.length) bad(lang + ' danger数不一致');
  JA.danger.forEach((jd, di) => {
    const td = C.danger[di];
    if (!td || td.id !== jd.id) return bad(lang + ' danger id不一致 pos' + di + ' (ja ' + jd.id + ')');
    if ((jd.fig || '') !== (td.fig || '')) bad(lang + ' danger ' + jd.id + ' fig不一致');
    if (!!jd.cpr !== !!td.cpr) bad(lang + ' danger ' + jd.id + ' cpr有無不一致');
    ['when', 'act', 'see', 'call'].forEach(key => {
      const ja = jd[key] || [], t = td[key] || [];
      if (ja.length !== t.length) return bad(lang + ' danger ' + jd.id + '.' + key + ' 数不一致 ' + t.length + ' != ' + ja.length);
      ja.forEach((x, i) => { if (itemLink(x) !== itemLink(t[i])) bad(lang + ' danger ' + jd.id + '.' + key + i + ' 型/link不一致'); });
    });
  });
  // cpr
  if (!C.cpr) bad(lang + ' cpr無し');
  else {
    ['open', 'title', 'intro', 'firstTitle', 'first', 'stepsTitle', 'metroStart', 'metroStop', 'metroHint', 'note'].forEach(k => { if (!C.cpr[k]) bad(lang + ' cpr.' + k + ' 欠落'); });
    if (!C.cpr.steps || C.cpr.steps.length !== JA.cpr.steps.length) bad(lang + ' cpr.steps数不一致');
  }
  // self
  if (C.self.length !== JA.self.length) bad(lang + ' self数不一致');
  JA.self.forEach((js, si) => {
    const ts = C.self[si];
    if (!ts || ts.id !== js.id) return bad(lang + ' self id不一致 pos' + si + ' (ja ' + js.id + ')');
    if (js.secs.length !== ts.secs.length) return bad(lang + ' self ' + js.id + ' secs数不一致');
    js.secs.forEach((jsec, i) => {
      const tsec = ts.secs[i];
      if (jsec.body.length !== tsec.body.length) bad(lang + ' self ' + js.id + '.sec' + i + ' body数不一致');
      if (!!jsec.ref !== !!tsec.ref) bad(lang + ' self ' + js.id + '.sec' + i + ' ref有無不一致');
      if (!!jsec.link !== !!tsec.link) bad(lang + ' self ' + js.id + '.sec' + i + ' link有無不一致');
    });
  });
  // 参照fig存在チェック + 日本語残留(ラテン言語のみ)
  const latin = !['ja', 'zh', 'ko'].includes(lang);
  const allFigs = new Set();
  C.tech.forEach(c => c.procs.forEach(p => p.steps.forEach(s => { if (s.fig) allFigs.add(s.fig); })));
  C.danger.forEach(c => { if (c.fig) allFigs.add(c.fig); });
  allFigs.forEach(f => { if (!FIG[f]) bad(lang + ' fig参照切れ: ' + f); });
  if (latin) { scanJP(lang + '.tech', C.tech); scanJP(lang + '.danger', C.danger); scanJP(lang + '.self', C.self); scanJP(lang + '.cpr', C.cpr); }
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(CONTENT).filter(l => l !== 'ja');
targets.forEach(checkLang);

const nSteps = JA.tech.reduce((a, c) => a + c.procs.reduce((b, p) => b + p.steps.length, 0), 0);
console.log('---');
console.log('ja基準: techカテゴリ' + JA.tech.length + ' / ステップ' + nSteps + ' / danger' + JA.danger.length + ' / self' + JA.self.length);
console.log('検証言語: ' + targets.join(', '));
if (ng) { console.log('NG合計: ' + ng); process.exit(1); }
console.log('ALL OK（構造パリティ一致・日本語残留なし）');
