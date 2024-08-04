import { Box } from '@mui/material';

type PolicyLayoutProps = {
  children: React.ReactNode;
};

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  children,
}: PolicyLayoutProps) => {
  return <Box m={2}>{children}</Box>;
};
