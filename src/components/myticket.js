import React, { useState } from "react";
import Ticket from "./ticket/ticket";


function Myticket(Props) {
    return (
        <div className=" px-10 py-10">
            <h4 className="text-center text-4xl font-bold pb-10">Ticket</h4>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

                <Ticket bgColor="bg-green-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />


            </div>
        </div>
    );
}

export default Myticket;