import React, { useEffect, useState } from 'react';


const Footer = () => {




  return (
    <div class=" overflow-x-hidden" >
      {/* Mavbar  */}

      <footer className="bg-black pt-20">
        <div className="md:flex sm:grid sm:grid-cols-2 flex flex-col md:flex-row lg:justify-around justify-center md:gap-10 gap-3 xl:px-32 lg:px-20 md:px-12 px-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col md:items-center items-start gap-3">
            <img
              src="/static/logoCus.png"
              alt="Xenesis"
              className="lg:w-[140px] w-[110px]"
            />
            <p className="lg:max-w-[200px] md:max-w-[140px] md:text-center text-gray-300">
              Epic Events organized for ultimate students!
            </p>
          </div>

          {/* Useful Links */}
          <div className="pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute lg:after:left-0 after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-darkYellow-50'>
              Useful Links
            </h3>
            <div className="flex flex-col text-left text-gray-400 gap-1 lg:text-base text-sm">
              <a
                href="/"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                Home
              </a>
              <a
                href="/event"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                Events
              </a>
              <a
                href="/aboutus"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                About Us
              </a>
              <a
                href="/faqs"
                className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-darkYellow-50'>
              Contact Us
            </h3>
            <div className="flex flex-col text-left gap-2 text-gray-400 lg:text-base text-sm">
              <div className="flex flex-col group cursor-pointer">
                <p className="text-darkYellow-50">Join Us:</p>
                <a
                  href="mailto:xenesis@ldrp.ac.in"
                  className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  xenesis@ldrp.ac.in
                </a>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <p className="text-darkYellow-50 ">Phone:</p>
                <a
                  href="tel:7863085614"
                  className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  +91 786 308 5614
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:pt-4 sm:pt-3 pt-4">
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-5 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-darkYellow-50'>
              Social Links
            </h3>
            <p className="lg:max-w-[250px] md:max-w-[200px] text-gray-300">
              Get in touch! Find us on any platform.
            </p>
            <div className="flex items-center justify-start lg:gap-5 gap-4 md:mt-4 mt-2">
              <a
                href="https://www.facebook.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-darkYellow-50 transition-all duration-300"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/xenesisldrp"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-darkYellow-50 transition-all duration-300"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-darkYellow-50 transition-all duration-300"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-darkYellow-50 transition-all duration-300"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyrights */}
        <div className="bg-[#211e60] bg-opacity-20 text-center  clip-copyrights text-gray-300 font-semibold py-8 md:text-xl text-md">
          &copy; 2023 Xenesis All Rights Registered
        </div>
      </footer>
    </div>
  );
};

export default Footer;