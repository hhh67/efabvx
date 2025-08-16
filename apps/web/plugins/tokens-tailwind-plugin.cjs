// tokens-tailwind-plugin.cjs
// デザイントークン (packages/ui/src/tokens.ts) を Tailwind theme.extend に同期させる簡易プラグイン
// Phase: 初期 (色/影のみ)。将来的に spacing / radius / typography を class 化する。
// 注意: 依存ループを避けるため require で transpile 済み JS or 直接 TS を読み込まない構成。
// 今回は最小限: tokens の CSS var 名をそのまま theme へマッピング。

/** @type {import('tailwindcss').PluginCreator} */
function tokensTailwindPlugin() {
  return function () { /* no-op: 現状は tailwind.config.js で直接 extend 定義 */ };
}

module.exports = tokensTailwindPlugin;
