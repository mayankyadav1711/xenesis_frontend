import React from "react";
import SectionTitle from "./sectionTitle";

const EventOrganizer = () => {
  return (
    <div class="mb-6">
      <SectionTitle title="Organizers" />

      <div class="md:flex grid grid-cols-2 items-center lg:justify-start justify-center lg:gap-10 gap-5 sm:gap-y-8 mt-10 organizers-div">
        <div class="flex flex-col items-center justify-center">
          <img
            src="../../../../public/eventDeatailsImgs/1.jpg"
            alt=""
            class="xl:w-[200px] lg:w-[160px] md:w-[140px] w-[160px] xl:h-[200px] lg:h-[160px] md:h-[140px] h-[160px] object-cover object-right rounded-full org-images"
          />
          <p class="mt-3 text-center lg:text-2xl sm:text-xl text-lg lg:font-bold font-semibold org-name">
            Parth Padhiar
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="../../../../public/eventDeatailsImgs/1.jpg"
            alt=""
            class="xl:w-[200px] lg:w-[160px] md:w-[140px] w-[160px] xl:h-[200px] lg:h-[160px] md:h-[140px] h-[160px] object-cover object-center rounded-full org-images"
          />
          <p class="mt-3 text-center lg:text-2xl sm:text-xl text-lg lg:font-bold font-semibold org-name">
            Jagrat Patel
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="../../../../public/eventDeatailsImgs/1.jpg"
            alt=""
            class="xl:w-[200px] lg:w-[160px] md:w-[140px] w-[160px] xl:h-[200px] lg:h-[160px] md:h-[140px] h-[160px] object-cover object-center rounded-full org-images"
          />
          <p class="mt-3 text-center lg:text-2xl sm:text-xl text-lg lg:font-bold font-semibold org-name">
            Jaivin Barot
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="../../../../public/eventDeatailsImgs/1.jpg"
            alt=""
            class="xl:w-[200px] lg:w-[160px] md:w-[140px] w-[160px] xl:h-[200px] lg:h-[160px] md:h-[140px] h-[160px] object-cover object-center rounded-full org-images"
          />
          <p class="mt-3 text-center lg:text-2xl sm:text-xl text-lg lg:font-bold font-semibold org-name">
            Shubham Bhogayata
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventOrganizer;
