# legacy-vite

旧 Vite 実装の一時保持用アプリ。段階的に Next.js (`apps/web`) へ移行後削除予定。

## 方針
- 破壊的変更を避け、段階的に画面/ロジックを Next.js へ移行
- 共通静的データは `packages/ui/src/data` へ集約しここから参照
- 新規機能は追加しない (バグ修正のみ)

## スクリプト
```
 bun run dev
```
