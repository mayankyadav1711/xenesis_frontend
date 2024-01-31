import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
        className={`flex items-center  font-jost  justify-between text-white fixed w-full top-0 py-[calc(3vh)] px-[calc(3vh)] z-50 transition-all duration-300 ${
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
            <Link to="#" rel="noopener noreferrer">
              <p className="w-full font-jost  px-4">
                <i className="bi bi-gear mr-2.5" /> Profile Settings
              </p>
            </Link>
            <hr className="my-3 border-b-slate-400" />
            <Link to="#" rel="noopener noreferrer">
              <p className="w-full font-jost  px-4">
                <i className="bi bi-box-arrow-right mr-2.5" /> Logout
              </p>
            </Link>
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
          <Link to="/" rel="noopener noreferrer" className="text-2xl font-jost">
            Home
          </Link>
          <Link to="/events" rel="noopener noreferrer" className="text-2xl font-jost">
            Events
          </Link>
          <Link to="#" rel="noopener noreferrer" className="text-2xl font-jost">
            Event Confirm
          </Link>
          <Link to="/Linkboutus" rel="noopener noreferrer" className="text-2xl font-jost">
            About Us
          </Link>
          <Link to="/login" rel="noopener noreferrer" className="text-2xl font-jost">
            Login
          </Link>
          <Link to="/register" rel="noopener noreferrer" className="text-2xl font-jost">
            Register
          </Link>
          <Link to="/login" rel="noopener noreferrer" className="text-2xl font-jost"></Link>
        </div>

        {/* Desktop Menu - Float Right */}
        <ul className="hidden text-body2 lg:flex items-center justify-end space-x-10 float-right ml-auto mr-20 mt-2">
          <Link
            to="/" rel="noopener noreferrer" 

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  transition-all duration-300 font-bold text-2xl text-white`}
          >
            Home
          </Link>
          <Link
            to="/events" rel="noopener noreferrer"

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  font-jost transition-all duration-300 font-bold text-2xl text-white`}

          >
            Events
          </Link>
          <Link
            to="/myticket" rel="noopener noreferrer"

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  font-jost transition-all duration-300 font-bold text-2xl text-white`}
          >
            Event Confirm
          </Link>
          <Link
            to="/aboutus" rel="noopener noreferrer"

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  font-jost transition-all duration-300 font-bold text-2xl text-white`}
          >
            About Us
          </Link>
          <Link
            to="/login" rel="noopener noreferrer"

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  font-jost transition-all duration-300 font-bold text-2xl text-white`}
          >
            Login
          </Link>
          <Link
            to="/register" rel="noopener noreferrer"
              style={{marginRight:"2rem"}}
            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100 transition-all duration-300 font-bold text-2xl text-white`}
          >
            Register
          </Link>
          {/* <Link
            to="/login" rel="noopener noreferrer"

            className={` ${isGlassy ? "font-jost" : ""
              } link hover:text-neon-100  transition-all duration-300`}
          ></Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
