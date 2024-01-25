import React from "react";
import ImgSlider from "./eventDetailsSections/imgSlider";
import EventTitle from "./eventDetailsSections/eventTitle";
import EventDescription from "./eventDetailsSections/eventDescription";
import EventFaculty from "./eventDetailsSections/eventFaculty";
import EventPrizes from "./eventDetailsSections/eventPrizes";
import EventLocation from "./eventDetailsSections/eventLocation";
import EventRules from "./eventDetailsSections/eventRules";
import EventRounds from "./eventDetailsSections/eventRounds";
import EventOrganizer from "./eventDetailsSections/eventOrganizer";
import EventCart from "./eventDetailsSections/eventCart";

const EventDetails = () => {
  return (
    <div className="main">
      <section class="w-full h-full min-h-[100vh] relative flex flex-col items-center justify-center bg-gradient-to-b from-[#240a34] to-[#211e60]">
        {/* <!-- bg image over title --> */}
        <img
          src="../../../public/eventDeatailsImgs/bg-2.png"
          class="w-screen h-[calc(100vw * (1024/1096))] mix-blend-darken opacity-40 absolute bg-cover xl:-top-10 lg:top-[10vh] md:top-[30vh] sm:top-[40vh] left-0 z-20"
          alt=""
        />

        <ImgSlider />

        <div class="w-full h-full xl:px-32 lg:px-20 md:px-16 sm:px-12 px-8 sm:py-20 py-0 sm:pt-0 text-white relative z-30">
          <EventTitle />
          <EventDescription />

          {/* <!-- Faculty | Prizes | Location --> */}
          <div class="grid gap-10 xl:grid-cols-3 grid-cols-1 sm:mb-24 mb-12">
            <EventFaculty />
            <EventPrizes />
            <EventLocation />
          </div>

          <EventRules />
          <EventRounds />
          <EventOrganizer />
        </div>

        <EventCart />
      </section>
    </div>
  );
};

export default EventDetails;
