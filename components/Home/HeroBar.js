// import IconBox from '@/assets/IconBox';
import { Box, Container, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
import React from 'react';

export default function HeroBar() {
  return (
    <Box>
      {/* <Container>
        <Grid
          container
          spacing={3}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Grid item md={6}>
            <Box sx={{ my: { md: 0, xs: 5 } }}>
              <Box sx={{ position: 'absolute' }}></Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{ fontWeight: 700, color: 'primary.main' }}
              >
                Dream Career,
                <br />
                <Typography
                  variant="h1"
                  component="span"
                  sx={{ fontWeight: 700, color: 'secondary.main' }}
                >
                  PROMISING FUTURE
                </Typography>{' '}
                & Top University Education
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ position: 'relative', display: 'block', my: 5 }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: { md: 50, xs: 20 },
                  left: { md: 30, xs: 10 },
                  zIndex: 2,
                }}
              >
                <IconBox
                  a_id="home-banner_ico_01"
                  path="/animation/home-banner_ico_01.json"
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: { md: 45, xs: 40 },
                  right: { md: 48, xs: 0 },
                  zIndex: 2,
                }}
              >
                <IconBox
                  a_id="home-banner_icon_02"
                  path="/animation/home-banner_ico_02.json"
                />
              </Box>
              <Box
                sx={{ position: 'absolute', bottom: 20, left: 0, zIndex: 2 }}
              >
                <IconBox
                  a_id="home-banner_ico_03"
                  path="/animation/home-banner_ico_03.json"
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 50,
                  right: { md: 107, xs: -15 },
                  zIndex: 2,
                }}
              >
                <IconBox
                  a_id="home-banner_ico_04"
                  path="/animation/home-banner_ico_04.json"
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: -1,
                  left: '40%',
                  top: '40%',
                  transform: 'translate(-40%,-42%)',
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '210px',
                      sm: '150px',
                      xs: '150px',
                    },
                    height: {
                      md: '300px',
                      sm: '200px',
                      xs: '200px',
                    },
                    maxWidth: '210px',
                    borderRadius: '100px',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    className={'home-banner-bg-scroll'}
                    sx={{
                      background:
                        'url("/assets/home-banner-bg-scroll.webp") repeat-x',
                      backgroundPosition: 'bottom',
                    }}
                  ></Box>
                </Box>
              </Box>
              <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                <Image
                  src="/assets/home-banner-bg.webp"
                  width={747}
                  height={533}
                  className="img-fluid"
                  style={{ position: 'relative', zIndex: 1 }}
                  priority
                />
              </Box>
              .
              <Box
                sx={{
                  textAlign: 'center',
                  display: { md: 'none', xs: 'block' },
                }}
              >
                <img
                  src="/assets/window.webp"
                  alt="Banner"
                  className="img-fluid"
                  style={{ maxWidth: 220 }}
                ></img>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
  );
}
