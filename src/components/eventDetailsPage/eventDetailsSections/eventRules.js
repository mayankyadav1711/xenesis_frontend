import React from "react";
import SectionTitle from "../eventDetailsComponents/sectionTitle";
import { eventRules } from "../eventData";

const EventRules = () => {
  return (
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 sm:gap-10 gap-6 sm:my-32 my-20">
      {/* <!-- Rules --> */}
      <div>
        <SectionTitle title="Rules of Event" />

        <div className="pl-5 lg:pr-5 pr-0 text-gray-300 sm:text-lg sm:font-normal font-light">
          <ul>
            {eventRules.map((rule, index) => (
              <li key={index} className="list-decimal mb-4">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="../eventDeatailsImgs/login-back.png"
        alt=""
        class="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default EventRules;
