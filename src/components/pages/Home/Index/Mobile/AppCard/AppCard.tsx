import AppStoreLogo from '@/images/appStoreLogo.svg?url';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';

type AppCardProps = {
  app: {
    displayName: string;
    description: string;
    iconSrc: any;
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
            width="60px"
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
        <Stack direction={'column'} spacing={2}>
          <Typography variant="body2" px={1} textAlign={'center'}>
            {app.description}
          </Typography>
          <Stack direction="row-reverse">
            <Box
              component="img"
              src={AppStoreLogo}
              alt="App Store"
              width="120px"
              justifySelf={'flex-start'}
              sx={{ alignSelf: 'center' }}
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
