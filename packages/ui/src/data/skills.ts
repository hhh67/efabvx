export type SkillCategory = {
  key: string;
  label: string;
  skills: { key: string; label: string; icon: string }[];
};

// 最低限: legacy で利用している主要カテゴリを先行。後から詳細/熟練度を拡張予定。
export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    skills: [
      { key: 'typescript', label: 'TypeScript', icon: '/images/skill/typescript.png' },
      { key: 'javascript', label: 'JavaScript', icon: '/images/skill/javascript.png' },
      { key: 'go', label: 'Go', icon: '/images/skill/go.png' },
      { key: 'php', label: 'PHP', icon: '/images/skill/php.png' },
      { key: 'swift', label: 'Swift', icon: '/images/skill/swift.png' },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    skills: [
      { key: 'react', label: 'React', icon: '/images/skill/react.png' },
      { key: 'vite', label: 'Vite', icon: '/images/skill/vite.png' },
      { key: 'redux', label: 'Redux', icon: '/images/skill/redux.png' },
      { key: 'jotai', label: 'Jotai', icon: '/images/skill/jotai.png' },
      { key: 'storybook', label: 'Storybook', icon: '/images/skill/storybook.png' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    skills: [
      { key: 'nodejs', label: 'Node.js', icon: '/images/skill/nodejs.png' },
      { key: 'echo', label: 'Echo', icon: '/images/skill/echo.png' },
      { key: 'redis', label: 'Redis', icon: '/images/skill/redis.png' },
      { key: 'mysql', label: 'MySQL', icon: '/images/skill/mysql.png' },
      { key: 'postgresql', label: 'PostgreSQL', icon: '/images/skill/postgresql.png' },
    ],
  },
  {
    key: 'devops',
    label: 'Infra / DevOps',
    skills: [
      { key: 'docker', label: 'Docker', icon: '/images/skill/docker.png' },
      { key: 'nginx', label: 'Nginx', icon: '/images/skill/nginx.png' },
      { key: 'aws', label: 'AWS', icon: '/images/skill/aws.png' },
      { key: 'gcp', label: 'GCP', icon: '/images/skill/gcp.png' },
      { key: 'firebase', label: 'Firebase', icon: '/images/skill/firebase.png' },
    ],
  },
  {
    key: 'tools',
    label: 'Tools',
    skills: [
      { key: 'git', label: 'Git', icon: '/images/skill/git.png' },
      { key: 'github', label: 'GitHub', icon: '/images/skill/github.png' },
      { key: 'vscode', label: 'VSCode', icon: '/images/skill/vscode.png' },
      { key: 'figma', label: 'Figma', icon: '/images/skill/figma.png' },
      { key: 'prettier', label: 'Prettier', icon: '/images/skill/prettier.png' },
    ],
  },
];

export type SkillCategories = typeof skillCategories;
