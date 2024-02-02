/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Events from "./components/events";

import Verifier from "./components/Verifier/verifier";
import Myticket from "./components/myticket";
import EventDetails from "./components/eventDetailsPage/eventDetails";
import FAQ from "./components/faqs";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Account_setup from "./components/Account_setup";
import Ourteam from "./components/ourteam/ourteam";
// import "./globalcss"

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    const excludedPaths = ["/login", "/register", "/accountsetup", "/otp"];

    // Check if the current path is in the excludedPaths array
    const shouldDisplayNavbarFooter = !excludedPaths.includes(window.location.pathname);

    // If the current path is in the excludedPaths array, navigate to the root to reset the location
    if (!shouldDisplayNavbarFooter) {
        navigate("/");
    }

    return (
        <>
            {shouldDisplayNavbarFooter && <Navbar />}
            {children}
            {shouldDisplayNavbarFooter && <Footer />}
        </>
    );
};

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/login" element={<Login />} />
                <Route path="/eventDetails/:eventLink" element={<MainLayout><EventDetails /></MainLayout>} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword/:token" element={<ResetPassword />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/otp" element={<OTP />} />
                <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
                <Route path="/aboutus" element={<MainLayout><Aboutus /></MainLayout>} />
                <Route path="/accountsetup" element={<Account_setup />} />
                <Route path="/ourTeam" element={<MainLayout><Ourteam /></MainLayout>} />

                <Route path="/verifier" element={<MainLayout><Verifier /></MainLayout>} />
                <Route path="/myTicket" element={<MainLayout><Myticket /></MainLayout>} />
                <Route path="/faqs" element={<MainLayout><FAQ /></MainLayout>} />
            </Routes>
        </>
    );
};
function App() {
    return (
        <Router>
            <ThemeProvider>

                <Routing />

            </ThemeProvider>
        </Router>
    );
}

export default App;
