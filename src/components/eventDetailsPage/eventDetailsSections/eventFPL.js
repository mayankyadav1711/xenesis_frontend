import React from "react";
import EventFaculty from "../eventDetailsComponents/eventFaculty";
import EventPrizes from "../eventDetailsComponents/eventPrizes";
import EventLocation from "../eventDetailsComponents/eventLocation";

const EventFPL = () => {
  const eventDetailsData = {
    faculty1: "Vishal Barot,",
    faculty2: "Piyush Kapadiya",
    prize1: "₹1,500",
    prize2: "₹1,000",
    floor: ": 1st floor",
    place: ": Lab A1, A2, B1",
  };

  return (
    <div>
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
    </div>
  );
};

export default EventFPL;
