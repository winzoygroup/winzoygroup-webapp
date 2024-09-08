import { Box, Container, Grid, Typography } from '@mui/material';

import React from 'react';
import StoriesSider from './sider/StoriesSider';

export default function Stories() {
  return (
    <Container>
      <Grid container spacing={6} alignItems={'center'}>
        <Grid item md={7} xs={12}>
          <Typography variant="title" component="h2">
            Success Stories
          </Typography>
          <Typography variant="subTitle" component="h2">
            We&apos;re honoured to have helped these <span>SMILING FACES</span>{' '}
            begin a new life abroad
          </Typography>
        </Grid>
        <Grid item md={5} xs={12}>
          <Box>
            <StoriesSider />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
