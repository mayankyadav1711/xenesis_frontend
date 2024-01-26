import React from 'react';
import logocus from './images/logoCus.png';

const Login = () => {
  const toggleEye = () => {
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    const inputPassword = document.getElementById('password');

    if (inputPassword.type === 'text') {
      inputPassword.type = 'password';
      eyeOpen.classList.toggle('hidden');
      eyeClosed.classList.toggle('hidden');
    } else {
      inputPassword.type = 'text';
      eyeOpen.classList.toggle('hidden');
      eyeClosed.classList.toggle('hidden');
    }
  };

  return (
    <div className="bg-[#240a34] overflow-hidden">
      <div className="absolute top-0 left-0 w-screen h-full min-h-[100vh] scale-100">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/register-3.png?alt=media&token=84cf0c58-e62f-4247-ab30-2e46a8b3bec2"  // Replace with your background image path
            alt="Background"
            className="h-full min-h-[calc((797/1463)*100vw)] w-full object-cover block"
          />
        </div>
      <div className="relative flex items-center justify-center w-screen h-full min-h-[100vh] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-screen h-full min-h-[100vh] scale-110"></div>

        <a href="/" className="absolute top-5 left-5 flex flex-col items-center cursor-pointer hover:scale-[1.15] z-30 transition-all duration-300">
          {/* <i className="bi bi-house-door text-xl text-white bg-[#240a34] px-3 py-2 rounded-full hover:shadow-white hover:shadow-2xl"></i> */}
          <p className="mt-1 text-white bg-[#240a34] rounded-md px-2 hidden md:block">Home</p>
        </a>

        <div className="flex items-center lg:justify-end md:pt-0 pt-5 justify-center w-[80%] h-full">
          <form action="/login/" method="post" className="form max-w-[500px] w-full lg:w-[90%] h-full md:px-12 sm:px-10 px-8 lg:py-12 sm:py-11 py-10 backdrop-blur z-10 rounded-xl" autoComplete="off">
            {/* CSRF Token */}
            {/* Add your CSRF token logic here */}

            <h1 className="text-white form-header-text text-center md:text-3xl sm:text-2xl text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-yellow-300 mb-6 flex justify-center items-center gap-4">
              <img src={logocus} alt="" className="sm:w-[70px] sm:h-[70px] w-[55px] h-[55px] shadow-white" /> Login into Xenesis World
            </h1>

            {/* Error Message */}
            {/* Add your error message logic here */}

            <div className='w-full flex flex-col items-center gap-7 mb-2 mt-8'>
              <div className='flex group relative w-full justify-center font-semibold'>
                <input
                  type="email"
                  id='email'
                  name="email"
                  spellCheck='false'
                  className='peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-orange-300
                    invalid:border-pink-300 invalid:text-red-400 focus:invalid:border-pink-300'
                  placeholder=' '
                  tabIndex="1"
                />
                <label
                  htmlFor='email'
                  className='absolute left-0 -top-4 text-orange-300 text-sm transition-all duration-300
                    peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white'>
                  Email
                </label>
              </div>

              <div className='flex group relative w-full justify-center'>
                <input
                  type="password"
                  id='password'
                  name="password"
                  spellCheck='false'
                  className='peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-orange-300
                    invalid:border-pink-300 invalid:text-red-400 focus:invalid:border-pink-300'
                  placeholder=' '
                  minLength="8"
                  maxLength="16"
                  tabIndex="2"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye absolute right-2 bottom-2 text-white hidden" id="eyeOpen" viewBox="0 0 16 16" onClick={toggleEye}>
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash absolute right-2 bottom-2 text-white" viewBox="0 0 16 16" id="eyeClosed" onClick={toggleEye}>
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                </svg>
                <label
                  htmlFor='password'
                  className='absolute left-0 -top-4 text-orange-300 text-sm transition-all duration-300
                    peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white'>
                  Password
                </label>
              </div>

              <input
                type="submit"
                value="Login"
                tabIndex="4"
                className='w-fit bg-gradient-to-tr from-orange-500 to-yellow-300 outline-none xl:px-16 lg:px-12 sm:px-10 px-9 py-1.5 text-[#f0e2ea] xl:text-lg lg:text-md font-semibold cursor-pointer transition-all duration-200 focus:-translate-y-1 hover:ring hover:ring-yellow-100 rounded-md'
              />
              <a
                href="/register"
                className="text-white -mt-3 text-xs italic w-full text-right transition-all duration-200 hover:-translate-x-1"
              >
                Don't have account ? Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
