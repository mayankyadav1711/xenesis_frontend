import React from "react";
import SectionTitle from "../eventDetailsComponents/sectionTitle";

const EventRules = () => {
  const rules = [
    "Participants are not allowed to use any of the props for explanation during the event.",
    "The participants qualifying the preceding rounds shall be eligible for the next round.",
    "Participants breaking the rules will be disqualified.",
    "Participants are not allowed to use any of the props for explanation during the event.",
    "Participants are not allowed to use any of the props for explanation during the event.",
    "Participants are not allowed to use any of the props for explanation during the event.",
  ];

  return (
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 sm:gap-10 gap-6 sm:my-32 my-20">
      {/* <!-- Rules --> */}
      <div>
        <SectionTitle title="Rules of Event" />

        <div className="pl-5 lg:pr-5 pr-0 text-gray-300 sm:text-lg sm:font-normal font-light">
          <ul>
            {rules.map((rule, index) => (
              <li key={index} className="list-decimal mb-4">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="../../../../public/eventDeatailsImgs/login-back.png"
        alt=""
        class="w-full h-full rounded-xl"
      />
    </div>
  );
};

export default EventRules;
