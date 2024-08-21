import IconBox2 from '@/assets/IconBox2';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Whychoose() {
  return (
    <Box sx={{ py: 9, bgcolor: '#F2FBFE' }}>
      <Container>
        <Box sx={{ maxWidth: 750, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="title" component={'h2'}>
            Why choose us?
          </Typography>
          <Typography sx={{ mt: 1 }} component={'p'}>
            If you want to relocate abroad, you need someone who has done
            extensive study and has a thorough understanding of the location.
            Winzoy Group can be of assistance here.
          </Typography>
        </Box>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          spacing={5}
          sx={{
            justifyContent: {
              md: 'space-between',
              xs: 'center',
            },
            alignItems: 'center',
            pt: 7,
          }}
        >
          <IconBox2
            num="2012"
            title="Established In"
            id="whyXicon"
            path="/animation/why-choose-11.json"
          />
          <IconBox2
            num="50K+"
            title="Satisfied Clients"
            id="whyXicon-2"
            path="/animation/why-choose-21.json"
          />
          <IconBox2
            num="60+"
            title="RMA Agents"
            id="whyXicon-3"
            path="/animation/why-choose-31.json"
          />
        </Stack>
      </Container>
    </Box>
  );
}
