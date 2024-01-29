import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Ticket from "./ticket/ticket";
import Newticket from "./newticket";
import Spacebg from "./ticket/img/space-bg.jpg";

function Myticket(Props) {
    const RedTicketsData = [1, 2, 3];
    const GrayTicketsData = [1, 2, 3];
    const GreenTicketsData = [1, 2, 3];
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight =
                document.documentElement.scrollHeight - windowHeight;
            const currentScroll = window.scrollY;
            const scrollPercentage = (currentScroll / documentHeight) * 100;
            setScrollPercentage(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const translationValue = -(scrollPercentage * 10);

    const scrollToTop = () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth', // Use smooth scrolling behavior
        });
    };

    return (
        <section className=" relative">
            <div className="relative">


                <h4 className="text-center text-heading1 py-[50dvh]  text-white font-extrabold ">
                    Ticket
                </h4>
                <div className="md:h-16 h-12 bottom-2  right-2 md:right-5 flex items-center justify-center absolute  text-neon-100 md:bottom-20  cursor-pointer filter bg-neon-100 rounded-full animate-bounce  aspect-square"
                    // style={{
                    //     backgroundImage: `url("/icons/scroll-top.svg")`,
                    //     animationDuration: `1.7s`,
                    // }}
                    onClick={scrollToTop}
                >
                    <img src={"/icons/scroll-top.svg"} className="place-self-center rotate-180 -translate-y-1.5 aspect-square" alt="" />
                </div>
            </div>
            <img
                src={"/icons/satellite.svg"}
                width={100}
                height={100}
                className="z-[1] top-20 right-7 fixed rotate-180 hidden lg:block"
                style={{
                    transform: `translateX(${translationValue}px)`,
                    transition: "transform 0s ease-in",
                }}
            ></img>
            <div className=" px-8 grid gap-6 grid-cols-1 mt-10 pb-64 md:grid-cols-2  lg:grid-cols-3">
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
            <img
                className="fixed object-cover h-screen w-screen top-0 z-[-1]"
                src={Spacebg}
                alt=""
            />
        </section>
    );
}

export default Myticket;