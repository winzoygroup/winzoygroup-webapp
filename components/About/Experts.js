import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Experts() {
  const [value, setValue] = React.useState('1');

  return (
    <Box sx={{ textAlign: 'center', py: 7 }}>
      <Container>
        <Typography variant="title" component="h2">
          Winzoy Group Leadership & RMAs
        </Typography>
        <Typography variant="subTitle" component="h4">
          Experts, Visionaries and <span>ACHIEVERS</span>
        </Typography>

        <Box
          sx={{
            width: '100%',
            typography: 'body1',
            mt: 5,
            position: 'relative',
          }}
        >
          {/* <div className="overlay-style-1"></div> */}
          <div className="overlay-style-2"></div>
          <div className="overlay-style-3"></div>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs example">
                <Tab
                  label="Leadership (Directors)"
                  value="1"
                  onClick={() => setValue('1')}
                />
                <Tab
                  label="Team RMAs"
                  value="2"
                  onClick={() => setValue('2')}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={6}>
                {[...Array(12)].map((item, index) => (
                  <Grid item sm={6} md={3} xs={12} xl={3} key={index}>
                    <Card
                      variant="outlined"
                      sx={{
                        py: 3,
                        background: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'saturate(180%) blur(10px)',
                      }}
                    >
                      <Avatar
                        alt="Lorerm"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 150, height: 150, mx: 'auto' }}
                      />
                      <CardContent>
                        <Typography component="h4" sx={{ fontWeight: 500 }}>
                          Dharmendrakumar Patel
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={6}>
                {[...Array(12)].map((item, index) => (
                  <Grid item sm={6} md={3} xs={12} xl={3} key={index}>
                    <Card
                      variant="outlined"
                      sx={{
                        py: 3,
                        background: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'saturate(180%) blur(10px)',
                      }}
                    >
                      <Avatar
                        alt="Lorerm"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 150, height: 150, mx: 'auto' }}
                      />
                      <CardContent>
                        <Typography component="h4" sx={{ fontWeight: 500 }}>
                          Dharmendrakumar Patel
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
}
