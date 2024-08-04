import { Box, Grid, Popover, Typography } from '@mui/material';
import React from 'react';

type SkillIconProps = {
  icon: any;
  title: string;
};

export const SkillIcon: React.FC<SkillIconProps> = ({
  icon,
  title,
}: SkillIconProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        item
        xs={2.4}
        sm={2.4}
        md={2.4}
        lg={2.4}
        xl={2.4}
        height={'54px'}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box
          component={'img'}
          src={icon}
          width={'32px'}
          sx={{ objectFit: 'contain' }}
        />
      </Grid>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{title}</Typography>
      </Popover>
    </>
  );
};
