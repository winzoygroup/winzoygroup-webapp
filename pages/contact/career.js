import Layout from '@/assets/Layout';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Scard = ({ title, disc, icon }) => {
  return (
    <Card sx={{ boxShadow: 'var(--shadow)', height: '100%' }}>
      <CardContent>
        <Stack direction="row" sx={{ mb: 2 }} alignItems={'center'}>
          <Image src={icon} height={40} width={40} priority alt={title} />
          <Typography
            variant="subTitle"
            sx={{ ml: 1 }}
            fontSize={20}
            component="h4"
          >
            {title}
          </Typography>
        </Stack>
        <Typography variant="p" component="p">
          {disc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function Career() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout title={'Career'} subTitle={'contact'}>
      <Box sx={{ my: 7 }}>
        <Container>
          <Grid container spacing={6} alignItems={'center'}>
            <Grid item md={5}>
              <Image
                src="/images/CAREER-PATHS.webp"
                height={484}
                width={720}
                alt={'Career'}
                className="img"
                priority
              ></Image>
            </Grid>
            <Grid item md={7}>
              <Box sx={{ my: 4 }}>
                <Typography
                  variant="subTitle"
                  component={'h1'}
                  sx={{ fontSize: 'calc(1.5rem + 0.6vw)', fontWeight: 700 }}
                >
                  The Best Place to Unwind a <span>SUCCESSFUL CAREER</span> is
                  Right Here!
                </Typography>
                <Typography>
                  Whatever your career goals, if you are passionate about
                  technology, we at Winzoy Group are looking for you. Join us
                  and future forward your career today.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box textAlign={'center'}>
                <Typography variant="title" component="h2" sx={{ mb: 4 }}>
                  Reasons to work at Winzoy Group
                </Typography>
              </Box>
              <Grid container spacing={3} justifyContent="stretch">
                <Grid item md={4} xs={12}>
                  <Scard
                    icon={'/icons/Complate-Owenership.svg'}
                    title={'Complete Ownership'}
                    disc="You have complete autonomy over the work you do. You take responsibility for your work with little to no interference. You get credit for the successes and you are accountable for any lapses."
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Scard
                    icon={'/icons/bag.svg'}
                    title={'Complete Ownership'}
                    disc="Planning and following an education pathway can streamline your study plan. A Foundation course can help you reach your goals faster."
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Scard
                    icon={'/icons/Employee-Unwind-Session.svg'}
                    title={'Employee Unwind Session'}
                    disc="The Australian education system offers primary, secondary and tertiary education linked across the country and across the world."
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Scard
                    icon={'/icons/onWork.svg'}
                    title={'An Open Work Culture'}
                    disc="By studying English in Australia, you will gain a range of life skills you cannot get at home."
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Scard
                    icon={'/icons/Feedback-Driven-Culture.svg'}
                    title={'Feedback Driven Culture'}
                    disc="'Fields of study' (also called 'fields of education') is a classification system used by Australian institutions to describe courses, specialisations and units of study."
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{ boxShadow: 'var(--shadow)', height: '100%' }}>
                    <CardActionArea component="div" sx={{ height: '100%' }}>
                      <CardContent
                        sx={{
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          backgroundSize: '80%',
                        }}
                      >
                        <Image
                          src={'/icons/more.svg'}
                          height={80}
                          width={300}
                          alt="Winzoy Group"
                          style={{
                            opacity: '0.5',
                            marginBottom: -70,
                            filter: 'grayscale(80%)',
                          }}
                        />
                        <Typography
                          variant="p"
                          component="p"
                          sx={{ fontWeight: 500 }}
                        >
                          More About
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontSize: 24,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                          }}
                        >
                          Winzoy Group
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item md={12}>
              <div className="overlay-style-3"></div>
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="title" component="h2">
                  Career Development
                </Typography>
                <Typography variant="subTitle" component="h5">
                  Explore <span>OPPORTUNITIES</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box sx={{ position: 'relative', opacity: 0.5, zIndex: -1 }}>
                <div className="overlay-style-1"></div>
              </Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Consultant" value="1" />
                    <Tab label="Front Desk" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Stack
                    direction="row"
                    spacing={6}
                    justifyContent="space-between"
                    alignItems={'center'}
                  >
                    <Box>
                      <Typography variant="h5" component="h5">
                        Migration Administrative Assistant
                      </Typography>
                      <Stack direction="row" spacing={3} flexWrap={'wrap'}>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Number of Opening: <b>5</b>
                        </Typography>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Location: <b>Sydney/Parramatta</b>
                        </Typography>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Type: <b>Full Time</b>
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Button variant="contained" size="large">
                        Apply Now
                      </Button>
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel value="2">
                  {' '}
                  <Stack
                    direction="row"
                    spacing={6}
                    justifyContent="space-between"
                    alignItems={'center'}
                  >
                    <Box>
                      <Typography variant="h5" component="h5">
                        Front Office Coordinator
                      </Typography>
                      <Stack direction="row" spacing={3} flexWrap={'wrap'}>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Number of Opening: <b>1</b>
                        </Typography>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Location: <b>Melbourne</b>
                        </Typography>
                        <Typography variant="p" component="p" sx={{ pt: 1 }}>
                          Type: <b>Full Time</b>
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Button variant="contained" size="large">
                        Apply Now
                      </Button>
                    </Box>
                  </Stack>
                </TabPanel>
              </TabContext>
            </Grid>*/}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
