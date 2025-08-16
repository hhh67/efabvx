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
                display: 'block',
                padding: '12px 16px',
                borderRadius: tokens.radius.card,
                background: 'var(--color-bg-secondary)',
                color: 'var(--color-fg-primary)',
                fontSize: tokens.typography.scale.small,
              }}
            >
              <strong style={{ display: 'block' }}>{a.name}</strong>
              <span style={{ opacity: 0.8 }}>{a.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
