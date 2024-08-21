import React from 'react';

import { Box, Container, Paper, Typography } from '@mui/material';
import AuxiliarySlider from './sider/AuxiliarySlider';

export default function AuxiliaryServices() {
  return (
    <Box sx={{ py: 9, mt: 5, bgcolor: '#F2FBFE' }}>
      <Container>
        {/* <Box sx={{ maxWidth: 750, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="title" component={'h2'}>
            Auxiliary Services
          </Typography>
          <Typography variant="subTitle" component={'h2'}>
            Dynamic. Diversified. <span>SOLUTION-ORIENTED</span>
          </Typography>
          <Typography sx={{ mt: 1 }} component={'p'}>
            We believe in diversified growth and that&rsquo;s why we are into
            different businesses. Our strategies for different ventures may be
            different, but our main priority remains the same- our customers.
          </Typography>
        </Box> */}

        <Box sx={{ mt: 0 }}>
          <AuxiliarySlider />
        </Box>
      </Container>
    </Box>
  );
}
