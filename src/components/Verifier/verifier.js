import React from "react";
import VerifierTicket from "./verifierticket";
const Verifier = () => {
  const pendingTicketsData = [1, 2, 3, 4, 5, 6, 7, 8];
  const verifiedTicketsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <section class="bg-[#162238] tails-selected-element outline-none w-full h-full p-3 overflow-hidden sm:p-7">
        <div class=" mx-auto lg:px-0 w-full">
          <div class=" text-center py-5 relative flex flex-col gap-5 w-full">
            <div class="relative w-fit h-8 flex justify-center self-center md:self-end rounded-lg bg-transparent border-gray-50 border-2 focus:outline-none overflow-hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 absolute top-2 left-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                onkeyup="ticketUpdater(this)"
                placeholder="Enter Ticket Id"
                class="h-full w-full bg-transparent text-black pl-8 focus:outline-none overflow-hidden"
              />
            </div>
            <h2 class="text-3xl font-semibold pb-5 tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pending Tickets
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-5 xl:gap-10 justify-items-center xl:grid-cols-3">
            {pendingTicketsData.map((ticketId) => (
              <VerifierTicket key={ticketId}>
                <div className="bg-[#DE4753] text-black text-center rounded-lg p-0 font-semibold">
                  <button
                    onclick="acceptTicket('{{ticket.id}}',this)"
                    class="outline-none focus:outline-none w-full p-2"
                  >
                    Accept
                  </button>
                </div>
              </VerifierTicket>
            ))}
          </div>
          <div class=" text-center py-10 relative  w-full">
            <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Verified Tickets
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-5 xl:gap-10 justify-items-center xl:grid-cols-3">
            {verifiedTicketsData.map((ticketId) => (
              <VerifierTicket key={ticketId}>
                <div className="bg-[#1BAA71] text-black text-center rounded-lg p-0 font-semibold">
                  <button
                    disabled
                    class="outline-none focus:outline-none w-full p-2"
                  >
                    Accepted
                  </button>
                </div>
              </VerifierTicket>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Verifier;