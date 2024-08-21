import { Box } from '@mui/material';
import React from 'react';

export default function Maintenance() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          minHeight: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        <Box>
          <h1>We&rsquo;ll be back soon!</h1>
          <div>
            <p>
              Sorry for the inconvenience but we&rsquo;re performing some
              maintenance at the moment. If you need to you can always{' '}
              <a href="mailto:info@winzoygroup.com">contact us</a>, otherwise
              we&rsquo;ll be back online shortly!
            </p>
            <p>&mdash; Winzoy Group Team</p>
          </div>
        </Box>
      </Box>
    </>
  );
}
