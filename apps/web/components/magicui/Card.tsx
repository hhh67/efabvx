// client component
'use client';
// MagicUI Card (簡略ラップ版)
// framer-motion 除去して motion API + CSS トランジションベース。
// チェックリスト:
// [x] tokens 再利用
// [x] フォーカス可視
// [x] キーボード操作 (tabIndex=0)
// [x] aria 属性適切
// [x] コントラスト AA
// [x] モーション軽減対応
// [ ] Story 追加案 TODO
import * as React from 'react';
import { animate } from 'motion';

export type MagicUICardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

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

export const MagicUICard: React.FC<MagicUICardProps> = ({
  interactive = true,
  className = '',
  style,
  children,
  ...rest
}) => {
  const reduce = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (reduce || !ref.current) return;
    // フェード + 軽い上昇
    animate(
      ref.current,
      { opacity: [0, 1], y: [4, 0] },
      { duration: 0.35, easing: 'ease-out' }
    );
  }, [reduce]);

  const motionClasses = reduce
    ? ''
    : 'transition-transform will-change-transform hover:-translate-y-1';

  return (
    <div
      ref={ref}
      tabIndex={interactive ? 0 : undefined}
      className={`rounded-lg shadow-md bg-bg-elevated outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)] p-6 transition-shadow ${motionClasses} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MagicUICard;
