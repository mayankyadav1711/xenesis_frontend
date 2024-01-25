import React from "react";
import SectionTitle from "../eventDetailsComponents/sectionTitle";
import { organizersData } from "../eventData";

const EventOrganizer = () => {
  return (
    <div>
      <SectionTitle title="Organizers" />

      <div className="md:flex grid grid-cols-2 items-center lg:justify-start justify-center lg:gap-10 gap-5 sm:gap-y-8 mt-10 organizers-div">
        {organizersData.map((organizer) => (
          <div
            key={organizer.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={organizer.imageSrc}
              alt=""
              className="xl:w-[200px] lg:w-[160px] md:w-[140px] w-[160px] xl:h-[200px] lg:h-[160px] md:h-[140px] h-[160px] object-cover object-right rounded-full org-images"
            />
            <p className="mt-3 text-center lg:text-2xl sm:text-xl text-lg lg:font-bold font-semibold org-name">
              {organizer.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventOrganizer;