import React from "react";

const EventOrganizer = () => {
  // Organizers data array
  const organizersData = [
    {
      id: 1,
      name: "Parth Padhiar",
      imageSrc: "../../../../public/eventDeatailsImgs/1.jpg",
    },
    {
      id: 2,
      name: "Jagrat Patel",
      imageSrc: "../../../../public/eventDeatailsImgs/1.jpg",
    },
    {
      id: 3,
      name: "Jaivin Barot",
      imageSrc: "../../../../public/eventDeatailsImgs/1.jpg",
    },
    {
      id: 4,
      name: "Shubham Bhogayata",
      imageSrc: "../../../../public/eventDeatailsImgs/1.jpg",
    },
  ];

  return (
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
  );
};

export default EventOrganizer;
