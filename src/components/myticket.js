import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Ticket from "./ticket/ticket";
import Newticket from "./newticket";
import Spacebg from "./ticket/img/space-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Myticket(Props) {
    const RedTicketsData = [1, 2, 3];
    const GrayTicketsData = [1, 2, 3];
    const GreenTicketsData = [1, 2, 3];
    const [scrollPercentage, setScrollPercentage] = useState(0);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration
          once: true, // Set to true if you want the animation to happen only once
        });
      }, []);
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


                <h4 className="text-center text-heading1 pt-[45dvh] pb-20 text-white font-extrabold ">
                    Ticket
                </h4>
                <div class="w-[60vw] h-[65px] p-2 px-2 mx-auto md:px-4 pb-72">
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
                {/* <div className="md:h-16 h-12 bottom-2  right-2 md:right-5 flex items-center justify-center absolute  text-neon-100 md:bottom-20  cursor-pointer filter bg-neon-100 rounded-full animate-bounce  aspect-square"
                    // style={{
                    //     backgroundImage: `url("/icons/scroll-top.svg")`,
                    //     animationDuration: `1.7s`,
                    // }}
                    onClick={scrollToTop}
                >
                    <img src={"/icons/scroll-top.svg"} className="place-self-center rotate-180 -translate-y-1.5 aspect-square" alt="" />
                </div> */}
            </div>
            {/* <img
                src={"/icons/satellite.svg"}
                width={100}
                height={100}
                className="z-[1] top-20 right-7 fixed rotate-180 hidden lg:block"
                style={{
                    transform: `translateX(${translationValue}px)`,
                    transition: "transform 0s ease-in",
                }}
            ></img> */}
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