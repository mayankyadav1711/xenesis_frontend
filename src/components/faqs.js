import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import SolarSystem from "./SolarSystem"
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {

  
    const { theme } = useTheme();

  const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    if (event) {
      event.preventDefault();
      setActive(!active);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Set to true if you want the animation to happen only once
    });
  }, []);
    return (
<div className=" w-auto m-4 rounded-lg bg-[#2d364d48] backdrop-filter backdrop-blur-lg dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-0 lg:px-0 xl:px-0 lg:min-h-24 min-h-20" style={{ boxShadow: '6px 6px 8px 4px rgba(0, 0, 0, 0.5)' }}>
    <button
    className={`faq-btn flex w-full text-left pl-6 lg:pt-6 pt-4 mr-2 `}
    onClick={(event) => handleToggle(event)}
    style={{ outline: 'none' }}
  >
    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg hover:bg-gray-300 text-primary dark:bg-gray-300">
      <svg
        className={`fill-primary stroke-primary duration-200 ease-in-out ${
          active ? "rotate-180" : ""
        }`}
        width="17"
        height="10"
        viewBox="0 0 17 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 9.53454 9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
          fill=""
          stroke=""
        />
      </svg>
    </div>
  
    <div className="w-full">
      <h4 className="mt-1 lg:text-lg text-md font-semibold text-dark pr-2 pt-1 dark:text-white line-clamp-2">
        {header}
      </h4>
    </div>
  </button>
  
  <div
  className={`lg:pl-[62px] pl-[32px] duration-200 ease-in-out bg-[#414e6f69] backdrop-filter backdrop-blur-md rounded-sm mt-2 ${
    active ? "block" : "hidden"
  }`}
>
    <p className="py-3 text-base leading-relaxed text-body-color text-white">
      {text}
    </p>
  </div>
</div>

      
    );
  };

  return (
    <section className="relative overflow-hidden bg-cover bg-no-repeat bg-fixed pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
    <div className="absolute inset-0 z-0">
      <SolarSystem/>
    </div>    <div className="container mx-auto relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-0">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block lg:text-5xl text-2xl font-semibold text-white" style={{textShadow: "4px 4px 8px rgba(0, 0, 0, 0.9)"}}>
                Frequently Asked Question
              </span>
              {/* <div className="absolute inset-0 bg-[#1a1f2c] z-[-1]"></div> */}
             
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is Xenesis?"
              text="Xenesis is a technical event that aims to promote innovation and creativity in the field of technology. It provides a platform for students to showcase their skills and learn from industry experts."
            />
       
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Who can participate in Xenesis?"
              text="Xenesis is open to all students who are interested in technology and innovation. Students from all disciplines are welcome to participate."
            />
       
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I register for Xenesis?"
              text="To register for Xenesis, please visit our website and click on the registration link. You will be asked to provide some basic information about yourself and your team (if applicable). Once you have completed the registration process, you will receive a confirmation email."
            />
     
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is the registration fee for Xenesis?"
              text="The registration fee for Xenesis varies depending on the event and the number of participants. Please refer to the registration page on our website for more information."
            />

          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What are the prizes for winning Xenesis?"
              text="The prizes for winning Xenesis vary depending on the event. However, winners can expect to receive cash prizes, certificates, and recognition from industry experts."
            />
        
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I participate in an event?"
              text="You are required to register first. Once you log in to the website, you can participate in any event."
            />
       
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I get the details of the events in which I have participated?"
              text="Once you have made the payment for the events you have registered for, you will see the tickets with QR codes in the MyTickets section."
            />
          
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I access tickets for the events?"
              text="Once you log in to the website, you can see the tickets with QR codes in the MyTickets section. At the time of the event, you are required to show the QR code to the volunteer/organizer."
            />
    
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Can I register for multiple events?"
              text="Yes, users can register for multiple events. Users are required to make sure that the event times do not overlap."
            />
       
          </div>
          <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Who can I contact for more information about Xenesis? "
              text={"For more information about Xenesis, please contact us at xenesis@ldrp.ac.in or visit our website for more details."}

            />
 
          </div>
         
          
        </div>
      </div>

      {/* <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
};

export default FAQ;