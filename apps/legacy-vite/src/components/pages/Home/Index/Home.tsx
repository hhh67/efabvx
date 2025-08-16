import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box } from '@mui/material';
import { Mobile } from './Mobile';

export const Home: React.FC = () => {
  const isMobile = useMediaQuery();

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <Box
          maxWidth={'600px'}
          minHeight={'100vh'}
          mx={'auto'}
          borderLeft={'3px dashed #ccc'}
          borderRight={'3px dashed #ccc'}
        >
          <Mobile />
        </Box>
      )}
    </>
  );
};
