import React from 'react'

const Event = () => {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="./static/tailwind.css" />
        <title>Xenesis - Event</title>
        <style dangerouslySetInnerHTML={{ __html: "\n          * {\n               scroll-behavior: smooth;\n          }\n          .eventName {\n               text-shadow: -1px 1px 0 #000,\n                    1px 1px 0 #000,\n                    1px -1px 0 #000,\n                    -1px -1px 0 #000;\n          }\n          .customScrollbar::-webkit-scrollbar {\n               display: none;\n          }\n          .radial-gradient-container {\n               background: radial-gradient(at top left, #211e60 1%, #240a34 50%);\n          }\n          .clip-copyrights {\n            clip-path: polygon(0 0, 85% 0%, 100% 100%, 0% 100%);\n          }\n          .clip-button {\n               background: linear-gradient(to right, #7815ea, #c595ff) !important;\n               clip-path: polygon(0% 0%, 90% 0, 100% 30%, 100% 100%, 0 100%);\n          }\n     " }} />
        {/* Navbar */}
        <nav className="flex items-center justify-between text-white fixed w-full top-0 py-[calc(3vh)] px-[calc(3vh)] z-50 transition-all duration-300" id="navbar">
          <div>
            <h1 className="text-[calc(3vh)]">Logo</h1>
          </div>
          <div className="relative flex items-center justify-center gap-4 lg:hidden">
            {'{'}% if isUser == True %{'}'}
            {/* Profile Image */}
            <img src="/static/avatars/{{profilePic}}.png" alt className="w-[45px] h-[45px] rounded-full object-cover bg-slate-300" onclick="toggleProfileDropdown()" />
            {/* Profile */}
            <div className="fixed right-10 top-6 z-[999] overflow-visible flex items-center justify-center gap-4 px-[calc(2vh)]">
              <div className="absolute bg-slate-600 top-16 right-0 w-full min-w-[200px] rounded-md z-[999] h-0 overflow-hidden transition-all duration-300" id="profile-dropdown-mobile">
                <p className="w-full px-4 text-white"><i className="bi bi-person mr-2.5" />{'{'}{'{'}userName{'}'}{'}'}</p>
                <hr className="w-full my-2" />
                <a href="/logout" className>
                  <p className="w-full px-4 text-white truncate capitalize"><i className="bi bi-box-arrow-right mr-2.5" />Logout</p>
                </a>
              </div>
            </div>
            {'{'}%endif%{'}'}
            {/* Menu Toggle Button */}
            <button className="text-2xl block lg:hidden !outline-none" onclick="toggleMobileMenu()"><i className="bi bi-list" /></button>
          </div>
          {/* Mobile Menu */}
          <div className="absolute top-0 left-0 flex flex-col gap-5 items-center justify-center w-screen h-screen z-50 bg-slate-900 bg-opacity-95 hidden" id="mobile-menu">
            <button className="absolute top-5 right-5 !outline-none" onclick="toggleMobileMenu()"><i className="bi bi-x-lg" /></button>
            <a href="/" className="text-2xl">Home</a>
            <a href="/events" className="text-2xl">Events</a>
            <a href="#" className="text-2xl">Event Confirm</a>
            <a href="/aboutus" className="text-2xl">About Us</a>
            <a href="/login" className="text-2xl">Login</a>
            <a href="/register" className="text-2xl">Register</a>
          </div>
          {/* Tablet | Laptop Menu */}
          <ul className="flex items-center hidden lg:flex">
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="/">Home</a></li>
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="/events">Events</a></li>
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="#">Event Confirm</a></li>
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="/aboutus">About Us</a></li>
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="/login">Login</a></li>
            <li className="px-[calc(2vh)] font-semibold text-[calc(3vh)]"><a href="/register">Register</a></li>
            <div className="px-[calc(2vh)] font-semibold text-[calc(3vh)]">
              <button>Register for Event</button>
            </div>
            <div className="relative flex items-center justify-center gap-4 px-[calc(2vh)]">
              <img src="./static/event-images/4.jpg" alt className=" w-[50px] h-[50px] rounded-full object-cover" onclick="toggleProfileDropdown()" />
              <div className="absolute bg-slate-600 bg-opacity-50 top-16 right-0 w-full min-w-[200px] rounded-md border-slate-400 z-50 h-0 overflow-hidden transition-all duration-300" id="profile-dropdown">
                <a href="#" className>
                  <p className="w-full px-4"><i className="bi bi-gear mr-2.5" />Profile Settings</p>
                </a>
                <hr className="my-3 border-b-slate-400" />
                <a href="#" className>
                  <p className="w-full px-4"><i className="bi bi-box-arrow-right mr-2.5" />Logout</p>
                </a>
              </div>
            </div>
          </ul>
        </nav>
        {/* Hero Section */}
        <div className="w-full h-screen overflow-hidden customScrollbar relative">
          <canvas id="canvas" className="w-screen h-[calc((1024/1536)*100vw)] absolute top-0 z-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-[calc(3vh)] text-center z-20">
            <h1 className="text-[calc(12vh)] text-white uppercase font-bold z-20">
              Events
            </h1>
          </div>
          <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-10" />
        </div>
        {/* Department Events */}
        <section className="w-full bg-[#240A35]">
          <div className="absolute w-full h-full top-0 bg-gradient-to-t from-[#240A35] via-transparent to-transparent z-10"> </div>
          {/* Computer Events */}
          <div className="py-6 px-4">
            <h1 className="mb-4 text-white font-bold text-2xl">Computer Engineering</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mx-2">
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/1.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/2.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/4.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/1.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam sada dd d ada das dad asdasdas d asdad ad asd asd asdasd asd adasd adasdasd asd addadexplicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/2.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/4.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/3.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* IT Events */}
          <div className="py-6 px-4">
            <h1 className="mb-4 text-white font-bold text-2xl">IT Engineering</h1>
            <div className="grid grid-cols-4 gap-5 mx-2">
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/1.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/2.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/4.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/1.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/2.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/4.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group" id="event">
                <div className="w-full rounded-t-lg overflow-hidden relative group">
                  <img src="./static/event-images/3.jpg" alt={1} className="group-hover:scale-110 h-full w-full object-cover overflow-hidden transition-all duration-300" />
                </div>
                <div className="my-3 px-4">
                  <h1 className="text-white font-bold text-2xl capitalize eventName">X-motion game mania
                  </h1>
                  <p className=" text-[#2F1D69] text-lg my-2 font-semibold rounded-lg capitalize w-fit">
                    ₹100 per
                    head</p>
                  <a href="/" className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg">Register</a>
                </div>
                <p className="mt-2 px-4 text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                  Dignissimos, nisi officia.
                  Ratione natus doloremque magni quam explicabo</p>
                <div className="flex items-end justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                  <div className="flex flex-col items-center absolute bottom-0 left-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      2</p>
                    <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1500</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 ">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      1</p>
                    <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹2000</p>
                  </div>
                  <div className="flex flex-col items-center absolute bottom-0 right-[47px]">
                    <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">
                      3</p>
                    <p className="bg-orange-900 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-5">
                      ₹1000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#211e60] pt-20">
          <div className="flex flex-col md:flex-row lg:justify-around justify-center md:gap-10 gap-3 xl:px-32 lg:px-20 md:px-12 px-8 mb-8">
            {/* Social | Logo */}
            <div className="flex flex-col md:items-center items-start gap-3">
              <img src="./static/ldrp.png" alt="Xenesis" className="lg:w-[140px] w-[110px]" />
              <p className="lg:max-w-[200px] md:max-w-[140px] md:text-center text-gray-300">Epic Events organized for ultimate students!</p>
              <div className="flex items-center justify-center lg:gap-5 gap-4 md:mt-3 mt-1">
                <a href className="text-[#9740fe] lg:text-2xl md:text-xl text-2xl hover:-translate-y-2 hover:text-[#dfc5ff] transition-all duration-300"><i className="bi bi-facebook" /></a>
                <a href className="text-[#9740fe] lg:text-2xl md:text-xl text-2xl hover:-translate-y-2 hover:text-[#dfc5ff] transition-all duration-300"><i className="bi bi-twitter" /></a>
                <a href className="text-[#9740fe] lg:text-2xl md:text-xl text-2xl hover:-translate-y-2 hover:text-[#dfc5ff] transition-all duration-300"><i className="bi bi-instagram" /></a>
                <a href className="text-[#9740fe] lg:text-3xl md:text-xl text-2xl hover:-translate-y-2 hover:text-[#dfc5ff] transition-all duration-300"><i className="bi bi-youtube" /></a>
              </div>
            </div>
            {/* Useful Links */}
            <div className="pt-4">
              <h3 className="font-bold text-white lg:text-xl sm:text-lg mb-4 pb-2 relative after:content-&quot;&quot; after:absolute lg:after:left-2 after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]">Useful Links</h3>
              <div className="flex flex-col text-left text-gray-400 gap-1 lg:pl-2 pl-0 lg:text-base text-sm">
                <a href className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300">Events</a>
                <a href className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300">About Us</a>
                <a href className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300">Register in Event</a>
                <a href className="hover:translate-x-2 hover:text-[#bc85ff] transition-all duration-300">Events</a>
              </div>
            </div>
            {/* Join Us */}
            <div className="pt-4">
              <h3 className="font-bold text-white lg:text-xl sm:text-lg mb-4 pb-2 relative after:content-&quot;&quot; after:absolute lg:after:left-2 after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]">Contact Us</h3>
              <div className="flex flex-col text-left gap-2 text-gray-400 lg:pl-2 pl-0 lg:text-base text-sm">
                <div className="flex flex-col group cursor-pointer">
                  <p className="text-[#9740fe]">Join Us:</p>
                  <p className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300">ldrp@gmail.com</p>
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <p className="text-[#9740fe]">Phone:</p>
                  <p className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300">+91 786 308 5614</p>
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className="pt-4">
              <h3 className="font-bold text-white lg:text-xl sm:text-lg mb-5 pb-2 relative after:content-&quot;&quot; after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]">Newsletter Signup</h3>
              <div className="flex flex-col text-left gap-2 text-gray-400 lg:text-base text-sm">
                <form className="flex flex-col items-start gap-3">
                  <input type="email" placeholder="abc@xyz.com" className="lg:px-3 px-2.5 lg:py-2 py-1.5 text-sm outline-none bg-transparent border border-gray-500 rounded" />
                  <input type="submit" defaultValue="Subscribe" className="uppercase cursor-pointer text-xs lg:px-6 px-4 lg:py-3 py-2 clip-button text-white font-semibold hover:bg-[black] bg-gradient-to-tr from-[#7815ea] to-[#c595ff] hover:translate-x-1 transition-all duration-300" />
                </form>
              </div>
            </div>
          </div>
          {/* Copyrights */}
          <div className="bg-[#240a34] bg-opacity-20 md:w-fit w-full md:px-24 px-8 md:pr-36 mb-0 sm:clip-copyrights text-gray-300 font-semibold py-8 text-xl">
            © 2023 Xenesis All Rights Registered
          </div>
        </footer>
        {/* fragment shader */}
        {/* partial */}
      </div>

    </div>
  )
}

export default Event
