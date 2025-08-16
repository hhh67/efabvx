# Copilot 決定ログ

## 2025-08-16

### 決定

- ブランチ運用: main 安定保持 / `feature-*` 新機能 / `fix-*` バグ / `hotfix-*` 緊急。命名は簡潔英数+ハイフン。
- コミット粒度: 1目的=1コミット。独立変更の混在禁止。
- コミットメッセージ: 動詞始まり日本語 / 1行目<=50文字 / 詳細は本文。絵文字禁止。
- PR 方針: まず Draft。Ready 指示まで Draft 維持。差分拡張時は分割検討。
- 自動コミット: 設定/ドキュメント/機能 每に分離。差分検知で即 push。
- デザイン指針: Apple HIG 要約適用 + tokens 基盤優先。
- アクセシビリティ: AA コントラスト / フォーカスリング常時可視 / キーボード操作保証。
- パスエイリアス: `@/` 利用徹底。

### 理由

- レビュー容易化とロールバック簡易化。
- 早期に設計原則を固定し実装ブレを防止。

### TODO

- tokens 初期実装 (完了)
- @ alias を tsconfig/vite に明示 (一部完了 / web tsconfig 反映)
- Button/Stack/PageContainer 作成 (完了)
- Lint/Type/Test CI 追加 (未)
- MagicUI PoC (Button/Card) 比較 → bundle/アクセシビリティ/カスタマイズ性評価 (進行中)

### メモ

- 旧エージェント自動ブランチは統合し `feature/project-replace` に集約。

### MagicUI PoC 初期所感 (2025-08-16)

評価観点 (暫定):

- tokens への適合度: Tailwind ユーティリティ + CSS vars で概ね適合 (中)
- アクセシビリティ: フォーカスリング・キーボード操作 OK / aria 適切 (良)
- バンドルサイズ: 未計測 (analyzer 導入予定)
- カスタマイズ容易性: ラップ層薄く props 追加容易 (中〜高)
- パフォーマンス: 体感問題なし / 定量計測未実施
- メンテ負債: motion 置換後依存軽量 (低)

即時 Follow-up:

- bundle サイズ計測ツール導入 (@next/bundle-analyzer) 検討
- axe (a11y) テスト導入
- reduced motion でのアニメ完全停止確認 (現状 scale 変化抑制済)
- Storybook or MDX で比較キャプチャ

リスク / 次アクション:

- Tailwind トークン同期 (自動生成プラグイン) 未整備 → tokens 変更時差分ズレリスク
- 解決策: カスタム Tailwind プラグインで design tokens → theme.extend を自動反映するスクリプト追加検討

## 2025-08-17

### 決定

- MagicUI PoC を完了扱いとし、以後 feature/magicui-poc ブランチ上では新規 PoC 拡張を行わずリプレース (AppShell 導入 / Navigation 移行) に移行。
- PrimaryNav コンポーネント基礎実装 (モバイル簡易: 3項目 + More) を追加し Navigation フェーズ着手。
- Server Component へ関数 props を渡したことによる 500 エラー解消のため page.tsx から PrimaryNav の onMoreClick を一時削除。

### 理由 (リプレース移行)

- PoC 観点 (アクセシビリティ/初期パフォーマンス/カスタマイズ容易性) の定性確認完了。定量 (bundle) は後続独立タスク化。
- HIG 準拠で最上位ナビゲーション項目を厳選し情報過多回避。
- onMoreClick は現段階で未実装 (popover) かつ Server Component 制約に抵触したため一旦排除しエラー要因を単純化。

### TODO (Navigation 初期)

- AppShell 配下へ既存セクション再配置 (完了)
- Navigation コンポーネント (PrimaryNav) 追加 (基礎実装完了 / More 展開残)
- Footer の tokens 化 (inline style 排除)
- bundle analyzer 導入 (未)
- More 展開 UI (popover / sheet) 実装 (Client 内完結)
- Story 追加
- a11y: More ボタン展開時のフォーカストラップ

### リスク / フォローアップ

- PoC コードが恒久化しないよう早期削除計画を別ブランチに切り出す必要。
- More 展開未実装により 4+ 項目アクセス遷移が 1 クリック追加され UX 低下の暫定状態。早期解消。
