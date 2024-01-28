import React, { useState } from "react";
import Ticket from "./ticket/ticket";
import Newticket from "./newticket";
import Spacebg from "./ticket/img/space-bg.jpg"
// import Scrolltop from "/icons/scroll-top.svg"
function Myticket(Props) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth', // Use smooth scrolling behavior
        });
    };
    const RedTicketsData = [1, 2, 3];
    const GrayTicketsData = [1, 2, 3];
    const GreenTicketsData = [1, 2, 3];
    return (
        <section className=" relative      ">
            <div className="relative">


                <h4 className="text-center lg:text-[calc(12vh)] text-[calc(6vh)] py-[50dvh]  text-white font-extrabold ">Ticket</h4>

                {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

                <Ticket bgColor="bg-green-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />
                <Ticket bgColor="bg-red-500" />
                <Ticket bgColor="bg-gray-500" />


                
            </div> */}
                <div className="md:h-16 h-12 bottom-2  right-2 md:right-5 flex items-center justify-center absolute  text-neon-100 md:bottom-40  cursor-pointer filter bg-neon-100 rounded-full animate-bounce  aspect-square"
                    // style={{
                    //     backgroundImage: `url("/icons/scroll-top.svg")`,
                    //     animationDuration: `1.7s`,
                    // }}
                    onClick={scrollToTop}
                >
                    <img src={"/icons/scroll-top.svg"} className="place-self-center rotate-180 -translate-y-1.5 aspect-square" alt="" />
                </div>
            </div>

            <div className=" px-8 grid gap-6 grid-cols-1 mt-10 md:grid-cols-2 pb-20 lg:grid-cols-3">
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