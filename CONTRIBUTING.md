# Contributing Guide

本プロジェクトへの貢献手順と規約。

## ブランチ戦略

- `main`: 常にデプロイ可能な安定状態。
- `feature/<topic>`: 新機能。1機能1ブランチ。
- `fix/<issue>`: バグ修正。
- `hotfix/<issue>`: 緊急修正。

## コミット

- 1目的=1コミット。
- 動詞始まり日本語。50文字以内サマリ + 必要なら本文。
- Lint / Type / Test (存在すれば) 通過後に push。

## PR

- まず Draft。Ready 指示まで Draft 維持。
- テンプレ必須入力。不要セクションは削除せず N/A。
- 大型 (>500 LOC or 8コミット) は分割検討。

## コードスタイル

- ESLint + Prettier + `.editorconfig` に従う。
- `type` 優先 / Arrow Functions / `??` 使用 / `@/` alias。

## デザイン/アクセシビリティ

- Apple HIG 要約適用 / tokens 再利用。
- コントラストAA / フォーカス可視 / キーボード操作保証。

## 実装優先度 (抜粋)

1. tokens/theme
2. Layout & 基本UI
3. Navigation & Card & Overlay
4. Validation/Toast/Skeleton
5. i18n + ダーク調整

## セキュリティ

- Secrets commit 禁止。検出時即 PR 修正。
- 依存追加はライセンス (MIT/Apache2) 確認。

## ログ記録

- `docs/copilot/decision-log.md` に方針変化を反映。

## 質問

Issue か Draft PR にコメント。
