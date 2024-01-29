import React, { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Departments = () => {
  const departments = [
    [
      "Computer Engineering",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252582/com_poggy8.png",
    ],
    [
      "Information Technology",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252583/IT_fxhzmv.png",
    ],
    [
      "Mechanical Engineering",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252585/Mech_yysew0.png",
    ],
    [
      "Electrical Engineering",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252582/Elec_t062k6.png",
    ],
    [
      "Electronics Communication",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252582/EC_hgsynt.png",
    ],
    [
      "MBA Department",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252583/MBA_y1dusl.png",
    ],
    [
      "MCA Department",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252584/MCA_skulpx.png",
    ],
    [
      "Science and Humanity",
      "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706252586/SH_jeidwy.png",
    ],
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set to true if you want the animation to happen only once
    });
  }, []);

  return (
    <div
      className="overflow-x-hidden bg-transparent relative "

      // style={{
      //     backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg')",
      // }}
    >
      {/* <div
        className="z-[-1]   min-h-screen w-full bg-cover"
        style={{
          backgroundImage: `url("/icons/background.svg")`,
        }}
      ></div> */}
      {/* <div className="absolute inset-0 bg-[#070d15c7] backdrop-filter backdrop-blur-3xl"></div> */}

      {/* Departments */}
      <div className="">
        <h3 className="uppercase text-white text-center text-heading2  font-jost  font-semibold py-10 pt-20">
          Departments
        </h3>
      </div>
      <section className="radial-gradient-container  w-full py-[calc(3vh)] relative overflow-hidden">
        <Swiper
          className="ml-8 swiper-container-glass"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
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
          <div className="grid md:grid-cols-5  font-jost  sm:grid-cols-3 grid-cols-1 gap-5 sm:px-[calc(3vh)] px-10 mt-5 mb-5">
            {departments.map((department, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() =>
                    (window.location.href = `/events#${department[0]}`)
                  }
                  data-aos="zoom-in"
                  className="w-full z-0 rounded-lg bg-white/10 backdrop-blur-md md:md:mx-2  transition-all duration-300 transform hover:scale-105 shadow-md overflow-hidden card-3d mt-4 mb-10"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)", // Outset box shadow
                    transform: "hover:scale-105",
                  }}
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={department[1]}
                      alt=""
                      className="h-52 w-full object-cover transform hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h1 className="p-4  font-jost  text-white font-bold text-center">
                    {department[0]}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next custom-next-button" style={{color:"black", marginTop:"-3.5rem"}}></div>
        <div className="swiper-button-prev custom-prev-button" style={{color:"black", marginTop:"-3.5rem"}}></div>
        </Swiper>
      </section>
    </div>
  );
};

export default Departments;
