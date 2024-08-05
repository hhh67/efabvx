import { Typography } from '@mui/material';

type DefinitionDescriptionProps = {
  children: React.ReactNode;
};

export const DefinitionDescription: React.FC<DefinitionDescriptionProps> = ({
  children,
}: DefinitionDescriptionProps) => {
  return (
    <Typography component={'dd'} variant="body1" ml={2} mb={2}>
      {children}
    </Typography>
  );
};
