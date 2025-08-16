`````instructions
````instructions
以下のルールに必ず従え。
逸脱する提案をしてはならない。

---

## Agent

使用する開発者は全員が日本人で日本語を母国語とするため、AgentモードやChatでは常に日本語で回答せよ。

---

## ブランチ運用

- `main` ブランチは常に安定稼働する状態を保て。未レビュー・未テストの変更をマージするな。
- 新機能は `feature/機能名` ブランチを切れ。
- バグ修正は `fix/問題名` ブランチを切れ。
- 緊急修正は `hotfix/内容` ブランチを切れ。
- ブランチ名は半角英数とハイフンを用い、簡潔に命名せよ。例: `feature/add-login-form`

---

## コミット粒度

- コミットは必ず小さな単位に分割せよ。
  - 例: 「関数を追加」「変数名をリファクタリング」「不要な import を削除」
- 各コミット後に必ずビルド・テストが通る状態を保て。
- 複数の独立した修正をまとめてコミットするな。

---

## コミットメッセージ

- 全て日本語で書け。
- 動詞で始め、簡潔に内容を表現せよ。
  - 例: 「フォームにバリデーションを追加」「変数名を変更」「コメントを整理」
- 複数行の場合は以下のルールに従え。
  - 1行目: 要約（50文字以内）
  - 空行
  - 2行目以降: 詳細な説明や理由
- タグや絵文字は使うな。
- コミット後、問題がなければpushせよ。

---

## GitHub Copilot への命令

- コードを提案する際は、必ず細かい粒度でコミットせよ。
- 各コミット後に動作する状態を必ず維持せよ。
- コミットメッセージは必ず日本語で書け。
- 独立した変更は必ず分割してコミットせよ。
- ブランチ名は `feature/〜`、`fix/〜`、`hotfix/〜` の形式に従え。

---

## コーディング規約

必要であれば整備しておけ。
ルールが曖昧になることは避け、規約にないことは規約を追加して明確にせよ。

- Always search web for latest info before ANY implementation/library changes.
- When encountering issues, SEARCH THE WEB FIRST. DO NOT TRUST YOUR MEMORY.

- **Functions**: Use arrow functions with implicit returns when possible
  - ✅ `const handleClick = () => "clicked"`
  - ❌ `function handleClick() { return "clicked"; }`
- **Types**: Prefer `type` over `interface`
  - ✅ `type User = { name: string; age: number; }`
  - ❌ `interface User { name: string; age: number; }`
- **Null coalescing**: Use `??` instead of `||` for null/undefined checks
  - ✅ `const port = process.env.PORT ?? "3000"`
  - ❌ `const port = process.env.PORT || "3000"`
- **Imports**: Use `@/` path aliases instead of relative imports
  - ✅ `import { component } from "@/components/ui/button"`
  - ❌ `import { component } from "../../components/ui/button"`

---

## Apple Human Interface Guidelines 準拠フロントエンド設計方針 (要約適用版)

本節は Apple HIG の原則 (Hierarchy / Harmony / Consistency 他) を Web(React + Vite) 上で再解釈した指針。著作権保護のため原文大量引用は行わず、要約と派生ルールのみ記載。

### 1. 基本原則適用ルール

- 階層 (Hierarchy): 情報は視覚的重み (余白・サイズ・色彩コントラスト・タイポスケール) で段階付け。1ページに 1 つの最上位 CTA。見出しレベルは `h1`(1), `h2`(複数可), `h3` 補助まで。視覚ノイズ低減のため最大 3 階層。
- 調和 (Harmony): デザイン Tokens を統一 (カラー/タイポ/スペーシング/角丸/影)。不要な境界線より余白と階調差。影は環境光を意識し 1~2 段階。
- 一貫性 (Consistency): グローバルナビ / フッタ / フォーム挙動 / フィードバックメッセージのパターン再利用。コンポーネント props 命名は `variant`, `size`, `tone`, `state` を共通。
- アクセシビリティ: 主要テキスト/背景コントラスト AA (small text 4.5:1 / large text 3:1)。キーボードフォーカスリングは常に明示。`prefers-reduced-motion` を尊重しアニメ減速/無効化。
- 触知性 (クリック領域): 44px 以上 (モバイル), 40px 以上 (デスクトップ) を推奨 (HIG のタップターゲット考えに準拠)。

### 2. デザイントークン規約

```
Color (semantic first):
  --color-bg-primary
  --color-bg-secondary
  --color-bg-elevated
  --color-fg-primary
  --color-fg-secondary
  --color-border-subtle
  --color-accent (ブランド)
  --color-accent-hover
  --color-danger / warning / success
  Light/Dark: prefers-color-scheme で自動切替
Spacing (t-shirt scale): 4 * n => 4,8,12,16,20,24,32,40,48,64
Radius: 4 (base), 8 (card), 9999 (pill)
Elevation (shadow tokens): none / sm / md
Typography scale (rem):
  h1 2.25, h2 1.75, h3 1.375, body 1.0, small 0.875
Motion: duration (fast 120ms, base 180ms, slow 240ms), easing cubic-bezier(0.4,0.25,0.3,1)
```

実装: `@/theme/tokens.ts` でエクスポート。CSS vars は `:root` と `[data-theme="dark"]` 切替。

### 3. コンポーネント設計

カテゴリ: Layout / Navigation / Content / Inputs / Feedback / Overlays / Data Display.

- Layout: `Stack`, `Grid`, `PageContainer` → 余白は spacing token のみ。`Stack` は `gap` と `direction`。
- Navigation: `AppShell` (Header + Content + Footer), `PrimaryNav`, `Breadcrumbs` (最大 3 階層)。
- Buttons: variants = `primary | secondary | subtle | danger`. size = `sm|md|lg`. icon-only には `aria-label` 必須。
- Forms: `Field` ラッパが label/description/error を一貫提供。エラーメッセージ出現時レイアウトシフト最小化 (プレースホルダ高さ確保)。
- Cards: 背景 `--color-bg-elevated`, shadow token md, hover で shadow 強度ではなく僅かな上方向トランスレート (motion respect)。
- Dialog/Sheet: フォーカストラップ + `aria-modal="true"`. 開閉は Esc サポート。初期フォーカス制御。
- Toast: 最大 3 キュー。視覚+SR両方通知 (`role="status"`). 5s + ホバー停止。

Copilot 生成コード要求: 新規 UI は既存 token/コンポーネントを優先再利用し、冗長な inline style を避ける。新 token が必要なら最初に `tokens.ts` 提案差分を出力。

### 4. レイアウト & レスポンシブ

- コンテンツ幅: max-width 1200px, サイド余白 clamp(16px, 4vw, 48px)。
- タイポリフロー: モバイルで h1/h2 サイズ -1 ステップ縮小。`clamp()` を利用し流動スケール。
- ナビゲーション: モバイルはハンバーガー/シートではなく優先 3 項目 + "More" メニュー簡素化。

### 5. 状態管理 & アニメーション

- フィードバック: 成功=フェード + スケール 1.02→1.0, 警告=シェイク禁止 (モーション軽減), 代わりに境界色点滅 2 回 180ms。
- Skeleton: 低コントラストシマー (linear-gradient) / `prefers-reduced-motion` なら静的ブロック。

### 6. アクセシビリティ実装ルール

- 画像: 装飾は空 alt, 意味ある画像は簡潔 alt。複雑図版は `details` or `figcaption`。
- フォーム: エラー時に `aria-describedby` で紐付け。必須項目はアスタリスクではなく “(必須)” テキスト。
- フォーカスリング: カスタム outline 2px, オフセット 2px, コントラスト 3:1 以上。
- キーボード順序: DOM 順 = 視覚順。`tabindex` の無闇な使用禁止。

### 7. アイコン & 画像

- アイコンセット: SF Symbols 互換はライセンス上直接バンドル不可 → 同等ラインアイコン (Heroicons等) を semantic 名でラップ。`<Icon name="plus" aria-hidden="true" />`。
- Fallback: 読み込み失敗時はラベルテキスト表示。

### 8. 国際化 & 文言

- 文言は `@/i18n/messages.ts` でキー管理。句読点とボタンラベルは動詞始まり (例: 保存, 送信)。
- 多言語化拡張余地: 長文化対応でボタン最小幅を固定しない。

### 9. パフォーマンス指針

- LCP 対象要素 (ヒーロー画像/タイトル) は `<link rel="preload">` / `fetchpriority="high"`。
- クリティカル CSS: Above-the-fold 1KB 以内 / 非同期 chunk は `import()`。
- 画像: `@/components/media/ResponsiveImage` で `srcset` + `sizes` + `loading=lazy` (fold 直下除外)。

### 10. コード生成チェックリスト (Copilot への明示指示)

新規コンポーネント提案時は次を満たすか冒頭コメントで宣言:

- [ ] tokens 再利用
- [ ] フォーカス可視
- [ ] キーボード操作
- [ ] aria 属性適切
- [ ] コントラスト AA
- [ ] モーション軽減対応
- [ ] Story 追加案 (未作成なら TODO)

### 11. 禁止/制限事項

- インラインハードコード色 (#fff/#000) 直書き禁止 → semantic token 経由。
- 視覚のみの区別 (色だけ) 禁止。必要ならアイコン/テキスト/パターン併用。
- 過度なガラスモーフィズム/ブラー: 背景レイヤ 1 箇所まで、コントラスト低下させない。

### 12. 実装優先度 (Phase)

1. tokens / theme 基盤
2. 基本 Layout + Typography + Button + Field
3. Navigation + Card + Overlay
4. フォームバリデーション + Toast + Skeleton
5. 国際化 + ダークテーマ微調整

### 13. 提案テンプレ (Copilot 応答期待)

```
# Component: Button
目的:
API:
依存 tokens:
アクセシビリティ:
テスト観点:
追加改善案:
```

### 14. 変更提案フロー

- 既存原則に無い新規パターン案は “Rationale / 代替案 / 影響範囲” を含む差分説明 → レビュー後採用。

### 15. 参考

- Apple Human Interface Guidelines (要約適用)。
- WCAG 2.1 AA.
- Material Design (挙動比較のみ)。

以上を以後のコード生成/改善提案の評価基準とする。

---

## プルリクエスト

### 目的
一貫したレビュープロセスと最小差分での継続的統合、誤った早期マージ防止。

### 作成タイミング
- 初期セットアップ/骨格(ディレクトリ/設定/ベースコンポーネント)が最小動作する最初のコミット後に Draft PR を作成。
- 追加タスクが独立領域なら新規ブランチを検討 (肥大化防止)。

### Draft 運用
- 明示指示 (例: 「レビュー開始」「Ready」) があるまで Draft のまま。自己判断で Ready for review に変更しない。
- Draft 中はコミット整形 (squash / fixup / rebase) 可。Ready 指示後は履歴改変 (force-push) 原則禁止。

### レビュワー
- 常に Copilot (自動解析) を第一レビュワーに指定し、機械レビュー結果 + 人手最終確認想定。
- 追加人間レビュワー要件が出た場合は指示に従い追記。

### 差分監視と自動コミット方針
- ワークスペース差分を常時確認し、論理的に独立した最小単位で即時コミット & push。
- 指示がなくとも以下トリガでコミット:
  - 新規ファイル追加完了時 (ビルド通る状態)
  - 既存ファイルの単機能リファクタ完了時
  - 設定/CI/ドキュメント変更 (コード変更と混在させない)
- 1 コミット 1 目的。複数目的を検知した場合は自動的に分割案を提示してから実行。

### コミット前チェック
- `typecheck` / `lint` / (存在すれば) `test` をローカル実行し失敗時はコミット中断し修正提案。
- 機微情報 (秘密鍵/APIキー) を検出した場合はマスク & コミット拒否。

### PR タイトル/本文自動更新
- push ごとに以下を検査し差分があれば再生成・更新: 範囲(変更ファイル種別), 目的, 影響範囲, テスト/確認項目, TODO, リスク/ロールバック手順。
- 大幅なスコープ拡張を検知したら: 分割 PR 提案を本文に追記。

### テンプレ (本文セクション)
1. 概要
2. 変更点 (カテゴリ別: config / infra / ui / domain / docs)
3. 動機 / 背景
4. スクリーンショット / ログ (該当時)
5. テスト内容 (手動/自動)
6. パフォーマンス/アクセシビリティ影響
7. リスク / ロールバック
8. TODO / Follow-up
9. チェックリスト (Lint/Type/Story/ARIA/Contrast)

### Ready 条件
- Lint/Type/Build が成功
- 主要差分がフェーズスコープ内
- TODO が follow-up に切り出し済み
- Story / アクセシビリティ確認結果記載

### 禁止事項
- Draft 中以外での force-push (履歴破壊)
- 無関係ファイルの drive-by 修正を混在
- 仕様未確定のまま Ready 化

### マージ前最終確認チェックリスト (自動挿入)
- [ ] Ready 指示取得済
- [ ] Lint / Type / Build OK
- [ ] アクセシビリティ (Focus / Contrast / Keyboard) 確認済
- [ ] パフォーマンス懸念なし (LCP 要素変更確認)
- [ ] ドキュメント更新済
- [ ] ロールバック容易 (1 PR = 1 機能 / 設定)

### ブランチ戦略補足
- `feature/*` は 1 機能単位。8+ コミット超・または 500+ LOC になりそうなら早期 Draft PR 作成。
- コンフリクト発生時: Rebase > Merge。Ready 後は merge commit か squash (チーム方針に従う) を指示されるまで保留。

### セキュリティ/検出
- 秘密情報パターン (AWS_* / PRIVATE_KEY / -----BEGIN) 検出時は即アラート。
- 依存追加時はライセンス (MIT/Apache2 以外) を本文に注記。

### 自動化ポリシー
- 指示なし PR 自動クローズ禁止。
- main への直接 push 禁止 (保護前提)。
- CI 導入後: 失敗時 auto-comment で原因要約。

---

## ドキュメント維持運用 (Meta Governance)

- 本ファイル (`.github/copilot-instructions.md`) は常に最新の運用と実態が乖離しないよう、全作業サイクルで再読/差分検証を行え。
- AI/Copilot は以下イベントで自動的に本ファイル改訂の要否を評価し、必要なら提案せよ: 新規カテゴリ出現 / ツールチェーン追加 / コンポーネント設計パターン追加 / CI ルール変更 / ブランチ運用拡張。
- 変更提案フロー: (1) 影響範囲と目的を最小差分で列挙 → (2) 追加/改訂案を diff 形式で提示 → (3) 承認後コミット。
- 重複/冗長検知: 同一趣旨の規約を 2 箇所以上で発見したら統合案を提示し、片方へ正規化。
- バージョン管理: 先頭近くに最終更新日 (YYYY-MM-DD) を保守 (次回改訂時に日付更新)。
- 外部分割: 詳細テンプレ/運用詳細は派生ファイルへ分離し、ここから参照する。過度な肥大化 (1000 行超) が近づいたら分割提案。
- 分割先推奨ファイル:
  - `.github/pull_request_template.md` : PR テンプレ (常に同期)
  - `.github/policies/MAINTENANCE.md` : 日次/PR毎チェックリストと自動化タスク
  - `.github/policies/DESIGN_TOKENS.md` : tokens 仕様 (更新時 diff 明示)
- 新規ファイル追加時は: 1目的=1コミット / 参照リンクを本ファイルに必ず追記。
- “常に見直せ” の遵守確認: 各 PR 本文に本ファイル再読結果 (差分要否有無) を記入 (テンプレの『ドキュメント再検証』欄)。
- 逸脱検出時: 開発フロー/コード/CI が規約外挙動の場合、自動コメントで指摘+改訂案。
- 必要がなくなったセクションは削除ではなく『DEPRECATED: 理由 / 置換先』注記後 2 リリース保持。

---

## チャットログ要点記録運用

- Copilot / Agent との会話は全文保存せず、意思決定・方針・理由のみ要点を Markdown 化。
- 記録先: `docs/copilot/` ディレクトリ配下 (例: `docs/copilot/decision-log.md`) に集約。別用途ファイルと混在禁止。
- 追記タイミング: 新しい規約/方針/例外/リスク/次アクションが確定した直後。
- フォーマット例:
  ```md
  ## 2025-08-16
  ### 決定
  - ブランチ運用: feature/fix/hotfix 命名徹底
  - コミット粒度: 1目的=1コミット
  ### 理由
  - レビュー容易化 / ロールバック容易性
  ### TODO
  - tokens 初期実装
  ```
- 重複方針は最新記述へ統合し旧記述へ参照残さず更新。
- ログ更新後は必ずコミット (メッセージ: 「決定ログを更新 <要約>」)。
- ログ未更新のまま関連変更を push しない。
- 本運用自体の更新が必要になった場合は本ファイルへ先に追記し、その後ログに記録。

---
`````
