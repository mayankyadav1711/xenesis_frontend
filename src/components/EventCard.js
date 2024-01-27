// EventCard.jsx

import React from "react";
import { FaUsers, FaUser, FaBan } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const EventCard = ({ events }) => {
    return (
        <div
            className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#070d15b6] backdrop-filter backdrop-blur-3xl"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-darkBlue-50 backdrop-filter backdrop-blur-3xl"></div>
            <div className="w-full h-fit overflow-hidden customScrollbar relative px-2">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1.15, spaceBetween: 0, centeredSlides: true, initialSlide: 0 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 4.1 },
                    }}
                    loop={true}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-[rgba(255,255,255,0.1)] rounded-lg group w-full  mt-5 mb-5 ml-2"
                                style={{
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    transition: "all 0.3s",
                                    boxShadow: "6px 6px 6px 6px rgba(0, 0, 0, 0.25)",
                                    height: "fit-content",
                                }}
                            >
                                <img src={event.eventPosterImage !== "-" ? event.eventPosterImage : "/static/images/logoCus.png"} alt={index} className="group-hover:scale-110 rounded-t-lg origin-bottom object-cover object-center w-[calc(100%-2.5rem)] h-auto max-h-32 transition-all duration-300 ml-5 mt-5" />

                                <div className="my-3 px-4 glassy-effect rounded-lg shadow-outset-black">
                                    <h1 className="text-white text-center text-2xl capitalize eventName font-serif truncate">{event.eventName}</h1>
                                    <p className="text-[#c0c0c0] text-center text-sm line-clamp-1">{event.eventDescription}</p>
                                    <div className="flex flex-col items-center justify-center my-2">
                                        <p className="text-gray-300 text-lg font-semibold rounded-lg capitalize w-[50%] whitespace-nowrap">
                                            {event.eventPrice !== "-" ? (
                                                <>
                                                    <FaBan className="inline text-gray-600 mr-1" />
                                                    Team Not Allowed
                                                    <br />
                                                    <FaUser className="inline text-gray-600 mr-1" />₹{event.eventPrice} per head
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </p>
                                        {event.isTeamEvent && (
                                            <p className="text-gray-300 text-lg font-semibold rounded-lg capitalize w-[50%] whitespace-nowrap">
                                                <FaUsers className="inline text-gray-600 mr-1" />₹{event.teamPrice} per Team
                                            </p>
                                        )}
                                    </div>
                                    <a href={`/eventDetails/${event.eventLink}`} className="block w-full text-center bg-gradient-to-r from-[#0b1628] to-[#344150] text-white font-semibold px-4 py-2 rounded-lg 3d-button shadow-lg hover:scale-105">
                                        View More
                                    </a>
                                </div>
                                {event.winnerPrice1 !== 0 && event.winnerPrice2 !== 0 && (
                                    <div className="flex items-center justify-center  h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                                        <div className="flex flex-col items-center absolute bottom-0 z-20 -translate-x-[50%]">
                                            <p className="text-[#FEE715] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1">1</p>
                                            <p className="bg-[#f0a500] px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-4">₹ {event.winnerPrice1}</p>
                                        </div>
                                        <div className="flex flex-col items-center absolute bottom-0 translate-x-[50%] z-10">
                                            <p className="text-[#FEE715] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1">2</p>
                                            <p className="bg-gray-400 px-4 py-[3px] text-gray-800 font-semibold transition-all duration-300 hover:py-4">₹ {event.winnerPrice2}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default EventCard;
