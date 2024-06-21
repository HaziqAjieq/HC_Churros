import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

import './SwiperImg.scss';
import { sliderImg } from '../../assets/sliderImg/sliderImg'; // Ensure this path is correct


function SwiperImg() {
  return (
    <div className="swiper-container">
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {Object.keys(sliderImg).map((key, index) => (
        <SwiperSlide key={index}>
          <img src={sliderImg[key]} alt={`img${index + 1}`} className='image' />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default SwiperImg