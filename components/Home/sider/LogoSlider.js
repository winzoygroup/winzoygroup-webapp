import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { Autoplay, FreeMode } from 'swiper';
import { Box } from '@mui/material';
import Image from 'next/image';

export default function LogoSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          300: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {[...Array(12)].map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                py: 3,
                px: 3,
                m: 1,
                textAlign: 'center',
                '& img': {
                  filter: 'grayscale(100%)',
                },
                '& img:hover': {
                  filter: 'none',
                },
              }}
            >
              <Image
                src="/images/logo/taxoz-logo1.svg"
                width={170}
                height={92}
                style={{ width: 120, height: 'auto' }}
                alt="winzoy"
                priority
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
