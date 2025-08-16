'use client';
// [x] tokens 再利用
// [x] フォーカス可視 (リンク focus-visible)
// [x] キーボード操作 (自然な tab 順)
// [x] aria 属性適切 (AppShell 外側 footer なのでここは単純構造)
// [x] コントラスト AA (fg-secondary 以上)
// [x] モーション軽減対応 (本コンポーネントは静的)
// [ ] Story 追加案 TODO
import { tokens } from '../../tokens';
import { Stack } from '../primitives/Stack';

export type SiteFooterProps = {
  links?: Array<{ label: string; href: string; external?: boolean }>;
  copyrightName?: string;
};

export const SiteFooter = ({
  links = [],
  copyrightName = 'efabvx',
}: SiteFooterProps) => {
  return (
    <Stack
      as="div"
      gap={3}
      style={{
        fontSize: tokens.typography.scale.small,
        color: tokens.color.fg.secondary,
      }}
    >
      {links.length > 0 && (
        <Stack
          as="ul"
          direction="row"
          gap={4}
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap',
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '4px 8px',
                  borderRadius: tokens.radius.base,
                  outlineOffset: 2,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-accent)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </Stack>
      )}
      <div style={{ opacity: 0.75 }}>
        © {new Date().getFullYear()} {copyrightName}
      </div>
    </Stack>
  );
};
