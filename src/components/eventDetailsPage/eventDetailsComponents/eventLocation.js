import React from "react";

const EventLocation = ({ floor, place }) => {
  return (
    <div class="sm:text-center xl:mt-16 mt-10">
      <p class="font-bold text-3xl mb-5 text-blue-400">Location of Event</p>
      <p>
        <span class="font-semibold text-gray-300 sm:text-lg">Floor</span>
        {floor}
      </p>
      <p>
        <span class="font-semibold text-gray-300 sm:text-lg">
          Lab / Hall / Class
        </span>
        {place}
      </p>
    </div>
  );
};

export default EventLocation;
