import React from "react";
import EventTitle from "../eventDetailsComponents/eventTitle";
import EventDescription from "../eventDetailsComponents/eventDescription";
import { eventDetailsData } from "../eventData";

const EventIntro = () => {
  return (
    <div>
      <EventTitle title={eventDetailsData.eventTitle} />
      <EventDescription
        description={eventDetailsData.eventDescription}
        title={eventDetailsData.eventTitle}
      />
    </div>
  );
};

export default EventIntro;
