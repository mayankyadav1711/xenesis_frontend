import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Navbar from './navbar';
import EventCard from './EventCard';
import Departments from './Departments';
import Footer from './Footer'
import Lenis from '@studio-freight/lenis'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const lenis = useRef(null);
  const section1Ref = useRef(null);
  // const colLeftRef = useRef(null);

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

  
  const departmentEvents = {
    "Events": [
      {
        title: "FreeFire",
        image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
        description: "Event description 1",
        pricePerHead: "100",
        individualAllowed: true,
        eventId: "event1",
        teamAllowed: true,
        teamPrice: 1000,
        likes: 9123,
      },
      {
        title: "X-Error",
        image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
        description: "Event description 1",
        pricePerHead: "100",
        individualAllowed: true,
        eventId: "event1",
        teamAllowed: true,
        teamPrice: 1000,
        likes: 9123,
      },
      {
        title: "Skribble",
        image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
        description: "Event description 1",
        pricePerHead: "100",
        individualAllowed: true,
        eventId: "event1",
        teamAllowed: true,
        teamPrice: 1000,
        likes: 9123,
      },
      {
        title: "Human Ludo",
        image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
        description: "Event description 1",
        pricePerHead: "100",
        individualAllowed: true,
        eventId: "event1",
        teamAllowed: true,
        teamPrice: 1000,
        likes: 9123,
      },
      {
        title: "Pictionary",
        image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
        description: "Event description 1",
        pricePerHead: "100",
        individualAllowed: true,
        eventId: "event1",
        teamAllowed: true,
        teamPrice: 1000,
        likes: 9123,
      },
      // Add more events as needed
    ],

    // Add more events as needed
  }

  const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    // Add more gallery images as needed
  ];



  function cardOverlayHandle(id) {
    document.getElementById("cardOverlay" + id).classList.remove("top-full");
    document.getElementById("cardOverlay" + id).classList.add("top-0");
    document.getElementById("blurOverlay" + id).classList.add("blur-lg");
    document.getElementById("cardOverlay" + id + "2").classList.remove("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-0");
    document.getElementById("blurOverlay" + id + "2").classList.add("blur-lg");
  }
  function cardOverlayHandleClose(id) {
    document.getElementById("cardOverlay" + id).classList.add("top-full");
    document.getElementById("cardOverlay" + id).classList.remove("top-0");
    document.getElementById("blurOverlay" + id).classList.remove("blur-lg");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.remove("top-0");
    document.getElementById("blurOverlay" + id + "2").classList.remove("blur-lg");
  }
  function handleLike(id) {
    document.getElementById("likeSVG" + id).classList.toggle("hidden");
    document.getElementById("likeSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeFillSVG" + id).classList.toggle("hidden");
    document.getElementById("likeFillSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeSVG" + id + "2").classList.toggle("hidden");
    document.getElementById("likeSVG" + id + "2").classList.toggle("opacity-0");
    document.getElementById("likeFillSVG" + id + "2").classList.toggle("hidden");
    document.getElementById("likeFillSVG" + id + "2").classList.toggle("opacity-0");
  }

  const handleCardOverlayClose = (eventId) => {
    // Add logic to handle closing the card overlay
    console.log(`Closing card overlay for ${eventId}`);
  };



  return (
    <div class=" overflow-x-hidden " ref={section1Ref} >
{/* Mavbar  */}



      {/* Title  */}
      <div class="fixed right-10 top-6 z-[999] flex items-center justify-center gap-4 px-[calc(2vh)]"  >
        <img src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706211721/profile_ksvngf.jpg" alt="" class="w-[50px] h-[50px] rounded-full object-cover cursor-pointer bg-slate-300" onclick="toggleProfileDropdown()" />

        <div class="absolute bg-slate-600 top-16 right-0 w-full min-w-[200px] rounded-md z-[999] h-0 overflow-hidden transition-all duration-300" id="profile-dropdown">
          <p class="w-full px-4 text-white truncate capitalize"><i class="bi bi-person mr-2.5"></i>Username</p>
          <hr class="w-full my-2" />
          <a href="/logout" class="">
            <p class="w-full px-4 text-white"><i class="bi bi-box-arrow-right mr-2.5"></i>Logout</p>
          </a>
        </div>
      </div>

      <section className="w-full h-screen p-6 text-white flex items-center justify-center relative" style={{ backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="absolute left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-20"></div>
        <div className="z-30 absolute top-1/2 -translate-y-1/2 px-[calc(3vh)] w-1/2 left-5">
          <h1 className="text-[calc(8vh)] text-transparent bg-gradient-to-r from-blue-600 via-white to-green-600 uppercase font-bold w-fit bg-clip-text text-transparent font-mono">
            <span className="text-blue-500">X</span>enesis
          </h1>

          <p className="text-[calc(3vh)]  uppercase font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 w-fit bg-clip-text text-transparent font-['Tiro_Devanagari_Hindi','serif']" data-aos="fade-up" data-aos-delay="100">
            <q>&nbsp;Young&nbsp;India&nbsp;New&nbsp;India&nbsp;</q>
          </p>

          <p className="text-[calc(2vh)] my-2 uppercase font-bold text-white w-fit " data-aos="fade-up" data-aos-delay="200">14th-15th March, 2023</p>
          <p className="text-[calc(2.5vh)] text-white text-justify" data-aos="fade-up" data-aos-delay="300">The term Xenesis has been derived from "genesis" which means commencement, commencement of anything</p>
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-[#070d15] via-transparent to-transparent lg:z-10 z-30"></div>
      </section>

      {/* Departments */}
      <div className="bg-[#070d15]" data-aos="fade-up">
        <div className="w-full text-center">
          <h3 className="uppercase text-white lg:text-[calc(8vh)] text-[calc(3vh)] font-serif font-semibold pb-4 pt-4">Departments</h3>

        </div></div>
      <Departments />

      {/*Hello Events */}
      <div className="bg-[#162238]]">
        {Object.entries(departmentEvents).map(([department, events]) => (
          <div key={department} className={`bg-[#070d15]`}>
            <div className="w-full text-center">
              <h3 className="uppercase text-white lg:text-[calc(8vh)] text-[calc(3vh)] font-serif font-semibold mb-4  pt-4">{department}</h3>
            </div>

            <EventCard title={department} events={events} />
          </div>
        ))}
      </div>


      <div className="bg-[#070d15]">
        <div className="w-full text-center">
          <h3 className="uppercase text-white lg:text-[calc(8vh)] text-[calc(3vh)] font-serif font-semibold pt-4 py-4">Gallery</h3>

        </div></div>
      {/* Gallery */}
      <div className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#070d15b6] backdrop-filter backdrop-blur-3xl" style={{
        backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210889/chandrayaan-3-soft-landing-moon-with-indian-flag_816702-1971_psmstb.jpg",
      }}>
        <div className="absolute inset-0 bg-[#070d15b5] backdrop-filter backdrop-blur-3xl"></div>


        <Swiper
          className="ml-8 swiper-container-glass mt-8 mb-8"
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
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Home;
