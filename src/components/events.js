import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./navbar";
import EventCard from "./EventCard";
import Departments from "./Departments";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Events = () => {
    // const departmentEvents = {
    //     "Computer Engineering": [
    //         {
    //             title: "FreeFire",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 1",
    //             pricePerHead: "100",
    //             individualAllowed: true,
    //             eventId: "event1",
    //             teamAllowed: true,
    //             teamPrice: 1000,
    //             likes: 9123,
    //         },
    //         {
    //             title: "X-Error",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 1",
    //             pricePerHead: "100",
    //             individualAllowed: true,
    //             eventId: "event1",
    //             teamAllowed: true,
    //             teamPrice: 1000,
    //             likes: 9123,
    //         },
    //         {
    //             title: "Skribble",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 1",
    //             pricePerHead: "100",
    //             individualAllowed: true,
    //             eventId: "event1",
    //             teamAllowed: true,
    //             teamPrice: 1000,
    //             likes: 9123,
    //         },
    //         {
    //             title: "Human Ludo",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 1",
    //             pricePerHead: "100",
    //             individualAllowed: true,
    //             eventId: "event1",
    //             teamAllowed: true,
    //             teamPrice: 1000,
    //             likes: 9123,
    //         },
    //         {
    //             title: "Pictionary",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 1",
    //             pricePerHead: "100",
    //             individualAllowed: true,
    //             eventId: "event1",
    //             teamAllowed: true,
    //             teamPrice: 1000,
    //             likes: 9123,
    //         },
    //         // Add more events as needed
    //     ],
    //     "Information Technology": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "Mechanical Engineering": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "Electrical Engineering": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "Electronics Communication": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],

    //     "Civil Engineering": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "MBA Department": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "MCA Department": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     "Science and Humanity": [
    //         {
    //             title: "Xbox One",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Clue Zone",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "X-Bug Report",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Valorant",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         {
    //             title: "Event 2",
    //             image: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/1.jpg?alt=media&token=1af0f700-8cd4-42ee-b9e0-15641a362a86",
    //             description: "Event description 2",
    //             pricePerHead: "200",
    //             individualAllowed: false,
    //             eventId: "event2",
    //             teamAllowed: false,
    //             teamPrice: 750,
    //             likes: 0,
    //         },
    //         // Add more events as needed
    //     ],
    //     // Add more departments as needed
    // };
    const [openDepartment, setOpenDepartment] = useState(null);
    const [departmentEvents, setDepartmentEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events/")
            .then((res) => res.json())
            .then((data) => {
                setDepartmentEvents(data.departmentArr);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleAccordionToggle = (department) => {
        setOpenDepartment(openDepartment === department ? null : department);
    };
    return (
        <>
            <div class="w-full h-screen overflow-hidden object-center customScrollbar relative" style={{ backgroundImage: "url('https://res.cloudinary.com/db4e3hqfv/image/upload/v1706213665/eventHerolandingPage2_zd9rni.png')" }}>
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to bottom, rgba(7, 13, 21, 0.5) 0%, rgba(7, 13, 21, 0.7) 100%)" }}></div>
                <canvas id="canvas" class="w-screen h-[calc((1024/1536)*100vw)] absolute top-0 z-0"></canvas>
                <div class="absolute w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-[calc(3vh)] text-center z-20">
                    <h1 class="lg:text-[calc(12vh)] text-[calc(6vh)] text-white uppercase font-bold z-20">Events</h1>
                    <div class="w-[60vw] h-[65px] p-2 px-2 mx-auto md:px-4">
                        <div class="w-full">
                            <div class="flex items-center">
                                <div class="relative w-full">
                                    <input onkeyup="Search()" id="search" placeholder="Search for an Event ..." class="bg-transparent w-full border border-brand-500 focus:outline-none p-3 pl-10 rounded-md text-sm text-white focus:backdrop-blur" />{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-gray-200 absolute inset-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <button onclick="Search()" aria-label="Primary Button" type="button" class="flex content-center items-center justify-center text-center px-4 py-2 text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#240A35] absolute right-1.5 top-1.5">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="w-full h-full bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-10"></div> */}
            </div>

            <div className="bg-[#162238]]">
                {departmentEvents.map((department, index) => (
                    <div key={index} className={`bg-darkBlue-50  py-2 pt-10`}>
                        <div className="w-full  text-center">
                            <h3 className="uppercase z-10 text-white text-heading4 pt-5  font-bold  w-fit mx-auto underline-offset-8 underline mb-4">{department.departmentName}</h3>
                        </div>
                        {/* <hr /> */}
                        <EventCard events={department.events} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Events;
