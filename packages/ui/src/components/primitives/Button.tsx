// [アクセシビリティチェック済]
// [ ] Story 追加案 TODO
// [ ] モーション軽減 respect
import React from 'react';
import { tokens } from '../../tokens';

type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'danger';

type ButtonSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: tokens.typography.scale.small, padding: '4px 12px' },
  md: { fontSize: tokens.typography.scale.body, padding: '8px 16px' },
  lg: { fontSize: tokens.typography.scale.h3, padding: '12px 20px' },
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-accent)',
    color: 'var(--color-fg-primary)',
  },
  secondary: {
    background: 'var(--color-bg-elevated)',
    color: 'var(--color-fg-primary)',
    border: '1px solid var(--color-border-subtle)',
  },
  subtle: {
    background: 'transparent',
    color: 'var(--color-fg-secondary)',
  },
  danger: {
    background: 'var(--color-danger)',
    color: 'var(--color-fg-primary)',
  },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  block,
  style,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{
        border: 'none',
        cursor: 'pointer',
        borderRadius: tokens.radius.base,
        lineHeight: 1.4,
        fontWeight: 500,
        transition: `background ${tokens.motion.duration.base} ${tokens.motion.easing}, transform ${tokens.motion.duration.fast} ${tokens.motion.easing}`,
        outlineOffset: 2,
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-bg-primary), 0 0 0 4px var(--color-accent)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(1px)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
};
