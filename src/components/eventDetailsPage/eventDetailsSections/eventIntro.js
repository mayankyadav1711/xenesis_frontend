import React from "react";
import EventTitle from "../eventDetailsComponents/eventTitle";
import EventDescription from "../eventDetailsComponents/eventDescription";

const EventIntro = () => {
  const eventDetailsData = {
    eventTitle: "X-Motion Game Mania",
    eventDescription:
      "This event is a unique combination of technology and entertainment. Participants will have the opportunity to play virtual reality (VR) games without the need of VR headset, using camera and motion detection technology instead. This event will challenge both the technical and entertainment skills of each participant, as they navigate a series of games that will test their logical thinking, memory, and teamwork abilities. Get ready for a high-tech twists on classic games and see if you have what it takes to emerge on the top at ",
  };

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
