import React, { useState } from "react";
import Ticket from "./ticket/ticket";
import Newticket from "./newticket";
import Spacebg from "./ticket/img/space-bg.jpg"

function Myticket(Props) {
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
                <Newticket bgColor="bg-[#CAB795]" />
                <Newticket bgColor="bg-rose-600" />
                <Newticket bgColor="bg-[#CAB795]" />
                <Newticket bgColor="bg-green-400" />
                <Newticket bgColor="bg-[#CAB795]" />
                <Newticket bgColor="bg-[#CAB795]" />
                <Newticket bgColor="bg-rose-600" />
                <Newticket bgColor="bg-[#CAB795]" />
                <Newticket bgColor="bg-green-400" />
            </div>
            <img className="fixed object-cover h-screen w-screen top-0 z-[-1]" src={Spacebg} alt="" />
        </section>
    );
}

export default Myticket;