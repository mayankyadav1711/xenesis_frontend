// EventCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaUser, FaBan } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";
import First from "./images/1st.svg";
import Second from "./images/2nd.svg";

const EventCard = ({ events }) => {
  return (
    <div
      className="overflow-x-hidden bg-cover bg-no-repeat bg-center  "
      // style={{
      //     backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg')",
      // }}
    >
      {/* <div className="absolute inset-0 bg-darkBlue-50 backdrop-filter backdrop-blur-3xl"></div> */}
      <div className="w-full h-fit overflow-hidden customScrollbar relative px-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, A11y]}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.15,
              spaceBetween: 0,
              centeredSlides: true,
              initialSlide: 0,
            },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.1 },
          }}
          loop={true}
        >
          {events.map((event, index) => (
            <SwiperSlide className="swiper-slide  px-2 mr-0" key={index}>
              <div
                className="bg-[#2B3247] z-10  hover:bg-opacity-100 gap-0  border-2  border-deepBlue-100 overflow-hidden bg-opacity-95 rounded-md p-4 pb-0 flex flex-col  justify-between group w-full min-h-[500px] md:min-h-[520px] my-5 mx-2"
                style={{
                  // border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s",
                  boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                  height: "fit-content",
                }}
              >
                <div className="overflow-hidden h-fit  rounded-md   w-full">
                  <img
                    src={
                      event.eventPosterImage !== "-"
                        ? event.eventPosterImage
                        : "/static/images/logoCus.png"
                    }
                    alt={index}
                    className="group-hover:scale-105  origin-bottom object-cover  w-[calc(100%)] h-56 transition-all duration-300 "
                  />
                </div>
                <div className="py-0  px-4 glassy-effect  rounded-lg shadow-outset-black">
                  <h1 className="text-white  font-jost  text-center text-heading6 capitalize eventName  truncate">
                    {event.eventName}
                  </h1>
                  {/* <p className="text-[#c0c0c0] text-center  font-jost text-sm line-clamp-1">{event.eventDescription}</p> */}
                  <div className="flex flex-col items-center justify-center my-2">
                    <p className="text-gray-300  font-jost  text-lg  font-semibold rounded-lg capitalize  whitespace-nowrap">
                      {event.eventPrice !== "-" ? (
                        <>
                          <FaBan className="inline text-gray-600 font-jost  mr-1" />
                          Team Not Allowed
                          <br />
                          <FaUser className="inline text-neon-100  font-jost mr-1" />
                          ₹{event.eventPrice} per head
                        </>
                      ) : (
                        <></>
                      )}
                    </p>
                    {event.isTeamEvent && (
                      <p className="text-gray-300 font-jost  text-lg font-semibold rounded-lg capitalize  whitespace-nowrap">
                        <FaUsers className="inline  font-jost text-neon-100 mr-1" />
                        ₹{event.teamPrice} per Team
                      </p>
                    )}
                  </div>
                </div>
                <Link
                  to={`/eventDetails/${event.eventLink}`}
                  rel="noopener noreferrer"
                  className="block w-full text-center  mb-3 duration-150  bg-neon-100 text-deepBlue-100 font-semibold px-4 py-2 rounded-lg 3d-button hover:shadow-2xl  font-jost  border-2 border-transparent hover:-translate-y-2 hover:border-neon-100  hover:saturate-200"
                >
                  View More
                </Link>
                {event.winnerPrice1 !== 0 && event.winnerPrice2 !== 0 && (
                  <div className="flex items-center justify-center   h-14 px-2   bottom-0 rounded-b-lg relative">
                    <div
                      className="flex hover:pb-2.5 duration-300 flex-col bg-[#f0a500] rounded-t-md items-center absolute bottom-0 z-20 -translate-x-[50%]"
                      style={{
                        boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      {/* <p className="text-white     font-semibold bg-[#f0a500] rounded-full h-5 w-5 flex items-center justify-center mb-1">1</p> */}
                      <img src={First} height={30} width={30} alt="" />
                      <p
                        style={
                          {
                            // boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                          }
                        }
                        className=" rounded-t-md px-4 py-2 text-darkBlue-50  font-jost font-semibold  "
                      >
                        ₹ {event.winnerPrice1}
                      </p>
                    </div>
                    <div
                      className="flex hover:pb-2 duration-300 justify-between  bg-gray-400 rounded-t-md flex-col delay-100 items-center absolute bottom-0 translate-x-[50%] z-10"
                      style={{
                        boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      {/* <p className="text-white     font-semibold bg-darkBlue-50 rounded-full h-5 w-5 flex items-center justify-center mb-1">2</p> */}
                      <img src={Second} height={30} width={30} alt="" />
                      <p
                        style={
                          {
                            // boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                          }
                        }
                        className=" rounded-t-md px-4 py-[2px] text-gray-800  font-jost  font-semibold  "
                      >
                        ₹ {event.winnerPrice2}
                      </p>
                    </div>
                  </div>
                )}
              </div>
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

export default EventCard;
