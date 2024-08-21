import ImageCard from '@/assets/cards/ImageCard';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Products() {
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="title" component="h2">
            Our Products
          </Typography>
          <Typography variant="subTitle" component="h4">
            We strive to provide <span>SMOOTH AND SEAMLESS</span> service to our
            clients
          </Typography>
          <Stack
            direction="row"
            sx={{ flexWrap: 'wrap', mt: 4, justifyContent: 'center' }}
          >
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
            <ImageCard image={'/images/logo/pte-tutorials.webp'} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
