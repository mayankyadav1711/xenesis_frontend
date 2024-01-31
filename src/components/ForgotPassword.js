import React from 'react';
import { Link } from 'react-router-dom';
import ldrp from './images/ldrp.png';
import loginbg from './images/loginbg.png';
import homecenter from './images/homecenter.jpg';

const ForgotPassword = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-full min-h-[100vh] overflow-y-hidden">
     
     <div className="fixed top-0 left-0 w-full h-full min-h-[100vh] scale-100">
      <img
    src={loginbg}
    alt="Background 1"
    className="h-full min-h-[calc((797/1463)*100vw)] w-full object-cover block sm:hidden lg:block image1-class"
  />

  {/* Image for mobile screens (hidden on larger screens) */}
  <img
    src={homecenter}
    alt="Background 2"
    className="h-full min-h-[calc((797/1463)*100vw)] w-full  object-cover block sm:block lg:hidden image2-class"
  />
        </div>

        

      <div className="flex items-center justify-center max-w-[500px] w-[90%] h-full">
        <form
          action=""
          method="post"
          className="form w-full h-full px-8 md:px-12 sm:px-10  lg:py-12 sm:py-11 py-10 backdrop-blur-md bg-slate-800 bg-opacity-15 shadow-inner border-solid border-x-4  border-neon-100 z-10 rounded-xl"
        >
          <h1 className="text-white  font-jost form-header-text text-center md:text-3xl sm:text-3xl text-sm font-bold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-yellow-300 mb-10 flex justify-center items-center gap-4">
            <img src={ldrp} alt="" className="w-[50px] h-[50px]" />
            Forgot Password?
          </h1>
          <div className="w-full flex flex-col items-center md:gap-4 gap-0">
            <div className="flex group relative w-full justify-center font-semibold">
              <input
                type="email"
                id="email"
                spellCheck="false"
                className="peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-neon-100 invalid:border-pink-300 invalid:text-red-400 focus:invalid:border-pink-300"
                placeholder=" "
                tabIndex="1"
              />
              <label
                htmlFor="email"
                className="absolute font-jost left-0 -top-4 text-neon-100 text-sm transition-all duration-300 peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white"
              >
                Email
              </label>
            </div>
            <input
              type="submit"
              value="Get OTP"
              tabIndex="2"
              className='w-fit font-jost bg-neon-100 text-deepBlue-100 hover:shadow-2xl 3d-button hover:-translate-y-2 hover:border-neon-100  hover:saturate-200 outline-none mt-5 xl:px-16 lg:px-12 sm:px-10 px-9 py-1.5 text-[#f0e2ea] xl:text-lg lg:text-md font-semibold cursor-pointer transition-all duration-200 focus:-translate-y-1 hover:ring hover:ring-yellow-100 rounded-md'
            />
          </div>
        </form>
      </div>

      {/* Link to Home Div */}
      <Link
        to="/" rel="noopener noreferrer"
        className="absolute top-5 left-5 flex flex-col items-center cursor-pointer hover:scale-[1.15] z-30 transition-all duration-300"
      >
        <i className="bi bi-house-door-fill text-xl text-deepBlue-100 bg-neon-100 px-3 py-2 rounded-full"></i>
        <p className="mt-1 h-8 font-jost text-deepBlue-100 bg-neon-100 font-semibold rounded-md px-2 py-1 hidden md:block">Home</p>
      </Link>
    </section>
  );
};

export default ForgotPassword;