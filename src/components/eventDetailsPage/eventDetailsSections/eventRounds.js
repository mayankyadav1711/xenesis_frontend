import React from "react";
import RoundDetails from "../eventDetailsComponents/RoundDetails";
import SectionTitle from "../eventDetailsComponents/sectionTitle";

const EventRounds = () => {
  return (
    <div class="flex mb-12">
      <div class="">
        <SectionTitle title="Round" />
        <ul class="pl-8 text-gray-300 sm:text-lg flex flex-col lg:gap-14 gap-6">
          <RoundDetails />
        </ul>
      </div>
    </div>
  );
};

export default EventRounds;
