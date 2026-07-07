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
                BRINGING YOUR <span>DREAM OF STUDYING</span> ABROAD TO LIFE
              </Typography>
              <Typography component={'p'} sx={{ mt: 1 }}>
                Winzoy Education is a trusted Australian education consultancy
                dedicated to helping students achieve their academic goals in
                Australia. We provide expert guidance on course selection,
                university admissions, scholarship opportunities, and ongoing
                student support to ensure every student makes informed
                decisions.
              </Typography>{' '}
              <Typography component={'p'}>
                With years of experience and strong partnerships with Australian
                education providers, our team is committed to delivering
                transparent, ethical, and student-focused guidance throughout
                the entire admission journey. Our goal is to make studying in
                Australia a smooth and rewarding experience while helping
                students build successful futures.
                {/* Our goal is to
                simplify the visa application process,  */}
                Our goal is to ensuring that students can embark on their
                educational journeys without difficulty.
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
