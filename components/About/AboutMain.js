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
             Welcome to Winzoy Group, your trusted education consultancy dedicated to helping students achieve their dream of studying in Australia. With years of experience and a proven track record, we have proudly guided thousands of students in choosing the right courses, selecting the best institutions, securing admissions, and building successful academic futures. Our team provides personalized guidance at every stage of the education journey, from course selection and university applications to scholarship opportunities and ongoing student support. We are committed to delivering transparent, ethical, and student-focused services, ensuring every student receives the guidance they need to make confident decisions about their education. 
            </Typography>
            <Typography variant="p" component="p">
             Take the next step towards your academic goals with Winzoy Group and let us help you build a brighter future through quality education in Australia
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
