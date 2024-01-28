import React, { useEffect, useState } from "react";
import EventCart from "./eventDetailsComponents/eventCart";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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

    return (
        <div className="main">
            <section class="w-full h-full min-h-[100vh] relative flex flex-col items-center justify-center bg-gradient-to-b from-[#240a34] to-[#211e60]">
                <div className="w-full h-full relative flex items-center justify-center overflow-y-hidden">
                    <div className="absolute w-full h-full bg-gradient-to-t from-[#240a34] lg:via-transparent to-transparent z-10"></div>
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
                                    <img src={imgSrc} alt="" className="w-screen h-screen object-cover " />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h1 class="absolute max-md:top-1/2 lg:bottom-16 lg:whitespace-nowrap w-full left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:text-[5vw] sm:text-[7vw] text-[2.3rem] z-30 font-extrabold sm:-mt-36 text-white text-center">
                        {eventData.name}
                        <br />
                        <span className="text-lg font-medium absolute top-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap">{eventData.department}</span>
                    </h1>
                </div>

                <div class="w-full h-full xl:px-32 lg:px-20 md:px-16 sm:px-12 px-8 sm:py-20 py-0 sm:pt-0 text-white relative z-30 bg-gradient-to-b from-[#240a34] to-[#211e60]">
                    <div class="sm:mb-24 my-10 text-center">
                        <p class="font-bold text-3xl mb-5 text-blue-400 z-30">Description</p>
                        <p class="text-gray-300 sm:text-lg leading-7 text-justify sm:font-normal font-light">{eventData.description}</p>
                    </div>
                    {/* <EventSPL /> */}
                    <div>
                        <div class="grid gap-10 xl:grid-cols-3 grid-cols-1 sm:mb-24 mb-12">
                            <div class="sm:text-center xl:mt-16 mt-10">
                                <p class="font-bold text-3xl mb-5 text-blue-400">Student Coordinators</p>
                                {eventData.organiser1 !== "" && (
                                    <p class="text-gray-300 sm:text-lg">
                                        {eventData.organiser1} : {eventData.organiser1Phone}
                                    </p>
                                )}
                                {eventData.organiser2 !== "" && (
                                    <p class="text-gray-300 sm:text-lg">
                                        {eventData.organiser2} : {eventData.organiser2Phone}
                                    </p>
                                )}
                                {eventData.organiser3 !== "" && (
                                    <p class="text-gray-300 sm:text-lg">
                                        {eventData.organiser3} : {eventData.organiser3Phone}
                                    </p>
                                )}
                                {eventData.organiser4 !== "" && (
                                    <p class="text-gray-300 sm:text-lg">
                                        {eventData.organiser4} : {eventData.organiser4Phone}
                                    </p>
                                )}
                                {eventData.organiser5 !== "" && (
                                    <p class="text-gray-300 sm:text-lg">
                                        {eventData.organiser5} : {eventData.organiser5Phone}
                                    </p>
                                )}
                            </div>
                            <div class="sm:text-center xl:mt-0 mt-10">
                                <p class="font-bold text-3xl mb-2 text-blue-400">Prizes</p>
                                <div class="flex items-center justify-center gap-12 pt-4">
                                    <div>
                                        <img src="../eventDeatailsImgs/goldTrophy.png" alt="" class="w-[100px] mix-blend-screen mb-3" />
                                        <p class="sm:!text-lg text-sm flex flex-col items-center">
                                            <span class="font-semibold text-base text-gray-300">1st</span>₹ {eventData.winnerPrice1}
                                        </p>
                                    </div>
                                    <div>
                                        <img src="../eventDeatailsImgs/silverTrophy.png" alt="" class="w-[100px] mix-blend-screen mb-3" />
                                        <p class="sm:!text-lg text-sm flex flex-col items-center">
                                            <span class="font-semibold text-base text-gray-300">2nd</span>₹ {eventData.winnerPrice2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {eventData.location !== "-" && (
                                    <div class="sm:text-center xl:mt-16 mt-10">
                                        <p class="font-bold text-3xl mb-5 text-blue-400">Location of Event</p>
                                        <p>{eventData.location}</p>
                                    </div>
                                )}
                                {eventData.date !== "-" && (
                                    <div class="sm:text-center xl:mt-16 mt-10">
                                        <p class="font-bold text-3xl mb-5 text-blue-400">Date of Event</p>
                                        <p>{eventData.date}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {eventData?.rules !== "" && (
                        <div>
                            <div>
                                <p class="font-bold text-3xl mb-4  lg:mb-8 sm:mb-4 text-blue-400">Rules</p>
                            </div>
                            <div className="pl-5 lg:pr-5 pr-0 text-gray-300 sm:text-lg sm:font-normal font-light">
                                <ul>
                                    {eventData?.rules?.map((rule, index) => (
                                        <li key={index} className="list-decimal mb-4 lg:ml-10">
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {/* <EventRules /> */}
                    {/* <EventRounds /> */}
                    {eventData?.rounds?.length > 0 && (
                        <div class="flex mb-12">
                            <div class="">
                                <div>
                                    <p class="font-bold text-3xl lg:mb-8 sm:mb-4 text-blue-400">Rounds</p>
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
                    )}
                </div>

                <EventCart />
            </section>
        </div>
    );
};

export default EventDetails;
