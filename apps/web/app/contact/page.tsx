import { Stack, PageContainer } from '@efabvx/ui';
import { sns } from '@efabvx/ui';

export default function ContactPage() {
  return (
    <PageContainer>
      <Stack gap={6}>
        <h1>Contact</h1>
        <p style={{ margin: 0 }}>ご連絡は以下のチャンネルからお願いします。返信は可能な限り早く行います。</p>
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
                  borderRadius: 12,
                  background: 'var(--color-bg-secondary)',
                  color: 'var(--color-fg-primary)',
                  fontSize: '0.875rem',
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Stack>
    </PageContainer>
  );
}
