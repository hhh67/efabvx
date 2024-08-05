import GymlogAppIcon from '@/images/gymlog/appicon.png?url';
import MoonPfaseAppIcon from '@/images/moon-pfase/appicon.png?url';
import PicgleAppIcon from '@/images/picgle/appicon.png?url';
import QiitaReaderAppIcon from '@/images/qiita-reader/appicon.png?url';
import GithubIcon from '@/images/sns/github.png?url';
import InstagramIcon from '@/images/sns/instagram.png?url';
import MailIcon from '@/images/sns/mail.png?url';
import QiitaIcon from '@/images/sns/qiita.png?url';
import XIcon from '@/images/sns/x.png';

export const APP = {
  QIITA_READER: {
    DISPLAY_NAME: 'QiitaReader',
    DESCRIPTION: 'Qiitaをもっと快適に利用したい開発者のためのアプリ',
    ICON_SRC: QiitaReaderAppIcon,
    STORE_ID: 6470926641,
  },
  GYMLOG: {
    DISPLAY_NAME: 'ジムログ',
    DESCRIPTION: 'シンプルで使い勝手のいいトレーニング記録アプリ',
    ICON_SRC: GymlogAppIcon,
    STORE_ID: 6479692718,
  },
  MOON_PFASE: {
    DISPLAY_NAME: 'MoonPfase',
    DESCRIPTION: '美しいグラフィックの月の満ち欠けカレンダー',
    ICON_SRC: MoonPfaseAppIcon,
    STORE_ID: 6499499347,
  },
  PICGLE: {
    DISPLAY_NAME: 'Picgle',
    DESCRIPTION: '画像でWeb検索ができるアプリ',
    ICON_SRC: PicgleAppIcon,
    STORE_ID: 6563143030,
  },
} as const;

export const SNS = {
  INSTAGRAM: {
    URL: 'https://www.instagram.com/gangimaly',
    ICON_SRC: InstagramIcon,
    DESCRIPTION: '@gangimaly',
  },
  GITHUB: {
    URL: 'https://github.com/hhh67',
    ICON_SRC: GithubIcon,
    DESCRIPTION: '@hhh67',
  },
  X: {
    URL: 'https://x.com/efabvx',
    ICON_SRC: XIcon,
    DESCRIPTION: '@efabvx',
  },
  QIITA: {
    URL: 'https://qiita.com/efabvx',
    ICON_SRC: QiitaIcon,
    DESCRIPTION: '@efabvx',
  },
  MAIL: {
    URL: 'mailto:efabvx@gmail.com',
    ICON_SRC: MailIcon,
    DESCRIPTION: 'efabvx@gmail.com',
  },
} as const;
