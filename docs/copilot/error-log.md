# エラーログ

本ファイルは開発中に発生したビルド/ランタイム/型/テストエラーを時系列で記録し、再発防止とトラブルシューティング迅速化を目的とする。

## フォーマット

````md
### YYYY-MM-DD HH:MM (JST)

種別: build | runtime | type | test | lint | other
ブランチ: feature/xxx
概要: 一行要約
詳細ログ:

```text
<貼り付け>
```
````

原因分析:
対処:
再発防止/Follow-up:

````

---

## 記録

### 2025-08-16 22:55 (JST)

種別: build
ブランチ: feature/magicui-poc
概要: Node 16 で Next.js 14 ビルド失敗

```text
You are using Node.js 16.13.1. For Next.js, Node.js version >= v18.17.0 is required.
````

原因分析:

- 実行シェルが .nvmrc (22) へ切替されていなかった

対処:

- nvm use 22 で v22.18.0 へ切替

再発防止/Follow-up:

- CI で Node 22 を固定予定

### 2025-08-16 22:56 (JST)

種別: build  
ブランチ: feature/magicui-poc  
概要: exports 外パス参照による Module not found

```text
Module not found: Package path ./src/tokens is not exported from package @efabvx/ui
```

原因分析:

- Card が パッケージ内部パス (@efabvx/ui/src/tokens) を直接参照

対処:

- 公開 index 経由 import { tokens } from '@efabvx/ui' に修正

再発防止/Follow-up:

- packages/ui に必要なエクスポートを追加し内部参照禁止ルール ESLint 化検討

### 2025-08-16 22:57 (JST)

種別: runtime  
ブランチ: feature/magicui-poc  
概要: Server Component でイベントハンドラ使用エラー

```text
Event handlers cannot be passed to Client Component props.
```

原因分析:

- Card が 'use client' 指定なしで onFocus/onMouseEnter 等利用

対処:

- 先頭に 'use client' 追加

再発防止/Follow-up:

- インタラクティブ要素テンプレへ注記

### 2025-08-16 23:05 (JST)

種別: build  
ブランチ: feature/magicui-poc  
概要: Next.js dev 起動時に tailwindcss モジュール解決失敗

```text
Error: Cannot find module 'tailwindcss'
Require stack:
- .../next/dist/build/webpack/config/blocks/css/plugins.js
...
Import trace for requested module:
./app/globals.css
```

原因分析:

- tailwindcss / postcss / autoprefixer を apps/web 側 devDependencies にのみ追加し、ルート workspace で再インストール未実行。
- Next.js の PostCSS ローダがワークスペース解決で root node_modules を参照し該当パッケージ未配置。
- その後 bun 自体の再インストールが必要な状態 (キャッシュ破損) だった可能性。

対処:

- Bun 再セットアップ (再インストール) 後、lock / node_modules をクリーン (rm -rf node_modules bun.lockb) し再度 bun install。
- tailwindcss/postcss/autoprefixer を再インストールし dev 再起動で解決。

再発防止/Follow-up:

- 手順化: 依存解決異常時は (1) lock+node_modules 削除 → (2) bun install → (3) 個別 add 再試行 → (4) 解決不可なら Bun 再インストール。
- ワークスペース追加依存は root で統一管理し、apps 配下重複定義を避けるガイドを README / 運用規約へ追記予定。
- tailwind 導入チェックリストを decision-log に追記予定。

### 2025-08-17 10:05 (JST)

種別: other  
ブランチ: feature/project-replace  
概要: Copilot ツール層で git コマンド出力が常に空

```text
(例) git status / git rev-parse / git commit などの実行で標準出力が空
```

原因分析:

- VSCode 拡張レイヤ or 実行サンドボックスの一時的不整合 / 権限問題の可能性
- 実リポジトリ側ではブランチ操作は正常と推測されるが、エージェント層で結果が捕捉できていない

対処:

- 再起動 (VSCode / Copilot 拡張) 計画。再開容易化のため decision-log に再開タスク列挙。

再発防止/Follow-up:

- 再起動後も再現する場合: Developer Tools Console / Copilot 出力ログ収集し次エントリに追加
- 必要なら拡張キャッシュ退避 (globalStorage/github.copilot) → 再インストール
- 継続する場合は Git 操作をローカル端末で直接実行しエージェントとの役割分離を明記
