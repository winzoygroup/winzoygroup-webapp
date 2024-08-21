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
import Link from 'next/link';

import React from 'react';

export default function FamilySponsoredVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Family Sponsored Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid container spacing={6}>
          <Grid item md={5}>
            <Box>
              {/* <SvgLoader
                id="FamilySponsoredVisa-rvdcs"
                src="/animation/family-visa.json"
              /> */}{' '}
              <Image
                src="/images/courses/Family1.jpg"
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
              <span>Family Sponsored Visa</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Welcome to Winzoygroup, your partner in reuniting families through
              the Family Sponsored Visa program. If you're eager to be with your
              loved ones in Australia, our expertise and unwavering support will
              guide you through the journey, ensuring a heartwarming reunion
              filled with love and togetherness.
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
              component="h2"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Partner Category Visa
            </Typography>
            <Typography component="p" sx={{ mb: 2 }}>
              Under this class a spouse or fiance/ fiancee is allowed to
              immigrate to Australia for settlement. Candidates migrating to
              this country with this visa are initially allowed temporary
              settlements followed by permanent residency after a couple of
              years. Partner category includes:
            </Typography>
            <SpList>
              <li>Spouses or married partners;</li>
              <li>Fiancee or fiance, or partner intending marriage;</li>
              <li>Willing partners including those of same sex</li>
            </SpList>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>Immigrating candidates must have a partner in form of:</b>
            </Typography>
            <SpList>
              <li>a permanent resident of Australia</li>

              <li>
                a citizen of Australia; and iii) Eligible New Zealand citizen.
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Parent Visa
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Parent Visa is offered to applicants who have eligible child/
              children stay in this country as an Australian citizen, a
              permanent resident, or an eligible citizen of New Zealand. This
              category of family visa immigration in Australia is mandatorily
              sponsored by children residing in this nation.
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Parent Australian visas are issued for both working and aged
              kinds. Applicants immigrating on this visa option might take up an
              employment in Australia. Few Parent visas initially are offered
              for temporary settlement which could be changed to a permanent
              type subject to your application. There is an option for
              ‘Contributory Parent Visa’ which assures faster processing of
              immigration though at a higher cost.
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              It may be noted that every year a limited number of Parent Visas
              are issued by Australian immigration authorities. For this reason
              there is a queue of application and you may have to wait for your
              turn.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Family-Visa-banner.jpg"
                  alt="Employer-Sponsored Visa"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Child Visa
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Alike Parent Visa, a Child Visa is also issued under several
              sub-classes. In general, the sponsorship of a child visa is
              necessarily to be done by a parent who is permanently settled in
              Australia, a citizen of this country, or a qualified New Zealand
              citizen.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              In case the child concerned is in Australia then he/ she could
              immigrate as a permanent resident, dependent child, or orphaned
              relative. In the event, the concerned child is an offshore
              candidate then dependent child visa, adoption visa, or orphaned
              relative visa may be obtained.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="subTitle" component="h2" data-aos="fade-up">
              Prospective Marriage Visa (Subclass 300)
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              This is for those who want to enter Australia before marriage. In
              order to apply for this visa, your fiance must be an Australian
              citizen,Australian permanent resident or eligible New Zealand
              citizen. Once married, holders of this visa can then apply for a
              Partner visa to remain permanently in Australia.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="subTitle" component="h2" data-aos="fade-up">
              Other Family Members
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Brothers, sisters, dependent relatives, carers may also immigrate
              to Australia initially on temporary visa later changeable to
              permanent type. These family visas in Australia are sponsored by:
              i) Australian citizens; ii) a permanent resident of this country;
              and iii) Eligible New Zealand citizens.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              We at Winzoy are extremely cautious in assessing family visa
              immigration to Australia. Each application is meticulously checked
              and thereafter submitted with proper documentation. Health
              conformity reports and character certificates are essential
              documents needed for Australia visa applications.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <Link href="/contact" passHref className="link">
                Get in touch with us
              </Link>{' '}
              for all kinds of family visas, criteria and, assistance. Consult
              now!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
