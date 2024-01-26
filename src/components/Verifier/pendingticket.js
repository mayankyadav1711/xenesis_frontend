import React, { useState } from "react";
import Pfp from "../Verifier/0001.png";
// import Qr from "./ticket/img/qr.png";
// import Price from "./ticket/price";
import Dots from "../Verifier/dots";
// import Price from "./price";
// import Dots from "./dots";
// import ""

function PendingTicket({ bgColor }) {
  return (
    // <div className="flex-col relative justify-center  items-center p-4 bg-black bg-opacity-35   rounded-md">
    <div
      className={`flex relative justify-between  items-center bg-white bg-opacity-80 rounded-md w-[16rem] md:w-[20rem] sm:w-[18rem] lg:w-[21rem] xl:w-[22rem]`}
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
            {/* <div className=" max-w-[80px]  aspect-square">
              <img src={Pfp} className="w-full h-full" alt="pfp" />
            </div> */}
            <div className=" text-sm flex-col justify-center items-center text-black ">
              <h1 class="text-black font-bold sm::text-4xl text-lg title-truncate">
                Skribble
              </h1>
              <hr />
              <p className="font-bold  ">User Name</p>
              <p className="font-bold   "> harshilvaliya@gmail.com </p>
              <p className="font-bold  ">Ticket ID:</p>
            </div>
            <div class="bg-[#DE4753]  border-black text-black text-center rounded-lg p-0 font-semibold">
              {/* <button disabled class="outline-none focus:outline-none w-full p-2">
          Accepted
        </button> */}

              <button
                onclick="acceptTicket('{{ticket.id}}',this)"
                class="outline-none focus:outline-none w-full p-2"
              >
                Accept
              </button>
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

export default PendingTicket;

// import React from "react";
// import avatar from "../Verifier/0001.png";

// const PendingTicket = () => {
//   return (
//     <div
//       id="ticket_{{ticket.id}}"
//       data-id="T{{ticket.id}}"
//       className="relative ticket flex grow flex-col justify-between rounded-lg bg-[#fff] transition-all duration-300 md:w-[18rem] xl:w-[22rem]"
//       // class="ticket flex grow flex-col justify-between pt-5 border rounded-lg {% if ticket.isPaid == True%}bg-green-500/60{%else%}bg-red-500/60{%endif%} transition-all duration-300"
//     >
//       <div className="absolute top-0 right-0 -translate-x-0 -translate-y-1/2 h-12 w-7 bg-[#162238] rounded-l-full"></div>
//       <div className="absolute bottom-0 right-0 -translate-x-0 translate-y-1/2 h-12 w-7 bg-[#162238] rounded-l-full"></div>
//       <div className="bg-yellow-400 h-full absolute left-0 items-center flex">
//         <div className="-rotate-90 font-bold text-xl">Xenesis '24</div>
//         <div className="absolute top-0 left-0 -translate-x-0 -translate-y-1/2 h-12 w-7 bg-[#162238] rounded-r-full"></div>
//         <div className="absolute bottom-0 left-0 -translate-x-0 translate-y-1/2 h-12 w-7 bg-[#162238] rounded-r-full"></div>
//       </div>
//       <div className="p-5">
//         <div className="border-2 rounded-2xl border-black p-4">
//           <div class="flex items-center gap-5 w-full">
//             <div class="avatar w-[20%] min-w-[20%]">
//               <img
//                 class="rounded-full ring ring-blue-300 w-full h-full object-cover bg-slate-500"
//                 src={avatar}
//                 alt="avatar"
//               />
//             </div>
//             <div class="overflow-hidden">
//               <h3 class="text-lg font-medium text-black dark:text-navy-100">
//                 Ticket Username:
//               </h3>
//               <p class="text-gray-800 truncate">Tiket E_mail: abc@gmail.com</p>
//               <p class="capitalize text-black">Ticket id : XX0</p>
//             </div>
//           </div>
//           {/* <div>
//       <p class="capitalize text-[#221e60] bg-white rounded-full">
//         Team id : T0123
//       </p>
//     </div> */}
// <div class="my-4 px-4">
//   <h1 class="text-black font-bold text-xl title-truncate">
//     Skribble
//   </h1>
//   {/* <p class="text-white text-xl font-bold bg-[#221e60] text-center rounded-md mt-1">{%if ticket.isTeamPriceFull == True%}₹ {{ticket.price}}{%else%}₹ {{ticket.price}} {% if ticket.userCount != 1%}X {{ticket.userCount}} = ₹ {{ticket.total}}{%endif%}{%endif%}</p> */}
// </div>
//         </div>
// <div class="bg-[#DE4753] border-t-2 border-dashed border-dash-10 border-black text-black text-center rounded-b-lg p-0 font-semibold">
//   {/* <button disabled class="outline-none focus:outline-none w-full p-2">
//   Accepted
// </button> */}

//   <button
//     onclick="acceptTicket('{{ticket.id}}',this)"
//     class="outline-none focus:outline-none w-full p-2"
//   >
//     Accept
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };
// export default PendingTicket;
