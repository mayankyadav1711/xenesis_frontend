/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Events from "./components/events";
import "./globals.css"


import Verifier from "./components/Verifier/verifier";
import Myticket from "./components/myticket";
import EventDetails from "./components/eventDetailsPage/eventDetails";
import FAQ from "./components/faqs";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/eventDetails/:eventLink" element={<EventDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword/:token" element={<ResetPassword />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/otp" element={<OTP />} />
                <Route path="/events" element={<Events />} />
                <Route path="/aboutus" element={<Aboutus />} />

                <Route path="/verifier" element={<Verifier />} />
                <Route path="/myTicket" element={<Myticket />} />
                <Route path="/faqs" element={<FAQ />} />
            </Routes>
        </>
    );
};
function App() {
    return (
        <Router>
            <ThemeProvider>
                <Navbar />
                <Routing />
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

export default App;
