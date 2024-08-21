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

export default function StudentVisa() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout title={'Student Visa'}>
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
                src="/images/1676393144-GettyImages-1361844238.webp"
                width={720}
                height={655}
                className="img"
                alt="Finance and Accounting"
                priority
              />
              {/* <SvgLoader
                id="StudentVisa7527"
                src="/animation/Student_Visa_.json"
              /> */}
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
              Empowering Your Education Journey with the{' '}
              <span> Student Visa</span>
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Education knows no boundaries, and the Student Visa program
              recognizes the importance of embracing diverse learning
              opportunities. This visa category offers you the chance to study
              and thrive in Australia, a country renowned for its world-class
              institutions, cultural vibrancy, and global connections.
            </Typography>
            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              With this visa, any student can apply with ease for a variety of
              full-time programs, including higher education, vocational
              education and training (VET) courses, English language intensive
              courses for overseas students (ELICOS), admission to primary or
              secondary school, and postgraduate research degrees at a
              recognized educational institution.
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
              Visa Eligibility Criteria:
            </Typography>

            <SpList>
              <li>
                <b>Enrollment in a registered course of study:</b>
                <br />
                Applicants need to enroll in a course of study, which is
                registered on the Commonwealth Register of Institutions and
                Courses for Overseas Students (CRICOS).
              </li>
              <li>
                <b>Financial capacity:</b>
                <br />
                Applicants must have the legal evidence of their financial
                capacity that shows they are eligible to pay their course fees
                and living costs of their dependent family members.
              </li>
              <li>
                <b>English proficiency:</b>
                <br />
                It is mandatory to provide evidence of English language skills
                with the visa application or when asked by an officer otherwise
                the visa will be refused.
              </li>
              <li>
                <b>
                  Closely controlled welfare arrangements for all the students
                  under the age of 18:
                </b>
                <br />
                Students under 18 years of age should have evidence of organized
                welfare arrangements to stay in Australia.
              </li>
              <li>
                <b>Accompanying Family Members:</b>
                <br />
                Applicants and their family members can make a combined request
                in the student visa application or they can apply to join them
                later. It is essential to have the necessary funds on hand to
                support the accompanying family members living in Australia and
                also for those after the grant of the student visa (such as new
                born baby).
              </li>
              <li>
                <b>Genuine Temporary Entrant requirement:</b>
                <br />
                This requirement serves as a reliability measure that the
                student visa program is used as projected and not for a
                temporary stay in Australia.
              </li>
              <li>
                <b>Health and character:</b>
                <br />
                Applicants need to undergo health examinations as a part of the
                visa application process. This may consume quite a few weeks to
                complete. Also, the applicants are required to answer some
                character related questions that will be used to assess their
                character.
              </li>
              <li>
                <b>Overseas student health cover:</b>
                <br />
                Applicants are required to obtain Overseas Students Health Cover
                (OSHC) a week prior to the date they are supposed to arrive in
                Australia.
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
              What you can do with this visa?
            </Typography>
            <SpList>
              <li>
                You can study full-time in a recognized institution in
                Australia.
              </li>
              <li>
                You can bring your family members under limited circumstances
              </li>
              <li>
                You and your family members will be given work rights depending
                on your course type.
              </li>
              <li>
                Your partner (if found eligible) can also study in Australia for
                three months.
              </li>
            </SpList>
          </Grid>
          <Grid item md={12}>
            <Card data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  src="/images/Student-Visa-banner.jpg"
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
              How Winzoy Group can be Your Ideal Companion to turn your dreams
              of Studying in Australia into reality?
            </Typography>

            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              Being one of the leading groups of Immigration and Student Visa
              Consultants, we at WinzoyGroup have always provided professional
              and high quality services to the people seeking higher education
              or career in Australia. Being registered with MARA, our team never
              fails to stay updated with the rules and regulations of the
              Australian immigration and make sure you get the visa through
              accurate assessments.
            </Typography>

            <Typography component="p" sx={{ mb: 2 }} data-aos="fade-up">
              <b>
                <Link href={'/contact'} passHref className="link">
                  Get in touch with us{' '}
                </Link>
                for any student visa-subclass 500 assistance. We assure you the
                best possible help.
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
