import React, { useState } from "react";
import Pfp from "./ticket/avatars/0001.png";
import Qr from "./ticket/img/qr.png";
import Price from "./ticket/price";
import Dots from "./ticket/dots";
import './ticket/newticket.css'
import Texture from "./ticket/img/paper.png"
// @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
// import Price from "./price";
// import Dots from "./dots";
// import ""



function Newticket({ bgColor }) {

    return (
        // <div className="flex-col relative justify-center  items-center p-4 bg-black bg-opacity-35   rounded-md">
        // <div className={`flex overflow-hidden relative justify-between bg-opacity-20 z-0 items-center ${bgColor}   bg-opacity-75 `}>
        <div className={`flex relative justify-between items-center ${bgColor}  bg-opacity-75 `}>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-tl-md flex items-center rounded-bl-md h-full w-[40px] left-0">
                <p className="-translate-x-[30%] -rotate-90 text-center font-extrabold">XENESIS'24</p>
            </div>
            <div className="  border-2 w-full rounded-tl-none border-l-0 m-4 ml-0 overflow-hidden border-black rounded-bl-none grid grid-cols-[25%_1fr]  items-center  rounded-lg">
                <div className="p-2  border-white  ">
                    <img src={Qr} className="w-full h-full" alt="qr" />
                </div>
                {/* <div className="flex border-l-8   border-dotted border-black  flex-col"> */}
                <div className="flex border-l-8   border-dotted border-darkBlue-50  flex-col">


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
                                <p className="py-1 p-2   " >ID: 232 </p>

                                <p className="py-1 p-2  border-t-[1px] border-black " >₹50 /-</p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
            <div>

            </div>
            <div className=" absolute top-0   left-0">
                <Dots />
            </div>
            <div className=" absolute bottom-0 -rotate-90  left-0">
                <Dots />
            </div>
            <div className=" absolute top-0 rotate-90  right-0">
                <Dots />
            </div>
            <div className=" absolute rotate-180 bottom-0  right-0">
                <Dots />
            </div>
            {/* <div className=" absolute rotate-180 bottom-0 left-[25%]  ">
                <Dots />
            </div> */}

            <div className=" absolute bottom-0 translate-x-1/2   left-[25%]">
                <div className="h-[15px] w-[30px] bg-darkBlue-50  z-10  rounded-tl-full rounded-tr-full ">
                </div>
            </div>
            <div className=" absolute top-0 translate-x-1/2  left-[25%]">
                <div className="h-[15px] w-[30px] bg-darkBlue-50  z-10  rounded-bl-full rounded-br-full ">
                </div>
            </div>
            {/* <div className="absolute scale-150 opacity-50  filter saturate-0 rotate-180 z-[-1]">
                <img src={Texture} className="object-cover h-[200px] w-[400px]" alt="tetx" />
            </div> */}
        </div>
    );
}

export default Newticket;
