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

export default function TemporaryActivityVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Temporary Activity Visa'}>
      <Container sx={{ my: 7, overflow: 'hidden' }}>
        <Grid container spacing={6} alignItems={'center'}>
          <Grid item md={6}>
            <Box>
              <Image
                src="/images/courses/408-Visa Temporary-Activity-Visa.png"
                width={720}
                height={655}
                className="img"
                alt="Finance and Accounting"
                priority
              />{' '}
              {/* <SvgLoader
                id="TemporaryActivityVisa"
                src="/animation/TemporaryActivityVisa_.json"
              /> */}
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="title"
              component="h1"
              fontSize={28}
              sx={{ mb: 1 }}
            >
              Temporary Activity Visa
            </Typography>
            <Typography variant="p" component={'p'} sx={{ mb: 1 }}>
              If you're looking to engage in unique cultural experiences,
              work-related projects, or special events, our expertise and
              guidance will steer you towards a fulfilling and enriching journey
              Down Under.
            </Typography>
            <Typography variant="p" component={'p'} sx={{ mb: 2 }}>
              The Temporary Activity Visa program recognizes this and invites
              you to participate in a wide range of activities, from cultural
              exchanges to professional endeavors.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => setOpen(true)}
            >
              Enquire Now
            </Button>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="p"
              component={'p'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              <b>
                The Temporary Activity Visa lets you carry out one of the
                following activities in Australia on a temporary basis.
              </b>
            </Typography>

            <SpList>
              <li>
                Undertake full-time domestic work for certain senior foreign
                executives
              </li>
              <li>Take part in high-level sports (including training)</li>
              <li>Work in the entertainment industry</li>
              <li>
                Contribute in a special programme to boost international
                relations and cultural exchange
              </li>
              <li>
                Participate in cultural or social activities at the invitation
                of an Australian organisation
              </li>
              <li>Work or watch as an academic in a research project</li>
              <li>Take part in an Australian Government endorsed event</li>
              <li>Work as a Religious Worker</li>
              <li>Get employment as a super yacht crew member</li>
              <li>
                Get to work in a skilled position under a staff exchange
                arrangement
              </li>
            </SpList>
          </Grid>

          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Temporary-activity-Visa-banner.jpg"
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
              Benefits Of Temporary Activity Visa
            </Typography>

            <SpList>
              <li>
                You can enter and leave Australia as many as time as you want
                till your visa is valid
              </li>
              <li>
                Stay in Australia rightfully for the period of nominated
                position (with maximum stay of 2 years)
              </li>
              <li>
                Participate in work or activity specified in your application
              </li>
              <li>Bring eligible family members with you to Australia</li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Important Things To Know Before Applying The Visa
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                If you are applying for the visa in Australia, you should have
                the sponsorship of an approved temporary activities sponsor or
                sponsor who passes the sponsorship test.
              </b>
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Visa Applicants Requirements
            </Typography>

            <SpList>
              <li>
                When applying from outside Australia, you must plans to stay in
                Australia for 3 months or less and have the provision of an
                organisation or individual undertaking events or activities in
                Australia who has passed the support test.
              </li>
              <li>
                You must be sponsored by an approved sponsor who have passed the
                sponsorship test
              </li>
              <li>
                You must have sufficient financial support and health insurance
                to cover the costs for you and your family for the duration of
                stay in Australia
              </li>
              <li>
                You must have fulfilled the criteria of the activity you have
                been participating under this visa
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Sponsorship Requirements
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              You can only sponsor someone for this visa if you are:
            </Typography>
            <SpList>
              <li>
                An Australian organisation (a business, a corporate or
                incorporate body or a non-profit organisation operating
                legitimately in Australia)
              </li>
              <li>
                A government agency or a state or territory government
                established legally in Australia
              </li>
              <li>
                A foreign government agency (foreign tourists and media bureaus,
                consular or diplomatic mission and trade offices) lawfully
                operating a business in Australia
              </li>
              <li>
                An organisation, a foreign government agency or a government
                agency endorsing sports or sports events legally in Australia
              </li>
              <li>
                A religious foundation recognised as a charity by the Australian
                Tax office
              </li>
              <li>
                Registered in another country but have a legal business in
                Australia
              </li>
              <li>
                Captain or proprietor of super yacht or the organisation that
                operates a super yacht.
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Health & Character Requirements
            </Typography>

            <SpList>
              <li>Proof of health or health examinations</li>
              <li>
                Police certificates that show you have no criminal records
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Financial Background
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              You must have evidence of your financial capacity with your visa
              application. This includes:
            </Typography>
            <SpList>
              <li>
                Bank Statements or a letter from the financial institutions
              </li>
              <li>Employment contract</li>
              <li>
                Allowances, accommodation and the other assistance from the
                sponsored employer in Australia
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Health Insurance
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              You must be covered by Medicare health scheme if your country does
              not have a reciprocal health care agreement with Australia.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              English Language Requirement
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              You must demonstrate your functional English proficiency with
            </Typography>
            <SpList>
              <li>
                Overall band score of 4.5 in IELTS (International English
                Language Testing System) or
              </li>
              <li>32 in TOEFL (Test of English as a Foreign Language) or</li>
              <li>30 in PTE (Pearson Test of English)</li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Other Relevant Matters
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              The delegate may also consider information that may be either
              beneficial or unfavourable to the applicant, such as:
            </Typography>
            <SpList>
              <li>
                The applicant&#39;s circumstances in their home country. This
                may include their personal circumstances such as their current
                employment, family situation, future prospects, and general
                circumstances of their country, e.g. civil unrest, economic
                strife or famine;
              </li>
              <li>
                Whether the position has been created to secure the person&#39;s
                stay in Australia. Delegates should assess whether family
                members, the applicant&#39;s community etc. have created the
                position to fit the attributes of the particular person;
              </li>
              <li>
                The personal attributes and vocational or employment background
                of the applicant and their ability to undertake the position.
                Factors to consider are the applicant&#39;s current occupation,
                current skill level and whether they have undertaken the same or
                similar work in Australia or overseas
              </li>
              <li>
                he applicant&#39;s proficiency in English is consistent with
                their supported activities (although applicants are not required
                to undertake English language testing, however if they are to
                work in Australia that at least a rudimentary knowledge of
                English should be expected).
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Visa Validity Period
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              The validity of the Temporary Activity Visa depends on the
              activity you been approved for:
            </Typography>
            <SpList>
              <li>
                For Invited Participant activity and the Australian Government
                Endorsed activity, the visa can be valid up to 4 years.
              </li>
              <li>
                For rest of the activities, the visa can be valid up to 2 years.
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Typography
              variant="subTitle"
              component={'h2'}
              sx={{ mb: 2 }}
              data-aos="fade-up"
            >
              Family Members
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              You can include your family members in your application:
            </Typography>
            <SpList>
              <li>
                However, if you are sponsored and intend to stay in Australia
                for more than 3 months, you must have a written statement on
                hand from your sponsor agreeing to sponsor your family members.
              </li>
              <li>
                If you want further assistance on this subclass or determine
                your eligibility, book a consultation with our migration expert
                today!
              </li>
            </SpList>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
