import React, { useState } from "react";
import Pfp from "../Verifier/0001.png";
// import Qr from "./ticket/img/qr.png";
// import Price from "./ticket/price";
import Dots from "../Verifier/dots";
// import Price from "./price";
// import Dots from "./dots";
// import ""

function VerifiedTicket({ bgColor }) {
  return (
    // <div className="flex-col relative justify-center  items-center p-4 bg-black bg-opacity-35   rounded-md">
    <div
      className={`flex relative justify-between  items-center bg-white bg-opacity-80 rounded-md `}
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
          <div className="grid p-4 lg:p-2 gap-2 items-center justify-center">
            {/* <div className=" max-w-[80px]  aspect-square">
              <img src={Pfp} className="w-full h-full" alt="pfp" />
            </div> */}
            <div className=" text-caption2 flex-col justify-center items-center text-black ">
              <h1 class="text-black font-bold text-heading6 title-truncate border-b-2 border-black">
                Skribble
              </h1>

              <p className="font-bold  ">User Name</p>
              <p className="font-bold   "> harshilvaliya@gmail.com </p>
              <p className="font-bold  ">Ticket ID:</p>
            </div>
            <div class="bg-[#1BAA71]  border-black text-black text-center rounded-lg p-0 font-semibold">
              <button
                disabled
                class="outline-none focus:outline-none w-full p-2"
              >
                Accepted
              </button>

              {/* <button
                onclick="acceptTicket('{{ticket.id}}',this)"
                class="outline-none focus:outline-none w-full p-2"
              >
                Accept
              </button> */}
            </div>
          </div>
          {/* <div className="flex gap-0 hover:scale-[103%] cursor-pointer duration-150 pb-2 px-2 pr-4 ">
                        <Price bgColor="bg-[#0F242E] ">
                            <>
                                50
                            </>
                        </Price>

                        <div className="text-center bg-gradient-to-bl rounded-md rounded-tl-none rounded-bl-none py-2   w-full duration-300  bg-black bg-opacity-50 text-caption1">
                            <p>Event Name</p>
                        </div>
                    </div> */}
          <div></div>
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
      <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 left-[26.3%]">
        <Dots />
      </div>
      <div className=" absolute top-0 translate-x-1/2 -translate-y-1/2 left-[26.3%]">
        <Dots />
      </div>
      <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0">
        <Dots />
      </div>
    </div>
  );
}

export default VerifiedTicket;
