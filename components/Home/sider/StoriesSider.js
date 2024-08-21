import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import { testimonialsData } from '@/utils/data';

export default function StoriesSider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                border: '1px solid #f7f7f7',
                backdropFilter: 'blur(10px)',
                bgcolor: 'rgba(255,255,255,.3)',
                py: 6,
                cursor: 'pointer',
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                px: { md: 5, xs: 3 },
              }}
            >
              <div>
                <Stack direction={'row'} spacing={2}>
                  <Box sx={{ mb: 2 }}>
                    <Avatar
                      alt={item.name}
                      src="#"
                      sx={{ height: 60, width: 60 }}
                    ></Avatar>
                  </Box>
                  <Box>
                    <Typography variant="subTitle" component={'p'}>
                      {item.name}
                    </Typography>
                    <Typography component={'p'} sx={{ fontWeight: 500 }}>
                      {item.country}
                    </Typography>
                  </Box>
                </Stack>
                <Typography>{item.message}</Typography>
              </div>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
