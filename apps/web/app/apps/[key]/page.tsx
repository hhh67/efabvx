import { notFound } from 'next/navigation';
import { apps, Stack, PageContainer } from '@efabvx/ui';
import Image from 'next/image';

type Props = { params: { key: string } };

export default function AppDetailPage({ params }: Props) {
  const app = apps.find(a => a.key.toLowerCase() === params.key.toLowerCase());
  if (!app) return notFound();
  return (
    <PageContainer>
      <Stack gap={6}>
        <Stack gap={3}>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: 16, margin: 0 }}>
            {app.icon && (
              <Image src={app.icon} alt="" width={64} height={64} style={{ borderRadius: 16, background: 'var(--color-bg-elevated)' }} />
            )}
            {app.name}
          </h1>
          <p style={{ margin: 0 }}>{app.description}</p>
        </Stack>
        <section style={{ display: 'grid', gap: 12 }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>ストア</h2>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 16px',
              background: 'var(--color-bg-secondary)',
              borderRadius: 12,
              textDecoration: 'none',
              color: 'var(--color-fg-primary)',
              fontSize: '0.875rem'
            }}
          >
            App Store で表示
          </a>
        </section>
        {/* TODO: スクリーンショット / 技術スタック / アップデート履歴 */}
      </Stack>
    </PageContainer>
  );
}
