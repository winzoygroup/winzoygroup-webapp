import SvgLoader from '@/assets/SvgLoader';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutMain() {
  return (
    <Box sx={{ my: 7 }}>
      <Container>
        <Grid
          container
          spacing={5}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ flexDirection: { md: 'row', xs: 'column-reverse' } }}
        >
          <Grid item md={6}>
            <Typography variant="title" component="h1" fontSize={28}>
              Leading Migration Agents & Education Consultants in Australia
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Welcome to our legitimate firm of enlisted movement specialists
              and schooling advisors situated in Australia. With a broad history
              of achievement, we have gladly served more than 50,000 fulfilled
              clients.
            </Typography>{' '}
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Our devoted group of specialists is focused on directing you
              through the intricacies of the movement cycle or your instructive
              undertakings in Australia. As enlisted experts, we work with
              complete adherence to moral guidelines, guaranteeing
              straightforward and solid administrations for every one of our
              clients.
            </Typography>
            <Typography variant="p" component="p">
              Venture out towards your relocation objectives or instructive
              dreams today.
              <Link href={'/contact-us'} className="link">
                {' '}
                Contact us
              </Link>{' '}
              for a consultation.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Image
              src={'/images/about/about.jpg'}
              alt="WinzoyGroup"
              width={'640'}
              height={'427'}
              priority
              className="img-fluid"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
