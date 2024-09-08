import React from 'react';

import { Box, Container } from '@mui/material';
import AuxiliarySlider from './sider/AuxiliarySlider';

export default function AuxiliaryServices() {
  return (
    <Box sx={{ py: 9, mt: 5, bgcolor: '#F2FBFE' }}>
      <Container>
        <Box sx={{ mt: 0 }}>
          <AuxiliarySlider />
        </Box>
      </Container>
    </Box>
  );
}
