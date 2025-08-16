import React from 'react';
import { AppShell, Stack, PrimaryNav, SiteFooter } from '@efabvx/ui';
import { ProfileCard } from '../components/profile/ProfileCard';
import { Accordion } from '../components/about/Accordion';
import { AppsSection } from '../components/about/AppsSection';
import { SnsSection } from '../components/about/SnsSection';
import { SkillsSection } from '../components/skills/SkillsSection';

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
      footer={<SiteFooter links={[{ label: 'GitHub', href: 'https://github.com/hhh67', external: true }]} />}
    >
      {/*
        DEPRECATED: MagicUI ラップコンポーネント比較用 PoC セクション。
        理由: 基盤 (tokens/primitives) の検証目的を達成したため本番 UI から段階的に削除予定。
        削除計画: feature/remove-poc ブランチで page.tsx から該当ブロックを除去し decision-log に記録。
        期限目安: 1 週間以内。
      */}
      <Stack gap={5} /* padding は AppShell/PageContainer へ委譲済 */>
        <h1>@efabvx リプレース進行中</h1>
        <ProfileCard />
        <Accordion title="🍎 Apps" defaultOpen>
          <AppsSection />
        </Accordion>
        <Accordion title="🧠 Skills">
          <SkillsSection />
        </Accordion>
        <Accordion title="🌏 SNS / Contact">
          <SnsSection />
        </Accordion>

  {/* 自前 Card PoC と MagicUI 比較セクションは削除済み */}
      </Stack>
    </AppShell>
  );
}
