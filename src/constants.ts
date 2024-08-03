import GithubIcon from '@/images/sns/github.png?url';
import InstagramIcon from '@/images/sns/instagram.png?url';
import MailIcon from '@/images/sns/mail.png?url';
import QiitaIcon from '@/images/sns/qiita.png?url';
import XIcon from '@/images/sns/x.png';

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
