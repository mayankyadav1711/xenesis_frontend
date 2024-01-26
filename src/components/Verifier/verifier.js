import React from "react";

import VerifiedTicket from "./verifiedticket";
import PendingTicket from "./pendingticket";
const Verifier = () => {
  return (
    <div>
      <section class="bg-[#162238] tails-selected-element outline-none w-full h-full p-7">
        <div class=" mx-auto sm:px-10 lg:px-0 w-full">
          <div class=" text-center py-5 relative  w-full">
            <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pending Tickets
            </h2>
            <div class="absolute right-0 top-4 h-8 rounded-lg bg-transparent border-gray-50 border-2 focus:outline-none overflow-hidden hidden md:block">
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
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3  lg:gap-10 justify-items-center xl:grid-cols-3">
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
            <PendingTicket />
          </div>
          <div class=" text-center py-10 relative  w-full">
            <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Verified Tickets
            </h2>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-7 justify-items-center xl:grid-cols-3">
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
            <VerifiedTicket />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Verifier;

// import React, { useState } from "react";

// const Verifier = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       isPaid: true,
//       eventName: "Event 1",
//       price: 50,
//       userCount: 1,
//       total: 50,
//       isAccepted: true, // Change this to false for tickets that should be initially unaccepted
//     },
//     {
//       id: 2,
//       isPaid: false,
//       eventName: "Event 2",
//       price: 30,
//       userCount: 2,
//       total: 60,
//       isAccepted: false,
//     },
//     // Add more static ticket data as needed
//   ]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//     ticketUpdater(event.target);
//   };

//   const acceptTicket = (id, element) => {
//     if (window.confirm("Are you sure you want to accept the Payment?")) {
//       // Simulate a successful response
//       const json = { msg: "Payment accepted successfully" };

//       console.log(json);

//       if (json.hasOwnProperty("msg")) {
//         // Update the accepted state in the tickets array
//         const updatedTickets = tickets.map((ticket) =>
//           ticket.id === id ? { ...ticket, isAccepted: true } : ticket
//         );
//         setTickets(updatedTickets);

//         // Update UI
//         document
//           .getElementById(`ticket_${id}`)
//           .classList.remove("bg-red-500/60");
//         document
//           .getElementById(`ticket_${id}`)
//           .classList.add("bg-green-500/60");
//         element.disabled = true;
//         element.innerHTML = "Accepted";
//       } else {
//         alert(json.error);
//       }
//     }
//   };

//   const ticketUpdater = (element) => {
//     const filteredTickets = tickets.filter((ticket) =>
//       ticket.eventName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Update UI based on the filtered tickets
//     // You can customize this part based on your requirements

//     const ticketElements = document.getElementsByClassName("ticket");
//     for (
//       let ticketIndex = 0;
//       ticketIndex < ticketElements.length;
//       ticketIndex++
//     ) {
//       const currentTicket = ticketElements[ticketIndex];
//       const ticketId = parseInt(currentTicket.id.split("_")[1]);

//       if (filteredTickets.some((ticket) => ticket.id === ticketId)) {
//         currentTicket.classList.remove("hidden");
//       } else {
//         currentTicket.classList.add("hidden");
//       }
//     }
//   };

//   return (
//     <div>
//       {/* ... rest of the component remains unchanged ... */}
//       <div className="bg-[#2F1D69] text-white text-center rounded-b-lg font-semibold">
//         {tickets.isAccepted ? (
//           <button
//             disabled
//             className="outline-none focus:outline-none w-full p-2"
//           >
//             Accepted
//           </button>
//         ) : (
//           <button
//             onClick={(e) => acceptTicket(tickets.id, e.target)}
//             className="outline-none focus:outline-none w-full p-2"
//           >
//             Accept
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Verifier;
