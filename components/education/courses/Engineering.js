import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Engineering() {
  return (
    <div>
      <Grid container spacing={7} justifyContent="center" alignItems="center">
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4" sx={{ my: 2 }}>
            Engineering Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Highest entry level salaries, an opportunity to be a part of
            recognised group of professionals and a variety of exciting areas to
            work in, Engineering career has a lot to offer to its prospective
            students.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            It is the perfect field for those who are inquisitive about knowing
            how things work and created, since it includes designing,
            evaluating, developing, testing, modifying, installing and
            maintaining a large variety of products and systems.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            However, when it comes to ensuring a successful career in
            engineering, getting a degree is merely a fraction of the journey.
            With the highly competitive market these days, employers only give
            preference to those candidates who have travelled and studied due to
            the experienced they gained that could be helpful in the workforce.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ textAlign: 'center' }}>
            {/* <Image
              src="/images/Engineering.webp"
              width={720}
              height={655}
              className="img"
              alt="Cookery"
              style={{ maxWidth: 320 }}
              priority
            /> */}{' '}
            <Image
              src="/images/courses/pexels-thisisengineering-3862146.jpg"
              width={720}
              height={655}
              className="img"
              alt="Finance and Accounting"
              priority
            />
          </Box>
        </Grid>{' '}
        <Grid item md={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              Here&#39;s why studying in australia can prove out to be the most
              lucrative decision for your engineering career?
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Australia is not just a paradise for tourists but also has a
              strong reputation for having world-class universities, an
              affordable lifestyle, strong economy and higher employment
              opportunities. The last decade has seen a significant rise of
              international students heading to Australia for higher studies
              with a special focus on engineering.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Be it civil, mechanical, telecommunications, computer,
              agriculture, industrial, petroleum, geological, aerospace,
              electrical, chemical, biomedical, Australia offers a wide range of
              engineering courses to help students specialise in their field. It
              also offer post-graduate programs that help you take a step
              forward towards a successful career.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
