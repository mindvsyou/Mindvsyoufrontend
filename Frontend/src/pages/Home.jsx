import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from 'axios';
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from "lucide-react";
import { User } from "lucide-react";


const Home = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const testimonials = [
    {
      name: "Swayamprabha Verma",
      message:
        "Mind vs You is an excellent centre for Maths and Science! Shilpi is a very sincere and hardworking teacher. She leaves no stone unturned in guiding her pupils. I would highly recommend her.",
      class: "Class 10th",
      rating:"5"
    },
    {
      name: "Neha Karve",
      message:
        "The Teacher gives personal attention to each student, simplified learning and brilliant results.  If the students are with them, you can relax they are in the right hands.Thank you.",
      class: "Class 9th",
    },
    {
      name: "Pratima Sawhney",
      message:
        "Very innovative way of teaching she teaches and makes student self study in front of her,my son excelled in Maths and science in her guidance .last but not the least she makes  student deciplined .",
      class: "Class 8th",
    },
    {
      name: "Kalpana Mishra",
      message:
        "Excellent teaching skills and the best teacher",
      class: "Class 10th",
    },
    {
      name: "Gulshan Prakash",
      message:
        "Very Experienced Teachers",
      class: "Class 10th",
    },
    {
      name: "Subhash Walaskar",
      message:
        "Fine Experience",
      class: "Class 10th",
    },
  ];

    const emailSaveHandle = () => {
        const data = {
            email,
        }
        setLoading(true);
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/record/emailform`,data).then(()=>{
            setLoading(false);
            navigate('/record/emailsuccess');
        }).catch((error)=>{
            setLoading(false);
            alert('an error occurred, please check email');
            console.log(error);
        })
    }

return (
    <div className="w-full overflow-x-hidden">
  
      {/* NAVBAR */}
      <nav
        className="bg-cover bg-center bg-no-repeat min-h-[240px]"
        style={{ backgroundImage: "url('/notebook22.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="mt-28 md:mt-40 text-2xl md:text-3xl font-bold text-white">
            MindVsYou Coaching
          </h1>
  
          <ul className="flex flex-wrap gap-4 mt-6 md:mt-4 text-white font-semibold text-sm md:text-base">
            <li><Link to="/record/courses">Courses</Link></li>
            <li><Link to="/record/about">About</Link></li>
            <li><Link to="/record/contact">Contact</Link></li>
            <li><Link to="/record/policy">Privacy Policy</Link></li>
            <li><Link to="/record/blogs">Blogs</Link></li>
            <li><Link to="/record/chatbot">Chatbot</Link></li>
          </ul>
        </div>
      </nav>
  
      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-yellow-200 to-yellow-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium">
              WHERE MIND MEETS MASTERY
            </h1>
            <p className="mt-4 text-sm md:text-base">
              Learn from top educators, access structured courses, and achieve your goals
              with personalized mentorship.
            </p>
            <Button className="mt-6 bg-black px-6 py-3 rounded-xl">
              <Link to="/record/courses" className="text-white no-underline">
                Explore Courses
              </Link>
            </Button>
          </div>
  
          <Image src="/students.jpg" rounded className="w-full h-auto" />
        </div>
      </section>
  
      {/* INSTRUCTOR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Introducing your expert guide
            </h1>
            <p className="mt-4 text-sm md:text-base">
              Step into a classroom led by visionaries who redefine what it means to educate.
            </p>
          </div>
          <Image src="/lamp.jpg" className="w-full md:w-1/2 rounded-lg" />
        </div>
      </section>
  
      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-6">FAQs</h1>
  
          {[1, 2].map((q) => (
            <div key={q} className="border-t py-6">
              <h3 className="font-semibold">Question {q}</h3>
              <p className="mt-2 text-sm md:text-base">
                It all begins with an idea. Maybe you want to launch a business or share
                a creative project with the world.
              </p>
            </div>
          ))}
        </div>
      </section>
  
      {/* TESTIMONIALS */}
      <section className="relative py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>
  
        <button
          onClick={slideLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>
  
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-6 md:px-10"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[300px] bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic mb-4">“{t.message}”</p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
  
        <button
          onClick={slideRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
      </section>
  
      {/* APP PROMO */}
      <section className="py-10 bg-gray-200 text-center">
        <h1 className="text-xl font-bold">Learn from anywhere</h1>
        <p className="mt-2 text-sm md:text-base">
          Study from anywhere at your convenience.
        </p>
        <Image src="/google-play-store-badge.png" className="mx-auto w-48 mt-4" />
      </section>
  
      {/* CTA */}
      <section className="py-10 text-center">
        <h3 className="font-semibold">Know more about our courses!</h3>
        <p className="text-sm">Book a free counselling session</p>
        <div className="mt-4 flex justify-center gap-2">
          <User className="w-6 h-6 text-gray-700" />
          <button className="bg-gray-800 text-white px-6 py-2 rounded">
            Speak to an Expert
          </button>
        </div>
      </section>
  
      {/* FOOTER */}
      <footer className="bg-yellow-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <h1 className="text-xl font-bold">MindVsYou</h1>
  
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1">
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
  
          <div>
            <label className="font-semibold text-sm">
              Sign up for updates
            </label>
            <input
              className="w-full mt-2 px-4 py-2 rounded border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="mt-3 w-full bg-black" onClick={emailSaveHandle}>
              SIGN UP
            </Button>
          </div>
        </div>
      </footer>
  
    </div>
  );
}
export default Home ;
