import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <p class="font-bold text-3xl lg:mb-8 sm:mb-4 text-blue-400">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
