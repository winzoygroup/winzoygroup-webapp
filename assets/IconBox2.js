import { Box, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import React from 'react';
import { useEffect } from 'react';

export default function IconBox2({ path, id, num, title }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: path,
    });
  }, [id, path]);
  return (
    <Box sx={{ maxWidth: 250, textAlign: 'center' }}>
      <Box
        id={id}
        sx={{ '& svg+svg': { display: 'none' }, width: 150, mx: 'auto' }}
      ></Box>
      <Typography variant="title" component="p" sx={{ fontWeight: 700 }}>
        {num}
      </Typography>
      <Typography variant="subTitle" sx={{ fontSize: 15 }} component="p">
        {title}
      </Typography>
    </Box>
  );
}
