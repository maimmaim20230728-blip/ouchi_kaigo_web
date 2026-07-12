'use strict';
(function(){
  const $ = (id) => document.getElementById(id);

  /* ---------- 対応言語（追加したら guide.<code>.js を用意し sw.js にも追記） ---------- */
  const LANGS = [
    { code: 'ja', name: '日本語' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'sv', name: 'Svenska' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
    { code: 'ar', name: 'العربية' }
  ];
  const RTL = { ar: true };

  /* ---------- 設定の保存 ---------- */
  const prefs = { fs: 0, sound: true, theme: 'green', music: 'a', lang: null, agreed: false };
  try{
    const raw = JSON.parse(localStorage.getItem('ouchikaigo.prefs') || '{}');
    Object.assign(prefs, raw);
    // 旧形式(mode/bgm)からの引き継ぎ
    if(raw.mode && !raw.theme) prefs.theme = (raw.mode === 'disability') ? 'blue' : 'green';
    if(typeof raw.bgm === 'boolean' && !raw.music) prefs.music = raw.bgm ? 'a' : 'off';
  }catch(_){}
  if(!prefs.lang){
    const nav = (navigator.language || 'ja').slice(0, 2).toLowerCase();
    prefs.lang = LANGS.some(l => l.code === nav) ? nav : 'ja';
  }

  let LANG = window.OUCHI_CONTENT[prefs.lang] ? prefs.lang : 'ja';
  let T = window.OUCHI_I18N[LANG] || window.OUCHI_I18N.ja;
  let C = window.OUCHI_CONTENT[LANG];
  function save(){ try{ localStorage.setItem('ouchikaigo.prefs', JSON.stringify(prefs)); }catch(_){} }

  /* ---------- 画面の状態 ---------- */
  const screens = {
    tech: $('scrTech'), danger: $('scrDanger'), self: $('scrSelf'), settings: $('scrSettings'),
    cat: $('scrCat'), proc: $('scrProc'), card: $('scrCard'), cpr: $('scrCpr')
  };
  let tab = 'tech';                 // 現在のタブ
  let sub = null;                   // null | {kind:'cat',cat} | {kind:'proc',cat,proc,i} | {kind:'card',card,accent}
  let navStack = [];                // 参照リンクで飛んだとき、元の場所に「もどる」ための履歴

  function clear(el){ while(el.firstChild) el.removeChild(el.firstChild); }
  function mk(tag, cls, text){
    const el = document.createElement(tag);
    if(cls) el.className = cls;
    if(text !== undefined) el.textContent = text;
    return el;
  }

  function render(){
    for(const k in screens) screens[k].hidden = true;
    const cur = sub ? sub.kind : tab;
    screens[cur].hidden = false;
    $('btnBack').hidden = !sub;
    let title = T.appName;
    if(sub && sub.kind === 'cat') title = sub.cat.title;
    else if(sub && sub.kind === 'proc') title = sub.cat.title;
    else if(sub && sub.kind === 'card') title = sub.accent === 'danger' ? T.tabDanger : T.tabSelf;
    else if(sub && sub.kind === 'cpr') title = T.tabDanger;
    $('hdrTitle').textContent = title;
    if(!(sub && sub.kind === 'cpr')) stopMetroUI();   // 心肺蘇生ページを離れたらリズム停止
    ['navTech','navDanger','navSelf','navSettings'].forEach(id => {
      const on = (id === 'nav' + tab.charAt(0).toUpperCase() + tab.slice(1));
      $(id).classList.toggle('active', on);
    });
    if(typeof window.scrollTo === 'function') window.scrollTo(0, 0);
  }

  function goTab(t){ tab = t; sub = null; navStack = []; render(); }
  function back(){
    if(navStack.length){
      const prev = navStack.pop();
      if(prev.kind === 'card'){ openCard(prev.card, prev.accent); return; }
      sub = prev;
      render();
      if(sub && sub.kind === 'proc') renderStep();
      return;
    }
    if(!sub) return;
    if(sub.kind === 'proc'){ openCat(sub.cat); return; }
    sub = null; render();
  }

  /* ---------- ぎじゅつ ---------- */
  function renderTech(){
    const grid = $('techGrid');
    clear(grid);
    C.tech.forEach(cat => {
      const b = mk('button', 'cattile');
      b.appendChild(mk('span', 'em', cat.emoji));
      b.appendChild(mk('span', 'tt', cat.title));
      b.appendChild(mk('span', 'sb', cat.sub));
      Tap.bind(b, () => openCat(cat));
      grid.appendChild(b);
    });
  }
  function openCat(cat){
    sub = { kind: 'cat', cat };
    $('catEmoji').textContent = cat.emoji;
    $('catTitle').textContent = cat.title;
    $('catSub').textContent = cat.sub;
    const list = $('procList');
    clear(list);
    cat.procs.forEach(proc => {
      const b = mk('button', 'rowcard');
      b.appendChild(mk('span', 'em', '📖'));
      const box = mk('div');
      box.appendChild(mk('span', 'tt', proc.title));
      box.appendChild(mk('span', 'sb', T.stepsCount(proc.steps.length)));
      b.appendChild(box);
      Tap.bind(b, () => openProc(cat, proc));
      list.appendChild(b);
    });
    render();
  }
  function openProc(cat, proc){
    sub = { kind: 'proc', cat, proc, i: 0 };
    $('procTitle').textContent = proc.title;
    render();
    renderStep();
  }
  function findProcById(catId, procId){
    const cat = C.tech.find(c => c.id === catId);
    if(!cat) return null;
    const proc = cat.procs.find(p => p.id === procId);
    return proc ? { cat, proc } : null;
  }
  function renderStep(){
    const s = sub;
    if(!s || s.kind !== 'proc') return;
    $('procTitle').textContent = s.proc.title;
    const total = s.proc.steps.length;
    const fig = $('stepFig'), text = $('stepText'), caution = $('stepCaution'), summary = $('stepSummary'), link = $('stepLink');
    if(s.i < total){
      const step = s.proc.steps[s.i];
      $('stepCount').textContent = T.stepOf(s.i + 1, total);
      fig.hidden = false; text.hidden = false; summary.hidden = true;
      clear(fig);
      if(step.fig && window.FIGURES[step.fig]){
        fig.innerHTML = window.FIGURES[step.fig]();
      }else{
        fig.appendChild(mk('div', 'figfallback', s.cat.emoji));
      }
      text.textContent = step.t;
      if(step.c){ caution.hidden = false; $('stepCautionText').textContent = step.c; }
      else caution.hidden = true;
      const adapt = $('stepAdapt');
      if(step.m){ adapt.hidden = false; $('stepAdaptText').textContent = step.m; }
      else adapt.hidden = true;
      const target = step.link ? findProcById(step.link.cat, step.link.proc) : null;
      if(target){ link.hidden = false; link.textContent = '📖 ' + T.seeAlso(target.proc.title); }
      else link.hidden = true;
      $('btnPrev').disabled = (s.i === 0);
      $('btnNext').textContent = (s.i < total - 1) ? T.next : T.toSummary;
    }else{
      // まとめページ（ねぎらいの定型ブロックは全手順共通で表示）
      $('stepCount').textContent = T.summary;
      fig.hidden = true; text.hidden = true; caution.hidden = true; link.hidden = true; summary.hidden = false;
      $('stepAdapt').hidden = true;
      const pb = $('sumPointsBlock'), nb = $('sumNgBlock');
      const pts = s.proc.points || [], ngs = s.proc.ng || [];
      pb.hidden = !pts.length; nb.hidden = !ngs.length;
      $('sumPointsTitle').textContent = T.pointsTitle;
      $('sumNgTitle').textContent = T.ngTitle;
      const pl = $('sumPointsList'), nl = $('sumNgList');
      clear(pl); clear(nl);
      pts.forEach(p => {
        const isObj = (typeof p !== 'string');
        const li = mk('li', '', isObj ? p.t : p);
        if(isObj && p.link){
          const target = findProcById(p.link.cat, p.link.proc);
          if(target){
            const b = mk('button', 'linkbtn small', '📖 ' + T.seeAlso(target.proc.title));
            Tap.bind(b, () => {
              navStack.push({ kind: 'proc', cat: s.cat, proc: s.proc, i: s.i });
              openProc(target.cat, target.proc);
            });
            li.appendChild(b);
          }
        }
        pl.appendChild(li);
      });
      ngs.forEach(n => nl.appendChild(mk('li', '', n)));
      $('btnPrev').disabled = false;
      $('btnNext').textContent = T.done;
    }
    if(typeof window.scrollTo === 'function') window.scrollTo(0, 0);
  }
  function stepNext(){
    const s = sub;
    if(!s || s.kind !== 'proc') return;
    if(s.i >= s.proc.steps.length){ openCat(s.cat); return; }
    s.i++; renderStep();
  }
  function followLink(){
    const s = sub;
    if(!s || s.kind !== 'proc') return;
    const step = s.proc.steps[s.i];
    if(!step || !step.link) return;
    const target = findProcById(step.link.cat, step.link.proc);
    if(!target) return;
    navStack.push({ kind: 'proc', cat: s.cat, proc: s.proc, i: s.i });
    openProc(target.cat, target.proc);
  }
  function stepPrev(){
    const s = sub;
    if(!s || s.kind !== 'proc' || s.i === 0) return;
    s.i--; renderStep();
  }

  /* ---------- きけん・まもる ---------- */
  function renderCards(listId, cards, accent){
    const list = $(listId);
    clear(list);
    cards.forEach(card => {
      const b = mk('button', 'rowcard ' + accent);
      b.appendChild(mk('span', 'em', card.emoji));
      const box = mk('div');
      box.appendChild(mk('span', 'tt', card.title));
      if(card.sub) box.appendChild(mk('span', 'sb', card.sub));
      b.appendChild(box);
      Tap.bind(b, () => openCard(card, accent));
      list.appendChild(b);
    });
  }
  function followFromCard(target){
    navStack.push(Object.assign({}, sub));
    openProc(target.cat, target.proc);
  }
  function addSec(parent, cls, title, items, ordered){
    const sec = mk('div', 'sec' + (cls ? ' ' + cls : ''));
    sec.appendChild(mk('h3', '', title));
    const ul = mk(ordered ? 'ol' : 'ul');
    items.forEach(it => {
      const isObj = (typeof it !== 'string');
      const li = mk('li', '', isObj ? it.t : it);
      if(isObj && it.link){
        const target = findProcById(it.link.cat, it.link.proc);
        if(target){
          const b = mk('button', 'linkbtn small', '📖 ' + T.seeAlso(target.proc.title));
          Tap.bind(b, () => followFromCard(target));
          li.appendChild(b);
        }
      }
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    parent.appendChild(sec);
  }
  function openCard(card, accent){
    sub = { kind: 'card', card, accent };
    $('cardEmoji').textContent = card.emoji;
    $('cardTitle').textContent = card.title;
    $('cardSub').textContent = card.sub || '';
    const figBox = $('cardFig');
    clear(figBox);
    if(card.fig && window.FIGURES[card.fig]){
      figBox.hidden = false;
      figBox.innerHTML = window.FIGURES[card.fig]();
    }else figBox.hidden = true;
    const body = $('cardBody');
    clear(body);
    if(card.when) addSec(body, '', T.when, card.when, false);
    if(card.act) addSec(body, '', T.act, card.act, true);
    if(card.see) addSec(body, 'see', T.see, card.see, false);
    if(card.call) addSec(body, 'call', T.call, card.call, false);
    if(card.cpr && C.cpr){
      const b = mk('button', 'linkbtn cprbtn', C.cpr.open);
      Tap.bind(b, openCpr);
      body.appendChild(b);
    }
    if(card.secs){
      card.secs.forEach(sec => {
        const el = mk('div', 'sec');
        el.appendChild(mk('h3', '', sec.h));
        sec.body.forEach(p => el.appendChild(mk('p', '', p)));
        if(sec.ref){
          const target = findProcById(sec.ref.cat, sec.ref.proc);
          if(target){
            const b = mk('button', 'linkbtn small', '📖 ' + T.seeAlso(target.proc.title));
            Tap.bind(b, () => followFromCard(target));
            el.appendChild(b);
          }
        }
        if(sec.link){
          const a = document.createElement('a');
          a.className = 'extlink';
          a.href = sec.link.href;
          a.target = '_blank';
          a.rel = 'noopener';
          a.textContent = sec.link.label;
          el.appendChild(a);
        }
        body.appendChild(el);
      });
    }
    render();
  }

  /* ---------- 心肺蘇生（胸骨圧迫）ページ ---------- */
  function openCpr(){
    navStack.push(Object.assign({}, sub));
    sub = { kind: 'cpr' };
    render();
  }
  let metroUiTimer = 0, lastBeat = 0;
  function stopMetroUI(){
    Sound.metroStop();
    if(metroUiTimer){ clearInterval(metroUiTimer); metroUiTimer = 0; }
    if(C.cpr) $('metroBtn').textContent = C.cpr.metroStart;
  }
  function toggleMetro(){
    if(Sound.metroOn){
      stopMetroUI();
      return;
    }
    Sound.metroStart(110);
    lastBeat = 0;
    $('metroCount').textContent = '0';
    $('metroBtn').textContent = C.cpr.metroStop;
    metroUiTimer = setInterval(() => {
      const b = Sound.metroBeat;
      if(b !== lastBeat){
        lastBeat = b;
        $('metroCount').textContent = b;
        const c = $('metroCircle');
        c.classList.add('beat');
        setTimeout(() => c.classList.remove('beat'), 100);
      }
    }, 50);
  }

  /* ---------- せってい ---------- */
  function applyFs(){
    document.body.classList.remove('fs0', 'fs1', 'fs2');
    document.body.classList.add('fs' + prefs.fs);
    for(let i = 0; i < 3; i++) $('fsBtn' + i).classList.toggle('sel', prefs.fs === i);
  }
  function applySound(){
    Sound.setEnabled(prefs.sound);
    const b = $('soundBtn');
    b.classList.toggle('on', prefs.sound);
    b.textContent = T.setSound + '：' + (prefs.sound ? T.on : T.off);
  }
  function applyMusic(){
    if(prefs.music === 'off'){
      Sound.setBgmEnabled(false);
    }else{
      Sound.setBgmMode(prefs.music === 'b' ? 'disability' : 'elder');
      Sound.setBgmEnabled(true);
    }
    $('musicBtnA').classList.toggle('sel', prefs.music === 'a');
    $('musicBtnB').classList.toggle('sel', prefs.music === 'b');
    $('musicBtnOff').classList.toggle('sel', prefs.music === 'off');
  }
  function applyTheme(){
    const blue = (prefs.theme === 'blue');
    document.body.classList.toggle('theme-blue', blue);
    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta && meta.setAttribute) meta.setAttribute('content', blue ? '#5581bd' : '#4a9d7f');
    $('themeBtnG').classList.toggle('sel', !blue);
    $('themeBtnB').classList.toggle('sel', blue);
  }

  /* ---------- ことば（言語） ---------- */
  function renderLangGrid(){
    const grid = $('langGrid');
    clear(grid);
    LANGS.forEach(l => {
      const b = mk('button', 'fsbtn langbtn', l.name);
      b.classList.toggle('sel', l.code === LANG);
      Tap.bind(b, () => setLang(l.code));
      grid.appendChild(b);
    });
  }
  function loadContent(code, cb){
    if(window.OUCHI_CONTENT[code]) return cb(true);
    const s = document.createElement('script');
    s.src = 'data/guide.' + code + '.js';
    s.onload = () => cb(!!window.OUCHI_CONTENT[code]);
    s.onerror = () => cb(false);
    document.head.appendChild(s);
  }
  function applyLangAttrs(){
    const html = document.documentElement;
    if(html){ html.lang = LANG; html.dir = RTL[LANG] ? 'rtl' : 'ltr'; }
  }
  function setLang(code){
    if(code === LANG && window.OUCHI_CONTENT[code]) return;
    loadContent(code, ok => {
      if(!ok || !window.OUCHI_I18N[code]) return;   // 読めなければ切替しない
      LANG = code;
      T = window.OUCHI_I18N[code];
      C = window.OUCHI_CONTENT[code];
      prefs.lang = code; save();
      applyLangAttrs();
      // ナビをホームに戻して、旧言語のオブジェクト参照を捨てる
      sub = null; navStack = [];
      fillStatic();
      renderTech();
      renderCards('dangerList', C.danger, 'danger');
      renderCards('selfList', C.self, 'self');
      renderLangGrid();
      applySound();
      render();
    });
  }

  /* ---------- 静的文言 ---------- */
  function fillStatic(){
    $('btnBack').textContent = T.back;
    $('hdrTitle').textContent = T.appName;
    $('navTechLabel').textContent = T.tabTech;
    $('navDangerLabel').textContent = T.tabDanger;
    $('navSelfLabel').textContent = T.tabSelf;
    $('navSettingsLabel').textContent = T.tabSettings;
    $('techLead').textContent = T.techLead;
    $('dangerLead').textContent = T.dangerLead;
    $('selfLead').textContent = T.selfLead;
    $('btnPrev').textContent = T.prev;
    $('btnNext').textContent = T.next;
    $('setFsTitle').textContent = T.setFs;
    for(let i = 0; i < 3; i++) $('fsBtn' + i).textContent = T.fsNames[i];
    $('setThemeTitle').textContent = T.setTheme;
    $('themeBtnG').textContent = T.themeGreen;
    $('themeBtnB').textContent = T.themeBlue;
    $('setBgmTitle').textContent = T.setBgm;
    $('musicBtnA').textContent = T.musicA;
    $('musicBtnB').textContent = T.musicB;
    $('musicBtnOff').textContent = T.musicOff;
    $('setSoundTitle').textContent = T.setSound;
    $('setLangTitle').textContent = T.setLang;
    $('aboutTitle').textContent = T.about;
    $('aboutText').textContent = T.aboutText;
    $('creditLink').textContent = T.credit;
    $('verLine').textContent = T.ver;
    $('noticeTitle').textContent = T.noticeTitle;
    $('noticeText').textContent = T.noticeText;
    $('noticeOk').textContent = T.noticeOk;
    $('sumReassureTitle').textContent = T.reassureTitle;
    $('sumReassureText').textContent = T.reassureText;
    $('stepAdaptTitle').textContent = T.adaptTitle;
    if(C.cpr){
      $('cprTitle').textContent = C.cpr.title;
      $('cprIntro').textContent = C.cpr.intro;
      $('cprFirstTitle').textContent = C.cpr.firstTitle;
      $('cprFirst').textContent = C.cpr.first;
      $('cprStepsTitle').textContent = C.cpr.stepsTitle;
      const ol = $('cprSteps');
      clear(ol);
      C.cpr.steps.forEach(s => ol.appendChild(mk('li', '', s)));
      $('metroHint').textContent = C.cpr.metroHint;
      $('cprNote').textContent = C.cpr.note;
      $('metroBtn').textContent = C.cpr.metroStart;
    }
    document.title = T.appName;
  }

  /* ---------- 起動 ---------- */
  applyLangAttrs();
  fillStatic();
  renderTech();
  renderCards('dangerList', C.danger, 'danger');
  renderCards('selfList', C.self, 'self');
  renderLangGrid();
  applyFs();
  applySound();
  applyMusic();
  applyTheme();

  Tap.bind($('navTech'), () => goTab('tech'));
  Tap.bind($('navDanger'), () => goTab('danger'));
  Tap.bind($('navSelf'), () => goTab('self'));
  Tap.bind($('navSettings'), () => goTab('settings'));
  Tap.bind($('btnBack'), back);
  Tap.bind($('btnPrev'), stepPrev);
  Tap.bind($('btnNext'), stepNext);
  Tap.bind($('stepLink'), followLink);
  Tap.bind($('metroBtn'), toggleMetro);
  for(let i = 0; i < 3; i++){
    (function(i){ Tap.bind($('fsBtn' + i), () => { prefs.fs = i; save(); applyFs(); }); })(i);
  }
  Tap.bind($('soundBtn'), () => { prefs.sound = !prefs.sound; save(); applySound(); });
  Tap.bind($('themeBtnG'), () => { prefs.theme = 'green'; save(); applyTheme(); });
  Tap.bind($('themeBtnB'), () => { prefs.theme = 'blue'; save(); applyTheme(); });
  Tap.bind($('musicBtnA'), () => { prefs.music = 'a'; save(); applyMusic(); });
  Tap.bind($('musicBtnB'), () => { prefs.music = 'b'; save(); applyMusic(); });
  Tap.bind($('musicBtnOff'), () => { prefs.music = 'off'; save(); applyMusic(); });

  if(!prefs.agreed){
    $('noticeOverlay').hidden = false;
    Tap.bind($('noticeOk'), () => { prefs.agreed = true; save(); $('noticeOverlay').hidden = true; });
  }

  render();

  // 保存された言語がまだ読めていなければ、ここで読み込んで切り替える
  if(prefs.lang !== LANG) setLang(prefs.lang);

  if(navigator.serviceWorker && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')){
    try{ navigator.serviceWorker.register('sw.js'); }catch(_){}
  }
})();
