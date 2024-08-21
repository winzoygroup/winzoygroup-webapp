import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Title({ title, subtitle }) {
  return (
    <Box>
      <Typography variant="title" component="h2">
        Who we are
      </Typography>
      <Typography variant="subTitle" component="h4">
        Bringing your DREAM abroad to life
      </Typography>
    </Box>
  );
}
