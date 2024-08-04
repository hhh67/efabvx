import androidStudioIcon from '@/images/skill/androidStudio.png?url';
import appleIcon from '@/images/skill/apple.png?url';
import awsIcon from '@/images/skill/aws.png?url';
import backendIcon from '@/images/skill/backend.png?url';
import backlogIcon from '@/images/skill/backlog.png?url';
import bootstrapIcon from '@/images/skill/bootstrap.png?url';
import bunIcon from '@/images/skill/bun.png?url';
import chatgptIcon from '@/images/skill/chatgpt.png?url';
import cocoapodsIcon from '@/images/skill/cocoapods.png?url';
import css3Icon from '@/images/skill/css3.png?url';
import dockerIcon from '@/images/skill/docker.png?url';
import echoIcon from '@/images/skill/echo.png?url';
import eslintIcon from '@/images/skill/eslint.png?url';
import figmaIcon from '@/images/skill/figma.png?url';
import firebaseIcon from '@/images/skill/firebase.png?url';
import frontendIcon from '@/images/skill/frontend.png?url';
import gcpIcon from '@/images/skill/gcp.png?url';
import gitIcon from '@/images/skill/git.png?url';
import githubIcon from '@/images/skill/github.png?url';
import githubCopilot from '@/images/skill/githubCopilot.png?url';
import goIcon from '@/images/skill/go.png?url';
import gormIcon from '@/images/skill/gorm.png?url';
import html5Icon from '@/images/skill/html5.png?url';
import javascriptIcon from '@/images/skill/javascript.png?url';
import jiraIcon from '@/images/skill/jira.png?url';
import jotaiIcon from '@/images/skill/jotai.png?url';
import jqueryIcon from '@/images/skill/jquery.png?url';
import laravelIcon from '@/images/skill/laravel.png?url';
import linuxIcon from '@/images/skill/linux.png?url';
import middlewareIcon from '@/images/skill/middleware.png?url';
import mobileIcon from '@/images/skill/mobile.png?url';
import muiIcon from '@/images/skill/mui.png?url';
import mysqlIcon from '@/images/skill/mysql.png?url';
import nginxIcon from '@/images/skill/nginx.png?url';
import nodejsIcon from '@/images/skill/nodejs.png?url';
import notionIcon from '@/images/skill/notion.png?url';
import npmIcon from '@/images/skill/npm.png?url';
import openapiIcon from '@/images/skill/openapi.png?url';
import orvalIcon from '@/images/skill/orval.png?url';
import otherIcon from '@/images/skill/other.png?url';
import phpIcon from '@/images/skill/php.png?url';
import postgresqlIcon from '@/images/skill/postgresql.png?url';
import postmanIcon from '@/images/skill/postman.png?url';
import prettierIcon from '@/images/skill/prettier.png?url';
import raycastIcon from '@/images/skill/raycast.png?url';
import reactIcon from '@/images/skill/react.png?url';
import reactHookFormIcon from '@/images/skill/reactHookForm.png?url';
import reactRouterIcon from '@/images/skill/reactRouter.png?url';
import redisIcon from '@/images/skill/redis.png?url';
import reduxIcon from '@/images/skill/redux.png?url';
import rollupIcon from '@/images/skill/rollup.png?url';
import slackIcon from '@/images/skill/slack.png?url';
import storybookIcon from '@/images/skill/storybook.png?url';
import swaggerIcon from '@/images/skill/swagger.png?url';
import swiftIcon from '@/images/skill/swift.png?url';
import trelloIcon from '@/images/skill/trello.png?url';
import typescriptIcon from '@/images/skill/typescript.png?url';
import viteIcon from '@/images/skill/vite.png?url';
import vscodeIcon from '@/images/skill/vscode.png?url';
import xcodeIcon from '@/images/skill/xcode.png?url';
import yarnIcon from '@/images/skill/yarn.png?url';
import zodIcon from '@/images/skill/zod.png?url';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { AccordionSection } from '../../AccordionSection';
import { SkillHeader } from './SkillHeader';
import { SkillIcon } from './SkillIcon';

export const SkillsSection: React.FC = () => {
  return (
    <AccordionSection title={'🧠　Skills'}>
      <Box mb={4}>
        {/* TODO: フロント、バック、モバイルとかの内訳を書く */}
        <Typography variant="body2">
          普段は以下のような技術 / ツールを使用して開発しております🧑‍💻
        </Typography>
      </Box>

      <Stack direction={'column'} spacing={4}>
        {/* Frontend */}
        <Stack direction={'column'} spacing={1}>
          <SkillHeader title={'Frontend'} icon={frontendIcon} />
          <Box justifyContent={'center'} alignItems={'center'}>
            <Grid container mx={'auto'}>
              <SkillIcon icon={html5Icon} title={'HTML5'} />
              <SkillIcon icon={css3Icon} title={'CSS3'} />
              <SkillIcon icon={bootstrapIcon} title={'Bootstrap'} />
              <SkillIcon icon={javascriptIcon} title={'JavaScript'} />
              <SkillIcon icon={typescriptIcon} title={'TypeScript'} />
              <SkillIcon icon={reactIcon} title={'React'} />
              <SkillIcon icon={muiIcon} title={'Material-UI'} />
              <SkillIcon icon={reactRouterIcon} title={'React Router'} />
              <SkillIcon icon={reactHookFormIcon} title={'React Hook Form'} />
              <SkillIcon icon={zodIcon} title={'Zod'} />
              <SkillIcon icon={jotaiIcon} title={'Jōtai'} />
              <SkillIcon icon={reduxIcon} title={'Redux'} />
              <SkillIcon icon={orvalIcon} title={'Orval'} />
              <SkillIcon icon={storybookIcon} title={'Storybook'} />
              <SkillIcon icon={rollupIcon} title={'Rollup.js'} />
              <SkillIcon icon={eslintIcon} title={'ESLint'} />
              <SkillIcon icon={prettierIcon} title={'Prettier'} />
              <SkillIcon icon={viteIcon} title={'Vite.js'} />
              <SkillIcon icon={npmIcon} title={'npm'} />
              <SkillIcon icon={bunIcon} title={'Bun'} />
              <SkillIcon icon={laravelIcon} title={'Laravel'} />
              <SkillIcon icon={jqueryIcon} title={'jQuery'} />
            </Grid>
          </Box>
        </Stack>

        {/* Backend */}
        <Stack direction={'column'} spacing={1}>
          <SkillHeader title={'Backend'} icon={backendIcon} />
          <Box justifyContent={'center'} alignItems={'center'}>
            <Grid container mx={'auto'}>
              <SkillIcon icon={phpIcon} title={'PHP'} />
              <SkillIcon icon={laravelIcon} title={'Laravel'} />
              <SkillIcon icon={goIcon} title={'Golang'} />
              <SkillIcon icon={echoIcon} title={'Echo'} />
              <SkillIcon icon={gormIcon} title={'GORM'} />
              <SkillIcon icon={nodejsIcon} title={'Node.js'} />
              <SkillIcon icon={typescriptIcon} title={'TypeScript'} />
            </Grid>
          </Box>
        </Stack>

        {/* Mobile */}
        <Stack direction={'column'} spacing={1}>
          <SkillHeader title={'Mobile'} icon={mobileIcon} />
          <Box justifyContent={'center'} alignItems={'center'}>
            <Grid container mx={'auto'}>
              <SkillIcon icon={swiftIcon} title={'Swift/SwiftUI'} />
              <SkillIcon icon={cocoapodsIcon} title={'CocoaPods'} />
              <SkillIcon icon={firebaseIcon} title={'Firebase'} />
              <SkillIcon icon={reactIcon} title={'React Native'} />
              <SkillIcon icon={typescriptIcon} title={'TypeScript'} />
              <SkillIcon icon={yarnIcon} title={'Yarn'} />
              <SkillIcon icon={xcodeIcon} title={'Xcode'} />
              <SkillIcon icon={androidStudioIcon} title={'Android Studio'} />
            </Grid>
          </Box>
        </Stack>

        {/* Infrastructure/Middleware */}
        <Stack direction={'column'} spacing={1}>
          <SkillHeader
            title={'Infrastructure / Middleware'}
            icon={middlewareIcon}
          />
          <Box justifyContent={'center'} alignItems={'center'}>
            <Grid container mx={'auto'}>
              <SkillIcon icon={awsIcon} title={'Amazon Web Services'} />
              <SkillIcon icon={gcpIcon} title={'Google Cloud Platform'} />
              <SkillIcon icon={firebaseIcon} title={'Firebase'} />
              <SkillIcon icon={mysqlIcon} title={'MySQL'} />
              <SkillIcon icon={postgresqlIcon} title={'PostgreSQL'} />
              <SkillIcon icon={redisIcon} title={'Redis'} />
              <SkillIcon icon={nginxIcon} title={'Nginx'} />
              <SkillIcon icon={dockerIcon} title={'Docker'} />
              <SkillIcon icon={linuxIcon} title={'Linux'} />
              <SkillIcon icon={appleIcon} title={'macOS'} />
            </Grid>
          </Box>
        </Stack>

        {/* Other */}
        <Stack direction={'column'} spacing={1}>
          <SkillHeader title={'Other'} icon={otherIcon} />
          <Box justifyContent={'center'} alignItems={'center'}>
            <Grid container mx={'auto'}>
              <SkillIcon icon={gitIcon} title={'Git'} />
              <SkillIcon icon={githubIcon} title={'GitHub'} />
              <SkillIcon icon={openapiIcon} title={'OpenAPI'} />
              <SkillIcon icon={swaggerIcon} title={'Swagger'} />
              <SkillIcon icon={postmanIcon} title={'Postman'} />
              <SkillIcon icon={githubCopilot} title={'GitHub Copilot'} />
              <SkillIcon icon={chatgptIcon} title={'ChatGPT'} />
              <SkillIcon icon={figmaIcon} title={'Figma'} />
              <SkillIcon icon={vscodeIcon} title={'Visual Studio Code'} />
              <SkillIcon icon={xcodeIcon} title={'Xcode'} />
              <SkillIcon icon={androidStudioIcon} title={'Android Studio'} />
              <SkillIcon icon={slackIcon} title={'Slack'} />
              <SkillIcon icon={notionIcon} title={'Notion'} />
              <SkillIcon icon={backlogIcon} title={'Backlog'} />
              <SkillIcon icon={trelloIcon} title={'Trello'} />
              <SkillIcon icon={jiraIcon} title={'Jira'} />
              <SkillIcon icon={raycastIcon} title={'Raycast'} />
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </AccordionSection>
  );
};
