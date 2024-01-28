import React, { useState } from 'react';
import ldrp from './images/ldrp.png';

const OTP = () => {
  const [mouse, setMouse] = useState([0, 0]);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleMouseMove = (event) => {
    const x = ((event.clientX / window.innerWidth) * 2 - 1) * -0.02;
    const y = ((event.clientY / window.innerHeight) * 2 - 1) * -0.02;
    setMouse([x, y]);
  };

  const handleTouchMove = (event) => {
    const x = ((event.touches[0].clientX / window.innerWidth) * 2 - 1) * -0.02;
    const y = ((event.touches[0].clientY / window.innerHeight) * 2 - 1) * -0.02;
    setMouse([x, y]);
  };

  const handleTouchEnd = () => {
    setMouse([0, 0]);
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleResendClick = () => {
    setResendDisabled(true);
    // Implement your resend logic here (e.g., API call)
    setTimeout(() => {
      setResendDisabled(false);
    }, 30000); // Enable resend after 30 seconds
  };

  return (
    <div>
      {/* Main */}
      <section className="relative flex items-center justify-center w-full h-full min-h-[100vh] max-h-[100vh] overflow-y-hidden">
      <div className="absolute top-0 left-0 w-screen h-full min-h-[100vh] scale-100">
        <img
            src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706210892/view-3d-space-rocket-model_obtkw7.jpg"  // Replace with your background image path
            alt="Background"
            className="h-full min-h-[calc((797/1463)*100vw)] w-full object-cover block"
          />
        </div>

      <div class="flex items-center justify-center max-w-[430px] w-[90%] h-full">
				<form action="/otpValidation/" method="post" class="form w-full h-full md:px-16 sm:px-12 px-8 lg:py-12 sm:py-11 py-10 backdrop-blur-md bg-neon-100 bg-opacity-15 shadow-inner border-solid border-x-4  border-neon-100 z-10 rounded-xl">
					{/* {%csrf_token%} */}
					<h1 class="text-white form-header-text text-center md:text-3xl sm:text-3xl text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-yellow-300 mb-5 flex justify-center items-center gap-4"><img src={ldrp} alt="" class="w-[50px] h-[50px]" />Enter OTP</h1>
					{/* <div class="text-center">
						<p class="text-white font-light w-full mb-3 otp-sent-text">The otp verification code has been sent to {{email}}</p>
						<p class="hidden otp-resent-text text-green-400 w-full mb-3 font-light">OTP has been resent successfully to {{email}}</p>
					</div> */}
					<div class="w-full flex flex-col items-center md:gap-4 gap-3 w-full">
          <div className="flex group relative w-full justify-center gap-4 mb-2 font-semibold">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    className="otp sm:w-[65px] w-[42px] h-[50px] bg-slate-500/50 mt-3 text-neon-100 !outline-none text-center rounded-lg"
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>
						<div class="w-full flex items-center justify-center mb-3 text-white text-sm">
							<div class="flex items-center justify-start gap-2 w-fit">
								<p class="otp-text">Didn't recieved the otp?</p>
								<button type="button" name="resendotp" class="text-red-400 !outline-none resend-text" onclick="disableResendButton()">Resend Otp</button>
							</div>
							<div class="flex items-center justify-center gap-2">
								<svg height="25" width="25" class="animate-rotate rotating-icon hidden">
									<circle cx="11.5" cy="12.5" r="10" stroke="#99ccff" stroke-width="2" fill="none" stroke-dasharray="50" />
								</svg>
								<span class="countdown-timer hidden text-[#99ccff]"></span>
							</div>
						</div>
						<input type="submit" value="Verify" name="varification" tabindex="4" className='w-fit bg-neon-100 text-deepBlue-100 hover:shadow-2xl 3d-button hover:-translate-y-2 hover:border-neon-100  hover:saturate-200 outline-none mt-5 xl:px-16 lg:px-12 sm:px-10 px-9 py-1.5 text-[#f0e2ea] xl:text-lg lg:text-md font-semibold cursor-pointer transition-all duration-200 focus:-translate-y-1 hover:ring hover:ring-yellow-100 rounded-md'/>
					</div>
				</form>
			</div>

        {/* Link to Home Div */}
        <a href="/" class="absolute top-5 left-5 flex flex-col items-center cursor-pointer hover:scale-[1.15] z-30 transition-all duration-300">
				<i className="bi bi-house-door-fill text-xl text-deepBlue-100 bg-neon-100 px-3 py-2 rounded-full"></i>
        <p className="mt-1 h-8 text-deepBlue-100 bg-neon-100 font-semibold rounded-md px-2 py-1 hidden md:block">Home</p>
			</a>
        {/* Your home link */}
      </section>


    </div>
  );
};

export default OTP;