export const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend',
    items: ['HTML5','CSS3','Bootstrap','JavaScript','TypeScript','React','Material-UI','React Router','React Hook Form','Zod','Jotai','Redux','Orval','Storybook','Rollup.js','ESLint','Prettier','Vite.js','npm','Bun','Laravel','jQuery']
  },
  {
    key: 'backend',
    title: 'Backend',
    items: ['PHP','Laravel','Golang','Echo','GORM','Node.js','TypeScript']
  },
  {
    key: 'mobile',
    title: 'Mobile',
    items: ['Swift/SwiftUI','CocoaPods','Firebase','React Native','TypeScript','Yarn','Xcode','Android Studio']
  },
  {
    key: 'infra',
    title: 'Infrastructure / Middleware',
    items: ['Amazon Web Services','Google Cloud Platform','Firebase','MySQL','PostgreSQL','Redis','Nginx','Docker','Linux','macOS']
  },
  {
    key: 'other',
    title: 'Other',
    items: ['Git','GitHub','OpenAPI','Swagger','Postman','GitHub Copilot','ChatGPT','Figma','Visual Studio Code','Xcode','Android Studio','Slack','Notion','Backlog','Trello','Jira','Raycast']
  }
] as const;
export type SkillCategory = typeof skillCategories[number];
