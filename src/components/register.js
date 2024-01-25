
import React,{ useState } from "react";


function Register() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };
  


  return (
    <>
 <div className="bg-[#240a34] overflow-x-hidden">
      <div className="relative flex items-center justify-center w-screen h-full min-h-[100vh] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-screen h-full min-h-[100vh] scale-110">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/register-3.png?alt=media&token=84cf0c58-e62f-4247-ab30-2e46a8b3bec2"  // Replace with your background image path
            alt="Background"
            className="h-full min-h-[calc((797/1463)*100vw)] w-full object-cover block"
          />
        </div>

        {/* Link to Home Div */}
        <a href="/" className="absolute top-5 left-5 flex flex-col items-center cursor-pointer hover:scale-[1.15] z-30 transition-all duration-300">
          {/* <i className="bi bi-house-door text-xl text-white bg-[#240a34] px-3 py-2 rounded-full hover:shadow-white hover:shadow-2xl"></i> */}
          <p className="mt-1 text-white bg-[#240a34] rounded-md px-2 hidden md:block">Home</p>
        </a>

        <div className="flex items-center lg:justify-end md:pt-0 pt-5 justify-center w-[80%] h-full">
          <form onSubmit={handleSubmit} className="form max-w-[500px] w-full lg:w-[90%] h-full md:px-12 sm:px-10 px-8 lg:py-12 sm:py-11 py-10 backdrop-blur z-10 rounded-xl">

            {/* CSRF Token */}
            {/* Add your logic to include CSRF token */}
            
            {/* Display error message */}
            {/* Add your logic to display error message */}
            
            <h1 className="text-white form-header-text text-center md:text-4xl sm:text-3xl text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-yellow-300 mb-10 flex justify-center items-center gap-4">
              <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/logoCus.png?alt=media&token=235dd869-9cdb-4150-b917-315651f74159" alt="" className="sm:w-[70px] sm:h-[70px] w-[55px] h-[55px]"/> Be a part of Xenesis
            </h1>

            {/* Email input */}
            <div className='flex group relative w-full justify-center font-semibold'>
              <input
                type="email"
                id='email'
                name="email"
                spellCheck='false'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-orange-300'
                placeholder=' '
                tabIndex="1"
              />
              <label
                htmlFor='email'
                className='absolute left-0 -top-4 text-orange-300 text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white'
              >
                Email
              </label>
            </div>
            <div className='mt-5' />
            {/* Password input */}
            <div className='flex group relative w-full justify-center'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password1" 
                spellCheck='false'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-orange-300'
                placeholder=' '
                minLength="8"
                maxLength="16"
                tabIndex="2"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </span>
              <label
                htmlFor='password'
                className='absolute left-0 -top-4 text-orange-300 text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white'
              >
                Password
              </label>
            </div>
            <div className='mt-5' />
            {/* Re-enter Password input */}
            <div className='flex group relative w-full justify-center -mb-6'>
              <input
                type={showRePassword ? "text" : "password"}
                id='re-password'
                name="password2"
                spellCheck='false'
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className='peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-orange-300'
                placeholder=' '
                minLength="8"
                maxLength="16"
                tabIndex="3"
              />
              <span className="eye-icon" onClick={toggleRePasswordVisibility}>
                {showRePassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </span>
              <label
                htmlFor='re-password'
                className='absolute left-0 -top-4 text-orange-300 text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white'
              >
                Re-enter Password
              </label>
            </div>
            <div className='mt-9' />
            {/* Submit button */}
            <input
              type="submit"
              value="Register"
              tabIndex="4"
              className='w-fit bg-gradient-to-tr from-orange-500 to-yellow-300 outline-none mt-5 xl:px-16 lg:px-12 sm:px-10 px-9 py-1.5 text-[#f0e2ea] xl:text-lg lg:text-md font-semibold cursor-pointer transition-all duration-200 focus:-translate-y-1 hover:ring hover:ring-yellow-100 rounded-md'
            />
<div className="text-white ml-3 mt-2 md:mt-1 text-xs italic w-full text-right transition-all duration-200 hover:-translate-x-1">
            {/* Already have an account link */}
            <a href="/login">
              Already have an account ? Login
            </a></div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
