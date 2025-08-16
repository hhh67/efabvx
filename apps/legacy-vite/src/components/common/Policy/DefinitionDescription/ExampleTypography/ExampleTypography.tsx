import { Typography } from '@mui/material';

type ExampleTypographyProps = {
  children: React.ReactNode;
};

export const ExampleTypography: React.FC<ExampleTypographyProps> = ({
  children,
}: ExampleTypographyProps) => {
  return (
    <Typography component={'i'} pl={2} variant="body2" fontWeight={'bold'}>
      {children}
    </Typography>
  );
};
