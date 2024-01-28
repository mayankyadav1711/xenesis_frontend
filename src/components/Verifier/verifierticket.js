import React, { useState } from "react";
import Pfp from "../Verifier/0001.png";
import Dots from "./dots";

function VerifierTicket({ children }) {
  return (
    <div
      className={`flex relative justify-between z-10  items-center bg-white bg-opacity-80 rounded-md `}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-tl-md flex items-center rounded-bl-md h-full w-[50px] left-0">
        <p className="-translate-x-1/4 -rotate-90 text-center font-extrabold">
          XENESIS'24
        </p>
      </div>
      <div className="  border-2 w-full rounded-tl-none border-l-0 m-5 ml-0 border-black rounded-bl-none grid grid-cols-[25%_1fr]  items-center  rounded-lg">
        <div className=" max-w-[80px]  aspect-square">
          <img src={Pfp} className="w-full h-full" alt="pfp" />
        </div>
        <div className="flex border-l-8 border-dotted border-[#162238] flex-col">
          <div className="grid p-4 gap-2 items-center justify-center">
            <div className=" text-caption2 flex-col justify-center items-center text-black ">
              <h1 class="text-black font-bold text-heading6 title-truncate border-b-2 border-black">
                Skribble
              </h1>
              <p className="font-bold  ">User Name</p>
              <p className="font-bold   "> harshilvaliya@gmail.com </p>
              <p className="font-bold  ">Ticket ID:</p>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 -translate-x-1/2 -translate-y-1/2  left-0">
        <Dots />
      </div>
      <div className=" absolute bottom-0 -translate-x-1/2 translate-y-1/2  left-0">
        <Dots />
      </div>
      <div className=" absolute top-0 translate-x-1/2 -translate-y-1/2  right-0">
        <Dots />
      </div>
      <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0">
        <Dots />
      </div>
      <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 left-[26.7%]">
        <Dots />
      </div>
      <div className=" absolute top-0 translate-x-1/2 -translate-y-1/2 left-[26.7%]">
        <Dots />
      </div>
      <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0">
        <Dots />
      </div>
    </div>
  );
}

export default VerifierTicket;