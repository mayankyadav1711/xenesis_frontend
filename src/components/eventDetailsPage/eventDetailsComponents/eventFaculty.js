import React from "react";

const EventFaculty = ({ faculty1, faculty2 }) => {
  return (
    <div class="sm:text-center xl:mt-16 mt-10">
      <p class="font-bold text-3xl mb-5 text-blue-400">Faculty Coordinators</p>
      <p class="text-gray-300 sm:text-lg">
        {faculty1}
        <br />
        {faculty2}
      </p>
    </div>
  );
};

export default EventFaculty;
