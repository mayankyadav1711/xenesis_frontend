import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from './navbar';
import EventCard from './EventCard';
import Departments from './Departments';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  const eventArr = [
    {
      title: "Event 1",
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
      title: "Event 2",
      image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
      description: "Event description 2",
      pricePerHead: "200",
      individualAllowed: false,
      eventId: "event2",
      teamAllowed: false,
      teamPrice: 750,
      likes: 0, // You can initialize likes to 0
    },
    {
      title: "Event 1",
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
      title: "Event 1",
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
      title: "Event 2",
      image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
      description: "Event description 2",
      pricePerHead: "200",
      individualAllowed: false,
      eventId: "event2",
      teamAllowed: false,
      teamPrice: 750,
      likes: 0, // You can initialize likes to 0
    },
    // Add more events as needed
  ];
  
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
    <div class=" overflow-x-hidden" >
{/* Mavbar  */}

<Navbar />

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
      <h1 className="text-[calc(12vh)] text-transparent bg-gradient-to-r from-blue-600 via-white to-green-600 uppercase font-bold w-fit bg-clip-text text-transparent font-mono">
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
      <div className="bg-[#070d15]">
      <div className="w-full text-center">
          <h3 className="uppercase text-white text-5xl font-serif font-semibold mb-4">Departments</h3>
         
        </div><hr /></div>
      <Departments />

      {/*Hello Events */}
      <div className="bg-[#070d15]">
      <div className="w-full text-center">
          <h3 className="uppercase text-white text-5xl font-serif font-semibold mb-4">Events</h3>
         
        </div><hr /></div>
      <EventCard />


      <div className="bg-[#070d15]">
      <div className="w-full text-center">
          <h3 className="uppercase text-white text-5xl font-serif font-semibold mb-4">Gallery</h3>
         
        </div><hr /></div>
      {/* Gallery */}
      <div className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#070d15b6] backdrop-filter backdrop-blur-3xl" style={{
        backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210889/chandrayaan-3-soft-landing-moon-with-indian-flag_816702-1971_psmstb.jpg",
      }}>
       <div className="absolute inset-0 bg-[#070d15d0] backdrop-filter backdrop-blur-3xl"></div>
       
      
      <Swiper
      className='mt-8'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        breakpoints={{
          320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
      centeredSlides: true, // Center the active slide at 320 pixels
      initialSlide: 0, // Adjust this value based on which slide you want to be initially centered
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
    </Swiper>
</div>
      <footer className="bg-[#0e242f] pt-20">
        <div className="md:flex sm:grid sm:grid-cols-2 flex flex-col md:flex-row lg:justify-around justify-center md:gap-10 gap-3 xl:px-32 lg:px-20 md:px-12 px-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col md:items-center items-start gap-3">
            <img
              src="/static/logoCus.png"
              alt="Xenesis"
              className="lg:w-[140px] w-[110px]"
            />
            <p className="lg:max-w-[200px] md:max-w-[140px] md:text-center text-gray-300">
              Epic Events organized for ultimate students!
            </p>
          </div>

          {/* Useful Links */}
          <div className="pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute lg:after:left-0 after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
              Useful Links
            </h3>
            <div className="flex flex-col text-left text-gray-400 gap-1 lg:text-base text-sm">
              <a
                href="/"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                Home
              </a>
              <a
                href="/event"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                Events
              </a>
              <a
                href="/aboutus"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                About Us
              </a>
              <a
                href="/faqs"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
              Contact Us
            </h3>
            <div className="flex flex-col text-left gap-2 text-gray-400 lg:text-base text-sm">
              <div className="flex flex-col group cursor-pointer">
                <p className="text-[#9740fe]">Join Us:</p>
                <a
                  href="mailto:xenesis@ldrp.ac.in"
                  className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  xenesis@ldrp.ac.in
                </a>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <p className="text-[#9740fe]">Phone:</p>
                <a
                  href="tel:7863085614"
                  className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  +91 786 308 5614
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:pt-4 sm:pt-3 pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-5 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
              Social Links
            </h3>
            <p className="lg:max-w-[250px] md:max-w-[200px] text-gray-300">
              Get in touch! Find us on any platform.
            </p>
            <div className="flex items-center justify-start lg:gap-5 gap-4 md:mt-4 mt-2">
              <a
                href="https://www.facebook.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/xenesisldrp"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyrights */}
        <div className="bg-[#211e60] bg-opacity-20 md:w-fit w-full md:px-24 px-8 md:pr-36 mb-0 clip-copyrights text-gray-300 font-semibold py-8 md:text-xl text-md">
          &copy; 2023 Xenesis All Rights Registered
        </div>
      </footer>
    </div>
  );
};

export default Home;