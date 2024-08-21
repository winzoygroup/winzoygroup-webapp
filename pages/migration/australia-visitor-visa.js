import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import SpList from '@/assets/SpList';
import SvgLoader from '@/assets/SvgLoader';
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
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

export default function AustraliaVisitorVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Australia Visitor Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid
          container
          spacing={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item md={5}>
            <Box>
              {/* <SvgLoader
                id="AustraliaVisitorVisa"
                src="/animation/Visitor-visa_.json"
              /> */}
              <Image
                src="/images/118-1188674_ielts-students-png-indian-coaching-students.png"
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
              Australia Visitor Visa
            </Typography>
            <Typography component="p" sx={{ mb: 1 }}>
              <b>
                Visitor visa is an overarching term. However, it can be broadly
                divided into two:
              </b>
            </Typography>
            <p>
              Are you dreaming of exploring the stunning landscapes, vibrant
              cities, and unique culture of Australia? The Australia Visitor
              Visa is your key to unlocking the wonders of this incredible
              destination. At Winzoygroup, we're here to guide you through the
              visa application process, making your journey to Australia a
              seamless and memorable experience.
            </p>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ mt: 2 }}
            >
              Enquire Now
            </Button>
          </Grid>
          <Grid item md={12}>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Winzoyis there for you if you want to visit Australia for any of
              these reasons or something other than these
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Each of these visas has different requirements and eligibility
              criterion. Winzoyfacilitates the processing of all of these visas
              as per your requirement.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Since, visitor visa is a general and broader term; it requires
              tremendous experience of immigration process and laws to match the
              exact type of visitor visa corresponding to your requirements.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Visitor-Visa-banner.jpg"
                  alt="Employer-Sponsored Visa"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Typography variant="subTitle" component="h2" data-aos="fade-up">
              Visitor Visa (SUBCLASS 600)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                This visa is meant for visit or for business purposes for up to
                three, six or twelve months. Two sub-classes are:
              </b>
            </Typography>
            <SpList>
              <li>
                The eVisitor (sub-class 651): This visa is free. You must be a
                passport holder of a certain country as specified in a list
                issued by Department of Home Affairs.
              </li>
              <li>
                The Electronic Travel Authority (subclass 601) : This is issued
                to a passport holder of a certain country as specified in a list
                issued by Department of Home Affairs.
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography variant="subTitle" component="h2" data-aos="fade-up">
              Medical Treatment Visa (SUBCLASS 602)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                The purpose of this visa is to allow anyone visit Australia.
              </b>
            </Typography>
            <SpList>
              <li>For medical treatment or consultations.</li>
              <li>
                To support someone needing medical treatment who holds or has
                applied for this visa.
              </li>
              <li>To donate an organ.</li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography variant="subTitle" component="h2" data-aos="fade-up">
              Investor Retirement Visa (SUBCLASS 405)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              This is a visa for those self-funded retirees with no dependents
              and who want to spend rest of their retired lives in Australia.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              data-aos="fade-up"
              sx={{ mb: 2 }}
            >
              Special Program Visa (SUBCLASS 416)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Usually, this visa is sought in case of special programs where an
              approved special program sponsor has sent an invitation to
              participate in a specifically approved program. The purpose is to
              enhance international relations and cultural exchange between
              Australian community and the world at large.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              In addition to the Special Program, the Special Program visa
              (subclass 416) has another stream called Seasonal Worker Program.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              data-aos="fade-up"
              sx={{ mb: 2 }}
            >
              Transit Visa (SUBCLASS 771)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              This is for you and your dependent children transit through
              Australia for no longer than 72 hours.
            </Typography>
          </Grid>{' '}
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              data-aos="fade-up"
              sx={{ mb: 2 }}
            >
              Basic Requirements
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Winzoy exactly does this for you. We first listen to your purpose
              of visiting Australia and as per your requirement, help you
              identify the exact type of visa that you may need to apply to
              visit this country. Apart from helping you identify this, we also
              help you in getting exact requirements of these visas. Some of the
              basic requirements are:
            </Typography>
            <SpList>
              <li>Health check-ups</li>
              <li>Financial documentations</li>
              <li>Character certifications</li>
              <li>
                <strong>Insurance</strong>
              </li>
              <li>Providing accommodation on chargeable basis</li>
            </SpList>
            <Typography component="p" data-aos="fade-up">
              <Link href="/contact" passHref className="link">
                Contact Winzoy
              </Link>{' '}
              right now in case you want to visit Australia for any of the
              reasons mentioned above and we will make sure that your visit
              becomes a pleasant and memorable experience worth cherishing for
              years to come!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
