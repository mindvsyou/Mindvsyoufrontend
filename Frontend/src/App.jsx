import React from "react";
import Home from "./pages/Home.jsx";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import EmailSuccess from "./pages/EmailSuccess.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {

  return (
  
  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/record/courses" element = {<Courses />} />
    <Route path = "/record/aboutus" element = {<PrivacyPolicy />} />
    <Route path = "/record/testimonials" element = {<Testimonials />} />
    <Route path = "/record/contact" element = {<Contact />} />
    <Route path = "/record/about" element = {<About />} />
    <Route path = "/record/emailsuccess" element = {<EmailSuccess />} />
  </Routes>
 

  )
      
}

export default App
