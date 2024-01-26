/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";




const Routing = () => {





  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
     </Routes>
    </>
  );
};
function App() {
  return (
   
      <Router>
        <Routing />
      </Router>
   
  );
}

export default App;
