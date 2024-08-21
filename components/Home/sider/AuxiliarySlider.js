import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Paper } from '@mui/material';
import Image from 'next/image';
import { logoData } from '@/utils/data';

export default function AuxiliarySlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {logoData.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper
              sx={{
                py: 3,
                px: 3,
                m: 1,
                boxShadow: 'var(--shadow)',
                textAlign: 'center',
              }}
            >
              <Image
                src={`/images/logo/${item.image}`}
                width={200}
                height={150}
                style={{ width: 200, height: 'auto' }}
                alt={item.name}
                priority
              />
            </Paper>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Paper
            sx={{
              py: 3,
              px: 3,
              m: 1,
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/logo/Sydney-Institute-of-Higher-Education-swhite.png"
              width={200}
              height={150}
              style={{ width: 200, height: 'auto' }}
              alt="winzoy"
              priority
            />
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            sx={{
              py: 3,
              px: 3,
              m: 1,
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/logo/trinityinstitutes.jpg"
              width={200}
              height={150}
              style={{ width: 200, height: 'auto' }}
              alt="winzoy"
              priority
            />
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            sx={{
              py: 3,
              px: 3,
              m: 1,
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/logo/CIHE-logo.png"
              width={200}
              height={150}
              style={{ width: 200, height: 'auto' }}
              alt="winzoy"
              priority
            />
          </Paper>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <Paper
            sx={{
              py: 3,
              px: 3,
              m: 1,
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/logo/taxoz-logo1.svg"
              width={200}
              height={150}
              style={{ width: 200, height: 'auto' }}
              alt="winzoy"
              priority
            />
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            sx={{
              py: 3,
              px: 3,
              m: 1,
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <Image
              src="/images/logo/taxoz-logo1.svg"
              width={200}
              height={150}
              style={{ width: 200, height: 'auto' }}
              alt="winzoy"
              priority
            />
          </Paper>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
