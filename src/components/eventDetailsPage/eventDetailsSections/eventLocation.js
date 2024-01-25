import React from "react";

const EventLocation = () => {
  return (
    <div class="sm:text-center xl:mt-16 mt-10">
      <p class="font-bold text-3xl mb-5 text-blue-400">Location of Event</p>
      <p>
        <span class="font-semibold text-gray-300 sm:text-lg">Floor</span>: 1st
        floor
      </p>
      <p>
        <span class="font-semibold text-gray-300 sm:text-lg">
          Lab / Hall / Class
        </span>
        : Lab A1, A2, B1
      </p>
    </div>
  );
};

export default EventLocation;
