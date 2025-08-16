'use client';
// [PoC自前Card]
// [ ] tokens 再利用
// [ ] フォーカス可視
// [ ] キーボード操作
// [ ] aria 属性適切
// [ ] コントラスト AA
// [ ] モーション軽減対応
// [ ] Story 追加案 TODO
import * as React from 'react';
import { tokens } from '@efabvx/ui';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const Card: React.FC<CardProps> = ({ interactive, style, children, ...rest }) => {
  return (
    <div
      {...rest}
      tabIndex={interactive ? 0 : undefined}
      style={{
        background: tokens.color.bg.elevated,
        borderRadius: tokens.radius.card,
        boxShadow: tokens.elevation.md,
        padding: tokens.spacing[5],
        outline: 'none',
        transition: `transform ${tokens.motion.duration.base} ${tokens.motion.easing}, box-shadow ${tokens.motion.duration.base} ${tokens.motion.easing}`,
        ...(interactive && { cursor: 'pointer' }),
        ...style,
      }}
      onFocus={(e) => {
        if (interactive) {
          e.currentTarget.style.boxShadow = `0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-accent)`;
        }
      }}
      onBlur={(e) => {
        if (interactive) {
          e.currentTarget.style.boxShadow = tokens.elevation.md;
        }
      }}
      onMouseEnter={(e) => {
        if (interactive) {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (interactive) {
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;
