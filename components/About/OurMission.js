import SvgLoader from '@/assets/SvgLoader';
import { Check } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function OurMission() {
  return (
    <Box>
      <Container>
        <Grid container spacing={5} justifyContent={'stretch'}>
          <Grid item md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ mb: 3 }}>
                  <Image
                    src={'/images/xsx (1).webp'}
                    width={'400'}
                    height={'230'}
                    className="img-fluid"
                    alt="WinzoyGroup"
                    priority
                  />
                </Box>
                <Typography variant="subTitle">Our Mission</Typography>
                <Typography variant="p" component="p">
                  Our main objective is to continue leading the way and provide
                  a consistent client experience by developing a moral,
                  result-driven, and competent labor force supported by
                  cutting-edge computerized systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ mb: 3 }}>
                  <Image
                    src={'/images/img-2.jpg'}
                    width={'400'}
                    height={'230'}
                    className="img-fluid"
                    alt="WinzoyGroup"
                    priority
                  />
                </Box>
                <Typography variant="subTitle"> Our Vision </Typography>
                <Typography variant="p" component="p">
                  Our overarching vision entails becoming a preeminent global
                  organization known for credibility, innovation, and the
                  fulfillment of diverse international aspirations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ mb: 3 }}>
                  <Image
                    src={'/images/img-1 (1).webp'}
                    width={'400'}
                    height={'230'}
                    className="img-fluid"
                    alt="WinzoyGroup"
                    priority
                  />
                </Box>
                <Typography variant="subTitle"> Our Core Values</Typography>
                <Typography variant="p" component="p">
                  <Stack direction={'row'} spacing={2}>
                    <List>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>People Centric</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Integrity</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Ownership</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Innovation</Typography>
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>People Centric</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Integrity</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Ownership</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <Check color="success" sx={{ mr: 1 }} />{' '}
                        <Typography>Innovation</Typography>
                      </ListItem>
                    </List>
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
