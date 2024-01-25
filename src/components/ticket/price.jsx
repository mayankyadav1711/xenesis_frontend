import React from "react";

function Price({ children, bgColor }) {
  return (
    <div
      className={`hover:bg-black duration-300 p-2 top-4 right-4 justify-center flex   text-center  text-white text-xl rounded-full ${bgColor} aspect-square`}
    >
      <p className="h-fit place-self-center">₹{children}</p>
    </div>
  );
}
export default Price;
