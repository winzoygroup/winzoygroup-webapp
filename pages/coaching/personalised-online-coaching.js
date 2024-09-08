import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';

import IconCard from '@/assets/cards/IconCard';
import IconCard2 from '@/assets/cards/IconCard2';
import {
  Diversity2,
  PriceChange,
  StickyNote2,
  Timelapse,
  TipsAndUpdates,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import React, { useState } from 'react';

export default function PTEPersonalisedOnlineCoaching() {
  const [open, setOpen] = useState(false);
  return (
    <Layout title={'PTE Personalised Online Coaching'}>
      <Container sx={{ my: 7 }}>
        <Grid container spacing={6} alignItems={'center'}>
          <Grid item md={6}>
            {/* <Box
              sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}
              data-aos="fade-up"
            >
              <SvgLoader
                id="common-criteria-ion1"
                src="/animation/common-criteria-ion1.json"
              />
            </Box> */}
            <Image
              src="/images/1-7.jpg"
              height={1000}
              width={555}
              alt={'Career'}
              className="img"
              priority
            ></Image>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="title"
              component="h1"
              fontSize={28}
              sx={{ mb: 2 }}
            >
              PTE Personalised Online Coaching
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              Join PTE Online Personalized Coaching and get a customized study
              plan from experts with their personalized guidance, scored tests,
              and PTE Question Bank.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpen(true)}
            >
              Book Now
            </Button>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-up"
              >
                Learn From The Experts: Online Personalised Coaching
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/icon-1.json"
                    id="ds8fds518dcicon-1"
                    title="40 Days Live Interactive Classes"
                    fontSize={15}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/icon-2.json"
                    id="ds8fds51asgtyjyu8dcicon-2"
                    title="5 Scored Tests"
                    fontSize={15}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/icon-3.json"
                    id="ds8fdsasdsdacicon-3"
                    title="Video Recordings of the Classes"
                    fontSize={15}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/book-open.json"
                    id="ds8fdsasdsdacbook-open"
                    title="PTE Question Bank"
                    fontSize={15}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/icon-11.json"
                    id="ds8fdsasdsdacicon-11"
                    title="E-Books on Each Tasks"
                    fontSize={15}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Typography
              variant="subTitle"
              component="h2"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Why PTE Online Personalised Coaching?
            </Typography>
            <List
              sx={{
                '& svg': { color: 'primary.main' },
                '& span': { fontWeight: 500 },
              }}
            >
              <ListItem>
                <ListItemIcon>
                  <Timelapse />
                </ListItemIcon>
                <ListItemText>Convenient Class Timings</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PriceChange />
                </ListItemIcon>
                <ListItemText>One - One Session</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Diversity2 />
                </ListItemIcon>
                <ListItemText>Expert Tutor Guidance</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StickyNote2 />
                </ListItemIcon>
                <ListItemText>Resourceful Materials</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TipsAndUpdates />
                </ListItemIcon>
                <ListItemText>Proven Tips & Strategies</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={6}>
            {/* <Box sx={{ maxWidth: 350, mx: 'auto' }}>
              <SvgLoader id="loasbgvs6587" src="/animation/banner-3.json" />
            </Box> */}
            <Image
              src="/images/BL_1_02292016234406.jpg"
              height={840}
              width={450}
              alt={'Career'}
              className="img"
              priority
            ></Image>
          </Grid>
          <Grid item md={12}>
            <Stack
              direction="row"
              justifyContent={{ md: 'space-between', xs: 'center' }}
              alignItems={'center'}
              flexWrap={'wrap'}
            >
              <IconCard2
                id="ds5cw98sds98c"
                src="/animation/icon-15.json"
                title="Various Questions"
                numb="14.5K+"
              />
              <IconCard2
                id="ds5cw98sds98cicon-16"
                src="/animation/icon-16.json"
                title="Registered Students"
                numb="449K+"
              />
              <IconCard2
                id="ds5cw98sds98cicon-17"
                src="/animation/icon-17.json"
                title="Test Evaluated"
                numb="44K+"
              />
              <IconCard2
                id="ds5cw98sds98wqscicon-18"
                src="/animation/icon-2.json"
                title="Online Coaching"
                numb="5K+"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
