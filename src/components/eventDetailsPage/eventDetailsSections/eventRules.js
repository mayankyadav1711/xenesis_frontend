import React from "react";

const EventRules = () => {
  return (
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 sm:gap-10 gap-6 sm:my-32 my-20">
      {/* <!-- Rules --> */}
      <div>
        <p class="font-bold text-3xl mb-5 text-blue-400">Rules of Event</p>
        <ul class="pl-5 lg:pr-5 pr-0 text-gray-300 sm:text-lg sm:font-normal font-light">
          <li class="list-decimal mb-4">
            Participants are not allowed to use any of the props for explanation
            during the event.
          </li>
          <li class="list-decimal mb-4">
            The participants qualifying the preceding rounds shall be eligible
            for the next round.
          </li>
          <li class="list-decimal mb-4">
            Participants breaking the rules will be disqualified.
          </li>
          <li class="list-decimal mb-4">
            Participants are not allowed to use any of the props for explanation
            during the event
          </li>
          <li class="list-decimal mb-4">
            Participants are not allowed to use any of the props for explanation
            during the event
          </li>
          <li class="list-decimal">
            Participants are not allowed to use any of the props for explanation
            during the event
          </li>
        </ul>
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
