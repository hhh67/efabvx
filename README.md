# Portfolio Site - @efabvx

フルスタックエンジニア向けのモダンなポートフォリオサイト

## 🚀 特徴

- **モダンな技術スタック**: Next.js 15 + React 19 + TypeScript
- **3Dビジュアル**: Three.js による美しい地球儀エフェクト
- **滑らかなアニメーション**: Framer Motion によるスクロール連動アニメーション
- **レスポンシブデザイン**: モバイルファーストのアプローチ
- **パフォーマンス最適化**: 動的インポートとリソース管理

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 15**: React ベースのフルスタックフレームワーク
- **React 19**: 最新のReactライブラリ
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: ユーティリティファーストのCSS

### アニメーション・3D
- **Framer Motion**: 高性能アニメーションライブラリ
- **Three.js**: 3Dグラフィックス
- **React Three Fiber**: React用Three.jsラッパー
- **React Three Drei**: Three.js用ヘルパー

### その他
- **Simple Icons**: 技術アイコンライブラリ
- **Google Fonts**: Webフォント

## 📦 セットアップ

### 必要な環境
- Node.js 18 以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone <repository-url>
cd efabvx

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 利用可能なコマンド
```bash
npm run dev         # 開発サーバー起動
npm run build       # プロダクションビルド
npm run start       # プロダクションサーバー起動
npm run lint        # ESLint実行
npm run typecheck   # TypeScript型チェック
```

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── components/
│   │   ├── layout/          # ナビゲーション等
│   │   ├── sections/        # ページセクション
│   │   ├── ui/             # 再利用可能なUIコンポーネント
│   │   └── visuals/        # 視覚効果コンポーネント
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # ルートレイアウト
│   └── page.tsx           # メインページ
├── data/
│   └── globe.json         # 地球儀用GeoJSONデータ
└── docs/                   # プロジェクトドキュメント
```

## 🎨 コンポーネント概要

### Hero Section
- メインビジュアルとインタラクティブな3D地球儀
- レスポンシブレイアウト
- 動的な太陽光シミュレーション

### About Section  
- 自己紹介コンテンツ
- フェードインアニメーション
- スクロール可能な詳細情報

### TechStack Section
- 技術スキルカード表示
- スクロール連動の重なりエフェクト
- カテゴリー別整理（5分類）

### Navigation
- 固定サイドナビゲーション
- スクロール位置に応じたアクティブ表示
- モバイル対応ハンバーガーメニュー

## 📚 ドキュメント

詳細な技術情報は以下のドキュメントを参照してください：

- [`CLAUDE.md`](./CLAUDE.md) - Claude Code開発プロセスガイド
- [`DEVELOPMENT.md`](./DEVELOPMENT.md) - 開発ガイド
- [`COMPONENTS.md`](./COMPONENTS.md) - コンポーネント仕様書
- [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md) - トラブルシューティング
- [`CHANGELOG.md`](./CHANGELOG.md) - 変更履歴

## 🔧 開発方針

### 基本原則
1. **表示担保最優先**: コンポーネントの可視性を最重要視
2. **段階的実装**: 複雑な機能は小さなステップに分割
3. **継続的検証**: 各変更後の動作確認を徹底
4. **文書化**: 全ての判断と変更を記録

### パフォーマンス考慮
- 重いコンポーネントの動的インポート
- Three.jsリソースの適切な管理
- 画像とアニメーションの最適化
- TypeScriptによる型安全性確保

## 🎯 今後の展望

### 短期目標
- スナップスクロールアニメーションの安全な実装
- Projects・Contactセクションの完成
- パフォーマンス最適化

### 中期目標  
- アニメーション効果の拡充
- モバイルUXの改善
- アクセシビリティ対応

### 長期目標
- CMS統合の検討
- 多言語対応
- PWA化

## 🤝 Claude Code での開発

### 作業開始前に必読
- **[START_HERE.md](./START_HERE.md)** - 毎回の作業開始時の必須手順

### 必須コマンド（毎回コピペ）
```
.claude/instructions.mdと.claude/context.mdを読み込んでから作業を開始してください。表示担保を最優先とし、段階的実装を厳守してください。
```

### コントリビューション原則
1. 開発プロセスガイド（CLAUDE.md）を必読
2. 段階的実装の原則を遵守
3. 表示担保を最優先
4. 変更後は必ず動作確認

## 📄 ライセンス

このプロジェクトは個人ポートフォリオサイトです。
