import { Box } from '@mui/material';
import React from 'react';

export default function SpList({ children }) {
  return (
    <Box sx={{ '& ul': { ml: 4 }, mt: 1, mb: 2 }} data-aos="fade-up">
      <ul>{children}</ul>
    </Box>
  );
}
