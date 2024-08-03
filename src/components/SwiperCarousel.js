import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../css/SwiperCarousel.css';  // 自定义样式文件可选：用于自定义样式

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const SwiperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={30}
      effect={'fade'}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCarousel;

