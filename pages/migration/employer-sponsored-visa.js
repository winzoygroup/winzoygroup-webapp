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
import Image from 'next/image';

import React from 'react';

export default function EmployerSponsoredVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Employer Sponsored Visa'}>
      <Box sx={{ my: 7, overflow: 'hidden' }}>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid item md={5}>
              <Box>
                {/* <SvgLoader
                  src="/animation/Employer-Sponsored-Visa.json"
                  id={'EmployerSponsoredVisa'}
                /> */}{' '}
                <Image
                  src="/images/courses/shutterstock_485076070.jpg"
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
                data-aos="fade-left"
                variant="title"
                component="h2"
                fontSize={28}
                sx={{ mb: 2 }}
              >
                Opening Doors to International Opportunities
              </Typography>
              <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
                Are you ready to explore exciting career prospects in a new
                country? The Employer-Sponsored Visa is your gateway to a world
                of international job opportunities, cultural experiences, and
                personal growth. This visa category is designed to connect
                skilled individuals with forward-thinking companies that are
                eager to welcome talent from around the globe.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                data-aos="fade-right"
                onClick={() => setOpen(true)}
              >
                Enquire Now
              </Button>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                data-aos="fade-left"
              >
                What is an Employer-Sponsored Visa?
              </Typography>
              <p>
                An Employer-Sponsored Visa is a unique pathway that allows
                companies in your desired destination country to sponsor your
                employment. This collaboration brings benefits to both parties:
                you get the chance to work in a foreign land, and the employer
                gains access to specialized skills that might be scarce in their
                local workforce. It's a win-win situation that fosters global
                collaboration and innovation.
              </p>
            </Grid>{' '}
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                data-aos="fade-left"
              >
                Key Benefits:
              </Typography>
              <SpList>
                <li>
                  <b> Professional Growth:</b> Work in a dynamic international
                  environment that can enhance your skills and broaden your
                  professional horizons.
                </li>

                <li>
                  <b> Cultural Exchange:</b> Immerse yourself in a new culture,
                  language, and way of life. This is an opportunity to gain a
                  unique perspective that will enrich your personal and
                  professional life.
                </li>

                <li>
                  <b>Stability:</b> With a secure job offer from an established
                  employer, you can enjoy financial stability and plan for a
                  successful future.
                </li>

                <li>
                  <b> Networking:</b> Build a global network of contacts, which
                  can be invaluable for your career advancement and personal
                  development.
                </li>

                <li>
                  <b>Long-Term Prospects:</b> Many Employer-Sponsored Visas can
                  lead to permanent residency or citizenship, offering you the
                  chance to put down roots in a new country.
                </li>
              </SpList>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                data-aos="fade-left"
              >
                How Does it Work?
              </Typography>
              <SpList>
                <li>
                  <b>Employer Sponsorship: </b> An employer in the destination
                  country sponsors your employment. They demonstrate that your
                  skills are essential for their business and that they couldn't
                  find a suitable candidate locally.
                </li>
                <li>
                  <b>Eligibility Assessment:</b> You and your potential employer
                  must meet specific eligibility criteria set by the immigration
                  authorities of the destination country.
                </li>
                <li>
                  <b>Visa Application:</b> Once sponsorship is secured and
                  eligibility is confirmed, you can begin the visa application
                  process. This involves submitting documents, attending
                  interviews, and fulfilling any additional requirements.
                </li>
                <li>
                  <b>Approval and Relocation:</b> Upon approval, you'll receive
                  your Employer-Sponsored Visa. You can then start preparing for
                  your new adventure, including planning your relocation and
                  settling into your new role.
                </li>
              </SpList>
            </Grid>{' '}
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                data-aos="fade-left"
              >
                Why Choose Us?
              </Typography>
              <p data-aos="fade-up">
                Navigating the process of securing an Employer-Sponsored Visa
                can be complex, but you don't have to do it alone. Our team of
                experienced immigration experts is dedicated to assisting you
                every step of the way. From finding suitable job opportunities
                to guiding you through the application process, we are committed
                to making your international career dreams a reality.
              </p>
            </Grid>
            <Grid item md={12}>
              <Card data-aos="fade-up">
                <CardActionArea>
                  <CardMedia
                    component={'img'}
                    src="/images/Employer-Sponsored-Visa-banner.jpg"
                    alt="Employer-Sponsored Visa"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                data-aos="fade-left"
              >
                Start Your Journey Today!
              </Typography>
              <p>
                Embark on a transformative journey that combines career growth
                with cultural enrichment. The world is waiting for your skills,
                and the Employer-Sponsored Visa is your ticket to making a mark
                on the global stage. Contact us today to learn more about how we
                can help you achieve your international career aspirations. Your
                future knows no borders!
              </p>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
