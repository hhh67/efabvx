'use client';
import { Stack } from '@efabvx/ui';
import { SkillIcon } from './SkillIcon';

const groups: { title: string; items: { title: string; icon: string }[] }[] = [
  {
    title: 'Frontend',
    items: [
      'html5','css3','bootstrap','javascript','typescript','react','mui','reactRouter','reactHookForm','zod','jotai','redux','orval','storybook','rollup','eslint','prettier','vite','npm','bun','laravel','jquery'
    ].map((k) => ({ title: k, icon: `/images/skill/${k}.png` })),
  },
  {
    title: 'Backend',
    items: ['php','laravel','go','echo','gorm','nodejs','typescript'].map((k) => ({ title: k, icon: `/images/skill/${k}.png` })),
  },
  {
    title: 'Mobile',
    items: ['swift','cocoapods','firebase','react','typescript','yarn','xcode','androidStudio'].map((k) => ({ title: k, icon: `/images/skill/${k}.png` })),
  },
  {
    title: 'Infrastructure / Middleware',
    items: ['aws','gcp','firebase','mysql','postgresql','redis','nginx','docker','linux','apple'].map((k) => ({ title: k, icon: `/images/skill/${k}.png` })),
  },
  {
    title: 'Other',
    items: ['git','github','openapi','swagger','postman','githubCopilot','chatgpt','figma','vscode','xcode','androidStudio','slack','notion','backlog','trello','jira','raycast'].map((k) => ({ title: k, icon: `/images/skill/${k}.png` })),
  },
];

export const SkillsSection = () => (
  <Stack gap={6}>
    {groups.map((g) => (
      <Stack key={g.title} gap={3}>
        <h3 style={{ margin: 0 }}>{g.title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {g.items.map((i) => (
            <SkillIcon key={i.title} src={i.icon} title={i.title} />
          ))}
        </div>
      </Stack>
    ))}
  </Stack>
);
