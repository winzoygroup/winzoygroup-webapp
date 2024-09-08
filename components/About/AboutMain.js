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
            <Typography variant="title" component="h1" fontSize={26}>
              Leading Relocation Agents & <span>Education Consultants</span> in
              Australia
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Welcome to our reputable firm of registered relocation specialists
              and education consultants based in Australia. With a proven track
              record of success, we have proudly served over 50,000 satisfied
              clients.
            </Typography>{' '}
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Our dedicated team of experts is committed to guiding you through
              the complexities of the relocation process or your educational
              endeavors in Australia. As registered professionals, we adhere
              strictly to ethical standards, ensuring transparent and reliable
              services for all our clients.
            </Typography>
            <Typography variant="p" component="p">
              Take the next step toward achieving your relocation goals or
              educational dreams today.{' '}
              <Link href={'/contact-us'} className="link">
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
