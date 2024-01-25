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
  // data
  const eventDetailsData = {
    eventTitle: "X-Motion Game Mania",
    eventDescription: "This event is a unique combination of technology and entertainment. Participants will have the opportunity to play virtual reality (VR) games without the need of VR headset, using camera and motion detection technology instead. This event will challenge both the technical and entertainment skills of each participant, as they navigate a series of games that will test their logical thinking, memory, and teamwork abilities. Get ready for a high-tech twists on classic games and see if you have what it takes to emerge on the top at ",
    faculty1: "Vishal Barot,",
    faculty2: "Piyush Kapadiya",
    prize1: "₹1,500",
    prize2: "₹1,000",
    floor: ": 1st floor",
    place: ": Lab A1, A2, B1",
  };

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
          <EventTitle title={eventDetailsData.eventTitle} />
          <EventDescription
            description={eventDetailsData.eventDescription}
            title={eventDetailsData.eventTitle}
          />

          {/* <!-- Faculty | Prizes | Location --> */}
          <div class="grid gap-10 xl:grid-cols-3 grid-cols-1 sm:mb-24 mb-12">
            <EventFaculty
              faculty1={eventDetailsData.faculty1}
              faculty2={eventDetailsData.faculty2}
            />
            <EventPrizes
              prize1={eventDetailsData.prize1}
              prize2={eventDetailsData.prize2}
            />
            <EventLocation
              floor={eventDetailsData.floor}
              place={eventDetailsData.place}
            />
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
