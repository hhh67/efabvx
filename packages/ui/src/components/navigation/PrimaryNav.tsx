'use client';

// [x] tokens 再利用
// [x] フォーカス可視
// [x] キーボード操作 (ul/li + a タブ移動)
// [x] aria 属性適切 (nav + aria-current)
// [x] コントラスト AA (tokens)
// [x] モーション軽減対応 (prefers-reduced-motion で hover 背景のみ最小)
// [ ] Story 追加案 TODO
import { tokens } from '../../tokens';
import { Stack } from '../primitives/Stack';

export type PrimaryNavItem = {
  label: string;
  href: string;
  current?: boolean;
};

export type PrimaryNavProps = {
  items: PrimaryNavItem[];
  moreLabel?: string;
  onMoreClick?: () => void;
};

export const PrimaryNav = ({ items, moreLabel = 'More', onMoreClick }: PrimaryNavProps) => {
  const main = items.slice(0, 3);
  const rest = items.slice(3);
  const showMore = rest.length > 0;

  return (
    <nav aria-label="Primary">
      <Stack direction="row" gap={4} as="ul" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {main.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              aria-current={it.current ? 'page' : undefined}
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                fontSize: tokens.typography.scale.small,
                textDecoration: 'none',
                borderRadius: tokens.radius.base,
                color: it.current ? tokens.color.fg.primary : tokens.color.fg.secondary,
                background: it.current ? tokens.color.bg.secondary : 'transparent',
                transition: `background ${tokens.motion.duration.base} ${tokens.motion.easing}`,
                lineHeight: 1.2,
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseEnter={(e) => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                if (!it.current) e.currentTarget.style.background = tokens.color.bg.secondary;
              }}
              onMouseLeave={(e) => {
                if (!it.current) e.currentTarget.style.background = 'transparent';
              }}
            >
              {it.label}
            </a>
          </li>
        ))}
        {showMore && (
          <li>
            <button
              type="button"
              onClick={onMoreClick}
              style={{
                padding: '8px 12px',
                fontSize: tokens.typography.scale.small,
                borderRadius: tokens.radius.base,
                background: tokens.color.bg.secondary,
                border: 'none',
                cursor: 'pointer',
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {moreLabel}
            </button>
          </li>
        )}
      </Stack>
    </nav>
  );
};
