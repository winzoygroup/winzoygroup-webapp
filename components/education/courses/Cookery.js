import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Cookery() {
  return (
    <div>
      <Grid container spacing={7} justifyContent="center" alignItems="center">
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4" sx={{ my: 2 }}>
            Cookery Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Over the years, cookery has been at the cornerstone of society by
            serving quality of food and promoting environment for conversation
            and thought.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Also, with the tourism industry witnessing an upsurge all over the
            world, the demand for trained professionals in the cookery sector
            has increased to a great level.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            If you have a passion for cookery or get excited at the thought of
            creating your own culinary creations, then studying in Australia can
            give you an opportunity to develop your cooking skills under the
            guidance of world&#39;s best chefs.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ textAlign: 'center' }}>
            {/* <Image
              src="/images/Cookery.webp"
              width={720}
              height={655}
              className="img"
              alt="Cookery"
              style={{ maxWidth: 320 }}
              priority
            /> */}
            <Image
              src="/images/courses/pexels-vaibhav-jadhav-3218467.jpg"
              width={720}
              height={655}
              className="img"
              alt="Finance and Accounting"
              priority
            />{' '}
          </Box>
        </Grid>

        <Grid item md={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              Why pursue cookery career on australia?
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Australia is well-known for its culinary cultures due to
              amalgamation of international flavours. It is the second most
              preferred destination after Switzerland to study professional
              cookery and culinary arts.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Every year thousands of overseas students choose to pursue
              culinary courses both at graduate and post graduate levels from
              Australian universities to gain hands-on training at some of the
              best hotels and restaurants.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Additionally, a report conducted by Deloitte Access Economics
              predicted that currently more than 38,000 chefs are needed across
              Australia. This has forced some of the biggest hospitality groups
              of Australia to spend valuable time, money and resources in hiring
              suitable employees overseas.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
