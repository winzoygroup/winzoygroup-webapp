import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

export default function AboutComp() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('about-img-1'),
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      path: '/animation/about-us1.json',
    });
  }, []);
  return (
    <Box>
      <Container sx={{ py: 4, mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6}>
            {/* <Box
              id="about-img-1"
              sx={{ '& svg+svg': { display: 'none' } }}
            ></Box> */}
            <Image
              src="/images/dump/home-page1.jpg"
              width="736"
              height="607"
              className="img"
              alt="Home About"
              priority
            />
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="title" component="h2">
                Who we are
              </Typography>
              <Typography variant="subTitle" component="h2">
                Bringing your <span>DREAM</span> abroad to life
              </Typography>
              <Typography component={'p'} sx={{ mt: 1 }}>
                A well-known supplier of study visa services, Winzoy Education
                focuses on helping students who want to study in Singapore and
                Australia. With our innovative methods and constant dedication
                to providing top-notch services, we have made a name for
                ourselves in the sector. Our objective is to make the visa
                application procedure as simple as possible so that students can
                travel without difficulty.
              </Typography>
              <Link href={'/about'} passHref>
                <Button variant="outlined" size="large" sx={{ mt: 2 }}>
                  Know More
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
