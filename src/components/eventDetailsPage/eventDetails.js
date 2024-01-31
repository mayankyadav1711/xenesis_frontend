import React, { useEffect, useState, useRef } from "react";
import EventCart from "./eventDetailsComponents/eventCart";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

const EventDetails = () => {
  const { eventLink } = useParams();
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    fetch("/api/event/" + eventLink)
      .then((res) => res.json())
      .then((data) => {
        document.title = data.name + " | Xenesis 2024";
        setEventData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventLink]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set to true if you want the animation to happen only once
    });
  }, []);

  return (
    <div className="main">
      <section class="w-full h-full min-h-[100vh] relative flex flex-col items-center justify-center bg-[#1a1f2c]">
        <div className="w-full h-full relative flex items-center justify-center overflow-y-hidden">
          <div className="absolute w-full h-full bg-gradient-to-t from-[#1a1f2c] lg:via-transparent to-transparent z-10"></div>
          <div className="w-full flex relative overflow-hidden">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              effect={"fade"}
            >
              {eventData?.images?.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-screen h-screen object-cover "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 class="absolute max-md:top-1/2 lg:bottom-16 lg:whitespace-nowrap w-full left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:text-[5vw] sm:text-[7vw] text-[2.3rem] z-30 font-extrabold sm:-mt-36 text-white text-center">
            {eventData.name}
            <br />
            <span className="text-lg font-medium absolute top-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap">
              {eventData.department}
            </span>
          </h1>
        </div>

        <div class="w-full h-full xl:px-32 lg:px-20 md:px-16 sm:px-12 px-8 sm:py-20 py-0 sm:pt-0 text-white relative z-30 bg-[#1a1f2c]">
          <div class="sm:mb-24 my-10 text-center">
            <p
              class="font-bold text-4xl mb-5 text-[#0adab9] z-30"
              style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              Description
            </p>
            <p
              data-aos="fade-down"
              class="text-gray-300 sm:text-lg leading-7 text-justify sm:font-normal font-light"
              style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
            >
              {eventData.description}
            </p>
          </div>
          {/* <EventSPL /> */}
          <div>
            <div class="lg:flex lg:gap-80 grid gap-10 xl:grid-cols-3 grid-cols-1 sm:mb-24 mb-12">
              <div class="sm:text-center xl:mt-16 mt-10">
                <p
                  data-aos="fade-right"
                  class="font-bold text-3xl mb-5 text-[#0adab9]"
                  style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                >
                  Student Coordinators
                </p>
                {eventData.organiser1 !== "" && (
                  <p
                    data-aos="fade-right"
                    class="text-gray-300 sm:text-lg"
                    style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  >
                    {eventData.organiser1} : {eventData.organiser1Phone}
                  </p>
                )}
                {eventData.organiser2 !== "" && (
                  <p
                    data-aos="fade-right"
                    class="text-gray-300 sm:text-lg"
                    style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  >
                    {eventData.organiser2} : {eventData.organiser2Phone}
                  </p>
                )}
                {eventData.organiser3 !== "" && (
                  <p
                    data-aos="fade-right"
                    class="text-gray-300 sm:text-lg"
                    style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  >
                    {eventData.organiser3} : {eventData.organiser3Phone}
                  </p>
                )}
                {eventData.organiser4 !== "" && (
                  <p
                    data-aos="fade-right"
                    class="text-gray-300 sm:text-lg"
                    style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  >
                    {eventData.organiser4} : {eventData.organiser4Phone}
                  </p>
                )}
                {eventData.organiser5 !== "" && (
                  <p
                    data-aos="fade-right"
                    class="text-gray-300 sm:text-lg"
                    style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  >
                    {eventData.organiser5} : {eventData.organiser5Phone}
                  </p>
                )}
              </div>
              <div class="sm:text-center xl:mt-0 mt-10">
                <p
                  class="font-bold text-3xl mb-2 text-[#0adab9]"
                  style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                >
                  Prizes
                </p>
                <div class="flex items-center justify-center gap-12 pt-4">
                  <div>
                    <img
                      data-aos="fade-up"
                      src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706446229/gold_trophy.42c0dc4289a864b4fe64_srudms.jpg"
                      alt=""
                      class="w-[100px] mix-blend-screen mb-3"
                    />
                    <p class="sm:!text-lg text-sm flex flex-col items-center">
                      <span
                        data-aos="fade-up"
                        class="font-semibold text-base text-gray-300"
                      >
                        1st
                      </span>
                      ₹ {eventData.winnerPrice1}
                    </p>
                  </div>
                  <div>
                    <img
                      data-aos="fade-up"
                      src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706446241/silver_trophy.b8aae84ad2b19cb7afd8_rxjptb.jpg"
                      alt=""
                      class="w-[100px] mix-blend-screen mb-3"
                    />
                    <p
                      data-aos="fade-up"
                      class="sm:!text-lg text-sm flex flex-col items-center"
                    >
                      <span class="font-semibold text-base text-gray-300">
                        2nd
                      </span>
                      ₹ {eventData.winnerPrice2}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {eventData.location !== "-" && (
                  <div class="sm:text-center xl:mt-16 mt-10">
                    <p
                      class="font-bold text-3xl mb-5 text-[#0adab9]"
                      style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                    >
                      Location of Event
                    </p>
                    <p>{eventData.location}</p>
                  </div>
                )}
                {eventData.date !== "-" && (
                  <div class="sm:text-center xl:mt-16 mt-10">
                    <p
                      data-aos="fade-right"
                      class="font-bold text-3xl mb-5 text-[#0adab9]"
                      style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                    >
                      Date of Event
                    </p>
                    <p
  data-aos="fade-right"
  className="text-4xl font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 inline-block border border-blue-800 px-6 py-3 rounded-md transform rotate-3 shadow-2xl"
  style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
>
  {new Date(eventData.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
</p>


                  </div>
                )}
              </div>
            </div>
          </div>
          {eventData?.rules !== "" && (
            <div>
              <div>
                <p
                  data-aos="fade-right"
                  class="font-bold text-3xl mb-4  lg:mb-8 sm:mb-4 text-[#0adab9]"
                  style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                >
                  Rules
                </p>
              </div>
              <div className="pl-5 lg:pr-5 pr-0 text-gray-300 sm:text-lg sm:font-normal font-light">
                <ul>
                  {eventData?.rules?.map((rule, index) => (
                    <li
                      data-aos="fade-right"
                      key={index}
                      className="list-decimal mb-4 lg:ml-10"
                      style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}
                    >
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* <EventRules /> */}
          {/* <EventRounds /> */}
          {/* {eventData?.rounds?.length > 0 && (
                        <div class="flex mb-12">
                            <div class="">
                                <div>
                                    <p class="font-bold text-3xl lg:mb-8 sm:mb-4 text-[#0adab9]" style={{textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)"}}>Rounds</p>
                                </div>
                                <ul class="pl-8 text-gray-300 sm:text-lg flex flex-col gap-6">
                                    {eventData?.rounds?.map((round, index) => {
                                        if (round.title !== "") {
                                            return (
                                                <div key={index} className="lg:ml-8">
                                                    <li className="list-decimal font-semibold my-2 text-white text-lg">{round.title}</li>
                                                    <ul className="pl-4">
                                                        {round?.description?.map((desc, descIndex) => (
                                                            <li key={descIndex} className="font-light list-disc mb-3">
                                                                {desc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    )} */}
        </div>

        <div className="container mx-auto w-full ">
        <div className="wrap p-10 relative">

          {/* vertical line  */}
          <div className="absolute left-1/2 transform -translate-x-1/2 border-2 absolute border-opacity-20 border-white h-full border"

              style={{ left: "30%" }}
            ></div>
 {eventData?.rounds?.length > 0 && eventData.rounds.map((round, index) => (
    <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline' : 'left-timeline'}`}>
  {/* Add image container */}
  <div className=" w-2/12 flex items-center justify-end ${index % 2 === 0 ? 'order-2' : 'order-1'}`">
  <div className="flex items-center justify-center lg:w-52 lg:h-52 w-16 h-16 rounded-full ${index % 2 === 0 ? 'lg:mr-8 bg-gray-100 text-white' : 'lg:ml-8 bg-white '}`" style={{backgroundColor: "rgba(100, 240, 220, 0.05)"}}>
  <div className="flex items-center justify-center lg:w-40 lg:h-40 w-16 h-16 rounded-full ${index % 2 === 0 ? 'lg:mr-8 bg-gray-800 text-white' : 'lg:ml-8 bg-white text-gray-800'}`" style={{backgroundColor: "#2d364d"}}>
  <h1 className="text-[#0adab9] font-bold lg:text-5xl text-xl font-family" style={{fontFamily:"Jost"}}>R{index + 1}</h1></div>
</div>

  </div>
  
 
  <div className="z-20 flex items-center order-1 bg-white border-20 shadow-xl lg:ml-[-10px] md:ml-[10px] ml-[3px] lg:w-6 lg:h-6 w-6 h-6 mr-7 lg:mr-0 rounded-full ${index % 2 === 0 ? 'lg:ml-8 order-1' : 'lg:mr-8 order-2'}" style={{ boxShadow: '6px 6px 8px 4px rgba(0, 0, 0, 0.2)', borderColor: "gray", borderWidth:"5px" }}>
</div>

  
  <div data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} className="order-1 bg-gray-800 border-cyan-400 border-2 rounded-lg shadow-xl w-7/12 lg:px-8 lg:py-8 p-2 ">
    <h3 className="mb-3 font-bold text-cyan-500 lg:text-xl text-[10px]">
      Round  {index + 1}
    </h3>
    <ul className="pl-4">
                                                        {round?.description?.map((desc, descIndex) => (
                                                            <li key={descIndex} className="font-medium lg:text-sm text-[10px] list-disc mb-3 text-gray-100">
                                                                {desc}
                                                            </li>
                                                        ))}
                                                    </ul>
  </div>
</div>
))}






          </div>
        </div>

        <EventCart />
      </section>
    </div>
  );
};

export default EventDetails;
