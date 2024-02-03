import React from 'react'
import Instasvg1 from "./icons/insta.svg"
import Instasvg2 from "./icons/github.svg"
import Instasvg3 from "./icons/linkdin.svg"
import Rounds from './Rounds'

import pfp1 from './about_image/vishwang.jpg';

// import pfp7 from '../images/';
import AnimatedAlpha from './alphaAnimation'
import SolarSystem from '../SolarSystem'



const Ourteam = () => {


    const members = [
        { name: 'Jagrat Patel', photo: "https://i.ibb.co/GsBMty8/vishwang.jpg", instagram: 'v_a_s_u_2_7', github: 'vasu2709', linkedin: 'vasu-solanki-51a81629a/' },

        { name: 'Mayank Yadav', photo: "https://i.ibb.co/Npfq8jg/Mayank.jpg", instagram: '___mayank17___', github: 'mayankyadav1711', linkedin: 'mayankyadav17/' },
        { name: 'Divya Kaurani', photo: "https://i.ibb.co/yFtqWb8/Divya.jpg", instagram: 'divya_kaurani20', github: 'KauraniDivya', linkedin: 'divyakaurani/' },
        { name: 'Darshit Sojitra', photo: "https://i.ibb.co/KbdfmS3/Darshit.jpg", instagram: 'darshit_sojitraa', github: 'DPS21302', linkedin: 'darshitsojitra/' },

        { name: 'Vishwang Suthar', photo: "https://i.ibb.co/GsBMty8/vishwang.jpg", instagram: 'vishwang._.suthar', github: 'Vishwang0suthar ', linkedin: 'vishwang-suthar-062b39233/' },
        { name: 'Aryan Rathod', photo: "https://i.ibb.co/MZ3cV0v/Aryan.jpg", instagram: 'ar.yan21_', github: 'Aryanrathod21', linkedin: 'aryan-rathod-a8140b233/' },

        { name: 'Arjun Latiwala', photo: "https://i.ibb.co/DK4G867/Arjun.jpg", instagram: 'aalu._.arjun', github: 'ArjunCJ', linkedin: 'arjun-latiwala-344449243/' },

        { name: 'Harshil Valiya', photo: "https://i.ibb.co/G7b2C4y/Harshil.png", instagram: 'harshil_valiya', github: 'harshilvaliya', linkedin: 'harshil-valiya-1b1082274/' },
    ];


    return (
        <div className=' mt-28'>
            <div className="flex gap-3 pt-10 text-center text-white justify-center">
                <AnimatedAlpha
                    requiredAlphabets={["W", "E", "B", " ", "T", "E", "A", "M"]}
                />
            </div>
            <div className="fixed inset-0 z-[-1] ">
                <SolarSystem />
            </div>

            <div className=" mt-4 pb-24  p-4 px-10 md:px-28 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
                {/* First Row (4 boxes) */}
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="bg-transparent  backdrop-blur-md bg-gray-200 bg-opacity-5 shadow-inner  relative border-[3px] border-transparent hover:border-neon-100 text-white duration-300 md:p-4 md:py-4.5 p-8 flex overflow-hidden items-center group pt-10 flex-col rounded-lg"
                    >

                        <img
                            src={member.photo}
                            // URL={https://ibb.co/cTJbCpN}
                            alt={`Image of ${member.name}`}
                            className="object-cover aspect-square mx-auto mb-4 rounded-full"
                        />
                        {/* Add the rotate effect for the bottom shape */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute bottom-0 z-10 duration-300 translate-y-10 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 rotate-6 group-hover:rotate-0 "
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#86A062"
                                fillOpacity="1"
                                d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,208C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg> */}

                        <img
                            className="absolute bottom-0 z-10  translate-y-20 opacity-0 group-hover:translate-y-8 scale-150 group-hover:opacity-100 transition-transform rotate-6 group-hover:rotate-0 "
                            src={'https://i.ibb.co/nrV7RzM/surface-3.png'} />
                        <h2 className="text-2xl font-bold text-center">
                            {member.name}
                        </h2>
                        <br />
                        <div className="text-grayDark-50 group-hover:text-neon-100">
                            Full Stack Devloper
                        </div>
                        <div className="flex w-[80%] justify-evenly py-8 pt-10 opacity-0 duration-700 z-0 translate-y-10 group-hover:-translate-y-6 group-hover:opacity-100 text-3xl space-x-0">
                            <a
                                className="transition-transform transform hover:scale-[1.3] duration-300 fill-red-500"
                                href={`https://www.instagram.com/${member.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                {/* <image src={'/icons/insta.svg'} /> */}
                                <img src={Instasvg1} />
                            </a>
                            <a
                                className="transition-transform transform hover:scale-[1.3] duration-500 fill-black"
                                href={`https://github.com/${member.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                {/* <image src={'/icons/github.svg'} /> */}
                                <img src={Instasvg2} />

                            </a>
                            <a
                                className="transition-transform transform hover:scale-[1.3] duration-700 text-blue-500"
                                href={`https://www.linkedin.com/in/${member.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                {/* <image src={'/icons/linkdin.svg'} /> */}
                                <img src={Instasvg3} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ourteam