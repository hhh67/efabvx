import { Typography } from '@mui/material';

type DescriptionListProps = {
  children: React.ReactNode;
};

export const DescriptionList: React.FC<DescriptionListProps> = ({
  children,
}: DescriptionListProps) => {
  return <Typography component={'dt'}>{children}</Typography>;
};
