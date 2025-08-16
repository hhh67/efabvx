import AppStoreLogo from '@/images/appStoreLogo.svg?url';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
} from '@mui/material';

type AppCardProps = {
  app: {
    displayName: string;
    description: string;
    iconSrc: any;
    storeId: number;
  };
  background: string;
};

export const AppCard: React.FC<AppCardProps> = ({
  app,
  background,
}: AppCardProps) => {
  return (
    <Card variant="outlined" sx={{ background: background }}>
      <CardHeader
        avatar={
          <Box
            component="img"
            src={app.iconSrc}
            alt={app.displayName}
            width="54px"
            borderRadius={1.5}
          />
        }
        titleTypographyProps={{
          variant: 'h6',
          fontFamily: "'Courier New', Courier, monospace",
          fontWeight: 'bold',
        }}
        title={app.displayName}
      />
      <CardContent>
        <Stack direction={'column'} spacing={1}>
          <Typography variant="body2" px={1} textAlign={'left'}>
            {app.description}
          </Typography>
          <Stack direction="row-reverse">
            <Link
              href={`https://apps.apple.com/jp/app/id${app.storeId}`}
              component={'a'}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Box
                component="img"
                src={AppStoreLogo}
                alt="App Store"
                width="110px"
                justifySelf={'flex-start'}
                sx={{ alignSelf: 'center' }}
              />
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
