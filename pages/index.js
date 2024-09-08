import Layout from '@/assets/Layout';
import AboutComp from '@/components/Home/AboutComp';
import AuxiliaryServices from '@/components/Home/AuxiliaryServices';
import Coaching from '@/components/Home/Coaching';
import Education from '@/components/Home/Education';
import HeroBarTwo from '@/components/Home/HeroBar2';
import JourneyAssistance from '@/components/Home/JourneyAssistance';
import Stories from '@/components/Home/Stories';
import Whychoose from '@/components/Home/Whychoose';
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
          <JourneyAssistance />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Coaching />
        </Box>
        <AuxiliaryServices />{' '}
        <Box sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
          <Box className="overlay-style-1"></Box>
          <Box className="overlay-style-2"></Box>
          <Box className="overlay-style-3"></Box>
          <Stories />
        </Box>
      </Layout>
    </>
  );
}
