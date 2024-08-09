import blankIconDark from '@/images/blankIconDark.png?url';
import blankIconLignt from '@/images/blankIconLight.png?url';
import { Box, Card, Link, Stack, Typography } from '@mui/material';
type LinkCardProps = {
  detail: {
    description: string;
    iconSrc: any;
    url: string;
  };
  background: string;
  variant: 'light' | 'dark';
  rounded?: boolean;
};

export const LinkCard: React.FC<LinkCardProps> = ({
  detail,
  background,
  variant,
  rounded = true,
}: LinkCardProps) => {
  return (
    <Link
      href={detail.url}
      component={'a'}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: 'none', '&:hover': { opacity: 0.5 } }}
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
              src={detail.iconSrc}
              alt={detail.description}
              width="40px"
              borderRadius={!rounded ? 1 : undefined}
            />
            <Typography
              variant="body1"
              fontFamily={"'Courier New', Courier, monospace"}
              fontWeight={'bold'}
              color={variant === 'light' ? 'white' : 'black'}
            >
              {detail.description}
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
