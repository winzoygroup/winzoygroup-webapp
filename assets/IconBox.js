import { Box, Icon } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import Lottie from 'lottie-web';

export default function IconBox({ a_id, path }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(a_id),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: path,
    });
  }, []);
  return (
    <Box
      sx={{
        width: { md: 70, xs: 40 },
        height: { md: 70, xs: 40 },
        bgcolor: '#fff',
        boxShadow: 'var(--lg-shadow)',
        p: { md: '10px', xs: '5px' },
        borderRadius: 100,
        overflow: 'hidden',
        '& svg+svg': {
          display: 'none',
        },
      }}
      id={a_id}
    ></Box>
  );
}
