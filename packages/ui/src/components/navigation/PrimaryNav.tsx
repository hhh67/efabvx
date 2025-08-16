'use client';

// [x] tokens 再利用
// [x] フォーカス可視
// [x] キーボード操作 (ul/li + a タブ移動)
// [x] aria 属性適切 (nav + aria-current)
// [x] コントラスト AA (tokens)
// [x] モーション軽減対応 (prefers-reduced-motion で hover 背景のみ最小)
// [ ] Story 追加案 TODO
import { useEffect, useRef, useState, useCallback } from 'react';
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
};

export const PrimaryNav = ({ items, moreLabel = 'More' }: PrimaryNavProps) => {
  const main = items.slice(0, 3);
  const rest = items.slice(3);
  const showMore = rest.length > 0;

  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstRestRef = useRef<HTMLAnchorElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // 閉じるトリガ (外側クリック)
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!panelRef.current || !buttonRef.current) return;
      if (panelRef.current.contains(e.target as Node) || buttonRef.current.contains(e.target as Node)) return;
      close();
    };
    window.addEventListener('mousedown', onPointerDown);
    return () => window.removeEventListener('mousedown', onPointerDown);
  }, [open, close]);

  // Esc キー閉じ
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  // 開いたら最初のリンクへフォーカス
  useEffect(() => {
    if (open) firstRestRef.current?.focus();
  }, [open]);

  // フォーカストラップ (Shift+Tab / Tab 循環)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!panelRef.current) return;
      const focusables = Array.from(panelRef.current.querySelectorAll('a')) as HTMLElement[];
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

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
          <li style={{ position: 'relative' }}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              aria-controls="nav-more-panel"
              ref={buttonRef}
              onClick={() => setOpen((o) => !o)}
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
            {open && (
              <div
                id="nav-more-panel"
                role="menu"
                ref={panelRef}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  right: 0,
                  minWidth: 160,
                  background: tokens.color.bg.elevated,
                  borderRadius: tokens.radius.card,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  padding: '4px 4px',
                  zIndex: 20,
                }}
              >
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {rest.map((it, i) => (
                    <li key={it.href}>
                      <a
                        ref={i === 0 ? firstRestRef : null}
                        href={it.href}
                        role="menuitem"
                        style={{
                          display: 'block',
                          padding: '8px 10px',
                          textDecoration: 'none',
                          borderRadius: tokens.radius.base,
                          fontSize: tokens.typography.scale.small,
                          color: tokens.color.fg.secondary,
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.background = tokens.color.bg.secondary;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                        onMouseEnter={(e) => {
                          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                          e.currentTarget.style.background = tokens.color.bg.secondary;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            close();
                            buttonRef.current?.focus();
                          }
                        }}
                        onClick={() => close()}
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )}
      </Stack>
    </nav>
  );
};
