import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Hospitality() {
  return (
    <div>
      <Grid container spacing={7} justifyContent="center" alignItems="center">
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4" sx={{ my: 2 }}>
            Hospitality Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Hospitality management is a course that includes management of the
            hotels, guests, finance, sales, human resource, monitoring the food
            service region and solving different kinds of problems. Globally,
            the hospitality industry takes in approximately $3.5 trillion per
            year.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            From large restaurants or hotels, exclusive resorts and casinos to
            roadside motels, a career in hospitality offers a wide range of
            earning opportunities. If you are aspiring to study a hotel
            management course, then studying in Australia can help you gain a
            wider view of the industry and give you opportunities for practical
            experience.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ textAlign: 'center' }}>
            {/* <Image
              src="/images/Hospitality.webp"
              width={720}
              height={655}
              className="img"
              alt="Cookery"
              style={{ maxWidth: 320 }}
              priority
            /> */}{' '}
            <Image
              src="/images/courses/pexels-mart-production-7089619.jpg"
              width={720}
              height={655}
              className="img"
              alt="Finance and Accounting"
              priority
            />
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              How can you benefit from studying a hospitality management degree
              in australia?
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Hospitality is the industry that contributes significantly to the
              economy of Australia. It receives considerable investment from
              government and international business whilst attracts
              entrepreneurs at all levels.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              From bachelor degrees in hospitality to prestigious master of
              business administration, Australia offers a wide range of courses
              at a large number of institutes across the country. These courses
              have strong ties with industry and work placements which provide
              students a chance to make valuable industry contacts, develop key
              business skills and gain essential work experience before
              graduating to ensure a successful career.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
