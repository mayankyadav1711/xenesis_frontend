import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Pfp from "../ticket/avatars/0001.png";
import Qr from "../ticket/img/qr.png";
import Price from "./price";
import Dots from "./dots";
// import ""



function Ticket({ bgColor }) {

  return (
    // <div className="flex-col relative justify-center  items-center p-4 bg-black bg-opacity-35   rounded-md">
    <div className={`flex-col relative justify-center  items-center p-4 ${bgColor}    rounded-md`}>
      <div className="p-2 border-2 border-black rounded-lg">


        <div className="grid grid-cols-[20%_1fr_1fr]  items-center">
          <div className="w-full ">
            <img src={Pfp} className="w-full h-full" alt="pfp" />
          </div>

          <div className="h-fit gap-0 text-caption1 flex-col line-clamp-3     text-white ">
            <p className="font-bold  ">User Name</p>
            <p className="font-bold   "> harshilvaliya@gmail.com </p>
            <p className="font-bold  ">Ticket ID:</p>
          </div>
          <div className="p-4 w-full min-w-[80px]">
            <img src={Qr} className="w-full h-full" alt="qr" />
          </div>
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-0">
          <Dots />
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 translate-x-1/2 right-0">
          <Dots />
        </div>

        <div className="flex gap-0 pt-2 px-2 pr-4 ">
          <Price bgColor="bg-[#0F242E] ">
            <>
              {/* {data.price} */}
              50
            </>
          </Price>

          <div className="text-center bg-gradient-to-bl rounded-md rounded-tl-none rounded-bl-none py-2 hover:text-white w-full duration-300 hover:bg-[#0F242E] bg-[#CF8D42] text-caption1">
            <p>Event Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
