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
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function PartnerVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Partner Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid
          container
          spacing={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item md={5}>
            <Box>
              <Image
                src="/images/courses/Love_Newly-married_couple_028135_-1.jpg"
                width={720}
                height={655}
                className="img"
                alt="Finance and Accounting"
                priority
              />{' '}
              {/* <SvgLoader id="PartnerVisa" src="/animation/Partner-Visa.json" /> */}
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
              Seamless Reunions with the Partner Visa:{' '}
              <span>Building Lives Together</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Welcome to Winzoygroup, your partner in bringing loved ones
              together through the Partner Visa program. If you're eager to join
              your partner in Australia, our expertise and dedication will guide
              you through the process, ensuring a smooth and joyful
              reunification.
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
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Although, there are three major subclasses for partner visa, this
              visa is broadly divided into two categories: Prospective Marriage
              visa and Partner visa. The type of visa for which you should apply
              depends on the type of relationship you are in.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                Following are the types of relationship and the visas that
                correspond to them:
              </b>
            </Typography>
            <SpList>
              <li>Intended marriage (fiance(e)): Prospective Marriage visa</li>
              <li>Married (de jure) relationship: Partner visa</li>
              <li>
                De facto partner relationship: (including a same-sex
                relationship): Partner visa
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
              Subclass Partner Visa
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              The subclasses are of two types: temporary and permanent. In the
              beginning, partners who meet the legal criteria for the grant of
              the visa are granted a temporary visa. Later, a permanent visa may
              be granted following an eligibility period or, if there is a
              long-standing relationship or children of the relationship, soon
              after grant of the temporary visa.
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Partner category migration also allows for the temporary entry to
              Australia of fiance(e)s (intended spouses) of Australian citizens,
              permanent residents and eligible New Zealand citizens.
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              However, as the partner or fiance(e) of an Australian citizen,
              Australian permanent resident or eligible New Zealand citizen, you
              are not automatically eligible for permanent residence in
              Australia. If you wish to reside permanently in Australia you must
              first apply for a permanent visa and be assessed against the legal
              criteria for the grant of that visa.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Partner-Visa-banner.jpg"
                  alt="Employer-Sponsored Visa"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={12}>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                Let us have a cursory look at the partner subclass visas based
                on your location at the time of application:
              </b>
            </Typography>
            <SpList>
              <li>
                If you are in Australia, you are eligible to apply for Partner
                Temporary Visa (Subclass 820) and Permanent visa (subclass 801).
                You can apply for this visa to stay in Australia with your
                partner, who must be an Australian citizen, Australian permanent
                resident or eligible New Zealand citizen. If the relationship is
                genuine and still on even after the two years of the application
                of this visa, you can be granted a permanent visa.
              </li>
              <li>
                If you are outside Australia: Partner Temporary Visa (Subclass
                309) and Permanent Visa (Subclass 100): You can apply for this
                visa to enter and stay in Australia with your partner, who must
                be an Australian citizen, Australian permanent resident or
                eligible New Zealand citizen. A continuous and genuine
                relationship for two years after the application of this visa,
                can grant you a permanent visa.
              </li>
            </SpList>
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
              General Terms and Conditions
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                Following are some general requirements to be eligible for
                applying this visa:
              </b>
            </Typography>
            <SpList>
              <li>
                You must be sponsored by a person (being your fiance(e),
                partner, or in some circumstances, a parent or guardian of your
                partner) who is an Australian citizen, Australian permanent
                resident or eligible New Zealand citizen and who can satisfy the
                legal requirements for being a sponsor.
              </li>
              <li>You must also meet health and character criteria</li>
              <li>
                If you have dependent children or other dependent family
                members, they may make combined applications with your
                application provided that they meet certain requirements
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component="h2"
              data-aos="fade-up"
              sx={{ mb: 2 }}
            >
              Expansion of partner visa eligibility in Australia
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Partner visa is also applicable to those whose visa has been
              refused or cancelled since their last visit to Australia. This
              refusal or cancellation falls under the section 48 of the
              Migration Act 1958 (Act). And hence, when you are in Australia,
              you cannot apply for any visa except for certain prescribed visa
              classes, such as a Protection visa or a Bridging visa.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                However, from 14 September 2009 you may be eligible to apply for
                a Partner visa in Australia if you meet certain criteria. Those
                four requirements are:
              </b>
            </Typography>
            <SpList>
              <li>
                You must not have had a partner visa refused since you last
                entered Australia
              </li>
              <li>
                You must not have had a visa refused or cancelled on character
                grounds under section 501 of the Act
              </li>
              <li>
                You must provide with your application a form 40SP Sponsorship
                for a partner to migrate to Australia completed and signed by an
                Australian citizen, Australian permanent resident or eligible
                New Zealand citizen who declares that they are your spouse or de
                facto partner
              </li>
              <li>
                You must provide with your application two statutory
                declarations from Australian citizens, Australian permanent
                residents or eligible New Zealand citizens (other than your
                partner) supporting the existence of your relationship with your
                partner. These declarations must be made not more than six weeks
                before the day the Partner visa application was made.
              </li>
            </SpList>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              These are some of the basic requirements to just lodge an
              application. Along with these, there are many others and your
              application under this provision will be assessed against the
              legislative requirements in the same way as all Partner visa
              applicants who apply in Australia.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Winzoy is a seasoned Australian immigration agent. Our trained and
              professional staff knows how to handle each application thoroughly
              and meticulously.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <Link href="/contact" passHref className="link">
                Get in touch with us
              </Link>{' '}
              for all types of partner visa to Australia and see for yourself
              what we can do for you!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
