import React from "react";

const EventPrizes = ({ prize1, prize2 }) => {
  return (
    <div class="sm:text-center xl:mt-0 mt-10">
      <p class="font-bold text-3xl mb-2 text-blue-400">Prizes</p>
      <div class="flex items-center justify-center gap-12 pt-4">
        <div>
          <img
            src="../eventDeatailsImgs/goldTrophy.png"
            alt=""
            class="w-[100px] mix-blend-screen mb-3"
          />
          <p class="sm:!text-lg text-sm flex flex-col items-center">
            <span class="font-semibold text-base text-gray-300">1st</span>
            {prize1}
          </p>
        </div>
        <div>
          <img
            src="../eventDeatailsImgs/silverTrophy.png"
            alt=""
            class="w-[100px] mix-blend-screen mb-3"
          />
          <p class="sm:!text-lg text-sm flex flex-col items-center">
            <span class="font-semibold text-base text-gray-300">2nd</span>
            {prize2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPrizes;
