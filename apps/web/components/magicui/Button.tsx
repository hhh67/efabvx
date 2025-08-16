// client component
'use client';
// MagicUI Button (簡略ラップ版)
// [PoC差分確認用]
// framer-motion 依存を除去し motion (Motion One) + CSS トランジションで再実装。
// チェックリスト:
// [x] tokens 再利用
// [x] フォーカス可視
// [x] キーボード操作
// [x] aria 属性適切 (type, disabled)
// [x] コントラスト AA (accent 背景 + fg)
// [x] モーション軽減対応 (prefers-reduced-motion)
// [ ] Story 追加案 TODO
import * as React from 'react';
import { animate } from 'motion';

export type MagicUIButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
  };

// prefers-reduced-motion 判定フック
const usePrefersReducedMotion = () => {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduce(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduce;
};

const sizeMap = {
  sm: 'py-1.5 px-3 text-[0.875rem]',
  md: 'py-2 px-4 text-[1rem]',
  lg: 'py-3 px-5 text-[1.125rem]',
};

export const MagicUIButton: React.FC<MagicUIButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...rest
}) => {
  const reduce = usePrefersReducedMotion();
  const ref = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (reduce || !ref.current) return;
    // 初回マウント時の軽いポップ (スケール 0.98 -> 1)
    animate(ref.current, { scale: [0.98, 1] }, { duration: 0.25, easing: 'ease-out' });
  }, [reduce]);

  const base =
    'inline-flex items-center justify-center rounded-md font-medium outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-bg-primary)] transition-colors';
  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--color-accent)] text-[var(--color-fg-primary)] hover:bg-[var(--color-accent-hover)]'
      : 'bg-transparent text-[var(--color-fg-secondary)] hover:text-[var(--color-fg-primary)]';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const motionClasses = reduce
    ? ''
    : 'transition-transform will-change-transform hover:scale-[1.03] active:scale-[0.97]';

  return (
    <button
      ref={ref}
      type={rest.type ?? 'button'}
      disabled={disabled}
      className={`${base} ${variantClass} ${sizeMap[size]} ${disabledClass} ${motionClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MagicUIButton;
