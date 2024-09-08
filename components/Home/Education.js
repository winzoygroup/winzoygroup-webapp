import TextCard from '@/assets/cards/TextCard';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Lottie from 'lottie-web';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Education() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('homepage-education-1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/home-education1.json',
    });
  }, []);
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={5}
          alignItems={'center'}
          sx={{ flexDirection: { md: 'row', xs: 'column-reverse' } }}
        >
          <Grid item md={6}>
            <Typography variant="title" component="h2">
              Education
            </Typography>
            <Typography
              variant="subTitle"
              sx={{ textTransform: 'unset' }}
              component="h4"
            >
              World-Class Education Aligned with <span>Your Goals</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              World-Class Education Aligned with Your Goals Leverage our expert
              guidance to help you choose the right schools and courses.
            </Typography>
            <Stack direction={'row'} sx={{ flexWrap: 'wrap' }}>
              <TextCard href={'/migration/student-visa'}>Student Visa</TextCard>
              {/* <TextCard>Cost & Expenses</TextCard> */}
              <TextCard href={'/education/education-system'}>
                Education System
              </TextCard>
              <TextCard href={'/education/popular-courses'}>
                Popular Courses
              </TextCard>
              <TextCard href={'/education/student-visa-process'}>
                Student Visa Process
              </TextCard>
            </Stack>
          </Grid>
          <Grid item md={6}>
            {/* <Box
              id="homepage-education-1"
              sx={{ '& svg+svg': { display: 'none' } }}
            ></Box> */}
            <Image
              src="/images/1676393144-GettyImages-1361844238.webp"
              width="720"
              height="540"
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
