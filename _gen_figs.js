'use strict';
// figures.js から静的な図解一覧 _figs.html を生成（JS不要＝file://直開きでも映る）
// 使い方: node _gen_figs.js  ※figures.jsを変えたら再実行
const fs = require('fs');
const vm = require('vm');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('./figures.js', 'utf8'), sandbox, { filename: 'figures.js' });
const FIG = sandbox.window.FIGURES;

const cells = Object.keys(FIG).map(id =>
  '<div class="cell">' + FIG[id]() + '<p>' + id + '</p></div>'
).join('\n');

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>図解一覧（開発・監修用）</title>
<style>
body{font-family:sans-serif;background:#faf3ea;padding:16px;margin:0}
h1{font-size:18px;margin-bottom:4px}
.note{font-size:13px;color:#8a7a6d;margin-bottom:12px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.cell{background:#fff;border:2px solid #e8dcce;border-radius:14px;padding:8px}
.cell svg{width:100%;height:auto;display:block}
.cell p{font-size:13px;color:#8a7a6d;margin:6px 0 0;text-align:center;font-weight:bold}
</style>
</head>
<body>
<h1>図解一覧（開発・監修用）</h1>
<p class="note">全${Object.keys(FIG).length}点。このページは node _gen_figs.js で自動生成（figures.js 変更時に再実行）。</p>
<div class="grid">
${cells}
</div>
</body>
</html>
`;
fs.writeFileSync('./_figs.html', html);
console.log('_figs.html 生成OK（' + Object.keys(FIG).length + '点・静的版）');
