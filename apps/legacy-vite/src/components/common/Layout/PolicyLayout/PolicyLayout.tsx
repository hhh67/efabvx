import { Box, Typography } from '@mui/material';

type PolicyLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  title,
  children,
}: PolicyLayoutProps) => {
  return (
    <Box m={2}>
      <Typography variant="h5" fontWeight={'bold'} mb={0.5}>
        {title}
      </Typography>
      <Typography variant="h6" fontWeight={'bold'} mb={2}>
        プライバシーポリシー
      </Typography>
      {children}
    </Box>
  );
};
