import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import SpList from '@/assets/SpList';
import SvgLoader from '@/assets/SvgLoader';
import IconCard from '@/assets/cards/IconCard';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import React from 'react';

export default function BusinessVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Business Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid
          container
          spacing={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item md={5}>
            <Box data-aos="fade-up">
              {/* <SvgLoader
                id="business-visa-banner"
                src="/animation/business-visa-banner.json"
              /> */}
              <Image
                src="/images/courses/Visa.jpg"
                width={720}
                height={655}
                className="img"
                alt="Finance and Accounting"
                priority
              />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography
              variant="title"
              component="h1"
              fontSize={28}
              sx={{ mb: 2 }}
            >
              Apply for Australia <span> BUSINESS VISA PROGRAM</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              If you're ready to explore entrepreneurial ventures, invest in
              opportunities, or contribute your expertise to the Australian
              business landscape, our expertise and guidance will lead you
              towards achieving your business aspirations.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpen(true)}
            >
              Enquire Now
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
                The Essence of the Business Visa Program
              </Typography>
              <Typography
                component="p"
                sx={{ mb: 2, maxWidth: 700, mx: 'auto' }}
              >
                The Business Visa program acknowledges this and provides
                pathways for talented individuals to contribute to the country's
                economic growth and success.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/growing-economy-icon.json"
                    id="ds8fds518dc"
                    title="Growing Economy"
                    disc={
                      'Australia has always provided a low-risk and safe environment to enable sustained business growth.'
                    }
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/talented-workforce-icon.json"
                    id="ds8fds51asgtyjyu8dc"
                    title="Talented Workforce"
                    disc={
                      'With excellent education system, world-class universities and specialised training services, the country creates talented & skilled graduates to contribute positively to its economy.'
                    }
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <IconCard
                    src="/animation/consistment-Innovation-ico.json"
                    id="ds8fdsasdsdac 518dc"
                    title="Consistment Innovation"
                    disc={
                      'International organisations in the country are also given many opportunities to collaborate with Australian research institutions or initiate joint ventures to take business to the global market.'
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <SvgLoader
                id="29d5f69df6df"
                src="/animation/how-to-get-started.json"
              />
            </Box>
          </Grid>{' '}
          <Grid item md={12} sx={{ textAlign: 'center' }}>
            <Typography component={'h2'} variant="subTitle">
              States / Territories
            </Typography>
          </Grid>
          <Grid item md={6}>
            <CardMedia
              component={'img'}
              src="/images/business-visa.svg"
              alt="business-visa"
            />
          </Grid>
          <Grid item md={6}>
            <Card>
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  textAlign: 'center',
                  py: 1,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                AU-WA
              </Box>
              <CardContent>
                <Typography component="p">
                  <b>Fees:</b>$750
                </Typography>
                <Typography component="p">
                  <b>Processing Time:</b>Relatively quick
                </Typography>
                <Typography component="p">
                  <b>Preferred Industries:</b>
                </Typography>
                <SpList>
                  <li>
                    Commit a significant amount of new capital investment;
                  </li>
                  <li>
                    Generate skilled employment or a large number of new jobs;
                  </li>
                  <li>Develop export markets or replace imports;</li>
                  <li>
                    Introduce new skills, expertise, technologies or
                    innovations;
                  </li>
                  <li>Locate the business activity in a regional area; and</li>
                  <li>
                    Have a significant flow on effect to other sectors of the
                    economy
                  </li>
                </SpList>
                <Typography component="p">
                  <b>Restricted Industries:</b>
                </Typography>
                <SpList>
                  <li>Residential estate</li>
                  <li>Labour Hire</li>
                  <li>
                    Purchasing of existing <br /> business or franchise
                  </li>
                </SpList>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
