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
              <Typography variant="subTitle" component="h2">
                Who we are
              </Typography>{' '}
              <Typography variant="title" component="h2">
                Bringing Your <span>Dream of Studying</span> Abroad to Life
              </Typography>
              <Typography component={'p'} sx={{ mt: 1 }}>
                Winzoy Education is a well-known provider of study visa
                services, specializing in assisting students who wish to study
                in Singapore and Australia. With our innovative methods and
                unwavering commitment to delivering top-notch services, we have
                established a strong reputation in the industry. Our goal is to
                simplify the visa application process, ensuring that students
                can embark on their educational journeys without difficulty.
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
