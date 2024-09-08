import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import IconCard from '@/assets/cards/IconCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Container, Grid, Tab, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Education() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title="Study In Australia">
      <Container>
        <Box sx={{ my: 5 }}>
          <Grid
            container
            spacing={6}
            justifyContent={'center'}
            alignItems="center"
          >
            <Grid item md={6}>
              <Box sx={{ maxWidth: 400, my: 2, mx: 'auto' }}>
                {/* <SvgLoader
                  id="education-AUSTRALIA"
                  src="/animation/Australia-Basics.json"
                /> */}
                <Image
                  src="/images/E51fSQ-VoAMGulV.jpg"
                  width="832"
                  height="851"
                  className="img"
                  alt="home education1"
                  priority
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography
                variant="title"
                component="h1"
                sx={{ color: 'secondary.main' }}
              >
                Study in Australia with <span>Winzoygroup</span>
              </Typography>

              <Typography component="p">
                Welcome to Winzoygroup, your trusted partner in making your
                dreams of studying in Australia come true. With our expertise,
                guidance, and unwavering support, you'll embark on a journey
                towards world-class education, personal growth, and
                unforgettable experiences in the Land Down Under.
              </Typography>
              <Button
                variant="outlined"
                sx={{ py: 1.2, px: 4, mt: 3 }}
                onClick={() => setOpen(true)}
              >
                Enquire Now
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mb: 5, '& ul': { ml: 2.5, mt: 2 } }}>
          <Typography variant="p">
            The island country is the most loved understudy objective on the
            planet. Utilize concentrate in Australia by signing up for courses,
            establishments, and so on.
            <br />
            <br />
            Australia, one of the most captivating and exceptionally created, is
            the 6th biggest country on the planet. Enriched with surprising sea
            shores, a lot of untamed life, regular marvels, and cosmopolitan
            conurbations, the nation offers a few exceptional encounters that
            are elusive elsewhere.
            <br />
            <br />
            With a populace that begins from in excess of 200 nations, Australia
            is the most cordial and obliging country on the planet. The
            country&#39;s open-air exercises have consistently urged individuals
            to meet up, be it gathering around a grill or at games.
            <br />
            <br />
            Australia is commonly known for giving top-notch medical care. Both
            public and confidential medical clinics are furnished with the most
            recent advancements and first-class benefits. This has been
            reflected in an incredible by and large well-being record of the
            Australian populace, with the future upon entering the world set at
            more than 81 years old.
            <br />
            <br />
            Australia has additionally been a famous review objective for global
            understudies. It has eight of the best 100 colleges on the planet
            that offer in excess of 22000 courses across 1100 organizations. The
            nation additionally brags five of the 30 smartest understudy urban
            communities on the planet, which incorporates Melbourne, Sydney,
            Perth, Brisbane, Adelaide, and Tasmania
            <br />
            <br />
            Consistently, the Australian Government puts around $200,000,000 in
            worldwide grants. Also, it assesses every one of the colleges in the
            country to ensure they are keeping up with the elevated expectations
            on a yearly premise.
          </Typography>
          <br />
          <br />
          <p>
            <b>
              Apart from this, some of the major reasons that let international
              students choose Australia as their study destination are:
            </b>
          </p>
          <ul>
            <li>Advanced teaching styles</li>

            <li>Plethora of Specialist Institutions</li>

            <li>Quality of Scientific Research</li>

            <li>Global Acceptance of Australian Higher Education Standards</li>

            <li>Multicultural Community</li>

            <li>A Safe Environment</li>

            <li>Unique Travel Choices</li>

            <li>
              Flexibility to work up to 20 hours per week and 40 hours during
              semester breaks
            </li>
          </ul>
        </Box>

        <Box sx={{ mb: 5 }}>
          <TabContext value={'1'}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs example">
                <Tab label="Study in Australia" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={3}>
                <Grid item md={4}>
                  <IconCard
                    id="icon-X2459"
                    src="/animation/growing-economy-icon1.json"
                    title="NEW STUDENT VISA"
                    disc="Being MARA agents, we can assist you to gather all the documents required to support your student visa application and also represent it to Australian Immigration Department on your behalf."
                  />
                </Grid>
                <Grid item md={4}>
                  <IconCard
                    id="icon-X245s9"
                    src="/animation/talented-workforce-icon1.json"
                    title="SCHOLARSHIP"
                    disc="Being a strong representative of the major universities of Australia, we can help you save a lot of time knowing the updated scholarship information of different universities."
                  />
                </Grid>
                <Grid item md={4}>
                  <IconCard
                    id="icon-X24sds59"
                    src="/animation/consistment-Innovation-ico1.json"
                    title="SWITCH COURSES"
                    disc="If you didn't find the course the way you anticipated & are looking to change your course, we can suggest an alternative that is more suitable to your learning abilities & career aspirations."
                  />
                </Grid>
                <Grid item md={4}>
                  <IconCard
                    id="icon-X24ssasds59"
                    src="/animation/consistment-Innovation-ico1.json"
                    title="EXTEND YOUR STAY"
                    disc="If you are on a student or holiday visa and your visa is due to expire, we can assist you with the most common options that allows you to extend your stay in Australia.."
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
