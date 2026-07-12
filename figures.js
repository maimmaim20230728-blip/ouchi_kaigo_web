'use strict';
/* =========================================================
   図解ライブラリ（SVG・自作）
   ・全figは viewBox 0 0 400 260 のSVG文字列を返す関数
   ・文字に頼らない（○×・矢印・数字のみ）＝多言語でもそのまま通用
   ・人体は person() で生成＝実際の人間の比率（約7頭身）を数式で強制
       頭=1H(直径) / 首0.55H / 胴(腰→肩)2.2H / 上腕1.2H+前腕1.1H
       もも1.7H+すね1.7H / 足0.7H → 全身 約7頭身
     関節は角度指定（0=右 90=下 180=左 -90=上）で座標を自動計算
   ・奥側の手足は淡色 / 描画順: 奥の手足 → 胴・頭 → 手前の手足
   ・色の約束: 本人=こげ茶 / 介助者=橙 / 良い=緑 / 悪い=赤 / 注目=山吹
   ========================================================= */
window.FIGURES = (() => {
  const INK = '#4a3b32';   // 本人（介護される人）手前
  const INKF = '#8b7767';  // 本人 奥側の手足
  const HLP = '#c4703f';   // 介助者 手前
  const HLPF = '#dda067';  // 介助者 奥側の手足
  const OKC = '#2e8b57';   // 良い・すすむ方向
  const NGC = '#c0392b';   // 悪い・痛み
  const ACC = '#e8a13d';   // クッション・注目
  const SFT = '#efe3d3';   // 家具（マットレス等）
  const FRM = '#b09a84';   // 家具の枠・脚
  const SW = 7;
  const D = Math.PI / 180;

  const svg = inner => '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' + inner + '</svg>';
  const P = (d, c, w, extra) => '<path d="' + d + '" fill="none" stroke="' + (c || INK) + '" stroke-width="' + (w || SW) + '" stroke-linecap="round" stroke-linejoin="round" ' + (extra || '') + '/>';
  const R = n => Math.round(n * 10) / 10;
  const seg = (pts, c, w) => P('M' + pts.map(p => R(p[0]) + ',' + R(p[1])).join(' L'), c, R(w || 15));
  const fhead = (x, y, c, r) => '<circle cx="' + R(x) + '" cy="' + R(y) + '" r="' + R(r || 13) + '" fill="' + c + '" stroke="none"/>';
  // 三角の鼻＝顔の向き（体の前後左右）を示す。ang: 0=右向き 90=正面(下) 180=左向き -90=仰向け(上)。省略時=後ろ向き（鼻なし）
  const nose = (x, y, r, ang, c) => {
    const a = ang * D, dx = Math.cos(a), dy = Math.sin(a), px = -dy, py = dx;
    const ax = x + 1.42 * r * dx, ay = y + 1.42 * r * dy;
    const b1x = x + 0.66 * r * dx + 0.42 * r * px, b1y = y + 0.66 * r * dy + 0.42 * r * py;
    const b2x = x + 0.66 * r * dx - 0.42 * r * px, b2y = y + 0.66 * r * dy - 0.42 * r * py;
    return '<path d="M' + R(ax) + ',' + R(ay) + ' L' + R(b1x) + ',' + R(b1y) + ' L' + R(b2x) + ',' + R(b2y) + ' Z" fill="' + c + '" stroke="none"/>';
  };
  const dot = (x, y, c, r) => '<circle cx="' + R(x) + '" cy="' + R(y) + '" r="' + (r || 7) + '" fill="' + (c || NGC) + '"/>';
  const frect = (x, y, w, h, c, rx) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx === undefined ? 8 : rx) + '" fill="' + c + '" stroke="none"/>';
  const orect = (x, y, w, h, c, rx) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx === undefined ? 8 : rx) + '" fill="none" stroke="' + (c || INK) + '" stroke-width="' + SW + '"/>';
  const ell = (x, y, rx, ry, c) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + c + '" stroke="none"/>';
  const txt = (x, y, s, c, size) => '<text x="' + x + '" y="' + y + '" fill="' + (c || INK) + '" font-size="' + (size || 20) + '" font-family="sans-serif" text-anchor="middle" font-weight="bold">' + s + '</text>';
  const okMark = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="15" fill="none" stroke="' + OKC + '" stroke-width="8"/>';
  const ngMark = (x, y) => P('M' + (x - 13) + ',' + (y - 13) + ' L' + (x + 13) + ',' + (y + 13) + ' M' + (x + 13) + ',' + (y - 13) + ' L' + (x - 13) + ',' + (y + 13), NGC, 8);
  const pain = (x, y) => P('M' + (x - 16) + ',' + (y - 10) + ' L' + x + ',' + y + ' M' + (x - 18) + ',' + (y + 4) + ' L' + x + ',' + y + ' M' + (x - 10) + ',' + (y + 16) + ' L' + x + ',' + y, NGC, 5);
  const bang = (x, y) => P('M' + (x - 16) + ',' + (y - 10) + ' L' + x + ',' + y + ' M' + (x - 4) + ',' + (y - 18) + ' L' + x + ',' + y + ' M' + (x - 18) + ',' + (y + 4) + ' L' + x + ',' + y, ACC, 5);
  function arrow(x1, y1, x2, y2, c, w) {
    c = c || OKC; w = w || 7;
    const a = Math.atan2(y2 - y1, x2 - x1), L = 14;
    return P('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2, c, w) +
      P('M' + R(x2 - L * Math.cos(a - 0.45)) + ',' + R(y2 - L * Math.sin(a - 0.45)) + ' L' + x2 + ',' + y2 + ' L' + R(x2 - L * Math.cos(a + 0.45)) + ',' + R(y2 - L * Math.sin(a + 0.45)), c, w);
  }
  function carrow(x1, y1, cx, cy, x2, y2, c, w) {
    c = c || OKC; w = w || 7;
    const a = Math.atan2(y2 - cy, x2 - cx), L = 15;
    return P('M' + x1 + ',' + y1 + ' Q' + cx + ',' + cy + ' ' + x2 + ',' + y2, c, w) +
      P('M' + R(x2 - L * Math.cos(a - 0.5)) + ',' + R(y2 - L * Math.sin(a - 0.5)) + ' L' + x2 + ',' + y2 + ' L' + R(x2 - L * Math.cos(a + 0.5)) + ',' + R(y2 - L * Math.sin(a + 0.5)), c, w);
  }
  const ground = (y, x1, x2) => P('M' + (x1 || 20) + ',' + y + ' L' + (x2 || 380) + ',' + y, '#cbb9a6', 5);
  const divider = () => P('M200,15 L200,245', '#ddd0c0', 3);
  const bedSide = (x, y, w, h) => {
    h = h || 22;
    return frect(x, y, w, h, SFT) +
      P('M' + (x + 12) + ',' + (y + h) + ' L' + (x + 12) + ',' + (y + h + 28) + ' M' + (x + w - 12) + ',' + (y + h) + ' L' + (x + w - 12) + ',' + (y + h + 28), FRM, 7);
  };

  /* ---- 実寸比の人型ジェネレーター ---- */
  const pt = (p, ang, len) => [p[0] + len * Math.cos(ang * D), p[1] + len * Math.sin(ang * D)];
  // o = { H:頭の直径px, hip:[x,y], torso:角度(腰→肩), head:角度(省略=torso),
  //       legs:[{a1:もも角,a2:すね角,foot?:足角,far?}], arms:[{a1:上腕角,a2:前腕角,far?}], c:手前色, cf:奥色 }
  function person(o) {
    const H = o.H, c = o.c, cf = o.cf || c;
    const hip = o.hip;
    const sh = pt(hip, o.torso, 2.2 * H);
    const hAng = (o.head === undefined ? o.torso : o.head);
    const headC = pt(sh, hAng, 1.1 * H);
    let far = '', near = '';
    (o.legs || []).forEach(l => {
      const k = pt(hip, l.a1, 1.7 * H);
      const a = pt(k, l.a2, 1.7 * H);
      const pts = [hip, k, a];
      if (l.foot !== undefined) pts.push(pt(a, l.foot, 0.7 * H));
      const s = seg(pts, l.far ? cf : c, (l.far ? 0.5 : 0.55) * H);
      if (l.far) far += s; else near += s;
    });
    (o.arms || []).forEach(m => {
      const e = pt(sh, m.a1, 1.2 * H);
      const w = pt(e, m.a2, 1.1 * H);
      const s = seg([sh, e, w], m.far ? cf : c, (m.far ? 0.4 : 0.44) * H);
      if (m.far) far += s; else near += s;
    });
    const headStr = fhead(headC[0], headC[1], c, 0.52 * H) + (o.face === undefined ? '' : nose(headC[0], headC[1], 0.52 * H, o.face, c));
    const body = seg([hip, sh], c, 0.95 * H) + seg([sh, pt(sh, hAng, 0.55 * H)], c, 0.42 * H) + headStr;
    return far + body + near;
  }
  // 小さく寝ている人（省略形・頭1:体6.7の比率を維持）
  const lie = (xHead, y, c, H) =>
    fhead(xHead, y, c, 0.5 * H) + nose(xHead, y, 0.5 * H, -90, c) +
    seg([[xHead + 0.65 * H, y + 2], [xHead + 2.8 * H, y + 3]], c, 0.85 * H) +
    seg([[xHead + 2.8 * H, y + 3], [xHead + 6.3 * H, y + 4]], c, 0.6 * H);

  const F = {};

  /* --- ボディメカニクス: ○足を開きひざを曲げ腰を低く / ×棒立ちで腰だけ曲げる --- */
  F.bm_stance = () => svg(
    divider() +
    okMark(45, 38) +
    person({ H: 24, hip: [100, 172], torso: -90, c: HLP, cf: HLPF,
      legs: [{ a1: 142, a2: 64, foot: 190 }, { a1: 38, a2: 110, foot: -10 }],
      arms: [{ a1: 118, a2: 100, far: true }, { a1: 62, a2: 80 }] }) +
    ground(240, 25, 185) +
    ngMark(230, 38) +
    person({ H: 24, hip: [306, 152], torso: -168, head: -145, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 87, a2: 88, foot: 176, far: true }, { a1: 92, a2: 90, foot: 184 }],
      arms: [{ a1: 105, a2: 92 }] }) +
    pain(292, 138) +
    ground(240, 215, 385)
  );

  /* --- ボディメカニクス: ○相手に近づく / ×離れて腕だけ伸ばす --- */
  F.bm_close = () => svg(
    divider() +
    okMark(38, 34) +
    bedSide(15, 150, 130) +
    lie(36, 140, INK, 17) +
    // 足ごとベッドに寄せる（つま先はベッドの下・ひざ曲げ・体は利用者の真上）
    person({ H: 20, hip: [158, 148], torso: -108, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 95, a2: 88, foot: 184, far: true }, { a1: 78, a2: 98, foot: 186 }],
      arms: [{ a1: 144, a2: 130 }] }) +
    ground(218, 15, 195) +
    ngMark(228, 34) +
    bedSide(215, 150, 130) +
    lie(236, 140, INK, 17) +
    person({ H: 20, hip: [374, 150], torso: -110, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 86, a2: 88, far: true }, { a1: 92, a2: 90, foot: 184 }],
      arms: [{ a1: 150, a2: 170 }] }) +
    pain(384, 138) +
    ground(218, 210, 392)
  );

  /* --- 体位変換: あおむけで腕を組み、ひざを立てる --- */
  const rollBase = () =>
    bedSide(30, 168, 340) +
    // 奥脚（ひざ立て・少しずらす）
    seg([[230, 152], [287, 108], [322, 166]], INKF, 18) +
    // 胴・首・頭（あおむけ）
    seg([[230, 152], [142, 152]], INK, 38) +
    seg([[142, 152], [120, 152]], INK, 17) +
    fhead(98, 150, INK, 20.8) + nose(98, 150, 20.8, -90, INK) +
    // 組んだ腕（胸の上）
    seg([[206, 144], [170, 124]], INKF, 15) +
    seg([[164, 144], [202, 126]], INK, 17) +
    // 手前脚（ひざ立て: もも68px+すね68px＝1.7H）
    seg([[230, 152], [278, 105], [302, 166], [330, 166]], INK, 22);
  F.roll_prep = () => svg(rollBase());

  /* --- 体位変換: ひざを先に倒し、足の重みで体を回す（①ひざ→②胴体） --- */
  const numBadge = (x, y, n, c) => '<circle cx="' + x + '" cy="' + y + '" r="12" fill="' + (c || OKC) + '"/>' + txt(x, y + 6.5, n, '#fff', 17);
  F.roll_legs_first = () => svg(
    rollBase() +
    carrow(312, 76, 280, 42, 248, 62, OKC, 7) +
    numBadge(332, 56, '1') +
    carrow(192, 88, 158, 60, 126, 82, '#8fc7a8', 6) +
    numBadge(210, 62, '2', '#8fc7a8')
  );

  /* --- 体位変換: ひざと肩に手を当て手前に倒す --- */
  F.roll_pull = () => svg(
    rollBase() +
    carrow(268, 62, 170, 30, 96, 82) +
    seg([[158, 94], [150, 126]], HLP, 11) +
    dot(149, 131, HLP, 7) +
    seg([[298, 62], [286, 94]], HLP, 11) +
    dot(285, 99, HLP, 7)
  );

  /* --- 体位変換: よこ向き+背中とひざの間にクッション（上から見た図） --- */
  F.roll_cushion = () => svg(
    frect(36, 74, 330, 150, '#f6ede1', 14) +
    // 背中のクッション（体の後ろ）
    ell(192, 124, 30, 16, ACC) +
    // 下側（奥）の脚
    seg([[225, 160], [263, 203], [320, 189]], INKF, 15) +
    // ひざの間のクッション
    ell(270, 198, 16, 10, ACC) +
    // 胴・首・頭（よこ向き）
    seg([[225, 160], [150, 153]], INK, 32) +
    seg([[150, 153], [132, 150]], INK, 14) +
    fhead(114, 147, INK, 17.7) +
    // 腕（前に）
    seg([[160, 162], [172, 192], [206, 204]], INK, 14) +
    // 上側（手前）の脚
    seg([[225, 160], [270, 196], [324, 175]], INK, 18)
  );

  /* --- 床ずれのできやすい場所（接点に赤丸） --- */
  F.pressure_points = () => svg(
    bedSide(40, 175, 320) +
    // あおむけ（頭r19・胴84px・脚129px＝7頭身）
    seg([[218, 158], [134, 158]], INK, 36) +
    seg([[134, 158], [112, 158]], INK, 16) +
    fhead(92, 156, INK, 19.8) + nose(92, 156, 19.8, -90, INK) +
    seg([[134, 160], [180, 164], [222, 164]], INK, 16) +
    seg([[218, 158], [283, 159], [347, 160]], INK, 25) +
    dot(92, 180) + dot(150, 180) + dot(196, 181) + dot(240, 181) + dot(345, 178)
  );

  /* --- 端座位: 足の裏を床にぴったり --- */
  F.sit_edge = () => svg(
    frect(40, 148, 180, 22, SFT) +
    P('M56,170 L56,198 M204,170 L204,198', FRM, 7) +
    person({ H: 26, hip: [192, 141], torso: -85, head: -80, face: 0, c: INK, cf: INKF,
      legs: [{ a1: 12, a2: 88, far: true }, { a1: 6, a2: 84, foot: 2 }],
      arms: [{ a1: 98, a2: 82 }] }) +
    ground(198) +
    okMark(300, 186) +
    arrow(288, 192, 264, 192, OKC, 5)
  );

  /* --- 立ち上がり: おじぎをするように --- */
  F.stand_bow = () => svg(
    frect(40, 150, 110, 20, SFT) +
    P('M56,170 L56,218 M134,170 L134,218', FRM, 7) +
    person({ H: 26, hip: [140, 140], torso: -25, head: -12, face: 10, c: INK, cf: INKF,
      legs: [{ a1: 46, a2: 88, far: true }, { a1: 38, a2: 82, foot: 2 }],
      arms: [{ a1: 112, a2: 96 }] }) +
    carrow(248, 68, 284, 82, 294, 114) +
    arrow(122, 138, 112, 104, OKC, 6) +
    ground(218)
  );

  /* --- てこの原理の実例2つ: ▲=支点 --- */
  const fulcrum = (x, y) => '<path d="M' + x + ',' + y + ' L' + (x - 11) + ',' + (y + 15) + ' L' + (x + 11) + ',' + (y + 15) + ' Z" fill="' + ACC + '"/>';
  F.lever_examples = () => svg(
    divider() +
    // 左: ひじを支点に、上体を起こす
    frect(12, 154, 180, 20, SFT) +
    P('M26,174 L26,206 M178,174 L178,206', FRM, 7) +
    person({ H: 20, hip: [126, 146], torso: -152, head: -140, face: 180, c: INK, cf: INKF,
      legs: [{ a1: 10, a2: 14 }],
      arms: [{ a1: 100, a2: 175 }] }) +
    fulcrum(83, 155) +
    carrow(154, 100, 116, 62, 84, 84) +
    // 右: おしりを支点に、足の重みで上体が起きる
    frect(210, 150, 110, 20, SFT) +
    P('M224,170 L224,206 M308,170 L308,206', FRM, 7) +
    person({ H: 20, hip: [312, 144], torso: -135, head: -125, face: 180, c: INK, cf: INKF,
      legs: [{ a1: 61, a2: 84, far: true }, { a1: 55, a2: 80 }],
      arms: [{ a1: 95, a2: 70 }] }) +
    fulcrum(313, 152) +
    arrow(333, 172, 343, 200, OKC, 5) +
    carrow(308, 92, 278, 60, 254, 82)
  );

  /* --- 起き上がり4コマ（ベッドの横から下りる。両端は柵でふさがっている前提）
         ①よこ向き・足を横から下ろす ②ひじで支える(▲) ③弧を描いて起きる ④端座位 --- */
  const situpFrame = (ox, oy) =>
    frect(ox + 15, oy + 78, 170, 22, SFT, 6) +                                   // マットレス(手前の長い辺)
    P('M' + (ox + 30) + ',' + (oy + 100) + ' L' + (ox + 30) + ',' + (oy + 118) +
      ' M' + (ox + 170) + ',' + (oy + 100) + ' L' + (ox + 170) + ',' + (oy + 118), FRM, 5) +
    P('M' + (ox + 22) + ',' + (oy + 78) + ' L' + (ox + 22) + ',' + (oy + 56) +
      ' M' + (ox + 31) + ',' + (oy + 78) + ' L' + (ox + 31) + ',' + (oy + 60), FRM, 5) +   // 頭側の柵
    P('M' + (ox + 178) + ',' + (oy + 78) + ' L' + (ox + 178) + ',' + (oy + 56) +
      ' M' + (ox + 169) + ',' + (oy + 78) + ' L' + (ox + 169) + ',' + (oy + 60), FRM, 5) + // 足側の柵
    P('M' + (ox + 12) + ',' + (oy + 118) + ' L' + (ox + 192) + ',' + (oy + 118), '#cbb9a6', 4); // 床
  F.situp_seq = () => svg(
    P('M200,8 L200,252', '#ddd0c0', 3) + P('M12,130 L388,130', '#ddd0c0', 3) +
    // ① よこ向きになり、ひざから下を「ベッドの横」から下ろす
    situpFrame(0, 0) + numBadge(26, 24, '1') +
    fhead(62, 70, INK, 7.3) +
    seg([[72, 72], [102, 73]], INK, 13) +
    seg([[78, 75], [90, 84]], INK, 5) +
    seg([[102, 75], [120, 88], [122, 104]], INKF, 6) +
    seg([[102, 73], [124, 84], [127, 104]], INK, 8) +
    // ② ひじで支えて起き始める（▲＝支点）
    situpFrame(200, 0) + numBadge(226, 24, '2') +
    '<path d="M288,78 L281,88 L295,88 Z" fill="' + ACC + '"/>' +
    seg([[312, 70], [285.3, 54.6]], INK, 13) +
    fhead(275.4, 42.8, INK, 7.3) +
    seg([[285.3, 54.6], [288, 74]], INK, 6) +
    seg([[288, 74], [274, 76]], INK, 6) +
    seg([[312, 72], [330, 86], [334, 108]], INKF, 6) +
    seg([[312, 70], [332, 84], [336, 112]], INK, 8) +
    carrow(320, 36, 298, 26, 280, 34, OKC, 5) +
    // ③ 支えを手のひらに替えながら、弧を描いて起きる
    situpFrame(0, 130) + numBadge(26, 146, '3') +
    seg([[112, 200], [99, 172.1]], INK, 13) +
    fhead(95.2, 157.9, INK, 7.3) +
    seg([[99, 172.1], [92, 190], [88, 206]], INK, 5.5) +
    seg([[112, 202], [128, 216], [132, 240]], INKF, 6) +
    seg([[112, 200], [130, 214], [134, 244]], INK, 8) +
    carrow(138, 156, 118, 146, 100, 152, OKC, 5) +
    // ④ ベッドの端に座る（足の裏を床に）
    situpFrame(200, 130) + numBadge(226, 146, '4') +
    seg([[312, 201], [313, 170.4]], INK, 13) +
    fhead(313.6, 155, INK, 7.3) +
    seg([[313, 177], [320, 196]], INK, 5.5) +
    seg([[312, 203], [330, 214], [332, 243]], INKF, 6) +
    seg([[312, 201], [332, 212], [334, 245]], INK, 8) +
    seg([[334, 245], [343, 246]], INK, 6)
  );

  /* --- おふとんの介助: 片ひざ立ちで、体を低くして近づく --- */
  F.kneel_assist = () => svg(
    frect(20, 230, 185, 14, SFT, 6) +
    lie(46, 222, INK, 15) +
    person({ H: 24, hip: [262, 198], torso: -132, head: -118, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 100, a2: 0, far: true }, { a1: 175, a2: 92, foot: 184 }],
      arms: [{ a1: 135, a2: 105 }] }) +
    ground(246, 15, 385)
  );

  /* --- 移乗: 車いすは元気な側に20〜30度（上から見た図） --- */
  F.transfer_angle = () => svg(
    orect(50, 30, 130, 200, FRM, 10) +
    P('M60,62 L170,62', '#cbb9a6', 5) +
    fhead(160, 130, INK, 12) +
    P('M138,152 Q160,120 182,152', INK, 8) +
    '<g transform="rotate(28 265 175)">' +
      orect(235, 145, 60, 60, HLP) +
      P('M226,148 L226,202', HLP, 9) +
      P('M304,148 L304,202', HLP, 9) +
    '</g>' +
    P('M180,84 A46,46 0 0 1 220,104', ACC, 6) +
    txt(258, 82, '20〜30°', INK, 21) +
    carrow(190, 142, 225, 150, 250, 164)
  );

  /* --- 食事: ○少し前かがみ・あごを引く / ×上を向いて流し込む --- */
  F.meal_posture = () => svg(
    divider() +
    okMark(38, 34) +
    // いす
    P('M66,158 L120,158', FRM, 6) + P('M72,158 L64,102', FRM, 6) +
    P('M70,158 L70,200 M116,158 L116,200', FRM, 6) +
    person({ H: 22, hip: [98, 150], torso: -78, head: -64, face: 15, c: INK, cf: INKF,
      legs: [{ a1: 12, a2: 90, far: true }, { a1: 6, a2: 85, foot: 0 }],
      arms: [{ a1: 28, a2: 12 }] }) +
    // テーブルと器
    P('M152,118 L198,118', INK, 6) + P('M190,118 L190,200', FRM, 6) +
    P('M158,111 Q169,123 180,111', INK, 5) +
    ground(200, 40, 195) +
    ngMark(228, 34) +
    // いす（背にもたれて上向き）
    P('M290,158 L350,158', FRM, 6) + P('M296,158 L276,98', FRM, 6) +
    P('M294,158 L294,200 M346,158 L346,200', FRM, 6) +
    person({ H: 22, hip: [298, 150], torso: -112, head: -135, face: -75, c: INK, cf: INKF,
      legs: [{ a1: 8, a2: 78, far: true }, { a1: 14, a2: 70, foot: 5 }],
      arms: [{ a1: 100, a2: 80 }] }) +
    arrow(270, 70, 284, 50, NGC, 5) +
    ground(200, 240, 392)
  );

  /* --- ベッド上の食事: 上体を30〜60度起こす --- */
  F.bed_up = () => svg(
    P('M40,190 L360,190', FRM, 7) +
    P('M62,190 L62,225 M338,190 L338,225', FRM, 7) +
    P('M200,190 L110,120', FRM, 7) +
    person({ H: 36, hip: [206, 174], torso: -142, face: -25, c: INK, cf: INKF,
      legs: [{ a1: 4, a2: -8, far: true }, { a1: 8, a2: -4, foot: 6 }],
      arms: [{ a1: 60, a2: 30 }] }) +
    P('M240,190 A40,40 0 0 0 172,162', ACC, 6) +
    txt(300, 166, '30〜60°', INK, 21)
  );

  /* --- おむつ: テープは上下クロスに留める --- */
  F.tape_cross = () => svg(
    seg([[160, 44], [152, 92]], INK, 16) +
    seg([[240, 44], [248, 92]], INK, 16) +
    '<path d="M148,95 L252,95 L240,152 Q200,186 160,152 Z" fill="' + SFT + '" stroke="' + INK + '" stroke-width="6" stroke-linejoin="round"/>' +
    seg([[178, 172], [176, 226]], INK, 16) +
    seg([[222, 172], [224, 226]], INK, 16) +
    frect(136, 100, 24, 15, HLP, 4) + frect(240, 100, 24, 15, HLP, 4) +
    frect(142, 136, 22, 14, HLP, 4) + frect(236, 136, 22, 14, HLP, 4) +
    arrow(156, 146, 194, 120, OKC, 6) +
    arrow(150, 108, 190, 130, OKC, 6) +
    arrow(244, 146, 206, 120, OKC, 6) +
    arrow(250, 108, 210, 130, OKC, 6)
  );

  /* --- 清拭: 手先から肩へ（末端から中心へ・腕の拡大図） --- */
  F.wipe_direction = () => svg(
    fhead(318, 58, INK, 21) +
    seg([[312, 82], [304, 138]], INK, 38) +
    seg([[302, 112], [250, 132], [198, 146]], INK, 18) +
    dot(192, 148, INK, 12) +
    arrow(210, 118, 246, 108, OKC, 6) +
    arrow(260, 104, 296, 94, OKC, 6)
  );

  /* --- 歩行: 弱い側のやや斜め後ろに立って支える（後ろから見た図） --- */
  F.walk_position = () => svg(
    okMark(52, 46) +
    person({ H: 24, hip: [240, 150], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 86, a2: 88, far: true }, { a1: 94, a2: 90 }],
      arms: [{ a1: 62, a2: 82, far: true }, { a1: 118, a2: 98 }] }) +
    frect(212, 138, 16, 13, NGC, 4) +
    person({ H: 24, hip: [150, 158], torso: -90, c: HLP, cf: HLPF,
      legs: [{ a1: 84, a2: 86, far: true }, { a1: 98, a2: 92 }],
      arms: [{ a1: 16, a2: 4 }] }) +
    ground(246, 60, 340)
  );

  /* --- 窒息: 背部叩打法 --- */
  F.choking_back = () => svg(
    person({ H: 24, hip: [296, 152], torso: -165, head: -138, face: 180, c: INK, cf: INKF,
      legs: [{ a1: 86, a2: 88, far: true }, { a1: 94, a2: 92, foot: 184 }],
      arms: [{ a1: 95, a2: 88 }] }) +
    person({ H: 24, hip: [352, 150], torso: -95, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 84, a2: 86, far: true }, { a1: 96, a2: 90, foot: 184 }],
      arms: [{ a1: 130, a2: 165, far: true }, { a1: 158, a2: 150 }] }) +
    bang(278, 122) +
    ground(240)
  );

  /* --- 脳卒中サイン FAST（顔・腕・言葉・時間） --- */
  F.fast_signs = () => svg(
    P('M133,20 L133,240', '#ddd0c0', 3) + P('M266,20 L266,240', '#ddd0c0', 3) +
    // 顔: 片方の口角が下がる
    '<circle cx="66" cy="106" r="27" fill="none" stroke="' + INK + '" stroke-width="' + SW + '"/>' +
    dot(56, 98, INK, 4) + dot(78, 101, INK, 4) +
    P('M52,122 Q62,124 82,115', NGC, 5) +
    arrow(84, 118, 90, 134, NGC, 4) +
    // 腕: 片方が下がってくる
    person({ H: 18, hip: [200, 160], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 85, a2: 88, far: true }, { a1: 95, a2: 92 }],
      arms: [{ a1: -35, a2: -40 }, { a1: 145, a2: 115, far: true }] }) +
    arrow(172, 156, 164, 180, NGC, 5) +
    ground(224, 150, 250) +
    // 言葉: うまく話せない
    fhead(316, 102, INK, 18) +
    orect(330, 44, 56, 38, INK, 10) +
    P('M342,82 L334,94', INK, 4) +
    P('M340,63 q7,-8 14,0 q7,8 14,0', NGC, 4) +
    // 時間: すぐに
    '<circle cx="350" cy="212" r="26" fill="none" stroke="' + ACC + '" stroke-width="7"/>' +
    P('M350,212 L350,194 M350,212 L363,219', ACC, 6)
  );

  /* ============ 第2弾（素人に視覚情報を・ヒロ指摘） ============ */
  const FLESH = '#d8c0a8';  // 皮下の肉付き

  /* --- かかと浮かせ（あおむけ・脚は水平・つま先は上向き）
         ○ふくらはぎ下にクッション=かかとが浮く / ×かかとがベッドに当たったまま --- */
  F.heel_float = () => svg(
    divider() + okMark(38, 34) +
    frect(12, 176, 180, 16, SFT) +
    P('M26,192 L26,214 M178,192 L178,214', FRM, 6) +
    ell(84, 167, 30, 11, ACC) +
    seg([[14, 150], [126, 152]], INK, 18) +
    seg([[128, 155], [142, 124]], INK, 14) +
    P('M128,166 L128,172 M137,164 L137,171', OKC, 4) +
    ngMark(228, 34) +
    frect(212, 176, 180, 16, SFT) +
    P('M226,192 L226,214 M378,192 L378,214', FRM, 6) +
    seg([[214, 166], [326, 167]], INK, 18) +
    seg([[328, 169], [342, 138]], INK, 14) +
    dot(328, 178, NGC, 8)
  );

  /* --- 体の寄せ方: 頭→肩→腰→足の順に少しずつ（上から見た図） --- */
  F.shift_parts = () => svg(
    orect(120, 22, 170, 216, FRM, 10) +
    P('M132,52 L278,52', '#cbb9a6', 5) +
    dot(205, 66, INK, 13) +
    seg([[205, 84], [205, 152]], INK, 30) +
    seg([[186, 94], [182, 140]], INK, 10) + seg([[224, 94], [228, 140]], INK, 10) +
    seg([[198, 152], [194, 216]], INK, 12) + seg([[212, 152], [216, 216]], INK, 12) +
    arrow(180, 66, 150, 66, OKC, 5) + numBadge(136, 66, '1') +
    arrow(176, 100, 150, 100, OKC, 5) + numBadge(136, 100, '2') +
    arrow(178, 152, 150, 152, OKC, 5) + numBadge(136, 152, '3') +
    arrow(180, 200, 150, 200, OKC, 5) + numBadge(136, 200, '4')
  );

  /* --- ねじらない: ○肩も足も同じ向きに回る / ×足はそのままで腰から上だけひねる --- */
  F.no_twist = () => svg(
    divider() + okMark(38, 34) +
    person({ H: 20, hip: [100, 150], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 84, a2: 86, far: true }, { a1: 96, a2: 92 }],
      arms: [{ a1: 60, a2: 80, far: true }, { a1: 120, a2: 100 }] }) +
    carrow(66, 98, 100, 84, 134, 98, OKC, 6) +
    carrow(66, 222, 100, 208, 134, 222, OKC, 6) +
    ngMark(228, 34) +
    person({ H: 20, hip: [300, 150], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 84, a2: 86, far: true }, { a1: 96, a2: 92 }],
      arms: [{ a1: 60, a2: 80, far: true }, { a1: 120, a2: 100 }] }) +
    carrow(266, 98, 300, 84, 334, 98, NGC, 6) +
    seg([[288, 216], [276, 218]], INK, 10) + seg([[310, 216], [322, 218]], INK, 10) +
    pain(282, 138)
  );

  /* --- 持ち上げず、水平にすべらせる（シート活用） --- */
  F.slide_move = () => svg(
    bedSide(30, 168, 340) +
    frect(96, 156, 195, 10, ACC, 5) +
    seg([[218, 148], [136, 148]], INK, 34) +
    seg([[136, 148], [116, 148]], INK, 15) +
    fhead(96, 146, INK, 18) + nose(96, 146, 18, -90, INK) +
    seg([[218, 148], [282, 150], [344, 152]], INK, 22) +
    arrow(140, 100, 262, 100, OKC, 8)
  );

  /* --- 立ち上がり準備: ①浅く座り直す ②足を引く --- */
  F.stand_prep = () => svg(
    P('M56,162 L140,162', FRM, 6) + P('M62,162 L54,98', FRM, 6) +
    P('M64,162 L64,198 M134,162 L134,198', FRM, 6) +
    person({ H: 22, hip: [100, 150], torso: -85, head: -78, face: 0, c: INK, cf: INKF,
      legs: [{ a1: 10, a2: 92, far: true }, { a1: 4, a2: 86, foot: 2 }],
      arms: [{ a1: 100, a2: 82 }] }) +
    arrow(70, 136, 110, 136, OKC, 6) + numBadge(54, 124, '1') +
    arrow(180, 194, 152, 194, OKC, 6) + numBadge(196, 186, '2') +
    ground(198, 40, 260)
  );

  /* --- 立ち上がりの介助: 腰を支えて、いっしょに立つ --- */
  F.stand_assist = () => svg(
    frect(20, 150, 80, 18, SFT) + P('M32,168 L32,208 M92,168 L92,208', FRM, 6) +
    person({ H: 22, hip: [112, 142], torso: -28, head: -14, face: 10, c: INK, cf: INKF,
      legs: [{ a1: 44, a2: 86, far: true }, { a1: 36, a2: 80, foot: 2 }],
      arms: [{ a1: 105, a2: 92 }] }) +
    person({ H: 22, hip: [198, 133], torso: -96, head: -104, face: 180, c: HLP, cf: HLPF,
      legs: [{ a1: 70, a2: 96, far: true }, { a1: 96, a2: 88, foot: 184 }],
      arms: [{ a1: 135, a2: 152 }] }) +
    ground(210, 15, 330)
  );

  /* --- 移乗: 足を軸に小さく足踏みして向きを変える（上から見た図） --- */
  F.pivot_steps = () => svg(
    orect(30, 40, 120, 190, FRM, 10) +
    '<g transform="rotate(30 300 150)">' +
      orect(272, 122, 56, 56, HLP, 8) +
      P('M264,124 L264,178', HLP, 8) + P('M336,124 L336,178', HLP, 8) +
    '</g>' +
    seg([[196, 138], [200, 164]], INK, 12) +
    seg([[220, 134], [226, 158]], INKF, 12) +
    carrow(190, 100, 230, 86, 262, 108, OKC, 6) +
    carrow(178, 192, 208, 206, 240, 196, OKC, 5)
  );

  /* --- 車いす: ○深く座る / ×浅くずり落ちる座り --- */
  F.sit_deep = () => svg(
    divider() + okMark(38, 34) +
    '<circle cx="78" cy="186" r="34" fill="none" stroke="' + FRM + '" stroke-width="8"/>' +
    '<circle cx="140" cy="210" r="10" fill="none" stroke="' + FRM + '" stroke-width="6"/>' +
    P('M48,150 L128,150', FRM, 6) + P('M54,150 L44,92', FRM, 6) + P('M128,150 L138,208', FRM, 5) +
    P('M100,184 L134,186', FRM, 7) +
    person({ H: 20, hip: [72, 140], torso: -85, head: -80, face: 0, c: INK, cf: INKF,
      legs: [{ a1: 14, a2: 94, far: true }, { a1: 6, a2: 88, foot: 4 }],
      arms: [{ a1: 96, a2: 78 }] }) +
    ngMark(228, 34) +
    '<circle cx="278" cy="186" r="34" fill="none" stroke="' + FRM + '" stroke-width="8"/>' +
    '<circle cx="340" cy="210" r="10" fill="none" stroke="' + FRM + '" stroke-width="6"/>' +
    P('M248,150 L328,150', FRM, 6) + P('M254,150 L244,92', FRM, 6) + P('M328,150 L338,208', FRM, 5) +
    P('M300,184 L334,186', FRM, 7) +
    person({ H: 20, hip: [308, 144], torso: -118, head: -128, face: 0, c: INK, cf: INKF,
      legs: [{ a1: 8, a2: 70, far: true }, { a1: 14, a2: 62, foot: 8 }],
      arms: [{ a1: 104, a2: 86 }] }) +
    arrow(316, 158, 336, 174, NGC, 6)
  );

  /* --- 段差: ①レバーを踏むと ②前輪が上がる --- */
  F.curb_tip = () => svg(
    P('M15,222 L232,222 L232,196 L385,196', '#cbb9a6', 6) +
    '<circle cx="150" cy="188" r="32" fill="none" stroke="' + FRM + '" stroke-width="8"/>' +
    '<g transform="rotate(-14 150 188)">' +
      P('M118,152 L200,152', FRM, 6) + P('M124,152 L112,96', FRM, 6) +
      P('M200,152 L212,196', FRM, 5) +
      '<circle cx="216" cy="206" r="10" fill="none" stroke="' + FRM + '" stroke-width="6"/>' +
      P('M112,206 L92,216', FRM, 6) +
    '</g>' +
    arrow(240, 168, 240, 138, OKC, 6) + numBadge(260, 138, '2') +
    arrow(80, 200, 90, 220, OKC, 6) + numBadge(62, 196, '1') +
    person({ H: 18, hip: [78, 155], torso: -92, head: -96, face: 0, c: HLP, cf: HLPF,
      legs: [{ a1: 70, a2: 100, far: true }, { a1: 96, a2: 90 }],
      arms: [{ a1: -15, a2: -5 }] })
  );

  /* --- 着替え: 脱ぐは元気な側①から / 着るは動きにくい側①から（赤=動きにくい側） --- */
  F.datsuken = () => svg(
    divider() +
    person({ H: 20, hip: [100, 170], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 85, a2: 88, far: true }, { a1: 95, a2: 92 }],
      arms: [{ a1: 145, a2: 120 }, { a1: 35, a2: 60, far: true }] }) +
    frect(70, 134, 16, 13, NGC, 4) +
    numBadge(148, 152, '1') +
    arrow(130, 122, 160, 104, OKC, 5) +
    person({ H: 20, hip: [300, 170], torso: -90, c: INK, cf: INKF,
      legs: [{ a1: 85, a2: 88, far: true }, { a1: 95, a2: 92 }],
      arms: [{ a1: 145, a2: 120 }, { a1: 35, a2: 60, far: true }] }) +
    frect(270, 134, 16, 13, NGC, 4) +
    numBadge(252, 152, '1') +
    arrow(234, 108, 262, 124, OKC, 5)
  );

  /* --- 引っ張らない: ○関節の下から支える / ×手首をつかんで引く --- */
  F.no_pull = () => svg(
    divider() + okMark(38, 34) +
    seg([[30, 150], [95, 138], [152, 128]], INK, 16) +
    dot(100, 154, HLP, 10) + dot(56, 166, HLP, 10) +
    arrow(100, 180, 100, 160, OKC, 5) + arrow(56, 192, 56, 172, OKC, 5) +
    ngMark(228, 34) +
    seg([[230, 140], [295, 138], [344, 142]], INK, 16) +
    ell(352, 142, 13, 10, HLP) +
    arrow(368, 142, 394, 142, NGC, 6) +
    pain(246, 120)
  );

  /* --- 床ずれと栄養: 肉付きがクッションになる（責めない中立比較） --- */
  F.nutrition_cushion = () => svg(
    divider() + okMark(38, 34) +
    frect(22, 168, 160, 22, SFT) +
    ell(100, 146, 58, 26, FLESH) +
    '<circle cx="100" cy="126" r="15" fill="#fff" stroke="' + FRM + '" stroke-width="6"/>' +
    frect(218, 168, 160, 22, SFT) +
    ell(298, 158, 58, 13, FLESH) +
    '<circle cx="298" cy="142" r="15" fill="#fff" stroke="' + FRM + '" stroke-width="6"/>' +
    pain(292, 174)
  );

  return F;
})();
