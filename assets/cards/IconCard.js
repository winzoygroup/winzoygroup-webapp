import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import React, { useEffect } from 'react';

export default function IconCard({ title, id, src, icon, disc, fontSize }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: src,
    });
  }, [id, src]);
  return (
    <Card sx={{ boxShadow: 'var(--shadow)' }}>
      <CardContent>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          sx={{ mb: disc ? 2 : 0 }}
        >
          {src && (
            <Box
              sx={{
                '& svg+svg': { display: 'none' },
                height: 50,
              }}
              id={id}
            ></Box>
          )}
          <Typography
            variant="subTitle"
            component={'h5'}
            sx={{ fontSize: fontSize ? fontSize : '1.3rem' }}
          >
            {title}
          </Typography>
        </Stack>
        {disc && <Typography>{disc}</Typography>}
      </CardContent>
    </Card>
  );
}
