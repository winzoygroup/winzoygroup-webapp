import TextCard from '@/assets/cards/TextCard';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function Coaching() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('homepage-coaching-1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/home-coaching.json',
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
              Coaching
            </Typography>
            <Typography variant="subTitle" component="h4">
              Learn what is necessary and <span>UNLOAD THE REST</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              We can help you with any language test planning, whether it is for
              your advanced education or movement (for example PTE and NAATI
              CCL).
            </Typography>
            <Stack direction={'row'} sx={{ flexWrap: 'wrap' }}>
              <TextCard href={'/coaching/pte-coaching'}>PTE Coaching</TextCard>
              <TextCard href={'/coaching/personalised-online-coaching'}>
                Personalised Online Coaching
              </TextCard>
            </Stack>
            <Link href={'/coaching/pte-coaching'} passHref>
              <Button size="large" variant="outlined" sx={{ mt: 2 }}>
                Know More
              </Button>
            </Link>
          </Grid>

          <Grid item md={6}>
            {/* <Box
              id="homepage-coaching-1"
              sx={{ '& svg+svg': { display: 'none' } }}
            ></Box> */}
            <Image
              src="/images/118-1188674_ielts-students-png-indian-coaching-students.png"
              width="820"
              height="571"
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
