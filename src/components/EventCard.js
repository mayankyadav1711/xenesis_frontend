// EventCard.jsx

import React from 'react';
import { FaUsers, FaUser, FaBan } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const EventCard = ({ title, events }) => {
  return (
    <div className="overflow-x-hidden bg-cover bg-no-repeat bg-center bg-[#070d15b6] backdrop-filter backdrop-blur-3xl" style={{
      backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg')",
    }}>
      <div className="absolute inset-0 bg-[#070d15d0] backdrop-filter backdrop-blur-3xl"></div>
      <div className="w-full h-fit overflow-hidden customScrollbar relative mt-10 lg:ml-5 ml-0">

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.15, spaceBetween: 0, centeredSlides: true, initialSlide: 0 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(255,255,255,0.1)] rounded-lg group w-[300px] max-w-full lg:ml-5 mt-5 mb-5 ml-2"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s',
                  boxShadow: '6px 6px 6px 6px rgba(0, 0, 0, 0.25)',
                  width: '300px',
                  height: 'fit-content',
                }}>
                <div className="w-full rounded-t-lg overflow-hidden relative group aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={index}
                    className="group-hover:scale-110 rounded-t-lg object-cover object-center w-64 h-full transition-all duration-300 ml-5 mt-5"
                  />
                </div>
                <div className="my-3 px-4 glassy-effect rounded-lg shadow-outset-black">
                  <h1 className="text-white text-center text-2xl capitalize eventName font-serif">
                    {event.title}
                  </h1>
                  <p className="text-[#c0c0c0] text-center text-sm line-clamp-1">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-center my-2">
                    <p className="text-gray-300 text-lg font-semibold rounded-lg capitalize w-[50%]">
                      {event.pricePerHead !== "-"
                        ? (
                          <>
                            <FaUser className="inline text-gray-600 mr-1" />
                            ₹{event.pricePerHead} per head
                          </>
                        )
                        : (
                          <>
                            <FaBan className="inline text-gray-600 mr-1" />
                            Team Not Allowed
                          </>
                        )}
                    </p>
                    {event.teamAllowed && (
                      <p className="text-gray-300 text-lg font-semibold rounded-lg capitalize w-[50%]">
                        <FaUsers className="inline text-gray-600 mr-1" />
                        ₹{event.teamPrice} per Team
                      </p>
                    )}
                  </div>
                  <a
                    href={`/event/${event.eventId}`}
                    className="block w-full text-center bg-gradient-to-r from-[#0b1628] to-[#344150] text-white font-semibold px-4 py-2 rounded-lg 3d-button shadow-lg hover:scale-105"
                  >
                    View More
                  </a>
                </div>
                <div className="flex items-center justify-center bg-[#323c54cf] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 z-20 -translate-x-[50%]">
                    <p className="text-[#FEE715] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">1</p>
                    <p className="bg-[#f0a500] px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-4">
                      ₹ 1000
                    </p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 translate-x-[50%] z-10">
                    <p className="text-[#FEE715] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">2</p>
                    <p className="bg-gray-400 px-4 py-[3px] text-gray-800 font-semibold transition-all duration-300 hover:py-4">
                      ₹ 750
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventCard;
