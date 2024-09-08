import Layout from '@/assets/Layout';
import AboutMain from '@/components/About/AboutMain';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import AuxiliaryServices from '@/components/Home/AuxiliaryServices';
import React from 'react';

export default function AboutPage() {
  return (
    <Layout title="About Us">
      <AboutMain />
      <OurMission />
      <OurStory />
      <AuxiliaryServices />
    </Layout>
  );
}
