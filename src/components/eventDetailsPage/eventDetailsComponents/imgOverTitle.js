import React from "react";
import event1 from "../eventDetailsImages/1.jpg"
const ImgOverTitle = () => {
  return (
    <div>
      <img
        src={event1}
        class="w-screen h-[calc(100vw * (1024/1096))] mix-blend-darken opacity-40 absolute bg-cover xl:-top-10 lg:top-[10vh] md:top-[30vh] sm:top-[40vh] left-0 z-20"
        alt=""
      />
    </div>
  );
};

export default ImgOverTitle;
