import React from "react";
import ImgSlider from "./eventDetailsComponents/imgSlider";
import EventRules from "./eventDetailsSections/eventRules";
import EventRounds from "./eventDetailsSections/eventRounds";
import EventCart from "./eventDetailsComponents/eventCart";
import ImgOverTitle from "./eventDetailsComponents/imgOverTitle";
import EventIntro from "./eventDetailsSections/eventIntro";
import EventSPL from "./eventDetailsSections/eventSPL";

const EventDetails = () => {
  return (
    <div className="main">
      <section class="w-full h-full min-h-[100vh] relative flex flex-col items-center justify-center bg-gradient-to-b from-[#240a34] to-[#211e60]">
        <ImgOverTitle />
        <ImgSlider />

        <div class="w-full h-full xl:px-32 lg:px-20 md:px-16 sm:px-12 px-8 sm:py-20 py-0 sm:pt-0 text-white relative z-30">
          <EventIntro />
          <EventSPL />
          <EventRules />
          <EventRounds />
        </div>

        <EventCart />
      </section>
    </div>
  );
};

export default EventDetails;
