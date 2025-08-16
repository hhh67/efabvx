import { Stack, PageContainer, skillCategories } from '@efabvx/ui';
import Image from 'next/image';

export default function SkillsPage() {
  return (
    <PageContainer>
      <Stack gap={6}>
        <h1>Skills</h1>
        <p style={{ margin: 0 }}>スキルセットをカテゴリ別に整理予定です (Languages / Frameworks / Infra / Tools)。</p>
        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>段階移植: まず静的 JSON → 後で表示コンポーネント最適化。</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 32 }}>
          {skillCategories.map((cat) => (
            <li key={cat.key} style={{ display: 'grid', gap: 12 }}>
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{cat.label}</h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: 12,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                }}
              >
                {cat.skills.map((s) => (
                  <li key={s.key} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Image
                      src={s.icon}
                      alt=""
                      width={32}
                      height={32}
                      style={{ borderRadius: 6, background: 'var(--color-bg-elevated)' }}
                    />
                    <span style={{ fontSize: '0.75rem' }}>{s.label}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Stack>
    </PageContainer>
  );
}
