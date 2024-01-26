import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Departments = () => {
  const departments = [
    ["Computer Engineering", "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706189139/CE_zc9vnu.png"],
    ["Information Technology", "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706194686/New_India_Young_India_3_n5mknp.png"],
    ["Mechanical Engineering", "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706194884/New_India_Young_India_4_ipnvxe.png"],
    ["Electrical Engineering", "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706195264/New_India_Young_India_5_ya2btn.png"],
    ["Department 1", "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/com.png?alt=media&token=de93b4dd-4592-4db2-9be5-76d52ae97d2c"],
    ["Department 2", "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/com.png?alt=media&token=de93b4dd-4592-4db2-9be5-76d52ae97d2c"],
  ];

  return (
    <div className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#070d1590] backdrop-filter backdrop-blur-3xl" style={{
        backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210889/chandrayaan-3-soft-landing-moon-with-indian-flag_816702-1971_psmstb.jpg')",
      }}>
       <div className="absolute inset-0 bg-[#070d15c7] backdrop-filter backdrop-blur-3xl"></div>
       
      {/* Departments */}
      <section className="radial-gradient-container w-full py-[calc(3vh)] relative overflow-hidden">
      
        <Swiper
          className="ml-8 swiper-container-glass"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 20,
              centeredSlides: true,
              initialSlide: 0,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5 sm:px-[calc(3vh)] px-10 mt-5 mb-5">
            {departments.map((department, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => (window.location.href = `/events#${department[0]}`)}
                  data-aos="zoom-in"
                  className="w-full rounded-lg bg-white/10 backdrop-blur-md md:md:mx-2 transition-all duration-300 transform hover:scale-105 shadow-md overflow-hidden card-3d mt-4 mb-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '6px 6px 6px 6px rgba(0, 0, 0, 0.25)', // Outset box shadow
  transform: 'hover:scale-105',
                  }}
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={department[1]}
                      alt=""
                      className="h-52 w-full object-cover transform hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h1 className="p-4 text-white font-bold text-center">{department[0]}</h1>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="custom-prev-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-black dark:bg-gray-800 rounded-full p-2 ml-4 cursor-pointer">
            <i className="text-white">{/* Your custom previous arrow icon goes here */}</i>
          </div>
          <div className="custom-next-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-black dark:bg-gray-800 rounded-full p-2 mr-4 cursor-pointer">
            <i className="text-white">{/* Your custom next arrow icon goes here */}</i>
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Departments;
