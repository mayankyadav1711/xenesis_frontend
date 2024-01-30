import React from "react";
import VerifierTicket from "./verifierticket";
import Spacebg from "../ticket/img/space-bg.jpg"
import BG from "../ticket/img/starts-bg.jpeg"

const Verifier = () => {
  const pendingTicketsData = [1, 2, 3, 4, 5, 6, 7, 8];
  const verifiedTicketsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="bg-[#010A27]" >
      {/* <img className="fixed object-cover h-screen w-screen top-0 z-[-1]" src={Spacebg} alt="" /> */}

      <section class="  tails-selected-element outline-none w-full h-full p-3 overflow-hidden sm:p-7">
        <div class=" mx-auto lg:px-0 w-full">

          <div class=" text-center py-5 pt-20 relative flex flex-col gap-5 w-full">
            {/* <div class="relative w-fit h-8 flex justify-center self-center z-10 md:self-end rounded-lg bg-transparent border-gray-50 border-2 focus:outline-none overflow-hidden ">
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
                class="h-full w-full bg-transparent text-white pl-8 focus:outline-none overflow-hidden"
              />
            </div> */}
            <h2 class="z-10 text-3xl font-semibold pb-[5dvh] pt-[20dvh] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Verifier
            </h2>
            <div class="w-[60vw] z-10 h-[65px] p-2 px-2 mx-auto md:px-4 pb-[55dvh]">
              <div class="w-full">
                <div class="flex items-center">
                  <div class="relative w-full">
                    <input onkeyup="Search()" id="search" placeholder="Search for a Ticket ..." class="bg-transparent w-full border border-brand-500 focus:outline-none p-3 pl-10 rounded-md text-sm text-white focus:backdrop-blur" />{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-gray-200 absolute inset-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <button onclick="Search()" aria-label="Primary Button" type="button" class="flex content-center items-center justify-center text-center px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-white  font-jost  bg-[#240A35] absolute right-1.5 top-1.5">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" text-center py-10 relative  w-full">
            <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pending Tickets
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-5  xl:gap-10 justify-items-center xl:grid-cols-3">
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
          <div className="grid  md:gap-4 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-10 justify-items-center xl:grid-cols-3">
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
          <div className="absolute top-0">
            {/* <img
                    className=" object-cover h-screen w-screen "
                    src={Spacebg}
                    alt=""
                /> */}
            <img
              className=" object-cover h-screen w-screen "
              src={BG}
              alt="cuhhhh"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Verifier;