import { Box, Stack, Typography } from '@mui/material';

type SkillHeaderProps = {
  title: string;
  icon: any;
};

export const SkillHeader: React.FC<SkillHeaderProps> = ({
  title,
  icon,
}: SkillHeaderProps) => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1}>
      <Box
        component={'img'}
        src={icon}
        width={'20px'}
        sx={{ objectFit: 'contain' }}
      />
      <Typography variant="body1" fontWeight={'bold'}>
        {title}
      </Typography>
    </Stack>
  );
};
