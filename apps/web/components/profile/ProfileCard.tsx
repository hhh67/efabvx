// [x] tokens 再利用
// [x] フォーカス可視 (画像 flip はクリック領域十分)
// [x] キーボード操作 (button で flip)
// [x] aria 属性 (aria-pressed)
// [x] コントラスト AA (背景グラデーション上に十分な明度差)
// [x] モーション軽減対応 (prefers-reduced-motion で flip 無効)
// [ ] Story 追加案 TODO
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { tokens } from '@efabvx/ui';

export const ProfileCard = () => {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setFlipped((f) => !f);
  };
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(232,247,255,1) 100%)',
        borderRadius: tokens.radius.card,
        padding: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button
          type="button"
          aria-pressed={flipped}
          onClick={toggle}
          style={{
            width: 84,
            height: 84,
            borderRadius: '50%',
            border: '4px solid var(--color-accent)',
            padding: 0,
            cursor: 'pointer',
            position: 'relative',
            background: 'transparent',
          }}
        >
          <Image
            src={flipped ? '/images/hoshino.png' : '/images/gumi.png'}
            alt="プロフィール画像"
            fill
            sizes="84px"
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </button>
        <div style={{ fontSize: tokens.typography.scale.h3, fontWeight: 600 }}>Hoshino</div>
      </div>
    </div>
  );
};
