import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

export default function Theme({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1D2D50',
      },
      secondary: {
        main: '#94143D',
      },
      white: {
        main: '#fff',
      },
    },
    typography: {
      h1: {
        fontSize: 'calc(2.5rem + 0.6vh)',
      },
      nav: {
        fontWeight: 600,
        textTransform: 'capitalize',
        fontSize: 14,
      },
      title: {
        fontSize: 'calc(1.3rem + 0.6vw)',
        textTransform: 'uppercase',
        color: 'var(--asset-color)',
        '& span': {
          color: '#94143D',
        },
      },
      subTitle: {
        fontSize: 'calc(0.8rem + 0.6vw)',
        textTransform: 'uppercase',
        color: 'var(--asset-color)',
        fontWeight: 600,
        '& span': {
          color: 'var(--asset-color2)',
        },
      },
      textLink: {
        fontSize: '1rem',
        fontWeight: 600,
        '&:hover': {
          color: '#94143D',
        },
      },
      fHeading: {
        fontSize: '1.1rem',
        fontWeight: 600,
        textTransform: 'uppercase',
      },
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
