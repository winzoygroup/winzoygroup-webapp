import TextCard from '@/assets/cards/TextCard';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-web';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function JourneyAssistance() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('homepage-migration-1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/home-migration.json',
    });
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={5} alignItems={'center'}>
          <Grid item md={6}>
            <Image
              src="/images/visa.webp"
              width="832"
              height="851"
              className="img"
              alt="home education1"
              priority
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant="title" component="h2">
              Journey Assistance
            </Typography>
            <Typography variant="subTitle" component="h4">
              Just pack your <span>bags—we’ll</span> take care of the rest.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              When it comes to relocation services, our specialists are
              meticulous and detail-oriented.
            </Typography>
            <Stack direction={'row'} sx={{ flexWrap: 'wrap' }}>
              {/* <TextCard>General Skilled Migration</TextCard> */}
              <TextCard href={'/migration/employer-sponsored-visa'}>
                Employer Sponsor Visa
              </TextCard>
              <TextCard href={'/migration/australia-visitor-visa'}>
                Visitor Visa
              </TextCard>
              {/* <TextCard href={''}>Global Talent Program</TextCard> */}
              <TextCard href={'/migration/partner-visa'}>
                Partner Visa
              </TextCard>{' '}
              <TextCard href={'/migration/parent-visa'}>Parent Visa</TextCard>
              <TextCard href={'/migration/family-sponsored-visa'}>
                Family Visa
              </TextCard>
              <TextCard href={'/migration/temporary-activity-visa'}>
                Temporary Activity Visa
              </TextCard>
              {/* <TextCard href={''}>Protection Visa</TextCard> */}
              <TextCard href={'/migration/business-visa'}>
                Business Visa
              </TextCard>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
