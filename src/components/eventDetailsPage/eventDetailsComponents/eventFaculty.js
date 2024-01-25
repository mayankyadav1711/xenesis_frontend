import React from "react";

const EventFaculty = ({ Student1, Student2, Student3, Student4, Student5 }) => {
  return (
    <div class="sm:text-center xl:mt-16 mt-10">
      <p class="font-bold text-3xl mb-5 text-blue-400">Student Coordinators</p>
      <p class="text-gray-300 sm:text-lg">
        {Student1}
        <br />
        {Student2}
        <br />
        {Student3}
        <br />
        {Student4}
        <br />
        {Student5}
      </p>
    </div>
  );
};

export default EventFaculty;
