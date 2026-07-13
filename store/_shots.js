'use strict';
// おうち介護サポート・そよぎ Play用スクショ撮影（9:16 スマホ縦・無加工・全8枚ヘッドレス）
// 言語一覧はHTMLのlangGrid（ネイティブselectでない）ため実ウィンドウOSキャプチャ不要。
// 実行: $env:NODE_PATH=<scratchpad>\node_modules; node store\_shots.js （preview 3060起動中）
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const OUT = 'C:\\Users\\puipu\\ouchi_kaigo_web\\store\\screenshots';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:3060/';
const VW = 432, VH = 768;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tap = (page, sel, nth = 0) => page.evaluate((s, n) => {
  const el = document.querySelectorAll(s)[n];
  if (!el) throw new Error('no el ' + s + ' #' + n);
  const r = el.getBoundingClientRect();
  const o = { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch', isPrimary: true, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 };
  el.dispatchEvent(new PointerEvent('pointerdown', o));
  el.dispatchEvent(new PointerEvent('pointerup', o));
}, sel, nth);

const scrollTop = (page) => page.evaluate(() => window.scrollTo(0, 0));
const visible = (page) => page.evaluate(() => ([...document.querySelectorAll('.screen')].find(s => !s.hidden) || {}).id);

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    defaultViewport: { width: VW, height: VH, deviceScaleFactor: 2.5 },
    args: ['--lang=ja', '--mute-audio', '--font-render-hinting=none']
  });
  const p = await b.newPage();
  p.on('pageerror', e => console.log('PAGEERROR ' + e.message));
  await p.evaluateOnNewDocument(() => {
    localStorage.setItem('ouchikaigo.prefs', JSON.stringify({ fs: 0, sound: false, theme: 'green', music: 'off', lang: 'ja', agreed: true }));
  });
  await p.goto(URL, { waitUntil: 'load' });
  await p.waitForSelector('#techGrid .cattile', { timeout: 15000 });
  await sleep(500);

  const shot = async (name) => { await sleep(450); await p.screenshot({ path: path.join(OUT, name) }); console.log('shot ' + name + '  (screen=' + await visible(p) + ')'); };

  // 01 ホーム（ぎじゅつタブ・カテゴリタイル）
  await scrollTop(p);
  await shot('01_home.png');

  // 02 言語一覧（設定内の12言語グリッド）
  await tap(p, '#navSettings'); await sleep(500);
  await p.evaluate(() => document.getElementById('langGrid').scrollIntoView({ block: 'center' }));
  await shot('02_language.png');

  // 03 設定（文字サイズ/色/音楽/タップ音）
  await scrollTop(p);
  await shot('03_settings.png');

  // 04 技術ステップ（こしをまもる・ボディメカニクス図＋注意）
  await tap(p, '#navTech'); await sleep(400); await scrollTop(p);
  await tap(p, '#techGrid .cattile', 0); await sleep(450);        // こしをまもる → scrCat
  await tap(p, '#procList .rowcard', 0); await sleep(450);        // koshi1 → scrProc step1
  await scrollTop(p);
  await shot('04_technique.png');

  // 05 危険カード（窒息・図＋CPRボタン）
  await tap(p, '#navDanger'); await sleep(450); await scrollTop(p);
  await tap(p, '#dangerList .rowcard', 0); await sleep(450);      // 窒息 → scrCard
  await scrollTop(p);
  await shot('05_danger.png');

  // 06 心肺蘇生ページ（メトロノーム）
  await tap(p, '.cprbtn', 0); await sleep(500);                   // → scrCpr
  await scrollTop(p);
  await shot('06_cpr.png');

  // 07 まもる（できないことは、プロに任せる）
  await tap(p, '#navSelf'); await sleep(450); await scrollTop(p);
  await tap(p, '#selfList .rowcard', 2); await sleep(450);        // makaseru → scrCard
  await scrollTop(p);
  await shot('07_self.png');

  // 08 食事の姿勢（meal_posture 図）
  await tap(p, '#navTech'); await sleep(400); await scrollTop(p);
  await tap(p, '#techGrid .cattile', 6); await sleep(450);        // 食事の介助 → scrCat
  await tap(p, '#procList .rowcard', 0); await sleep(450);        // shoku1 → scrProc step1
  await tap(p, '#btnNext', 0); await sleep(400);                  // step2（meal_posture図）
  await scrollTop(p);
  await shot('08_meal.png');

  await b.close();
  console.log('done');
})().catch(e => { console.error('ERROR ' + e.message); process.exit(1); });
