import React from "react";

const ImgSlider = () => {
  return (
    <div class="w-full h-full relative flex items-center justify-center overflow-y-hidden">
      <div class="absolute w-full h-full bg-gradient-to-t from-[#240a34] via-transparent to-transparent z-10"></div>
      <div class="flex relative overflow-hidden">
        <img
          src="../../../../public/eventDeatailsImgs/1.jpg"
          alt=""
          class="w-screen md:h-screen h-full object-cover object-right mySlides fade"
        />
        <img
          src="../../../../public/eventDeatailsImgs/2.jpg"
          alt=""
          class="w-screen md:h-screen h-full object-cover object-center mySlides fade"
        />
        <img
          src="../../../../public/eventDeatailsImgs/3.jpg"
          alt=""
          class="w-screen md:h-screen h-full object-cover object-center mySlides fade"
        />
        <img
          src="../../../../public/eventDeatailsImgs/2.jpg"
          alt=""
          class="w-screen md:h-screen h-full object-cover object-center mySlides fade"
        />
      </div>
    </div>
  );
};

export default ImgSlider;
