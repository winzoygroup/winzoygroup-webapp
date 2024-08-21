import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Accounting() {
  return (
    <div>
      <Grid container spacing={7}>
        <Grid item md={7}>
          <Typography variant="subTitle" component="h4">
            Accounting and Finance Courses in Australia
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Finance and Accounting are the two business areas that request canny
            calculation and high solace level with numbers alongside a great
            deal of determination.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            The ability to deal with the numbers accurately is a unique skill
            set and this is why graduates in accounting and finance are
            procuring vast career opportunities and lucrative salaries.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            The demand for accountants never wavers because without them any
            business would not be able to maintain the flow of business
            transactions or create strategic plans for the future.
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Are you also intrigued by the supremacy and reputation of
            accounting?
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            Or
          </Typography>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            The thought of job stability and potential growth in the field of
            accounting always excite you? Then, study in Australia can help you
            acquire all the professional skills you need to become a qualified
            accountant.
          </Typography>
        </Grid>
        <Grid item md={5}>
          {/* <Image
            src="/images/Finance and Accounting.webp"
            width={720}
            height={655}
            className="img"
            alt="Finance and Accounting"
            priority
          /> */}
          <Image
            src="/images/accounting_3.webp"
            width={720}
            height={655}
            className="img"
            alt="Finance and Accounting"
            priority
          />
        </Grid>
        <Grid item md={12}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="subTitle" component="h3" sx={{ mb: 1.5 }}>
              Why study accounting and finance in australia?
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Australia is famous for giving imaginative and excellent training
              at both undergrad and postgraduate levels.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Over the most recent five years, roughly 40,000 global
              understudies have entered the country through the bookkeeping
              talented stream. Since Australian colleges are solid in research
              and succeed in areas of schooling and sciences. They are
              additionally positioned in the main 100 in the most recent QS
              World College Rankings with regard to scholarly standing and
              global understudy proportion.
            </Typography>
            <Typography variant="p" component="p" sx={{ mb: 1 }}>
              Also, as the study goes, the open positions in the bookkeeping
              field are supposed to ascend in 2017. Hence concentrating on
              Australia can be a venturing stone to a remunerating profession in
              bookkeeping.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
