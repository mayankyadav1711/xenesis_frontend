import React from "react";
import event1 from "../eventDetailsImages/1.jpg"
import event2 from "../eventDetailsImages/2.jpg"
import event3 from "../eventDetailsImages/4.jpg"
const ImgSlider = () => {
  const ImgSliderData = [
    event1,event2,event3
  ];
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-y-hidden">
      <div className="absolute w-full h-full bg-gradient-to-t from-[#240a34] via-transparent to-transparent z-10"></div>
      <div className="flex relative overflow-hidden">
        {ImgSliderData.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt=""
            className="w-screen md:h-screen h-full object-cover object-center mySlides fade"
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
