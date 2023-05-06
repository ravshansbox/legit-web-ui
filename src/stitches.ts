import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        gray100: 'hsl(220, 14%, 96%)',
        gray200: 'hsl(220, 13%, 91%)',
        gray300: 'hsl(216, 12%, 84%)',
        gray400: 'hsl(218, 11%, 65%)',

        green400: 'hsl(158, 64%, 52%)',

        pink400: 'hsl(329, 86%, 70%)',

        blue400: 'hsl(213, 94%, 68%)',

        primary: '$blue400',
      },
      space: {
        1: '4px',
        2: '8px',
      },
    },
  });
