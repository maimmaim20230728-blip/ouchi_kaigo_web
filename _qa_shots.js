'use strict';
// おうち介護サポート QA撮影 (図解一覧 + アプリ主要画面 + Tapクリック実走)
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = path.join(__dirname, 'shots');
const URL = 'http://localhost:3060/';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    defaultViewport: { width: 680, height: 1200, deviceScaleFactor: 1 },
    args: ['--lang=ja', '--mute-audio', '--font-render-hinting=none']
  });
  const p = await b.newPage();
  p.on('pageerror', e => console.log('PAGEERROR: ' + e.message));

  // ---- 図解一覧 ----
  await p.goto(URL + '_figs.html', { waitUntil: 'load' });
  await sleep(400);
  await p.screenshot({ path: path.join(OUT, 'figs.png'), fullPage: true });
  console.log('shot: figs.png');

  // ---- アプリ (モバイル幅・Tapクリック実走) ----
  await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await p.goto(URL, { waitUntil: 'load' });
  await p.waitForSelector('.cattile', { timeout: 10000 });
  await sleep(300);
  await p.screenshot({ path: path.join(OUT, '00_notice.png') });

  await p.click('#noticeOk'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '01_home.png') });

  await p.click('#techGrid .cattile:nth-child(1)'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '02_cat.png') });

  await p.click('#procList .rowcard:nth-child(1)'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '03_step1.png') });

  await p.click('#btnNext'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '04_step2.png') });

  for (let i = 0; i < 7; i++) { await p.click('#btnNext'); await sleep(120); }
  await p.screenshot({ path: path.join(OUT, '05_summary.png') });
  console.log('after summary, screen: ' + await p.evaluate(() => document.getElementById('stepCount').textContent));

  await p.click('#navDanger'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '06_danger.png') });

  await p.click('#dangerList .rowcard:nth-child(1)'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '07_choking.png') });

  await p.click('#navSelf'); await sleep(200);
  await p.click('#selfList .rowcard:nth-child(2)'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '08_self.png') });

  await p.click('#navSettings'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '09_settings.png') });

  await p.click('#fsBtn2'); await sleep(200);
  await p.click('#navTech'); await sleep(300);
  await p.screenshot({ path: path.join(OUT, '10_home_big.png') });
  await p.click('#navSettings'); await sleep(150);
  await p.click('#fsBtn0'); await sleep(150);

  // 状態の機械確認
  const state = await p.evaluate(() => ({
    prefs: localStorage.getItem('ouchikaigo.prefs'),
    tiles: document.querySelectorAll('.cattile').length
  }));
  console.log('state: ' + JSON.stringify(state));

  await b.close();
  console.log('done');
})().catch(e => { console.error('ERROR: ' + e.message); process.exit(1); });
