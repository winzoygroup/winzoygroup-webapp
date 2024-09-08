import { Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function TextCard({ children, href }) {
  return (
    <Paper
      sx={{
        mr: 2,
        my: 1,
        boxShadow: '0 0 .50rem rgba(0,0,0,.15)',
      }}
    >
      <Link href={href || '#'} passHref>
        <Button sx={{ px: 2, py: 1, '&:hover': { bgcolor: '#fff' } }}>
          <Typography variant="textLink">{children}</Typography>
        </Button>
      </Link>
    </Paper>
  );
}
