import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function HeroBarTwo() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 'calc(100vh - 70px)',
        overflow: 'hidden',
        '& video': {
          width: { md: '100%', xs: 'auto' },
          height: { md: 'auto', xs: '100%' },
          position: 'absolute',
          top: '0',
          left: 0,
          zIndex: -1,
        },
      }}
    >
      <video
        className="videoembed"
        autoPlay="true"
        muted
        loop
        preload="true"
        poster="/videos/poster.png"
      >
        <source
          src="/videos/pexels-german-korb-3612113-1280x720-30fps.mp4"
          type="video/mp4"
        />
      </video>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: 'rgb(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Dream Career,
            <br />
            <span
              style={{
                color: '#A4123E',
                '-webkit-text-stroke-width': 0.5,
                '-webkit-text-stroke-color': '#fff',
              }}
            >
              PROMISING
            </span>{' '}
            <span
              style={{
                color: '#A4123E',
                '-webkit-text-stroke-width': 0.5,
                '-webkit-text-stroke-color': '#fff',
              }}
            >
              FUTURE
            </span>{' '}
            & Top University Education
          </Typography>
          <Link href={'/about'} passHref>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, px: 3 }}
              color="white"
            >
              Explore Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
