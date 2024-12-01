import {Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderStyle.css'

import Hero from './Hero';
const HeroSection = () => {
    return (
        <section>
        <div className="container_fluid py-5 xl:py-[64px]">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          

        >
            <SwiperSlide><Hero /></SwiperSlide>
            <SwiperSlide><Hero /></SwiperSlide>
            <SwiperSlide><Hero /></SwiperSlide>


        </Swiper>
        </div>
      </section>
       
    )
}

export default HeroSection
