import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Nursing() {
  return (
    <div>
      <Grid container spacing={7} justifyContent="center" alignItems="center">
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4" sx={{ my: 2 }}>
            Nursing Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Nursing, being an integral part of the healthcare system, is one of
            the highly respected and most demanding fields across the world
            today. It includes the promotion of health, prevention of illness
            and care of physical and mentally disabled individuals of all ages
            and groups.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ maxWidth: 320, mx: 'auto' }}>
            {/* <SvgLoader
              id="InformationTechnology"
              src="/animation/Nursing.json"
            /> */}{' '}
            <Image
              src="/images/courses/pexels-karolina-grabowska-4386466.jpg"
              width={720}
              height={655}
              className="img"
              alt="Finance and Accounting"
              priority
            />
          </Box>
        </Grid>
        <Grid md={12}>
          <Box sx={{ my: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              Why australia is the most popular destination to study nursing?
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Australia is always known for its excellence in providing quality
              education, valuable skills and abundant job opportunities to
              nurses and healthcare workers.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              It also offers numerous study programs that are specifically
              tailored for nursing students including examination of cultural,
              political and economic forces that have an impact on health care
              systems along with comparative studies of nursing license,
              practice and reviewing health disparities.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Also, the Australian Government announced that nurses, dieticians,
              midwives and physiotherapists are particularly high in demand in
              the areas of community care and maternity services in Australia.
              Since the demand is predicted to increase every year, registered
              nurses and other sectors in this occupation are going to be listed
              consistently in the Skilled Occupations List (SOL) and
              Consolidated Sponsored Occupations List (CSOL).
            </Typography>
          </Box>
        </Grid>
        <Grid md={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              The bridging course - IRON Program
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Another major reason for a large number of individuals choosing
              Australia to practice nursing is the Bridging Program IRON
              (Initial Registration for Overseas Nurses). Considered by the
              Australian Nursing and Midwifery Accreditation Council (ANMAC),
              IRON Program is designed for overseas qualified nurses who wish to
              practice nursing in australia.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              This program helps future nurses embrace their existing knowledge
              and skills to practice safely and competently in a variety of
              health care settings. The successful completion of the program
              also helps graduates get recommended by the Australian Health
              Practitioner Regulation Agency for eligibility of a Registered
              Nurse in Australia.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
