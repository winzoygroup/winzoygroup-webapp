import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import SpList from '@/assets/SpList';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import React from 'react';
import Image from 'next/image';

export default function ParentVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Parent Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid
          container
          spacing={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item md={5}>
            <Box>
              {/* <SvgLoader id="ParentVisa298" src="/animation/Parent-Visa.json" /> */}{' '}
              <Image
                src="/images/courses/shutterstock_1428376460-1.jpg"
                width={720}
                height={655}
                className="img"
                alt="Finance and Accounting"
                priority
              />
            </Box>
          </Grid>
          <Grid item md={7}>
            <Typography
              data-aos="fade-up"
              variant="title"
              component="h1"
              fontSize={28}
              sx={{ mb: 2 }}
            >
              Embrace the Warmth of Family Bonds with the{' '}
              <span>Parent Visa</span>{' '}
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Welcome to Winzoygroup, your partner in reuniting families through
              the Parent Visa program. If you're eager to be with your children
              and grandchildren in Australia, our expertise and unwavering
              support will guide you through the journey, ensuring a
              heartwarming reunion filled with love and togetherness.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              data-aos="fade-up"
              onClick={() => setOpen(true)}
            >
              Enquire Now
            </Button>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              If You Are In Australia
            </Typography>

            <SpList>
              <li>
                <b>Aged parent visas (Application for this visa is closed)</b>
                <br />
                These visas are for parents whose age is equivalent to a person
                who is eligible for an Australian Age pension.
              </li>
              <li>
                <b>Contributory Aged Parent (Residence) visa (subclass 864)</b>
                <br />
                If you are a parent of child or children who are living in
                Australia, this is for you. It is a permanent visa for aged
                parents. This visa costs more than the aged parent visa but is
                generally processed faster.
              </li>{' '}
              <li>
                <b>Contributory Aged Parent (Temporary) visa (subclass 884)</b>
                <br />
                This is a temporary visa valid for two years. If you hold this
                visa you can apply for the permanent Contributory Aged Parent
                (Residence) visa (subclass 864).
              </li>{' '}
              <li>
                <b>
                  Contributory Aged Parent (Residence) visa (from subclass 884
                  to subclass 864)
                </b>
                <br />
                If you are a holder of a temporary Contributory Aged Parent visa
                (subclass 884), you are eligible to apply for a permanent
                Contributory Aged Parent visa (subclass 864).
              </li>
            </SpList>
          </Grid>

          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Parent-Visa-banner.jpg"
                  alt="Employer-Sponsored Visa"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              If You Are Outside Australia
            </Typography>

            <SpList>
              <li>
                <b>Contributory Parent (Migrant) visa (subclass 143)</b>
                <br />
                This is a permanent visa for parents with children living in
                Australia. This visa costs more than the Parent visa but is
                generally processed faster.
              </li>
              <li>
                <b>Contributory Parent (Temporary) visa (subclass 173)</b>
                <br />
                This is a temporary visa valid for two years for parents with
                children living in Australia. If you hold this visa you can then
                apply for the permanent Contributory Parent visa (subclass 143).
              </li>{' '}
              <li>
                <b>
                  Contributory Parent (Migrant) visa (from subclass 173 to
                  subclass 143)
                </b>
                <br />
                If you are a holder of a temporary Contributory Parent visa
                (subclass 173), who want to apply for a permanent Contributory
                Parent visa (subclass 143), this is for you. An application for
                this visa is able to be made in Australia.
              </li>{' '}
            </SpList>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                While these are the major categories of the parent visa for
                Australia, the Australian Immigration Department has now stopped
                accepting applications for the following visas:
              </b>
            </Typography>
            <SpList>
              <li>Aged Parent (Residence) visa (subclass 804)</li>
              <li>Parent (Migrant) visa (subclass 103).</li>
            </SpList>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Family members of applicants who lodged their application before 2
              June 2014 might be able to be added to the application before a
              decision is made on their visa.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              We at Winzoy provide assessment, consultation and visa processing
              for all types of parent visas and other family visas. Years of
              industry experience and extensive research into the rules and
              regulations of Australian immigration have made us reliable and
              trustworthy institution. We not only provide visa processing
              services, but we are also keen to make your immigration smoother
              in terms of cultural assimilation. We make you acquaint with the
              distinct features of a new culture so that you can face it
              comfortably and with ease.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                <Link href={'/contact'} passHref className="link">
                  Give us a call now{' '}
                </Link>
                and see for yourself what we can do for you!
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
