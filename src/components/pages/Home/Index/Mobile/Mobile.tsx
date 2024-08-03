import GymlogAppIcon from '@/images/gymlog/appicon.png?url';
import MoonPfaseAppIcon from '@/images/moon-pfase/appicon.png?url';
import PicgleAppIcon from '@/images/picgle/appicon.png?url';
import QiitaReaderAppIcon from '@/images/qiita-reader/appicon.png?url';
import theme from '@/theme';
import { Stack } from '@mui/material';
import { AppCard } from './AppCard';

export const Mobile: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={2}>
      <AppCard
        app={{
          displayName: 'QiitaReader',
          description: 'Qiitaをもっと快適に利用したい開発者のためのアプリ',
          iconSrc: QiitaReaderAppIcon,
        }}
        background={theme.palette.background.qiitaReader}
      />
      <AppCard
        app={{
          displayName: 'ジムログ',
          description: 'シンプルで使い勝手のいいトレーニング記録アプリ',
          iconSrc: GymlogAppIcon,
        }}
        background={theme.palette.background.gymlog}
      />
      <AppCard
        app={{
          displayName: 'MoonPfase',
          description: '美しいグラフィックの月の満ち欠けカレンダー',
          iconSrc: MoonPfaseAppIcon,
        }}
        background={theme.palette.background.moonPfase}
      />
      <AppCard
        app={{
          displayName: 'Picgle',
          description: '画像でWeb検索ができるアプリ',
          iconSrc: PicgleAppIcon,
        }}
        background={theme.palette.background.picgle}
      />
    </Stack>
  );
};
