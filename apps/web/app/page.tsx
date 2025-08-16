import React from 'react';
import Card from '../components/card/Card';
import { MagicUIButton } from '../components/magicui/Button';
import { MagicUICard } from '../components/magicui/Card';
import { AppShell, Stack, PrimaryNav } from '@efabvx/ui';

export default function Page() {
  const navItems = [
    { label: 'Home', href: '/', current: true },
    { label: 'Skills', href: '/skills' },
    { label: 'Apps', href: '/apps' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppShell
      header={
        <Stack direction="row" gap={6} align="center" style={{ justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 600 }}>@efabvx</div>
          {/* onMoreClick は Server->Client 関数シリアライズ制限のため一時削除 */}
          <PrimaryNav items={navItems} />
        </Stack>
      }
      footer={<div>© {new Date().getFullYear()} efabvx</div>}
    >
      {/* TODO: PoC セクション削除予定 */}
      <Stack gap={5} /* padding は AppShell/PageContainer へ委譲済 */>
        <h1>@efabvx リプレース進行中</h1>

        <Stack as="section" gap={4}>
          <h2>自前コンポーネント (Card)</h2>
          <Card interactive aria-label="サンプルカード">
            <h3 style={{ marginTop: 0 }}>Card 見出し</h3>
            <p style={{ margin: 0 }}>
              自前 tokens を用いた Card コンポーネント。Hover/Focus で elevation /
              transform を確認。
            </p>
          </Card>
        </Stack>

        <Stack as="section" gap={4}>
          <h2>MagicUI ラップ PoC</h2>
          <Stack direction="row" gap={4} wrap="wrap">
            <MagicUIButton>Primary</MagicUIButton>
            <MagicUIButton variant="ghost">Ghost</MagicUIButton>
            <MagicUIButton size="lg">Large</MagicUIButton>
          </Stack>
          <MagicUICard aria-label="MagicUI カード例">
            <h3 style={{ marginTop: 0 }}>MagicUICard 見出し</h3>
            <p style={{ margin: 0 }}>
              簡略化した MagicUI 風カード。Tailwind + motion のスケール/hover を
              tokens へ合わせて比較。
            </p>
          </MagicUICard>
        </Stack>
      </Stack>
    </AppShell>
  );
}
