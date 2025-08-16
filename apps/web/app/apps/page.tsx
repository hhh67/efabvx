import { Stack, PageContainer } from '@efabvx/ui';
import { apps } from '@efabvx/ui';
import Image from 'next/image';

export default function AppsPage() {
  return (
    <PageContainer>
      <Stack gap={6}>
        <h1>Apps</h1>
        <p style={{ margin: 0 }}>個別アプリの詳細リンクです。トップページ概要よりも詳しい説明を段階的に追加します。</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
          {apps.map((a) => (
            <li key={a.key}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'var(--color-bg-secondary)',
                  color: 'var(--color-fg-primary)',
                }}
              >
                {a.icon && (
                  <Image
                    src={a.icon}
                    alt=""
                    width={56}
                    height={56}
                    style={{ borderRadius: 12, background: 'var(--color-bg-elevated)' }}
                  />
                )}
                <span style={{ display: 'grid', gap: 4 }}>
                  <strong style={{ fontSize: '1rem' }}>{a.name}</strong>
                  <span style={{ fontSize: '0.875rem', opacity: 0.85 }}>{a.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Stack>
    </PageContainer>
  );
}
