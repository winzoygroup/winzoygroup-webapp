import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

export default function EducationSystem() {
  const [open, setOpen] = useState(false);
  return (
    <Layout title="Education System">
      <Container>
        <Box sx={{ my: 5 }}>
          <Grid
            container
            spacing={6}
            justifyContent={'center'}
            alignItems="center"
          >
            <Grid item md={5}>
              <Box>
                <Image
                  src="/images/19.jpg"
                  alt="Education System"
                  width={750}
                  height={480}
                  className="img"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box>
                <Typography
                  variant="title"
                  component="h1"
                  fontSize={28}
                  sx={{ mb: 2 }}
                >
                  <span>EDUCATION SYSTEM</span> in Australia for International
                  Students
                </Typography>
                <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
                  Australia's education system is renowned worldwide for its
                  quality, innovation, and welcoming environment for
                  international students. At Winzoygroup, we're here to provide
                  you with a comprehensive overview of the Australian education
                  landscape, helping you understand the opportunities that await
                  you in this diverse and vibrant country.
                </Typography>
                {/* <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
                  Would you like to concentrate on Australia? Look at the
                  Australian schooling system for Global understudies here and
                  pick the field which is appropriate for you.
                </Typography> */}
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setOpen(true)}
                >
                  Enquire Now
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h3"
                data-aos="fade-right"
                sx={{ mb: 2 }}
              >
                Australia&#39;s Education System
              </Typography>
              <Typography variant="p" component="p" data-aos="fade-up">
                Australia not just has the greatness for giving worldwide
                instruction yet incredible open doors likewise to frame a
                worldwide organization. Throughout the long term, the
                instructive organizations of Australia have supported the
                requirements of its understudies by zeroing in on useful
                learning and a careful comprehension of various points.
                <br /> <br />
                Like different nations, the schooling system of Australia is
                fundamentally separated into three expansive regions -
                Elementary School, Auxiliary/Senior Optional School, and
                Tertiary Training.
              </Typography>
            </Grid>
            <Grid item md={12} flexGrow={1}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src="/images/study-abroad-infograph-1.svg"
                  height={500}
                  width={500}
                  style={{ width: '100%', height: 'auto', maxWidth: '700px' }}
                  alt="study-abroad-infograph"
                  priority
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subTitle" component="h3" sx={{ mb: 2 }}>
                Vocational Education And Training
              </Typography>
              <Typography variant="p" component="p">
                Australia is globally perceived for giving the best practice in
                professional and schooling preparing as the individual is
                surveyed on their obtainment of capabilities and the spotlight
                is given on the advancement of abilities applicable to the field
                of talented specialization.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subTitle" component="h3" sx={{ mb: 2 }}>
                Foundation Studies
              </Typography>
              <Typography variant="p" component="p">
                Establishment Concentrates in Australia is likewise one of the
                extraordinary choices for those who wish to be a piece of an
                Australian college. Such programs are explicitly intended for
                global understudies that permit concentrating on a pre-college
                year inside a full-certify expert program and normally keep
                going for greatest one year.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subTitle" component="h3" sx={{ mb: 2 }}>
                Australian Qualification Framework
              </Typography>
              <Typography variant="p" component="p">
                Established in 1995 by the Australian Government, the Australian
                Qualification Framework helps to make sure that the
                qualification titles across the country are consistent and
                represent the same high standards of education. <br />
                <br />
                It includes all Australian qualifications with clear rules about
                the level of education each qualification represents. This
                provides many benefits to international students as they find
                the best course and institution suitable to their needs without
                wasting time understanding different qualification titles.{' '}
                <br />
                <br />
                International Students who are studying and AQF qualification
                can always be sure of their institution to be Government
                authorised and nationally accredited and the degree to be
                genuine.
              </Typography>
            </Grid>
            <Grid item md={12} flexGrow={1}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src="/images/study-abroad-infograph-2.svg"
                  height={500}
                  width={500}
                  style={{ width: '100%', height: 'auto', maxWidth: '700px' }}
                  alt="study-abroad-infograph"
                  priority
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subTitle" component="h3" sx={{ mb: 2 }}>
                CRICOS Registration
              </Typography>
              <Typography variant="p" component="p">
                Being an international student, one must choose to study in an
                institution, which is registered on the CRICOS (Commonwealth
                Register of Institutions and Courses for Overseas Students) It
                is a registration of Australian education institutions, which is
                managed by the Australian Government Department of Education
                that allow educational providers offer courses to overseas
                students who are studying or intending to study in Australia on
                student visa.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
