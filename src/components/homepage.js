import React from "react";
import { useTheme } from "../context/ThemeContext";
const Home = () => {
  const { theme } = useTheme();
  
  const departments = [
    ["Department 1", "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/com.png?alt=media&token=de93b4dd-4592-4db2-9be5-76d52ae97d2c"],
    ["Department 2", "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/com.png?alt=media&token=de93b4dd-4592-4db2-9be5-76d52ae97d2c"],
  ];
 

  const eventArr = [
    {
      title: "Event 1",
      image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
      description: "Event description 1",
      pricePerHead: "100",
      individualAllowed: true,
      eventId: "event1",
      teamAllowed: true,
      teamPrice: 1000,
      likes: 9123,
    },
    {
      title: "Event 2",
      image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
      description: "Event description 2",
      pricePerHead: "200",
      individualAllowed: false,
      eventId: "event2",
      teamAllowed: false,
      teamPrice: 750,
      likes: 0, // You can initialize likes to 0
    },
    // Add more events as needed
  ];
  
  const galleryImages = [
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/LDRP-12.jpg?alt=media&token=c4c62f01-cbde-4d4b-bda8-27b39fe77f38",
    // Add more gallery images as needed
  ];

  function cardOverlayHandle(id) {
    document.getElementById("cardOverlay" + id).classList.remove("top-full");
    document.getElementById("cardOverlay" + id).classList.add("top-0");
    document.getElementById("blurOverlay" + id).classList.add("blur-lg");
    document.getElementById("cardOverlay" + id + "2").classList.remove("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-0");
    document.getElementById("blurOverlay" + id + "2").classList.add("blur-lg");
  }
  function cardOverlayHandleClose(id) {
    document.getElementById("cardOverlay" + id).classList.add("top-full");
    document.getElementById("cardOverlay" + id).classList.remove("top-0");
    document.getElementById("blurOverlay" + id).classList.remove("blur-lg");
    document.getElementById("cardOverlay" + id + "2").classList.add("top-full");
    document.getElementById("cardOverlay" + id + "2").classList.remove("top-0");
    document.getElementById("blurOverlay" + id + "2").classList.remove("blur-lg");
  }
  function handleLike(id) {
    document.getElementById("likeSVG" + id).classList.toggle("hidden");
    document.getElementById("likeSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeFillSVG" + id).classList.toggle("hidden");
    document.getElementById("likeFillSVG" + id).classList.toggle("opacity-0");
    document.getElementById("likeSVG" + id + "2").classList.toggle("hidden");
    document.getElementById("likeSVG" + id + "2").classList.toggle("opacity-0");
    document.getElementById("likeFillSVG" + id + "2").classList.toggle("hidden");
    document.getElementById("likeFillSVG" + id + "2").classList.toggle("opacity-0");
  }

  const handleCardOverlayClose = (eventId) => {
    // Add logic to handle closing the card overlay
    console.log(`Closing card overlay for ${eventId}`);
  };
  return (
    <div className={`${theme.backgroundGradient} overflow-x-hidden`}>

<nav class="flex items-center overflow-visible justify-between text-white fixed w-full top-0 pt-[calc(2vh)] pb-10 px-[calc(3vh)] z-50 transition-all duration-300" id="navbar">
       
          
            <a href="/">
					<img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/logoCus.png?alt=media&token=235dd869-9cdb-4150-b917-315651f74159" class="h-16 w-auto" />
				</a>
        <ul class="flex items-center">
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/">Home</a></li>
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/events">Events</a></li>
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/aboutus">About Us</a></li>
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/faqs">FAQs</a></li>
				
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/login">Login</a></li>
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/register">Register</a></li>
				
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/ticketVerifer">Verifer</a></li>
	
					<li class="mx-[calc(2vh)] py-2 font-semibold text-[calc(3vh)] hover:text-[#bc85ff] transition-all duration-300 border-transparent border-4 hover:border-b-[#bc85ff]"><a href="/myTicket">My Tickets</a></li>
					<li class="mx-[calc(2vh)] py-2 w-14"></li>
			
				</ul>
          
      </nav>

      <div class="fixed right-10 top-6 z-[999] flex items-center justify-center gap-4 px-[calc(2vh)]">
				<img src="/static/avatars/{{profilePic}}.png" alt="" class="w-[50px] h-[50px] rounded-full object-cover cursor-pointer bg-slate-300" onclick="toggleProfileDropdown()" />

				<div class="absolute bg-slate-600 top-16 right-0 w-full min-w-[200px] rounded-md z-[999] h-0 overflow-hidden transition-all duration-300" id="profile-dropdown">
					<p class="w-full px-4 text-white truncate capitalize"><i class="bi bi-person mr-2.5"></i>Username</p>
					<hr class="w-full my-2" />
					<a href="/logout" class="">
						<p class="w-full px-4 text-white"><i class="bi bi-box-arrow-right mr-2.5"></i>Logout</p>
					</a>
				</div>
			</div>

       <section className="w-full h-screen p-6 text-white flex items-center justify-center relative" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/landingPage.png?alt=media&token=d64ecdf0-44fe-4f26-9d1c-3930b4369386')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="absolute left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-20"></div>
      <div className="z-30">
        <h1 className="text-[calc(8vh)] text-white uppercase font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 w-fit bg-clip-text text-transparent" data-aos="fade-up">Xenesis</h1>

        <p className="text-[calc(3vh)] text-white uppercase font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 w-fit bg-clip-text text-transparent font-['Tiro_Devanagari_Hindi','serif']" data-aos="fade-up" data-aos-delay="100">
          <q>&nbsp;कौशल&nbsp;भारत&nbsp;कुशल&nbsp;भारत&nbsp;</q>
        </p>
        <p className="text-[calc(2vh)] my-2 font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 w-fit bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="200">14th-15th March, 2023</p>
        <p className="text-[calc(2.5vh)] text-white text-justify" data-aos="fade-up" data-aos-delay="300">The term Xenesis has been derived from "genesis" which means commencement, commencement of anything</p>
      </div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-t from-[#240A35] via-transparent to-transparent lg:z-10 z-30"></div>
    </section>

      {/* Departments */}
      <section className="radial-gradient-container w-full py-[calc(3vh)]">
      <div className="w-full text-center">
        <h3 className="uppercase text-white font-semibold">Departments</h3>
        <p className="text-gray-500 text-center my-3 mx-auto w-[500px]">
          Check out the various events from different engineering departments.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-5 px-[calc(3vh)]">
        {departments.map((department, index) => (
          <div
            key={index}
            onClick={() => (window.location.href = `/events#${department[0]}`)}
            data-aos="zoom-in"
            className="cursor-pointer w-full rounded-lg bg-white/10 backdrop-blur-md mx-2"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={department[1]}
                alt=""
                className="h-32 w-full object-cover hover:scale-110 transition-all duration-300"
              />
            </div>
            <h1 className="p-4 text-white font-bold text-center">{department[0]}</h1>
          </div>
        ))}
      </div>
    </section>

      {/* Events */}
      <div className="w-full h-fit customScrollbar relative my-5">
      <div className="flex flex-col items-center justify-center w-full mb-5">
        <h3 className="uppercase text-white font-semibold">Explore Our Events</h3>
        <p className="text-gray-500 text-center my-3 mx-auto w-[500px]">
          Take a look at the events organized by our students and feel free to register in any event you want to.
        </p>
      </div>
      <div className="swiper mySwiperEvents mx-[calc(3vh)]">
        <div className="swiper-wrapper h-fit">
          {eventArr.map((event, index) => (
            <div
              key={index}
              className="swiper-slide min-w-full max-w-full md:min-w-[32%] md:max-w-[32%] lg:min-w-[24%] lg:max-w-[24%] h-fit"
            >
              <div data-aos="zoom-in" className="bg-[#AAABE2]/50 backdrop-blur-md rounded-lg group overflow-hidden" id={`event-${index}`}>
                <div className="bg-[#2F1D69]/50 w-full h-full absolute top-full z-30 rounded-lg flex flex-col justify-between transition-all duration-300">
                  <div className="px-4 pt-5">
                    <div className="flex items-center justify-between">
                      <h1 className="text-white font-bold text-xl capitalize eventName title-truncate max-w-[85%]">{event.title}</h1>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16" onClick={() => handleCardOverlayClose(`event-${index}`)}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                    <hr className="my-3" />
                    <h2 className="discription-truncate text-white">{event.description}</h2>
                    <div className="my-1 flex items-center justify-between">
                      <div className="flex flex-col">
                        {event.pricePerHead !== "-" ? (
                          <p className="text-white my-1 capitalize text-green-500">₹{event.pricePerHead} per head</p>
                        ) : (
                          <p className="text-white my-1 capitalize text-green-500">Individual Not Allowed</p>
                        )}
                        {event.teamAllowed ? (
                          <p className="text-white my-1 capitalize text-green-500">₹{event.teamPrice} per Team</p>
                        ) : (
                          <p className="text-white my-1 capitalize text-green-500">Team Not Allowed</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-heart cursor-pointer" viewBox="0 0 16 16" id={`likeSVG-${index}`} onClick={() => handleLike(`event-${index}`)}>
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-heart-fill hidden opacity-0 cursor-pointer eventName" viewBox="0 0 16 16" id={`likeFillSVG-${index}`} onClick={() => handleLike(`event-${index}`)}>
                          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                        <p className="text-white">{event.likes}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2F1D69] px-4 py-2 text-center cursor-pointer" onClick={() => window.location.href=`/event/${event.eventId}`}>
                    <a className="text-white capitalize text-lg font-bold">register</a>
                  </div>
                </div>
                <div className="" id={`blurOverlay-${index}`}>
                  <div className="w-full rounded-t-lg overflow-hidden relative group">
                    <img src={event.image !== '-' ? event.image : "/static/logoCus.png"} alt="1" className="group-hover:scale-110 h-48 w-full object-cover overflow-hidden transition-all duration-300" />
                  </div>
                  <div className="my-3 px-4">
                    <h1 className="text-white font-bold text-2xl capitalize eventName title-truncate">{event.title}</h1>
                    <div className="flex items-center justify-between my-4">
                      <div className="flex flex-col">
                        {event.pricePerHead !== "-" ? (
                          <p className="text-[#2F1D69] text-lg font-semibold rounded-lg capitalize w-fit">₹{event.pricePerHead} per head</p>
                        ) : (
                          <p className="text-[#2F1D69] text-lg font-semibold rounded-lg capitalize w-fit">Individual Not Allowed</p>
                        )}
                        {event.teamAllowed ? (
                          <p className="text-[#2F1D69] text-lg font-semibold rounded-lg capitalize w-fit">₹{event.teamPrice} per Team</p>
                        ) : (
                          <p className="text-[#2F1D69] text-lg font-semibold rounded-lg capitalize w-fit">Team Not Allowed</p>
                        )}
                      </div>
                      <a className="bg-[#2F1D69] text-white font-semibold px-2 py-1 rounded-lg cursor-pointer" onClick={() => handleCardOverlayClose(`event-${index}`)}>View more</a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#2F1D69] h-14 px-2 -pt-10 pb-0 rounded-b-lg relative">
                    <div className="flex flex-col items-center absolute bottom-0 z-20 -translate-x-[50%]">
                      <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">1</p>
                      <p className="bg-yellow-500 px-4 py-2 text-white font-semibold transition-all duration-300 hover:py-4">₹ 1000</p>
                    </div>
                    <div className="flex flex-col items-center absolute bottom-0 translate-x-[50%] z-10">
                      <p className="text-[#2F1D69] font-semibold bg-white rounded-full h-5 w-5 flex items-center justify-center mb-1 font-bold">2</p>
                      <p className="bg-gray-500 px-4 py-[3px] text-white font-semibold transition-all duration-300 hover:py-4">₹ 750</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev hover:scale-110 scale-100 origin-center transition-all duration-300">
          <i className="bi bi-arrow-left-square text-3xl text-white cursor-pointer"></i>
        </div>
        <div className="swiper-button-next hover:scale-110 scale-100 origin-center transition-all duration-300 ">
          <i className="bi bi-arrow-right-square text-3xl text-white cursor-pointer"></i>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <a href="/events" className="bg-white/20 text-white px-6 py-2 font-bold rounded-md transition-all duration-300">See More</a>
      </div>
    </div>

      {/* Gallery */}
      <section className="w-full py-5">
        <div className="w-full text-center">
          <h3 className="uppercase text-white font-semibold">Gallery</h3>
          <p className="text-gray-500 text-center my-3 mx-auto">
            Take a glimpse at the events organized by our students.
          </p>
        </div>
        <section className="w-full py-5">
          <div className="w-full text-center">
            <h3 className="uppercase text-white font-semibold">Gallery</h3>
            <p className="text-gray-500 text-center my-3 mx-auto">
              Take a glimpse at the events organized by our students.
            </p>
          </div>
          <div className="swiper mySwiperMobile w-screen overflow-hidden mt-5 p-5">
            <div className="swiper-wrapper h-fit">
              {/* Sample Images */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                <div
                  key={index}
                  className="swiper-slide h-64 flex justify-center items-center bg-cover bg-center text-4xl text-white rounded-lg overflow-hidden"
                >
                  <img
                    src={`/static/gallery/LDRP-${index}.jpg`}
                    alt={`Gallery Image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
      </section>

      <footer className="bg-[#240a34] pt-20">
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
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute lg:after:left-0 after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
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
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-4 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
              Contact Us
            </h3>
            <div className="flex flex-col text-left gap-2 text-gray-400 lg:text-base text-sm">
              <div className="flex flex-col group cursor-pointer">
                <p className="text-[#9740fe]">Join Us:</p>
                <a
                  href="mailto:xenesis@ldrp.ac.in"
                  className="text-gray-300 text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  xenesis@ldrp.ac.in
                </a>
              </div>
              <div className="flex flex-col group cursor-pointer">
                <p className="text-[#9740fe]">Phone:</p>
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
            <h3 className='font-bold text-white lg:text-xl sm:text-[1.05rem] mb-5 pb-2 relative after:content-"" after:absolute after:left-0 after:bottom-0 md:after:w-[50%] after:w-[100px] after:h-[3px] after:bg-[#9704fe]'>
              Social Links
            </h3>
            <p className="lg:max-w-[250px] md:max-w-[200px] text-gray-300">
              Get in touch! Find us on any platform.
            </p>
            <div className="flex items-center justify-start lg:gap-5 gap-4 md:mt-4 mt-2">
              <a
                href="https://www.facebook.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/xenesisldrp"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/xenesisldrp/"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 lg:text-xl md:text-lg text-base hover:-translate-y-1.5 hover:text-[#9740fe] transition-all duration-300"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyrights */}
        <div className="bg-[#211e60] bg-opacity-20 md:w-fit w-full md:px-24 px-8 md:pr-36 mb-0 clip-copyrights text-gray-300 font-semibold py-8 md:text-xl text-md">
          &copy; 2023 Xenesis All Rights Registered
        </div>
      </footer>
    </div>
  );
};

export default Home;
