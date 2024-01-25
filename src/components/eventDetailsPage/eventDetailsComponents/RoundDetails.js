import React from "react";
import { roundData } from "../eventData";

const RoundDetails = () => {
  return (
    <div>
      <div>
        {roundData.map((round, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-0 py-10 "
          >
            <div className={round.className}>
              <li className="list-decimal font-semibold my-2 text-white text-lg">
                {round.title}
              </li>
              <ul className="pl-4">
                {round.description.map((desc, descIndex) => (
                  <li key={descIndex} className="font-light list-disc mb-3">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="../../../../public/eventDeatailsImgs/login-back.png"
              alt=""
              className="w-full h-full rounded-xl hidden lg:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundDetails;
