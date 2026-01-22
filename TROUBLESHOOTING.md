# トラブルシューティングガイド

## 頻発する問題と解決法

### 1. カードコンポーネントが表示されない

**症状**: TechStackやその他のカードが画面に表示されない

**原因**:
- `opacity: 0` が設定されている
- `display: none` が適用されている
- `visibility: hidden` の状態
- `useTransform` による意図しない透明度制御
- CSS の z-index 競合

**解決法**:
```typescript
// 緊急時の強制表示
style={{ 
  opacity: 1,
  display: 'block',
  visibility: 'visible',
  position: 'relative' // 必要に応じて
}}
```

**予防策**:
- アニメーション実装前に基本表示を確認
- `useTransform` の値範囲を慎重に設定
- 最小透明度を 0.3 以上に設定

### 2. Three.js / Globe コンポーネントエラー

**症状**: 
- 地球儀が表示されない
- コンソールに WebGL エラー
- "Canvas is already in use" エラー

**原因**:
- WebGL サポート不足
- Canvas の重複作成
- メモリリーク

**解決法**:
```typescript
// dynamic import でSSRエラー回避
const Globe = dynamic(() => import('./Globe'), { 
  ssr: false,
  loading: () => <div>Loading globe...</div>
});

// useEffect でクリーンアップ
useEffect(() => {
  return () => {
    // Three.js リソースの解放
    renderer?.dispose();
    scene?.clear();
  };
}, []);
```

### 3. スクロールアニメーションが動作しない

**症状**: Framer Motion のスクロール連動が効かない

**原因**:
- `useScroll` の target 設定ミス
- `scrollYProgress` の範囲設定エラー
- CSS の `overflow` 設定問題

**解決法**:
```typescript
// 正しい useScroll 設定
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

// デバッグ用ログ追加
useEffect(() => {
  const unsubscribe = scrollYProgress.on('change', (value) => {
    console.log('Scroll progress:', value);
  });
  return unsubscribe;
}, [scrollYProgress]);
```

### 4. TypeScript型エラー

**症状**: ビルド時の型チェックエラー

**頻出パターン**:
```typescript
// ❌ 問題のあるコード
const position = getPosition(); // 型が不明
camera.position = position; // エラー

// ✅ 修正版
const position: [number, number, number] = getPosition();
camera.position.set(...position);
```

### 5. レイアウト崩れ

**症状**: レスポンシブデザインが崩れる

**原因**:
- Flexbox / Grid の設定ミス
- `sticky` と `absolute` の競合
- 高さ設定の問題

**解決法**:
```css
/* 安全なsticky設定 */
.safe-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}

/* レスポンシブ対応 */
.responsive-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

## デバッグ手法

### 1. 段階的デバッグ
```typescript
// 1. 最小限の表示確認
<div style={{backgroundColor: 'red', height: '100px'}}>Test</div>

// 2. 基本props確認
console.log('Component props:', props);

// 3. 状態確認
console.log('Current state:', state);
```

### 2. CSS デバッグ
```css
/* 境界線による可視化 */
* {
  border: 1px solid red !important;
}

/* 要素サイズ確認 */
.debug-size {
  min-height: 100px;
  background: rgba(255, 0, 0, 0.1);
}
```

### 3. Framer Motion デバッグ
```typescript
// アニメーション値の確認
const debugValue = useTransform(scrollYProgress, (value) => {
  console.log('Animation value:', value);
  return value;
});
```

## パフォーマンス最適化

### 1. 重いコンポーネントの遅延読み込み
```typescript
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />
});
```

### 2. Three.js 最適化
```typescript
// LOD (Level of Detail) 使用
// 距離に応じて詳細度を調整

// リソースの適切な解放
useEffect(() => {
  return () => {
    geometry?.dispose();
    material?.dispose();
    texture?.dispose();
  };
}, []);
```

### 3. 画像最適化
- WebP 形式の使用
- 適切なサイズでの配信
- lazy loading の実装

## 緊急対応チェックリスト

### コンポーネントが表示されない場合
- [ ] `opacity: 1` を強制設定
- [ ] `display: block` を確認
- [ ] コンソールエラーをチェック
- [ ] CSS の競合を確認
- [ ] 親要素の高さを確認

### アニメーションが動かない場合
- [ ] `useScroll` の設定を確認
- [ ] スクロール進行度をログ出力
- [ ] CSS の `overflow` を確認
- [ ] target 要素の存在を確認

### ビルドエラーの場合
- [ ] TypeScript エラーを修正
- [ ] import/export を確認
- [ ] 依存関係を確認
- [ ] 型定義ファイルの存在確認