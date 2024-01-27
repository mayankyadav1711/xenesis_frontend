import React, { useState } from "react";
import Ticket from "./ticket/ticket";
import Newticket from "./newticket";
import Spacebg from "./ticket/img/space-bg.jpg"

function Myticket(Props) {
    const RedTicketsData = [1, 2, 3];
    const GrayTicketsData = [1, 2, 3];
    const GreenTicketsData = [1, 2, 3];
    return (
        <section className=" relative  py-10 pt-40    ">
            <h4 className="text-center text-heading2 text-white font-normal pb-10">Ticket</h4>

            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

                <Ticket bgColor="bg-green-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />


            </div> */}
            <div className=" px-8 grid gap-6 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3">
                {RedTicketsData.map((ticketId) => (
                    <Newticket key={ticketId} bgColor="bg-rose-600" />
                ))}
                {GrayTicketsData.map((ticketId) => (
                    <Newticket key={ticketId} bgColor="bg-[#0BDBB9]" />
                ))}
                {GreenTicketsData.map((ticketId) => (
                    <Newticket key={ticketId} bgColor="bg-green-400" />
                ))}
            </div>
            <img className="fixed object-cover h-screen w-screen top-0 z-[-1]" src={Spacebg} alt="" />
        </section>
    );
}

export default Myticket;