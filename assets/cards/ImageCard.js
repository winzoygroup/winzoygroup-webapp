import { CardActionArea, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function ImageCard({ image }) {
  return (
    <Paper sx={{ my: 1.5, mr: 2.5, boxShadow: '0 .2rem .3rem rgba(0,0,0,.1)' }}>
      <CardActionArea sx={{ px: 6, py: 4 }}>
        <Image
          src={image}
          width={250}
          height={92}
          priority
          style={{ width: 150, height: 'auto' }}
          alt="winzoy"
        />
      </CardActionArea>
    </Paper>
  );
}
