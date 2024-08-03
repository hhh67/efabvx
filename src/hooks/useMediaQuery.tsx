import { useMediaQuery as useMUIMediaQuery } from '@mui/material';

export const useMediaQuery = () => {
  return useMUIMediaQuery('(max-width: 900px)');
};
