import { APP, SNS } from '@/constants';
import theme from '@/theme';
import { Stack, Typography } from '@mui/material';
import { AccordionSection } from '../AccordionSection';
import { LinkCard } from '../LinkCard';
import { SkillsSection } from './SkillsSection';

export const AboutContent: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={2}>
      {/* 🍎 Apps */}
      <AccordionSection title={'🍎　Apps'} defaultExpanded>
        <Stack direction={'column'} spacing={2}>
          <Typography variant="body2">
            個人で開発しているアプリケーションの一覧です。
          </Typography>
          <Typography variant="body2">
            企画、デザイン、開発、運用まで
            <br />
            一貫して行っております🧑‍💻
          </Typography>
          <Typography variant="body2">
            詳細は各アプリのページをご覧ください。
          </Typography>
          <LinkCard
            detail={{
              description: APP.QIITA_READER.DISPLAY_NAME,
              iconSrc: APP.QIITA_READER.ICON_SRC,
              url: APP.QIITA_READER.URL,
            }}
            variant="dark"
            background={theme.palette.background.qiitaReader}
            rounded={false}
          />
          <LinkCard
            detail={{
              description: APP.GYMLOG.DISPLAY_NAME,
              iconSrc: APP.GYMLOG.ICON_SRC,
              url: APP.GYMLOG.URL,
            }}
            variant="dark"
            background={theme.palette.background.gymlog}
            rounded={false}
          />
          <LinkCard
            detail={{
              description: APP.MOON_PFASE.DISPLAY_NAME,
              iconSrc: APP.MOON_PFASE.ICON_SRC,
              url: APP.MOON_PFASE.URL,
            }}
            variant="dark"
            background={theme.palette.background.moonPfase}
            rounded={false}
          />
          <LinkCard
            detail={{
              description: APP.PICGLE.DISPLAY_NAME,
              iconSrc: APP.PICGLE.ICON_SRC,
              url: APP.PICGLE.URL,
            }}
            variant="dark"
            background={theme.palette.background.picgle}
            rounded={false}
          />
        </Stack>
      </AccordionSection>

      {/* 🧠 Skills */}
      <SkillsSection />

      {/* 🌏 SNS */}
      <AccordionSection title={'🌏　SNS'}>
        <Stack direction={'column'} spacing={2}>
          <Typography variant="body2">
            フォローしていただけると泣いて喜びます
          </Typography>
          <LinkCard
            detail={{
              description: SNS.INSTAGRAM.DESCRIPTION,
              iconSrc: SNS.INSTAGRAM.ICON_SRC,
              url: SNS.INSTAGRAM.URL,
            }}
            variant="light"
            background={theme.palette.background.instagram}
          />
          <LinkCard
            detail={{
              description: SNS.X.DESCRIPTION,
              iconSrc: SNS.X.ICON_SRC,
              url: SNS.X.URL,
            }}
            variant="light"
            background={theme.palette.background.x}
          />
          <LinkCard
            detail={{
              description: SNS.GITHUB.DESCRIPTION,
              iconSrc: SNS.GITHUB.ICON_SRC,
              url: SNS.GITHUB.URL,
            }}
            variant="dark"
            background={theme.palette.background.github}
          />
          <LinkCard
            detail={{
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
