import { APP, SNS } from '@/constants';
import theme from '@/theme';
import { Stack, Typography } from '@mui/material';
import { AccordionSection } from '../AccordionSection';
import { AppCard } from '../AppCard';
import { SnsCard } from '../SnsCard';

export const AboutContent: React.FC = () => {
  return (
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
              displayName: APP.QIITA_READER.DISPLAY_NAME,
              description: APP.QIITA_READER.DESCRIPTION,
              iconSrc: APP.QIITA_READER.ICON_SRC,
              storeId: APP.QIITA_READER.STORE_ID,
            }}
            background={theme.palette.background.qiitaReader}
          />
          <AppCard
            app={{
              displayName: APP.GYMLOG.DISPLAY_NAME,
              description: APP.GYMLOG.DESCRIPTION,
              iconSrc: APP.GYMLOG.ICON_SRC,
              storeId: APP.GYMLOG.STORE_ID,
            }}
            background={theme.palette.background.gymlog}
          />
          <AppCard
            app={{
              displayName: APP.MOON_PFASE.DISPLAY_NAME,
              description: APP.MOON_PFASE.DESCRIPTION,
              iconSrc: APP.MOON_PFASE.ICON_SRC,
              storeId: APP.MOON_PFASE.STORE_ID,
            }}
            background={theme.palette.background.moonPfase}
          />
          <AppCard
            app={{
              displayName: APP.PICGLE.DISPLAY_NAME,
              description: APP.PICGLE.DESCRIPTION,
              iconSrc: APP.PICGLE.ICON_SRC,
              storeId: APP.PICGLE.STORE_ID,
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
  );
};
