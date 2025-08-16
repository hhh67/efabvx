export const sns = [
  { key: 'instagram', label: '@gangimaly', url: 'https://www.instagram.com/gangimaly' },
  { key: 'github', label: '@hhh67', url: 'https://github.com/hhh67' },
  { key: 'x', label: '@efabvx', url: 'https://x.com/efabvx' },
  { key: 'qiita', label: '@efabvx', url: 'https://qiita.com/efabvx' },
  { key: 'mail', label: 'efabvx@gmail.com', url: 'mailto:efabvx@gmail.com' },
] as const;
export type SnsItem = (typeof sns)[number];
