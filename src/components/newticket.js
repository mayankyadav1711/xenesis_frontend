import React, { useState } from "react";
import Pfp from "./ticket/avatars/0001.png";
import Qr from "./ticket/img/qr.png";
import Price from "./ticket/price";
import Dots from "./ticket/dots";
import './ticket/newticket.css'
// @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
// import Price from "./price";
// import Dots from "./dots";
// import ""



function Newticket({ bgColor }) {

    return (
        // <div className="flex-col relative justify-center  items-center p-4 bg-black bg-opacity-35   rounded-md">
        <div className={`flex relative justify-between  items-center bg-white  bg-opacity-75  rounded-md`}>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-tl-md flex items-center rounded-bl-md h-full w-[40px] left-0">
                <p className="-translate-x-[30%] -rotate-90 text-center font-extrabold">XENESIS'24</p>
            </div>
            <div className="  border-2 w-full rounded-tl-none border-l-0 m-4 ml-0 overflow-hidden border-black rounded-bl-none grid grid-cols-[25%_1fr]  items-center  rounded-lg">
                <div className="p-2  border-white  max-w-[100px]">
                    <img src={Qr} className="w-full h-full" alt="qr" />
                </div>
                <div className="flex border-l-8   border-dotted border-[#162238]  flex-col">


                    <div className="grid py-4  grid-cols-[25%_1fr] items-center">
                        <div className=" max-w-[80px]  aspect-square">
                            <img src={Pfp} className="w-full h-full" alt="pfp" />
                        </div>
                        <div className="h-fit gap-0 text-caption1 font-semibold flex-col line-clamp-3     text-black ">
                            <p className="  ">User Name</p>
                            <p className="   "> harshilvaliya@gmail.com </p>
                            <p className="font-extrabold text-caption2 ">ULTIMATE CLASH - FREE FIRE </p>
                        </div>
                    </div>
                    {/* <div className="flex gap-0 hover:scale-[103%] cursor-pointer duration-150 pb-2 px-2 pr-4 ">
                        <Price bgColor="bg-[#0F242E] ">
                            <>
                                50
                            </>
                        </Price>

                        <div className="text-center bg-gradient-to-bl rounded-md rounded-tl-none rounded-bl-none py-2   w-full duration-300  bg-black bg-opacity-50 text-caption1">
                            <p>Event Name</p>
                        </div>
                    </div> */}

                    <div className="border-black border-t-2">
                        <div className="grid text-center gap-x-1 px-1 font-bold items-center grid-cols-[40%_1fr_40%]">
                            <div className="flex flex-col text-caption2">
                                <p className="py-0.5 p-2  " >FRIDAY</p>
                                <p className="py-0.5 p-2 border-t-[1px] line-clamp-1 border-black" >FEB'24</p>
                            </div>
                            <p className="date py-3 p-2 border-l-2 text-subtitle1 border-r-2 font-extrabold border-black" >23</p>
                            <div className="flex flex-col text-caption2">
                                <p className="py-1 p-2  " >Ticket ID: </p>

                                <p className="py-1 p-2  border-t-[1px] border-black " >₹50 /-</p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
            <div>

            </div>
            <div className=" absolute top-0 -translate-x-1/2 -translate-y-1/2  left-0">
                <Dots />
            </div>
            <div className=" absolute bottom-0 -translate-x-1/2 translate-y-1/2  left-0">
                <Dots />
            </div>
            <div className=" absolute top-0 translate-x-1/2 -translate-y-1/2  right-0">
                <Dots />
            </div>
            <div className=" absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0">
                <Dots />
            </div>
            <div className=" absolute bottom-0 translate-x-1/2 translate-y-[20px] left-[25%]">
                <Dots />
            </div>
            <div className=" absolute top-0 translate-x-1/2 -translate-y-[20px] left-[25%]">
                <Dots />
            </div>
        </div>
    );
}

export default Newticket;
