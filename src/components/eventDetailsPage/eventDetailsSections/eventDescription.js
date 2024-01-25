import React from "react";

const EventDescription = ({ description, title }) => {
  return (
    <div class="sm:mb-24 my-10 text-center">
      <p class="font-bold text-3xl mb-5 text-blue-400 z-30">Description</p>
      <p class="text-gray-300 sm:text-lg leading-7 text-justify sm:font-normal font-light">
        {description}
        <span class="font-semibold">{title}</span>!
      </p>
    </div>
  );
};

export default EventDescription;
