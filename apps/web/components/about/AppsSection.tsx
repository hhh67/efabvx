'use client';
import { apps, Stack } from '@efabvx/ui';
import { tokens } from '@efabvx/ui';

export const AppsSection = () => {
  return (
    <Stack gap={3}>
      <p style={{ margin: 0, fontSize: tokens.typography.scale.small }}>個人で開発しているアプリケーションの一覧です。</p>
      <p style={{ margin: 0, fontSize: tokens.typography.scale.small }}>
        企画、デザイン、開発、運用まで<br />一貫して行っております🧑‍💻
      </p>
      <p style={{ margin: 0, fontSize: tokens.typography.scale.small }}>詳細は各アプリのページをご覧ください。</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
        {apps.map((a) => (
          <li key={a.key}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: tokens.radius.card,
                background: 'var(--color-bg-secondary)',
                color: 'var(--color-fg-primary)',
                fontSize: tokens.typography.scale.small,
              }}
            >
              {/* アイコン */}
              {a.icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.icon}
                  alt=""
                  width={40}
                  height={40}
                  style={{ borderRadius: 8, flexShrink: 0, background: 'var(--color-bg-elevated)' }}
                />
              )}
              <span style={{ display: 'grid', gap: 2 }}>
                <strong style={{ display: 'block', fontSize: tokens.typography.scale.small }}>{a.name}</strong>
                <span style={{ opacity: 0.8 }}>{a.description}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
