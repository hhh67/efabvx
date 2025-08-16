'use client';
import { sns, Stack } from '@efabvx/ui';
import { tokens } from '@efabvx/ui';

export const SnsSection = () => {
  return (
    <Stack gap={3}>
      <p style={{ margin: 0, fontSize: tokens.typography.scale.small }}>フォローしていただけると泣いて喜びます</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
        {sns.map((s) => (
          <li key={s.key}>
            <a
              href={s.url}
              target={s.key === 'mail' ? undefined : '_blank'}
              rel={s.key === 'mail' ? undefined : 'noopener noreferrer'}
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
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
