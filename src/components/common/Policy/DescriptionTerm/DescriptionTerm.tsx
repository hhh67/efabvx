import { Typography } from '@mui/material';

type DescriptionTermProps = {
  term: string;
};

export const DescriptionTerm: React.FC<DescriptionTermProps> = ({
  term,
}: DescriptionTermProps) => {
  return (
    <Typography component={'dt'} variant="h6" fontWeight={'bold'} mb={1}>
      {term}
    </Typography>
  );
};
