import Layout from '@/assets/Layout';
import AboutMain from '@/components/About/AboutMain';
import Experts from '@/components/About/Experts';
import MediaGallery from '@/components/About/MediaGallery';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import AuxiliaryServices from '@/components/Home/AuxiliaryServices';
import Products from '@/components/Home/Products';
import React from 'react';

export default function AboutPage() {
  return (
    <Layout title="About Us">
      <AboutMain />
      <OurMission />
      <OurStory />
      {/* <Experts /> */}
      {/* <MediaGallery /> */}
      <AuxiliaryServices />
      {/* <Products /> */}
    </Layout>
  );
}
// import Maintenance from '@/components/maintenance';
// import React from 'react';

// export default function index() {
//   return <Maintenance />;
// }
