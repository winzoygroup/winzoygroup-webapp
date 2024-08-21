import Layout from '@/assets/Layout';
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Tab, Typography } from '@mui/material';
import Image from 'next/image';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Accounting from '@/components/education/courses/Accounting';
import Cookery from '@/components/education/courses/Cookery';
import Engineering from '@/components/education/courses/Engineering';
import Hospitality from '@/components/education/courses/Hospitality';
import InformationTechnology from '@/components/education/courses/InformationTechnology';
import Nursing from '@/components/education/courses/Nursing';
import Enquire from '@/assets/Enquire';

export default function PopularCourses() {
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout title="Popular Courses">
      <Container>
        <Box sx={{ my: 5 }}>
          <Grid container spacing={6} alignItems={'center'}>
            <Grid item md={5}>
              <div data-aos="fade-right">
                <Image
                  src="/images/popular-courses.jpg"
                  alt="Education System"
                  width={750}
                  height={480}
                  className="img"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>
            </Grid>
            <Grid item md={7}>
              <Box sx={{ my: 5 }}>
                <Typography
                  data-aos="fade-left"
                  variant="title"
                  component="h1"
                  fontSize={28}
                  sx={{ mb: 2 }}
                >
                  Most <span>POPULAR COURSES</span> in Australia
                </Typography>
                <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
                  Australia stands as a global education hub, providing an
                  impressive array of study choices encompassing over 22,000
                  diverse courses for international students. Discover the most
                  sought-after courses, reflecting the nation's commitment to
                  quality education and catering to a wide spectrum of academic
                  interests.
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  data-aos="fade-right"
                  onClick={() => setOpen(true)}
                >
                  Enquire Now
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Box sx={{ width: '100%', typography: 'body1', my: 7 }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Accounting and Finance" value="1" />
                    <Tab label="Cookery" value="2" />
                    <Tab label="Engineering" value="3" />
                    <Tab label="Hospitality" value="4" />
                    <Tab label="InformationTechnology" value="5" />
                    <Tab label="Nursing" value="6" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Accounting />
                </TabPanel>
                <TabPanel value="2">
                  <Cookery />
                </TabPanel>
                <TabPanel value="3">
                  <Engineering />
                </TabPanel>
                <TabPanel value="4">
                  <Hospitality />
                </TabPanel>
                <TabPanel value="5">
                  <InformationTechnology />
                </TabPanel>
                <TabPanel value="6">
                  <Nursing />
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
        </Box>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
