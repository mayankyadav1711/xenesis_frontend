import React from "react";

function Price({ children, bgColor }) {
  return (
    <div
      className={`hover:bg-black duration-300 p-2 top-4 right-4 justify-center flex rounded-tr-none rounded-br-none  text-center   text-xl rounded-md ${bgColor} aspect-square`}
    >
      <p className="h-fit text-white place-self-center">₹{children}</p>
    </div>
  );
}
export default Price;
