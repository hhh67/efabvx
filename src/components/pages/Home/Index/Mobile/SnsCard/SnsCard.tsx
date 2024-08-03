import blankIconDark from '@/images/blankIconDark.png?url';
import blankIconLignt from '@/images/blankIconLight.png?url';
import { Box, Card, Link, Stack, Typography } from '@mui/material';
type SnsCardProps = {
  sns: {
    description: string;
    iconSrc: any;
    url: string;
  };
  background: string;
  variant: 'light' | 'dark';
};

export const SnsCard: React.FC<SnsCardProps> = ({
  sns,
  background,
  variant,
}: SnsCardProps) => {
  return (
    <Link
      href={sns.url}
      component={'a'}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: 'none' }}
    >
      <Card variant="outlined" sx={{ background: background }}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={2}
        >
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Box
              component="img"
              src={sns.iconSrc}
              alt={sns.description}
              width="40px"
            />
            <Typography
              variant="body1"
              fontFamily={"'Courier New', Courier, monospace"}
              fontWeight={'bold'}
              color={variant === 'light' ? 'white' : 'black'}
            >
              {sns.description}
            </Typography>
          </Stack>

          <Box
            component="img"
            src={variant === 'light' ? blankIconLignt : blankIconDark}
            alt="Open New Tab"
            width="16px"
            sx={{ objectFit: 'contain' }}
          />
        </Stack>
      </Card>
    </Link>
  );
};
