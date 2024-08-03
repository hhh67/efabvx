import gumi from '@/images/gumi.png?url';
import hoshino from '@/images/hoshino.png?url';
import profileBackground from '@/images/profileBackground.png?url';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export const ProfileContent: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(232, 247, 255, 1) 100%),
          url(${profileBackground})
        `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '160px',
      }}
      width="100%"
    >
      <Stack
        direction={'column-reverse'}
        minHeight={'160px'}
        width={'100%'}
        px={2}
      >
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Box
            width={'70px'}
            height={'70px'}
            borderRadius={9999}
            border={'4px solid'}
            borderColor={'#aa33aa'}
          >
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
              <Box
                component="img"
                src={gumi}
                width={'100%'}
                onClick={() => setFlipped(!flipped)}
                onDrag={() => setFlipped(!flipped)}
              />
              <Box
                component="img"
                src={hoshino}
                width={'100%'}
                onClick={() => setFlipped(!flipped)}
                onDrag={() => setFlipped(!flipped)}
              />
            </ReactCardFlip>
          </Box>
          <Typography variant="h6" fontWeight="bold">
            Hoshino
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
