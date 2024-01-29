import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutcont from "./aboutcont/aboutcont";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
  const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png",
    "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    // Add more gallery images as needed
  ];
const lenis = useRef(null);
  const section1Ref = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.current.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timeln = gsap.timeline({ paused: true });
    // timeln.fromTo(colLeftRef.current, { y: 0 }, { y: '170vh', duration: 1, ease: 'none' }, 0);

    ScrollTrigger.create({
      animation: timeln,
      trigger: section1Ref.current,
      start: 'top top',
      end: 'bottom center',
      scrub: true,
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set to true if you want the animation to happen only once
    });
  }, []);
  return (
    <>
    {/* ref={section1Ref} */}
      <div ref={section1Ref}
          className={`relative z-20 overflow-hidden bg-cover bg-no-repeat bg-fixed nt pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]`}
  style={{
    backgroundColor: "#2a3246", // Background color
  }}
      
    >
      {/* <div className="absolute inset-0 bg-opacity-40 backdrop-filter backdrop-blur-md z-[-1]"></div> */}
       <h1
          className={` pt-24 left-1/2  text-white bg-clip-text text-shadow-md lg:text-6xl md:text-4xl sm:text-2xl text-4xl font-bold text-center z-100` } style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
        >
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span> </span>
          <span>U</span>
          <span>S</span>
        </h1>
        <p className="text-white lg:text-lg text-md font-medium my-5 text-center p-8" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
        Xenesis is an annual technical festival organized by LDRP-ITR, providing a platform for students to showcase their technical skills and compete with their peers. The festival brings together a diverse range of participants from different engineering colleges across the country.
        With a plethora of events, workshops, and technical talks, Xenesis aims to create an atmosphere that fosters learning, creativity, and innovation. The festival provides an opportunity for students to engage in hands-on technical activities, gain practical experience, and enhance their problem-solving abilities.
                    At Xenesis, we strive to inspire and encourage the next generation of engineers and technologists. We believe that the festival is not just about competition but also about creating a sense of community and sparking a passion for technology.
<br /><br />
                    Our team comprises enthusiastic students who work tirelessly to organize and execute the festival. We aim to create a memorable experience for all participants and ensure that everyone has an enjoyable and rewarding time.
                  Xenesis has been a resounding success over the years, attracting participants from far and wide. We are committed to making each edition of the festival better than the last, by incorporating feedback and improving the overall experience.
                   Come be a part of the Xenesis family and join us in celebrating technology and innovation!
               
                  </p>

        <div className="container mx-auto w-full ">
          <div className="wrap p-10 ">
            <div
              className="border-2-2 absolute border-opacity-20 border-white h-full border"
              style={{ left: "50%" }}
            ></div>

<div  className="mb-8 flex justify-between items-center w-full right-timeline">
  {/* Add image container */}
  <div className="order-1 w-4/12 flex items-center justify-end">
  <div className="flex items-center justify-center lg:w-64 lg:h-64 w-24 h-24 rounded-full" style={{backgroundColor: "rgba(100, 240, 220, 0.1)"}}>
  <div className="lg:w-48 lg:h-48 w-16 h-16 overflow-hidden rounded-full">
    {/* Add your image here */}
    <img
      src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png"
      alt="Image"
      className="w-full h-full object-cover rounded-full hover:scale-125"
    />
  </div>
</div>

  </div>
  
 
  <div className="z-20 flex items-center order-1 bg-gray-800 border-cyan-400 border-2 lg:p-5 p-3 shadow-xl lg:w-32 lg:h-32 w-16 h-16 rounded-full " style={{ boxShadow: '6px 6px 8px 4px rgba(0, 0, 0, 0.2)' }}>
  <Link to="https://ksv.ac.in/" target="_blank" rel="noopener noreferrer"><h1 className="mx-auto font-semibold text-lg text-white"><img src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706422756/KSV_LOGO_b33vyg.png" /></h1>
  </Link> </div>
  
  <div data-aos="fade-left" className="order-1 bg-gray-800 border-cyan-400 border-2 rounded-lg shadow-xl w-4/12 lg:px-8 lg:py-8 p-2 ">
    <h3 className="mb-3 font-bold text-cyan-500 lg:text-xl text-[10px]">
      Kadi Sarva Vishwavidhyalaya
    </h3>
    <p className="lg:text-sm text-[8px] font-medium leading-snug tracking-wide text-white text-opacity-100">
    Kadi Sarva Vishwavidyalaya (KSV), established in 2007, with the principle "કર ભલા હોગા ભલા." Recognized by the UGC, KSV operates under the Gujarat State Government Act and is guided by SVKM. 
    </p>
  </div>
</div>


<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
  {/* Add image container */}
  
  <div className="order-1 w-4/12 flex items-center relative">
  <div className="flex items-center justify-center  lg:w-64 lg:h-64 w-24 h-24 rounded-full" style={{backgroundColor: "rgba(255, 165, 0, 0.1)"}}>
    {/* Add your image here */}
    <div className="lg:w-48 lg:h-48 w-16 h-16 overflow-hidden rounded-full">
    {/* Add your image here */}
    <img
      src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421260/download_b55xtv.jpg"
      alt="Image"
      className="w-full h-full object-cover rounded-full hover:scale-125"
    />
  </div>
    
   
  </div>
</div>


  
<div className="z-20 flex items-center order-1 bg-gray-800 border-orange-800 border-2 lg:p-5 p-3 shadow-xl lg:w-32 lg:h-32 w-16 h-16 rounded-full " style={{ boxShadow: '6px 6px 8px 4px rgba(0, 0, 0, 0.2)' }}>
<Link to="https://www.ldrp.ac.in/" target="_blank" rel="noopener noreferrer">   <h1 className="mx-auto font-semibold text-lg text-white"><img src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706422760/ldrp_logo_HD_aa5hq9.png" /></h1>
 </Link> </div>
  
  <div data-aos="fade-right" className="order-1 bg-gray-800 border-orange-600 border-2 rounded-lg shadow-xl w-4/12 lg:px-6 lg:py-6 p-2">
    <h3 className="mb-3 font-bold text-orange-700 lg:text-xl text-[10px]">LDRP Institute of Technology and Research</h3>
    <p className="lg:text-sm text-[8px] leading-snug font-medium tracking-wide text-white text-opacity-100">
    Established in 2005-2006, LDRP - Institute of Technology and Research, Gandhinagar, is a prominent institute known for quality undergraduate and postgraduate education, shaping technical education in Gujarat. 
    </p>
  </div>
</div>


<div  className="mb-8 flex justify-between items-center w-full right-timeline">
  {/* Add image container */}
  <div className="order-1 w-4/12 flex items-center justify-end">
  <div className="flex items-center justify-center lg:w-64 lg:h-64 w-24 h-24 rounded-full" style={{backgroundColor: "rgba(179, 157, 219, 0.1)"}}>
  <div className="lg:w-48 lg:h-48 w-16 h-16 overflow-hidden rounded-full">
    {/* Add your image here */}
    <img
      src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png"
      alt="Image"
      className="w-full h-full object-cover rounded-full hover:scale-125"
    />
  </div>
</div>

  </div>
  
  <div className="z-20 flex items-center order-1 bg-gray-800 border-purple-800 border-2 lg:p-5 p-3 shadow-xl lg:w-32 lg:h-32 w-16 h-16 rounded-full " style={{ boxShadow: '6px 6px 8px 4px rgba(0, 0, 0, 0.2)' }}>
  <Link to="/" target="_blank" rel="noopener noreferrer">  <h1 className="mx-auto font-semibold text-lg text-white"><img src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706426300/logoCus_uwaqbs.png"/></h1>
  </Link></div>
  
  <div data-aos="fade-left" className="order-1 bg-gray-800 border-purple-800 border-2 rounded-lg shadow-xl w-4/12 lg:px-8 lg:py-8 p-2">
    <h3 className="mb-3 font-bold text-purple-500 lg:text-xl text-[10px]">
      Xenesis
    </h3>
    <p className="lg:text-sm text-[8px] font-medium leading-snug tracking-wide text-white text-opacity-100">
    Xenesis, an annual technical festival organized by LDRP-ITR, serves as a platform for students to showcase technical skills and compete nationwide. 
    </p>
  </div>
</div>




          </div>
     
        </div>
      </div>
      <div data-aos="fade-left" className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#2a3246] backdrop-filter backdrop-blur-3xl" 
       >
        {/* <div className="absolute inset-0 bg-[#070d15b5] backdrop-filter backdrop-blur-3xl"></div> */}


        <Swiper
          className="ml-8 swiper-container-glass mt-8 mb-8 "
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          // pagination={{ clickable: true }}
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
              slidesPerView: 3,
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next custom-next-button "></div>
        <div className="swiper-button-prev custom-prev-button"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Aboutus;