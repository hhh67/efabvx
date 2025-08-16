export const apps = [
  {
  key: 'qiitaReader',
    name: 'QiitaReader',
    description: 'Qiitaをもっと快適に利用したい開発者のためのアプリ',
    url: 'https://apps.apple.com/jp/app/id6470926641',
  },
  {
    key: 'gymlog',
    name: 'ジムログ',
    description: 'シンプルで使い勝手のいいトレーニング記録アプリ',
    url: 'https://apps.apple.com/jp/app/id6479692718',
  },
  {
    key: 'moonPfase',
    name: 'MoonPfase',
    description: '美しいグラフィックの月の満ち欠けカレンダー',
    url: 'https://apps.apple.com/jp/app/id6499499347',
  },
  {
    key: 'picgle',
    name: 'Picgle',
    description: '画像でWeb検索ができるアプリ',
    url: 'https://apps.apple.com/jp/app/id6563143030',
  },
] as const;
export type AppItem = (typeof apps)[number];
