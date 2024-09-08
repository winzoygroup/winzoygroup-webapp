import { Box, Container, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Media() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('homepage-media-1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/home-media.json',
    });
  }, []);
  return (
    <Box>
      <Container sx={{ my: 7 }}>
        <Grid
          container
          spacing={5}
          alignItems={'center'}
          sx={{ flexDirection: { md: 'row', xs: 'column-reverse' } }}
        >
          <Grid item md={6}>
            <Typography variant="title" component="h2">
              As Seen in Media
            </Typography>
            <Typography variant="subTitle" component="h4">
              Featured <span>ACROSS</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              We are featured in almost every promianent media group for our
              customer-centric approach and solution-oriented services.
            </Typography>
          </Grid>

          <Grid item md={6}>
            {/* <Box
              id="homepage-media-1"
              sx={{ '& svg+svg': { display: 'none' } }}
            ></Box> */}
            <Image
              src="/images/Untitled-design-3.jpg"
              width="832"
              height="851"
              className="img"
              alt="home education1"
              priority
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
