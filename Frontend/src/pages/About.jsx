import { Link, useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-bold text-xl">MindVsYou</h1>

          <ul className="flex gap-6 text-sm md:text-base">
            <li><Link to="/" className="text-black">Home</Link></li>
            <li><Link to="/record/courses" className="text-black">Courses</Link></li>
            <li><Link to="/record/policy" className="text-black">Privacy Policy</Link></li>
          </ul>
        </div>
      </nav>

      {/* WHO WE ARE */}
      <section className="bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium mb-4">
              Who We Are
            </h2>

            <p className="mb-3">
              MindvsYou is a modern learning space designed for students of
              Class 8 to 12 who want clarity, confidence, and consistency in
              their studies.
            </p>

            <p className="mb-3">
              We combine personal coaching, AI-powered daily practice, and
              simple-to-understand teaching to help students score higher
              without stress.
            </p>

            <p className="mb-3">
              For years, we noticed one problem:
              Students don’t fail because they’re weak. They fail because they
              don’t practice the right questions every day.
            </p>

            <p>So we built MindvsYou to fix exactly that.</p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/bookbundle.jpg"
              className="w-full max-w-md rounded"
            />
          </div>
        </div>
      </section>

      {/* AI + COACHING */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/bookbundle2.jpg"
              className="w-full max-w-md rounded"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              AI + Coaching = Better Results
            </h2>

            <p className="mb-2">
              MindvsYou is one of the first coaching centers to introduce an
              AI quiz chatbot for daily learning.
            </p>

            <p className="font-medium">Students receive:</p>

            <ul className="list-disc ml-6 my-3 space-y-1">
              <li>10 daily questions</li>
              <li>Chapter-wise & topic-wise quizzes</li>
              <li>Instant answers</li>
              <li>Smart tracking</li>
              <li>Practice without books or pressure</li>
            </ul>

            <p>This routine helps them stay consistent and score better.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Meet The Founder
          </h2>

          <p className="text-xl font-medium">Shilpi Singh</p>
          <p className="mt-2">
            Founder, MindvsYou Learning <br />
            B.Tech, IIT (ISM) Dhanbad
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <h2 className="font-bold text-xl">MindVsYou</h2>

          <div>
            <h4 className="font-bold mb-2">Explore</h4>
            <Link to="/record/courses" className="block text-black">Courses</Link>
            <Link to="/record/about" className="block text-black">About</Link>
            <Link to="/record/contact" className="block text-black">Contact</Link>
          </div>

          <div>
            <h4 className="font-bold mb-2">Follow</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Sign up with your email address to receive news and updates.
            </label>

            <input
              className="w-full px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              className="bg-black mt-3 px-6 py-2"
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

export default About;
