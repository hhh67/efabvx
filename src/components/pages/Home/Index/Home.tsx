import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Typography } from '@mui/material';
import { Mobile } from './Mobile';

export const Home: React.FC = () => {
  const isMobile = useMediaQuery();

  return <>{isMobile ? <Mobile /> : <Typography>TODO</Typography>}</>;
};
