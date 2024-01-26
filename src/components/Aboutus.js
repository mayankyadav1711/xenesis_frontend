// import React, { ReactNode } from 'react';
// import videoSource from '../../src/vid.webm';
// import Aboutcont from './aboutcont/aboutcont';
// import backgroundImage from '../../src/aboutus.jpg';

// const Aboutus = () => {
//     const divStyle = {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//     };
  
//   return (
//     <>
//     <section className="min-h-screen flex-col gap-4" style={divStyle}>
//       <h1 className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold w-full text-center opacity-75'>
//         ABOUT US
//       </h1></section>
//     {/* <div className='Banner relative'>
//       <video src={videoSource} autoPlay muted loop className='w-full h-full object-cover' />
//       <h1 className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold w-full text-center opacity-75'>
//         ABOUT US
//       </h1>
      
//     </div> */}
//     <Aboutcont/>
//     </>
//   )
// }

// export default Aboutus

import React, { useEffect, useState } from 'react';
// import React, { ReactNode } from 'react';
// import videoSource from '../../src/vid.webm';
import Aboutcont from './aboutcont/aboutcont';
 import backgroundImage from '../components/aboutcont/aboutus.jpg';

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
    <section className="min-h-screen flex-col gap-4 relative" style={divStyle}>
      <h1 className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold w-full text-center opacity-75 animate-text ${isVisible ? 'animate' : ''}`}>
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span> </span>
        <span>U</span>
        <span>S</span>
      </h1>
    </section>
    <Aboutcont/>
    </>
  );
};

export default Aboutus;

