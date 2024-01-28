import React, { useEffect, useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isGlassy, setGlassy] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set the glassy effect when scrolled
      setGlassy(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#240a34] overflow-x-hidden`}>
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between text-white fixed w-full top-0 py-[calc(3vh)] px-[calc(3vh)] z-50 transition-all duration-300 ${
          isGlassy ? "backdrop-filter backdrop-blur-md" : ""
        }`}
        id="navbar"
      >
        <div className="lg:hidden relative flex items-center justify-center gap-4">
          {/* Profile Image */}
          <img
            src="./static/event-images/4.jpg"
            alt=""
            className="w-[35px] h-[35px] rounded-full object-cover"
            onClick={toggleProfileDropdown}
          />
          {/* Profile Dropdown */}
          <div
            className={`absolute bg-slate-600 bg-opacity-50 top-12 right-0 w-full min-w-[200px] rounded-md border-slate-400 z-50 h-0 overflow-hidden transition-all duration-300 ${
              isProfileDropdownOpen ? "h-auto" : ""
            }`}
            id="profile-dropdown-mobile"
          >
            <a href="#">
              <p className="w-full px-4">
                <i className="bi bi-gear mr-2.5" /> Profile Settings
              </p>
            </a>
            <hr className="my-3 border-b-slate-400" />
            <a href="#">
              <p className="w-full px-4">
                <i className="bi bi-box-arrow-right mr-2.5" /> Logout
              </p>
            </a>
          </div>
          {/* Menu Toggle Button */}
          <button
            className="text-2xl block lg:hidden !outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <i className="bi bi-x-lg" />
            ) : (
              <i className="bi bi-list" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-0 right-0 flex flex-col gap-5 items-center justify-center w-screen h-screen z-50 bg-slate-900 bg-opacity-95 ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
          id="mobile-menu"
        >
          <button
            className="absolute top-5 right-5 !outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="bi bi-x-lg" />
          </button>
          <a href="/" className="text-2xl">
            Home
          </a>
          <a href="/events" className="text-2xl">
            Events
          </a>
          <a href="#" className="text-2xl">
            Event Confirm
          </a>
          <a href="/aboutus" className="text-2xl">
            About Us
          </a>
          <a href="/login" className="text-2xl">
            Login
          </a>
          <a href="/register" className="text-2xl">
            Register
          </a>
          <a href="/login" className="text-2xl"></a>
        </div>

        {/* Desktop Menu - Float Right */}
        <ul className="hidden text-body2 lg:flex items-center justify-end space-x-10 float-right ml-auto mr-20 mt-2">
          <a
            href="/"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          >
            Home
          </a>
          <a
            href="/events"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}

          >
            Events
          </a>
          <a
            href="#"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          >
            Event Confirm
          </a>
          <a
            href="/aboutus"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          >
            About Us
          </a>
          <a
            href="/login"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          >
            Login
          </a>
          <a
            href="/register"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          >
            Register
          </a>
          <a
            href="/login"

            className={` ${isGlassy ? "font-montserrat" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          ></a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
