/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./navbar";
import EventCard from "./EventCard";
import Departments from "./Departments";
import Footer from "./Footer";
import ClimbingBoxLoader from "react-spinners/ClipLoader";

// Import Swiper styles
import "../components/swiper.css";
import "../components/navigation.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Earth from "./earth";
import SolarSystem from "./SolarSystem";
// import Arrow from "../../public/icons/arrow.svg"

const Home = () => {
  const [departmentEvents, setDepartmentEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events/")
      .then((res) => res.json())
      .then((data) => {
        setDepartmentEvents(data.departmentArr);
      })
      .catch((err) => console.log(err));
  }, []);

  const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://res.cloudinary.com/db4e3hqfv/image/upload/v1706421174/Picsart_24-01-28_11-18-07-328_ull2di.png",
    // Add more gallery images as needed
  ];

  function cardOverlayHandle(id) {
    document.getElementById("cardOverlay" + id).classList.remove("top-full");
    document.getElementById("cardOverlay" + id).classList.add("top-0");
    document.getElementById("blurOverlay" + id).classList.add("blur-lg");
    document
      .getElementById("cardOverlay" + id + "2")
      .classList.remove("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-0");
    document.getElementById("blurOverlay" + id + "2").classList.add("blur-lg");
  }
  function cardOverlayHandleClose(id) {
    document.getElementById("cardOverlay" + id).classList.add("top-full");
    document.getElementById("cardOverlay" + id).classList.remove("top-0");
    document.getElementById("blurOverlay" + id).classList.remove("blur-lg");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.remove("top-0");
    document
      .getElementById("blurOverlay" + id + "2")
      .classList.remove("blur-lg");
  }
  function handleLike(id) {
    document.getElementById("likeSVG" + id).classList.toggle("hidden");
    document.getElementById("likeSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeFillSVG" + id).classList.toggle("hidden");
    document.getElementById("likeFillSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeSVG" + id + "2").classList.toggle("hidden");
    document.getElementById("likeSVG" + id + "2").classList.toggle("opacity-0");
    document
      .getElementById("likeFillSVG" + id + "2")
      .classList.toggle("hidden");
    document
      .getElementById("likeFillSVG" + id + "2")
      .classList.toggle("opacity-0");
  }

  const handleCardOverlayClose = (eventId) => {
    // Add logic to handle closing the card overlay
    console.log(`Closing card overlay for ${eventId}`);
  };

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / documentHeight) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translationValue = -(scrollPercentage * 10);

  return (
    <div class=" overflow-x-hidden">
      {/* Mavbar  */}

      {/* Title  */}
      <div class="fixed right-10 top-6 z-[999] flex items-center justify-center gap-4 px-[calc(2vh)]">
      

        <div
          class="absolute bg-slate-600 top-16 right-0 w-full min-w-[200px] rounded-md z-[999] h-0 overflow-hidden transition-all duration-300"
          id="profile-dropdown"
        >
          <p class="w-full px-4 text-white truncate capitalize">
            <i class="bi bi-person mr-2.5"></i>Username
          </p>
          <hr class="w-full my-2" />
          <Link to="/logout" rel="noopener noreferrer" class="">
            <p class="w-full px-4 text-white">
              <i class="bi bi-box-arrow-right mr-2.5"></i>Logout
            </p>
          </Link>
        </div>
      </div>

      <section
        className="w-full h-screen text-white flex items-center justify-center relative"
        style={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/homebg.png?alt=media&token=79e13332-500b-4a36-bb36-78b0a7a4b124")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <div
          className="absolute w-full h-full top-0 bg-gradient-to-b from-transparent via-transparent to-darkBlue-50 "
          style={{ backdropFilter: "blur(1px)" }} // Adjust the blur value as needed
        ></div> */}

        {/* apply inline style to make the position sticky */}
        <div className="absolute inset-0 z-0 ">
          <SolarSystem />
        </div>

        <div className="z-30 absolute top-1/2 -translate-y-1/2 px-[calc(3vh)] w-1/2 left-5">
          <h1
            className="lg:text-[calc(8vh)] text-[calc(4vh)] bg-gradient-to-r from-darkYellow-50 via-white to-green-600 uppercase font-bold w-fit bg-clip-text text-transparent"
            style={{ fontFamily: "Jost" }}
          >
            <span
              className="lg:text-9xl text-5xl"
              style={{ fontFamily: "Jost" }}
            >
              X
            </span>
            <span style={{ fontFamily: "Jost" }}>enesis</span>
          </h1>

          <p
            className="lg:text-4xl text-lg uppercase font-bold  text-orange-200 w-fit "
            data-aos="fade-up"
          >
            <q style={{ fontFamily: "Jost" }}>
              &nbsp;Young&nbsp;India&nbsp;New&nbsp;India&nbsp;
            </q>
          </p>

          <p
            className=" lg:mx-9 mx-0 mt-5 font-bold text-orange-100 w-fit  lg:text-4xl text-md"
            data-aos="fade-up"
            style={{ fontFamily: "Jost" }}
          >
            23<sup>rd</sup>-24<sup>th</sup> Feb'24
          </p>
          {/* <p
            className="text-[calc(2.5vh)] text-white text-justify"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The term Xenesis has been derived from "genesis" which means
            commencement, commencement of anything
          </p> */}
        </div>
        {/* <div className="absolute w-full h-full top-0 bg-gradient-to-t from-[#070d15] via-transparent to-transparent lg:z-10 z-30"></div> */}
      </section>

      {/* Departments */}
      {/* <div className="bg-darkBlue-50">

                <h3 className="uppercase text-white text-center lg:text-[calc(8vh)] text-[calc(3vh)] font-serif font-semibold pb-4 pt-4">
                    Departments
                </h3>
            </div> */}
      <div
        className="absolute w-full h-full top-0 bg-gradient-to-b from-transparent via-transparent to-[#151e29] "
       // Adjust the blur value as needed
      ></div>
      <Departments />

      {/*Hello Events */}
            {departmentEvents.length > 0 ? (
                <div className="bg-darkBlue-50  bg-opacity-0 ">
                    {departmentEvents.slice(0, 1).map((department, index) => (
                        <div key={index} className={``}>
                            <div className="w-full z-10 text-center">
                                <h3 className="uppercase  font-jost  text-white text-heading2 font-semibold mb-4 pt-20 py-10">
                                    {/* {department.departmentName} */}
                                    Events
                                </h3>
                            </div>

                            <EventCard

                                title={department}
                                events={department.events}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                < div className="flex justify-center items-center h-[700px] text-white w-screen">
                    <ClimbingBoxLoader className="scale-150" color="#36d7b7" />


                </div>
            )
            }

      <div className="bg-transparents"></div>
      {/* Gallery */}
      <div
        className="overflow-x-hidden bg-cover bg-no-repeat bg-center py-5 pb-28"
        // style={{
        //   backgroundImage: `url("/icons/background.svg")`,
        // }}
      >
        {/* <div className="absolute inset-0 bg-[#070d15b5] backdrop-filter backdrop-blur-3xl"></div> */}
        <div className="w-full text-center">
          <h3 className="uppercase text-white text-heading3  font-jost font-semibold  py-10 z-50">
            Gallery
          </h3>
        </div>

        <Swiper
          className="ml-8 swiper-container-glass mt-8 mb-20"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
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
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-xl mb-10"
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next custom-next-button">
            <img src={"/icons/arrow.svg"} className="h-6 w-6" alt="Next" />
          </div>

          <div className="swiper-button-prev custom-prev-button">
            <img
              src={"/icons/arrow.svg"}
              className="h-6 w-6 transform rotate-180"
              alt="Previous"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;