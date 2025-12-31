import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const emailSaveHandle = () => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/record/emailform`, { email })
      .then(() => {
        setLoading(false);
        navigate("/record/emailsuccess");
      })
      .catch(() => {
        setLoading(false);
        alert("An error occurred, please check email");
      });
  };

  const sections = [
    { slug: "class-8", title: "Class 8th" },
    { slug: "class-9", title: "Class 9th" },
    { slug: "class-10", title: "Class 10th" },
    { slug: "class-11", title: "Class 11th" },
    { slug: "class-12", title: "Class 12th" },
    { slug: "iit-jee", title: "IIT JEE" },
    { slug: "neet", title: "NEET" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (!slider) return;
      slider.scrollBy({ left: 260, behavior: "smooth" });
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-bold text-xl">MindVsYou</h1>

          <ul className="flex flex-wrap gap-4 text-sm md:text-base">
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Courses For Kids</Link></li>
            <li><Link to="/record/Pdfdetails">Study Materials</Link></li>
            <li><Link to="">Offline Centers</Link></li>
            <li><Link to="/record/contact">Contact</Link></li>
            <li><Link to="/record/about">About</Link></li>
          </ul>

          <Link className="bg-gray-600 text-white px-4 py-2 rounded" to="">
            Talk to our Expert
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          MindVsYou Learning
        </h1>
        <span className="inline-block mt-4 bg-lime-300 px-4 py-2 rounded">
          Popular Courses
        </span>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Explore Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Competitive Exams",
              items: ["JEE", "NEET", "EAMCET", "JEE/NEET FOUNDATION"],
            },
            {
              title: "School Tuitions",
              items: ["CBSE", "ICSE", "All Boards"],
            },
            {
              title: "Courses For Kids",
              items: ["Math", "Science", "Coding", "Spoken English"],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center rounded-2xl p-6"
              style={{ backgroundImage: "url('/BookBack3.jpg')" }}
            >
              <h3 className="font-semibold mb-4">{card.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="bg-red-500 px-2 py-1 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button className="bg-orange-500 px-4 py-2 rounded">
                EXPLORE COURSES
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK DEMO */}
      <section
        className="mt-16 bg-cover bg-center py-16"
        style={{ backgroundImage: "url('/BookSession.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">
            Book your free Demo Session
          </h2>
          <p>Get a free academic counselling session</p>
          <button className="mt-4 bg-orange-500 px-6 py-3 rounded font-bold">
            Book a Free Demo
          </button>
        </div>
      </section>

      {/* STUDY MATERIAL SLIDER */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold mb-4">Study Materials</h2>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth"
        >
          {sections.map((section) => (
            <div
              key={section.slug}
              className="min-w-[240px] bg-gray-500 p-6 rounded-xl text-white"
            >
              <h3 className="mb-4">{section.title}</h3>
              <Link
                to={`/record/${section.slug}`}
                className="bg-orange-500 px-4 py-2 rounded text-black"
              >
                STUDY MATERIAL
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SPEAK TO EXPERT */}
      <section className="bg-orange-400 mt-16 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold">Happy to help you!</h3>
          <p className="mt-2">
            Need more details? Our expert academic counsellors will patiently
            explain everything.
          </p>
          <button className="mt-4 bg-gray-900 px-6 py-3 rounded">
            Speak to an Expert
          </button>
        </div>
      </section>

      {/* GOOGLE PLAY */}
      <section className="max-w-7xl mx-auto px-4 mt-16 bg-gray-300 rounded py-10">
        <h2 className="text-2xl font-semibold">Learn from anywhere</h2>
        <p className="mt-2">
          We’re available on Android devices. Study anytime, anywhere.
        </p>
        <Image
          src="/google-play-store-badge.png"
          className="w-48 mt-4"
        />
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="font-bold text-xl">MindVsYou</h2>

          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <Link to="/courses">Courses</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

          <div>
            <label className="font-semibold">
              Sign up for updates
            </label>
            <input
              className="w-full mt-2 px-3 py-2 border rounded bg-amber-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="mt-3 bg-black"
              disabled={loading}
              onClick={emailSaveHandle}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Courses;
