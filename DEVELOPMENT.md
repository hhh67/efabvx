# 開発ドキュメント

## プロジェクト概要
フルスタックエンジニア向けのポートフォリオサイト

### 技術スタック
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 
- **Animation**: Framer Motion
- **3D**: Three.js, React Three Fiber
- **Icons**: Simple Icons (react-icons/si)
- **Fonts**: Google Fonts (Geist, Libre Baskerville, DM Serif Text, Lobster)

## 実行コマンド
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 型チェック
npm run typecheck

# リント
npm run lint

# プロダクションサーバー
npm start
```

## プロジェクト構造
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
└── data/
    └── globe.json         # 地球儀用GeoJSONデータ
```

## セクション構成
1. **Hero**: メイン画像と地球儀背景
2. **About**: 自己紹介
3. **TechStack**: 技術スキルカード一覧  
4. **Projects**: プロジェクト実績
5. **Contact**: 連絡先情報

## スタイリング方針
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **ダークテーマ**: 主要カラーパレット
  - Background: slate-900系
  - Text: slate-100, blue-300系
  - Accent: blue-400, cyan-400, purple-400
- **アニメーション**: 控えめで滑らかな動作

## コンポーネント設計原則
1. **単一責任の原則**: 各コンポーネントは1つの機能に集中
2. **再利用性**: 汎用的なUIは`/ui`に配置
3. **型安全性**: TypeScriptを活用した型定義
4. **パフォーマンス**: 重いコンポーネントは動的インポート