import { SNS } from '@/constants';
import GymlogAppIcon from '@/images/gymlog/appicon.png?url';
import MoonPfaseAppIcon from '@/images/moon-pfase/appicon.png?url';
import PicgleAppIcon from '@/images/picgle/appicon.png?url';
import QiitaReaderAppIcon from '@/images/qiita-reader/appicon.png?url';
import theme from '@/theme';
import { Stack, Typography } from '@mui/material';
import { AccordionSection } from './AccordionSection';
import { AppCard } from './AppCard';
import { Section } from './Section';
import { SnsCard } from './SnsCard';

export const Mobile: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={4}>
      <Stack direction={'column'} spacing={1}>
        {/* 🍎 Apps */}
        <AccordionSection title={'🍎　Apps'}>
          <Stack direction={'column'} spacing={2}>
            <Typography variant="body2">
              個人で開発したアプリケーションの一覧です。
            </Typography>
            <Typography variant="body2">
              企画、デザイン、開発、運用まで
              <br />
              一貫して行っております🧑‍💻
            </Typography>
            <Typography variant="body2">
              詳細は各アプリのページをご覧ください。
            </Typography>
            <AppCard
              app={{
                displayName: 'QiitaReader',
                description:
                  'Qiitaをもっと快適に利用したい開発者のためのアプリ',
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
        </AccordionSection>

        {/* 🌏 SNS */}
        <AccordionSection title={'🌏　SNS'}>
          <Stack direction={'column'} spacing={2}>
            <Typography variant="body2">
              フォローしていただけると泣いて喜びます
            </Typography>
            <SnsCard
              sns={{
                description: SNS.INSTAGRAM.DESCRIPTION,
                iconSrc: SNS.INSTAGRAM.ICON_SRC,
                url: SNS.INSTAGRAM.URL,
              }}
              variant="light"
              background={theme.palette.background.instagram}
            />
            <SnsCard
              sns={{
                description: SNS.X.DESCRIPTION,
                iconSrc: SNS.X.ICON_SRC,
                url: SNS.X.URL,
              }}
              variant="light"
              background={theme.palette.background.x}
            />
            <SnsCard
              sns={{
                description: SNS.GITHUB.DESCRIPTION,
                iconSrc: SNS.GITHUB.ICON_SRC,
                url: SNS.GITHUB.URL,
              }}
              variant="dark"
              background={theme.palette.background.github}
            />
            <SnsCard
              sns={{
                description: SNS.QIITA.DESCRIPTION,
                iconSrc: SNS.QIITA.ICON_SRC,
                url: SNS.QIITA.URL,
              }}
              variant="light"
              background={theme.palette.background.qiita}
            />
          </Stack>
        </AccordionSection>
      </Stack>

      {/* ✉️ Contact */}
      <Section title="Contact">
        <Typography variant="body2">メールにて承ります。</Typography>
        <SnsCard
          sns={{
            description: SNS.MAIL.DESCRIPTION,
            iconSrc: SNS.MAIL.ICON_SRC,
            url: SNS.MAIL.URL,
          }}
          variant="light"
          background={theme.palette.background.mail}
        />
      </Section>
    </Stack>
  );
};
