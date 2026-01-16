import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import isTeacher from "../../middleware/isTeacher.js";
import { logout } from "../pages/logout.jsx";

const Courses = () => {
  

  return (
  <>
   <nav className="">
  <div className="w-full bg-white border-1 border-gray-200 h-18 flex">
    <div className="mt-1 ml-3">
        <img src="/mindvsyou-logo.JPG" className="w-16 h-16" />
      </div>
     <div className="w-full mt-4 flex">
      
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-white text-sm sm:text-base">


        <li className="text-sm font-medium">
          <Link to="/" className="text-black !no-underline">
            Home
          </Link>
        </li >
        <li className="text-sm font-medium">
          <Link to="/record/about" className="text-black !no-underline">
            About
          </Link>
        </li >
        <li className="text-sm font-medium">
          <Link to="/record/contact" className="text-black !no-underline">
            Contact
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Link to="/record/policy" className="text-black !no-underline">
            Privacy Policy
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Link to="/record/blogs" className="text-black !no-underline">
            Blogs
          </Link>
        </li>
        <li className="ml-156">
          {isTeacher() ? (
            <button
              onClick={logout}
              className="text-black font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/api/auth/teacher-login"
              className="text-black text-sm !no-underline border-1 border-black rounded px-2 py-2 font-medium hover:bg-gray-100 ml-24"
            >
              Teacher Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  </div>
  {/* HEIGHT CONTROLLER */}
  <div className="min-h-[220px] sm:min-h-[260px] md:min-h-[320px] flex items-start pt-2">
    
    {/* CONTENT WRAPPER */}
   
  </div>
</nav>
      
  </>
  );
}

export default Courses;
