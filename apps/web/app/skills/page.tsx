import { Stack, PageContainer } from '@efabvx/ui';

export default function SkillsPage() {
  return (
    <PageContainer>
      <Stack gap={6}>
        <h1>Skills</h1>
        <p style={{ margin: 0 }}>スキルセットをカテゴリ別に整理予定です (Languages / Frameworks / Infra / Tools)。</p>
        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>段階移植: まず静的 JSON → 後で表示コンポーネント最適化。</p>
        {/* TODO: packages/ui に skills データを集約しここで利用 */}
      </Stack>
    </PageContainer>
  );
}
