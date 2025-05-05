import React from 'react';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const outlinePulse = keyframes`
  0% {
    text-shadow: 
      -1px -1px 0 red,
       1px -1px 0 orange,
      -1px  1px 0 yellow,
       1px  1px 0 lime;
  }
  25% {
    text-shadow: 
      -1px -1px 0 orange,
       1px -1px 0 yellow,
      -1px  1px 0 lime,
       1px  1px 0 cyan;
  }
  50% {
    text-shadow: 
      -1px -1px 0 yellow,
       1px -1px 0 lime,
      -1px  1px 0 cyan,
       1px  1px 0 blue;
  }
  75% {
    text-shadow: 
      -1px -1px 0 lime,
       1px -1px 0 cyan,
      -1px  1px 0 blue,
       1px  1px 0 magenta;
  }
  100% {
    text-shadow: 
      -1px -1px 0 red,
       1px -1px 0 orange,
      -1px  1px 0 yellow,
       1px  1px 0 lime;
  }
`;

const AnimatedOutlineText = () => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: 'black',
        animation: `${outlinePulse} 3s infinite linear`,
        fontWeight: 'bold',
      }}
    >
      Orhun Yeğenağa
    </Typography>
  );
};

export default AnimatedOutlineText;