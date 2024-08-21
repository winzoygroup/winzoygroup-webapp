import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import React, { useEffect } from 'react';

export default function IconCard2({
  title,
  id,
  src,
  numb,
  fontSize,
  boxShadow,
}) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: src,
    });
  }, []);
  return (
    <Card
      sx={{
        boxShadow: !boxShadow ? 'var(--shadow)' : 'none',
        textAlign: 'center',
        px: 3,
        m: 3,
        width: '100%',
        maxWidth: 240,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems={'center'} sx={{ mb: 2 }}>
          {src && (
            <Box
              sx={{
                '& svg+svg': { display: 'none' },
                height: 70,
              }}
              id={id}
            ></Box>
          )}
          <Typography
            variant="subTitle"
            component={'h5'}
            sx={{ fontSize: fontSize ? fontSize : '0.8rem' }}
          >
            {title}
          </Typography>
        </Stack>
        {numb && (
          <Typography fontSize={25} fontWeight={700}>
            {numb}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
