import Enquire from '@/assets/Enquire';
import Layout from '@/assets/Layout';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

export default function StudentVisaProcess() {
  const [open, setOpen] = useState(false);
  return (
    <Layout title="Student Visa Process">
      <Box sx={{ my: 7, overflow: 'hidden' }}>
        <Container>
          <Grid container spacing={6} alignItems={'center'}>
            <Grid item md={6}>
              <div data-aos="fade-right">
                <Image
                  src="/images/StudentVisaProcess.webp"
                  alt="Student Visa Process"
                  width={750}
                  height={480}
                  className="img"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>
            </Grid>
            <Grid item md={6}>
              <Box sx={{ my: 2 }}>
                <Typography
                  data-aos="fade-left"
                  variant="title"
                  component="h1"
                  fontSize={28}
                  sx={{ mb: 2 }}
                >
                  Process of <span>Australia Student</span> VISA & ADMISSION
                </Typography>
                <Typography component="p" sx={{ mb: 1 }} data-aos="fade-up">
                  For international students intending to study in Australia,
                  the initial step involves applying for admission to an
                  educational institution before proceeding with the student
                  visa application. This multi-step process encompasses several
                  essential stages, such as:
                </Typography>
                <Box
                  sx={{ mb: 2, '& ul': { ml: 3, fontSize: '0.8rem' } }}
                  data-aos="fade-up"
                >
                  <ul>
                    <li>Choosing the preferred course and institution</li>
                    <li>Submitting an application to the institution</li>
                    <li>Getting and accepting an offer letter</li>
                    <li>
                      Receiving electronic Confirmation of Enrolment (eCoE)
                    </li>
                    <li>
                      Applying for Student Visa (Subclass 500) Student Guardian
                      Visa (Subclass 590)
                    </li>
                  </ul>
                </Box>
                <Button
                  variant="outlined"
                  size="large"
                  data-aos="fade-right"
                  onClick={() => setOpen(true)}
                >
                  Enquire Now
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-left"
              >
                Admission & Visa Process
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                We support the student in regards for the education in
                Australia, checks for the requirements for the purpose of entry.
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                Once the student gets registered and submits all the essential
                documents apart from the English Test score, we at Aussizz Group
                apply for Conditional Offer Letter from the education provider.
                However, if the student already has an English Test Score, we
                can directly apply for the Unconditional Offer Letter.
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                This process may take 4-6 weeks for assessment depending upon
                the education provider. The outstanding documents will be
                requested (if required).
              </Typography>

              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                After the offer letter is received, the applicant need to submit
                the required documents for the Streamline Visa Process (SVP) and
                furnish the financial documents for the amount to be shown. The
                first semester fees are to be paid to the education provider or
                as required by the education provider. A few institutions may
                need to pay the full fee of 1 year.
              </Typography>

              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                Upon the satisfaction of the SVP process, the education provider
                issues the Electronic Confirmation of Enrolment (eCOE) which is
                inevitable for processing the visa.
              </Typography>

              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                Then, the application for the student visa is sent to the
                Department of Immigration & Border Protection, Australia. It is
                highly recommended that you lodge for the visa before 12 weeks
                from the days of orientation in the institution.
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                Once the visa is APPROVED, the student can make him/herself
                ready to board for Australia.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-left"
              >
                Documents required for the offer letter from the education
                provider
              </Typography>

              <Box data-aos="fade-up" sx={{ my: 2, '& ul': { ml: 3 } }}>
                <ul>
                  <li>
                    Original Passport (Including Old Passport) (All pages)
                  </li>
                  <li>School Leaving Certificate / Birth Certificate</li>
                  <li>
                    10th, 12th Mark sheet And Attempt (credit) certificate
                  </li>
                  <li>
                    Diploma or ITI Mark sheets, Degree or Provisional
                    Certificate
                  </li>
                  <li>
                    Bachelor mark sheets, Degree or Provisional Certificate
                  </li>
                  <li>Master Mark sheet, Degree or Provisional Certificate</li>
                  <li>Transcript if available</li>
                  <li>Work Experience Letter (If applicable)</li>
                  <li>IELTS /English Language Certificate</li>
                  <li>Resume / CV</li>
                  <li>Any other relevant certificates (If applicable)</li>
                  <li>Letter of Recommendation (LOR)</li>
                  <li>
                    <strong>SOP (Statement of Purpose)</strong>
                  </li>
                  <li>Marriage Certificate (If applicable)</li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-left"
                fontSize={18}
              >
                You can only meet the eligibility criteria for both institution
                and visa application if you have:
              </Typography>

              <Box data-aos="fade-up" sx={{ my: 2, '& ul': { ml: 3 } }}>
                <ul>
                  <li>
                    You can only meet the eligibility criteria for both
                    institution and visa application if you have:
                  </li>
                  <li>Met health and character requirements</li>
                  <li>Acceptable Overseas Student Health Cover (OSHC)</li>
                  <li>Evidence of Sufficient funds</li>
                  <li>
                    Bachelor mark sheets, Degree or Provisional Certificate
                  </li>
                  <li>Academic Certificates</li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-left"
                fontSize={18}
              >
                English language requirements
              </Typography>

              <Typography
                variant="p"
                component="p"
                sx={{ mb: 3 }}
                data-aos="fade-up"
              >
                Australian universities & colleges accept both IELTS & PTE
                scores as a proof of English proficiency. The following
                guideline for IELTS/PTE score is just an approximation, each
                University or institute will have their own benchmark score for
                their respective courses.
              </Typography>

              <TableContainer component={Paper} data-aos="fade-up">
                <Table sx={{ width: '100%' }} aria-label="simple table">
                  <TableHead sx={{ bgcolor: 'primary.main' }}>
                    <TableRow>
                      <TableCell sx={{ color: '#fff', width: '40%' }}>
                        Programms
                      </TableCell>
                      <TableCell sx={{ color: '#fff' }}>
                        English Test Score
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <b>Diploma programs </b>
                      </TableCell>
                      <TableCell>
                        IELTS - Overall band score of 5.5 with no band less than
                        5.0
                        <br />
                        PTE - Overall 45; no less than 36
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Bachelor&#39;s Degree </b>
                      </TableCell>
                      <TableCell>
                        IELTS - Overall band score of 6.0; no less than 5.5{' '}
                        <br />
                        PTE - Overall 50; no less than 45
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Graduate Diploma </b>
                      </TableCell>
                      <TableCell>
                        IELTS - Overall band score of 6.5; no less than 6.0{' '}
                        <br />
                        PTE-Overall 58, no less than 50
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={12}>
              <Typography
                variant="subTitle"
                component="h2"
                sx={{ mb: 2 }}
                data-aos="fade-left"
                fontSize={18}
              >
                Finance Sources
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 2 }}
                data-aos="fade-up"
              >
                You must submit evidence of sufficient funds that must be 3
                months prior from the date of application for the duration of
                your stay in Australia.
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                <b>The Accepted Documents Include</b>
              </Typography>

              <Box data-aos="fade-up" sx={{ my: 1, '& ul': { ml: 3 } }}>
                <ul>
                  <li>
                    Evidence of financial supporter&#39;s occupation and annual
                    income - letter from the supporter&#39;s employer confirming
                    employment, and including full contact details (address and
                    telephone numbers), and supporter&#39;s personal bank
                    statements and tax returns for the last 3 years.
                  </li>
                  <li>Loan disbursement letter.</li>
                  <li>
                    Chartered Accountant Statements of the financial supporter.
                  </li>
                  <li>
                    In the case of company sponsorship, balance sheet and bond
                    signed with the company.
                  </li>
                  <li>
                    Evidence of income sourced from agriculture such as evidence
                    of ownership and valuation of land, income statement from
                    the regional authority (Example: Patwari or Mandal office)
                    and receipt of sales, and J forms.
                  </li>
                  <li>
                    Evidence of rental income such as evidence of ownership of
                    property and lease deeds.
                  </li>
                  <li>
                    Evidence of retirement income such as a letter from the
                    company at the time of retirement stating the amount of
                    pension, and recent bank statement showing the credit of
                    pension to account.
                  </li>
                </ul>
              </Box>
              <Typography
                variant="p"
                component="p"
                sx={{ mb: 1 }}
                data-aos="fade-up"
              >
                <b>
                  The immigration department must be satisfied that an
                  applicant, once in Australia, will have genuine access to the
                  funds they claim to possess to cover the travel, tuition and
                  living costs for themselves and their family members.
                </b>
              </Typography>

              <TableContainer component={Paper} data-aos="fade-up">
                <Table sx={{ width: '100%' }} aria-label="simple table">
                  <TableHead sx={{ bgcolor: 'primary.main' }}>
                    <TableRow>
                      <TableCell sx={{ color: '#fff', width: '50%' }}>
                        Unacceptable Funds
                      </TableCell>
                      <TableCell sx={{ color: '#fff' }}>
                        Acceptable Funds
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <b>KVP, NSC</b>
                      </TableCell>
                      <TableCell> Fixed Deposits</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Shares, debentures, bonds, LIC surrender value </b>
                      </TableCell>
                      <TableCell>Balance in Savings Account</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Capital account in business </b>
                      </TableCell>
                      <TableCell>Public Provident Fund (PPF)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Co-op bank balance and FDs </b>
                      </TableCell>
                      <TableCell>EPF, GPF, PF, CPF</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Enquire open={open} setOpen={setOpen} />
    </Layout>
  );
}
