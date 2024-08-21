import Layout from '@/assets/Layout';
import AboutComp from '@/components/Home/AboutComp';
import AuxiliaryServices from '@/components/Home/AuxiliaryServices';
import Coaching from '@/components/Home/Coaching';
import Education from '@/components/Home/Education';
import HeroBarTwo from '@/components/Home/HeroBar2';
import Media from '@/components/Home/Media';
import Migration from '@/components/Home/Migration';
import Products from '@/components/Home/Products';
import Stories from '@/components/Home/Stories';
import Whychoose from '@/components/Home/Whychoose';
import LogoSlider from '@/components/Home/sider/LogoSlider';

import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Layout>
        <HeroBarTwo />
        <AboutComp />
        <Box sx={{ my: 7 }}>
          <Whychoose />
        </Box>
        <Education />
        <Box sx={{ mt: 10 }}>
          <Migration />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Coaching />
        </Box>
        {/* <Products /> */}
        <AuxiliaryServices />{' '}
        <Box sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
          <Box className="overlay-style-1"></Box>
          <Box className="overlay-style-2"></Box>
          <Box className="overlay-style-3"></Box>
          <Stories />
        </Box>
        {/* <Media /> */}
        {/* <Box sx={{ my: 7 }}>
          <LogoSlider />
        </Box> */}
      </Layout>
    </>
  );
}

// import Maintenance from '@/components/maintenance';
// import { Box } from '@mui/material';
// import React from 'react';

// export default function index() {
//   return <Maintenance />;
// }
