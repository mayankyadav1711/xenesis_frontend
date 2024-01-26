import React from 'react';
import backgroundImage from '../aboutcont/download.jpg'; 
import img1 from '../aboutcont/game.avif'; 
import img2 from '../aboutcont/code.avif'; 
import img3 from '../aboutcont/robot.jpg'; 
import img4 from '../aboutcont/race.png';

const Aboutcont = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section className="min-h-screen flex-col gap-4" style={divStyle}>
      <div className="text-white flex-col py-8 px-4">
        <h2 className='text-3xl font-bold pb-4'>About Us</h2>
        <p className='pb-4 font-semibold text-xl'>Xenesis is an annual technical festival organized by LDRP-ITR, providing a platform for students to showcase their technical skills and compete with their peers. The festival brings together a diverse range of participants from different engineering colleges across the country.</p>
        <p className='pb-4 font-semibold text-xl'>With a plethora of events, workshops, and technical talks, Xenesis aims to create an atmosphere that fosters learning, creativity, and innovation. The festival provides an opportunity for students to engage in hands-on technical activities, gain practical experience, and enhance their problem-solving abilities.</p>
        <p className='pb-4 font-semibold text-xl'>At Xenesis, we strive to inspire and encourage the next generation of engineers and technologists. We believe that the festival is not just about competition but also about creating a sense of community and sparking a passion for technology.</p>
        <p className='pb-4 font-semibold text-xl'>Our team comprises enthusiastic students who work tirelessly to organize and execute the festival. We aim to create a memorable experience for all participants and ensure that everyone has an enjoyable and rewarding time.</p>
        <p className='pb-4 font-semibold text-xl'>Xenesis has been a resounding success over the years, attracting participants from far and wide. We are committed to making each edition of the festival better than the last, by incorporating feedback and improving the overall experience.</p>
        <p className='pb-4 font-semibold text-xl'>Come be a part of the Xenesis family and join us in celebrating technology and innovation!</p>
      </div>
      <div className='text-center py-8 font-extrabold text-4xl text-white'>Types Of Events</div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  py-8 text-white px-4 text-center gap-8'>
        <div className='rounded-full overflow-hidden'>
        <img src={img1} alt="Image 1" className="max-w-full h-auto object-cover rounded-full hover:scale-110 transition-all duration-500 " /></div>
        <div className='rounded-full overflow-hidden'>
        <img src={img2} alt="Image 2" className="max-w-full h-auto object-cover rounded-full hover:scale-110 transition-all duration-500 " /></div>
        <div className='rounded-full overflow-hidden'>
        <img src={img3} alt="Image 3" className="max-w-full h-auto object-cover rounded-full hover:scale-110 transition-all duration-500 " /></div>
        <div className='rounded-full overflow-hidden'>
        <img src={img4} alt="Image 4" className="max-w-full h-auto object-cover rounded-full hover:scale-110 transition-all duration-500 " /></div>
      </div>
    </section>
  );
}

export default Aboutcont;


