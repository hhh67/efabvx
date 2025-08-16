import notFoundImage from '@/images/notFound.png';
import { Box, Stack, Typography } from '@mui/material';

export const ErrorElement: React.FC = () => {
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      maxHeight={'100svh'}
      minHeight={'100svh'}
      spacing={4}
      overflow={'hidden'}
    >
      <Box component={'img'} src={notFoundImage} width={'100px'} />
      <Typography
        variant="body1"
        fontWeight={'bold'}
        color={'text.primary'}
        sx={{ opacity: 0.75 }}
      >
        ページが見つかりません
      </Typography>
    </Stack>
  );
};
