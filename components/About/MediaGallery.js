import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tab,
  Typography,
} from '@mui/material';
import React from 'react';

export default function MediaGallery() {
  const [value, setValue] = React.useState('1');

  return (
    <Box sx={{ textAlign: 'center', py: 7 }}>
      <Container>
        <Typography variant="title" component="h2">
          Media Gallery
        </Typography>
        <Typography variant="subTitle" component="h4">
          These pillars are the foundation of <span>OUR SUCCESS</span>
        </Typography>

        <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs example">
                <Tab label="Photos" value="1" onClick={() => setValue('1')} />
                <Tab label="Videos" value="2" onClick={() => setValue('2')} />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={6}>
                {[...Array(12)].map((item, index) => (
                  <Grid item sm={6} md={4} xs={12} xl={3} key={index}>
                    <Card sx={{ boxShadow: 'var(--shadow)' }}>
                      <CardActionArea>
                        <CardMedia
                          component={'img'}
                          alt="Winzoy Group"
                          image="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1"
                        />
                      </CardActionArea>
                      <CardContent>
                        <Typography component="h4" sx={{ fontWeight: 500 }}>
                          DJ Rink at Winzoy Group Melbourne !
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
                  <Grid item sm={6} md={4} xs={12} xl={3} key={index}>
                    <Card sx={{ boxShadow: 'var(--shadow)' }}>
                      <CardActionArea>
                        <CardMedia
                          component={'img'}
                          alt="Winzoy Group"
                          image="/images/download.jpg"
                        />
                      </CardActionArea>
                      <CardContent>
                        <Typography component="h4" sx={{ fontWeight: 500 }}>
                          DJ Rink at Winzoy Group Melbourne !
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
