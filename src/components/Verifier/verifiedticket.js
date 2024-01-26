import React from "react";
import avatar from "../Verifier/0001.png";

const VerifiedTicket = () => {
  return (
    <div
      id="ticket_{{ticket.id}}"
      data-id="T{{ticket.id}}"
      className="relative ticket flex grow flex-col justify-between rounded-lg bg-green-300 transition-all duration-300 md:w-[18rem] xl:w-[22rem]"
      // class="ticket flex grow flex-col justify-between pt-5 border rounded-lg {% if ticket.isPaid == True%}bg-green-500/60{%else%}bg-red-500/60{%endif%} transition-all duration-300"
    >
      <div className="absolute top-1/2 left-0 -translate-x-0 -translate-y-1/2 h-12 w-7 bg-[#162238] rounded-r-full"></div>
      <div className="absolute top-1/2 right-0 -translate-x-0 -translate-y-1/2 h-12 w-7 bg-[#162238] rounded-l-full"></div>
      <div className="p-5">
        <div className="border-2 rounded-md border-black p-4">
          <div class="flex items-center gap-5 w-full">
            <div class="avatar w-[20%] min-w-[20%]">
              <img
                class="rounded-full ring ring-blue-300 w-full h-full object-cover bg-slate-500"
                src={avatar}
                alt="avatar"
              />
            </div>
            <div class="overflow-hidden">
              <h3 class="text-lg font-medium text-black dark:text-navy-100">
                Ticket Username:
              </h3>
              <p class="text-gray-800 truncate">Tiket E_mail: abc@gmail.com</p>
              <p class="capitalize text-black">Ticket id : XX0</p>
            </div>
          </div>
          {/* <div>
      <p class="capitalize text-[#221e60] bg-white rounded-full">
        Team id : T0123
      </p>
    </div> */}
          <div class="my-4 px-4">
            <h1 class="text-black font-bold text-xl title-truncate">
              Skribble
            </h1>
            {/* <p class="text-white text-xl font-bold bg-[#221e60] text-center rounded-md mt-1">{%if ticket.isTeamPriceFull == True%}₹ {{ticket.price}}{%else%}₹ {{ticket.price}} {% if ticket.userCount != 1%}X {{ticket.userCount}} = ₹ {{ticket.total}}{%endif%}{%endif%}</p> */}
          </div>
        </div>
      </div>
      <div class="bg-yellow-400 border-t-2 border-dashed border-black text-black text-center rounded-b-lg p-0 font-semibold">
        <button disabled class="outline-none focus:outline-none w-full p-2">
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
  );
};
export default VerifiedTicket;
