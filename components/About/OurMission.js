import { CheckCircleRounded } from '@mui/icons-material';
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
import { green } from '@mui/material/colors';
import Image from 'next/image';
import React from 'react';

export default function OurMission() {
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent={'stretch'}
          sx={{
            img: {
              width: 1,
              height: 'auto',
              minHeight: { md: 200, xs: 300 },
              maxHeight: { md: 200, xs: 300 },
              objectFit: 'cover',
            },
            h3: {
              fontWeight: 700,
              mb: 1,
            },
            '& p': {
              fontSize: 14,
              fontWeight: 600,
            },
          }}
        >
          <Grid item md={3.5}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <Image
                src={'/images/xsx (1).webp'}
                width={'400'}
                height={'230'}
                alt="WinzoyGroup"
                priority
              />

              <CardContent>
                <Typography variant="subTitle" component={'h3'}>
                  Our Mission
                </Typography>
                <Typography variant="p" component="p">
                  Our primary goal is to lead the industry by delivering a
                  consistent client experience through a dedicated,
                  results-driven, and skilled team, supported by advanced
                  digital systems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <Image
                src={'/images/img-2.jpg'}
                width={'400'}
                height={'230'}
                alt="WinzoyGroup"
                priority
              />
              <CardContent>
                <Typography variant="subTitle" component={'h3'}>
                  Our Vision{' '}
                </Typography>
                <Typography variant="p" component="p">
                  Our vision is to become a leading global organization renowned
                  for its credibility, innovation, and ability to fulfil diverse
                  international aspirations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={5.5} xs={12}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                'span.MuiTypography-root': { fontSize: 14, fontWeight: 500 },
                svg: { color: green[500], fontSize: 19, mr: 1, mt: 0.5 },
                '.MuiListItem-root': {
                  display: 'flex',
                  alignItems: 'unset',
                },
              }}
            >
              <Image
                src={'/images/Core_Values.jpg'}
                width={900}
                height={600}
                alt="WinzoyGroup"
                priority
              />
              <CardContent>
                <Typography variant="subTitle" mb={0} component={'h3'}>
                  Our Core Values
                </Typography>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ md: 2, xs: 0 }}
                >
                  <List disablePadding>
                    <ListItem sx={{ display: 'flex' }} disablePadding>
                      <CheckCircleRounded />{' '}
                      <Typography>
                        <strong>People Centric: </strong> We prioritize the
                        well-being and development of our people.
                      </Typography>
                    </ListItem>{' '}
                    <ListItem sx={{ display: 'flex' }} disablePadding>
                      <CheckCircleRounded />{' '}
                      <Typography>
                        <strong>Integrity: </strong> We uphold the highest
                        standards of honesty and transparency.
                      </Typography>
                    </ListItem>{' '}
                  </List>
                  <List disablePadding>
                    <ListItem sx={{ display: 'flex' }} disablePadding>
                      <CheckCircleRounded />{' '}
                      <Typography>
                        <strong>Ownership: </strong> We take responsibility for
                        our actions and results.
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'flex' }} disablePadding>
                      <CheckCircleRounded />{' '}
                      <Typography>
                        <strong>Innovation: </strong> We embrace creativity and
                        seek continuous improvement.
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
                {/* <Stack direction={'row'} spacing={2}>
                    <List>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>People Centric</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Integrity</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Ownership</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Innovation</Typography>
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>People Centric</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Integrity</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Ownership</Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex' }} disablePadding>
                        <CheckCircleRounded />{' '}
                        <Typography>Innovation</Typography>
                      </ListItem>
                    </List>
                  </Stack> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
