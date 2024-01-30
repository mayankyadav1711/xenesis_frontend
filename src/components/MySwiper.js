import React from 'react'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

// Install Swiper components
SwiperCore.use([EffectCoverflow, Pagination]);

const MySwiper = () => {
  return (
    <Swiper
      className="mySwiper" // Add your desired class
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        el: ".swiper-pagination",
      }}
    >
      {/* Swiper slides */}
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Slide 2" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiper;
