import React from "react";

const EventTitle = ({ title }) => {
  return (
    <div>
      <h1 class="lg:text-[5vw] sm:text-[7vw] text-[2.3rem] sm:leading-loose leading-10 z-30 font-extrabold sm:-mt-36 text-white text-center">
        {title}
      </h1>
    </div>
  );
};

export default EventTitle;
