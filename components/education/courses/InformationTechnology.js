import SvgLoader from '@/assets/SvgLoader';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function InformationTechnology() {
  return (
    <div>
      <Grid container spacing={7} justifyContent="center" alignItems="center">
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4" sx={{ my: 2 }}>
            Information Technology Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            With the economic insecurity these days, ensuring a career
            commitment is difficult in any field. However, Information
            Technology (IT) is one diverse sector that encompasses several jobs
            and career opportunities.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            There are number of different careers options available for
            graduates in computing and information technology to choose from.
            The most common are database programming, information systems or
            computing, mobile computing, network engineering, software
            development, artificial intelligence and telecommunications.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ maxWidth: 320, mx: 'auto' }}>
            {/* <SvgLoader
              id="InformationTechnology"
              src="/animation/Information-Technology.json"
            /> */}{' '}
            <Image
              src="/images/courses/pexels-cytonn-photography-955405.jpg"
              width={720}
              height={655}
              className="img"
              alt="Finance and Accounting"
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
