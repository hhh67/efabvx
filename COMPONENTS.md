# コンポーネント仕様書

## レイアウトコンポーネント

### SideNav (`/components/layout/SideNav.tsx`)
**機能**: 画面右端の固定ナビゲーション
**状態**: 
- スクロール位置に応じてアクティブセクションを強調表示
- ハンバーガーメニュー（モバイル対応）

### RootLayout (`/app/layout.tsx`)
**機能**: 全ページ共通レイアウト
**特徴**:
- Google Fonts の設定
- Starfield背景エフェクト
- アニメーション背景グラデーション

## セクションコンポーネント

### Hero (`/components/sections/Hero.tsx`)
**機能**: メインビジュアルセクション
**特徴**:
- 3D地球儀背景（動的インポート）
- レスポンシブレイアウト（PC: 左右分割、Mobile: 中央配置）
- タイトルとサブタイトル表示

**Props**:
```typescript
interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  globeConfig: GlobeConfig;
}
```

### About (`/components/sections/About.tsx`)
**機能**: 自己紹介セクション
**特徴**:
- フェードインアニメーション
- スクロール可能なコンテンツ
- セクション高さ固定（h-screen）

### TechStack (`/components/sections/TechStack.tsx`)
**機能**: 技術スキルカード表示
**特徴**:
- Sticky配置でカード重なり効果
- スクロール連動アニメーション
- 5カテゴリー（Frontend, Backend, Mobile, Infrastructure, Other）

**データ構造**:
```typescript
interface TechSkill {
  name: string;
  icon: ReactElement;
}

interface TechGroup {
  group: string;
  skills: TechSkill[];
}
```

### Projects (`/components/sections/Projects.tsx`)
**機能**: プロジェクト実績一覧
**特徴**: TBD

### Contact (`/components/sections/Contact.tsx`)
**機能**: 連絡先情報
**特徴**: TBD

## UIコンポーネント

### Globe (`/components/ui/globe.tsx`)
**機能**: インタラクティブ3D地球儀
**主要機能**:
- Three.js + React Three Fiber
- GeoJSON による国境線描画
- リアルタイム太陽光シミュレーション
- 東京位置にカスタムマーカー
- 自動回転とマニュアル操作

**設定項目**:
```typescript
export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  timeZoneOffsetHours?: number;
  initialPosition?: { lat: number; lng: number; };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}
```

**内部コンポーネント**:
- `Globe`: メイン地球儀オブジェクト
- `World`: Three.js Canvas ラッパー
- `WebGLRendererConfig`: レンダラー設定
- `Terminator`: 昼夜境界線エフェクト

## ビジュアルコンポーネント

### Starfield (`/components/visuals/Starfield.tsx`)
**機能**: 星空背景アニメーション
**特徴**:
- Canvas による星粒子システム
- 動的な星の移動とサイズ変化
- パフォーマンス最適化

## 共通スタイル

### globals.css
- **スムーススクロール**: 全体的に滑らかなスクロール動作
- **スナップスクロール**: セクション間の自動スナップ
- **カスタムフォント**: Google Fonts の CSS変数設定
- **ダークテーマ**: CSS変数による色管理

### Tailwind設定
- **カスタムカラー**: プロジェクト専用色パレット
- **フォント**: Google Fonts との連携
- **アニメーション**: カスタムキーフレーム定義