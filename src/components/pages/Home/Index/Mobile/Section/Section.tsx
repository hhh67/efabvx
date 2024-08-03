import { Stack, Typography } from '@mui/material';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  title,
  children,
}: SectionProps) => {
  return (
    <Stack direction={'column'} spacing={1}>
      <Typography variant="h6" fontWeight={'bold'}>
        # {title}
      </Typography>
      {children}
    </Stack>
  );
};
