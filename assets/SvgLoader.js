import { Box } from '@mui/material';
import Lottie from 'lottie-web';
import React, { useEffect } from 'react';

export default function SvgLoader({ src, id }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: src,
    });
  }, [src, id]);
  return <Box sx={{ '& svg+svg': { display: 'none' } }} id={id}></Box>;
}
