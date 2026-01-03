import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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
        "Mind vs You is an excellent centre for Maths and Science! Shilpi is a very sincere and hardworking teacher.",
      class: "Class 10th",
    },
    {
      name: "Neha Karve",
      message:
        "The Teacher gives personal attention to each student, simplified learning and brilliant results.",
      class: "Class 9th",
    },
    {
      name: "Pratima Sawhney",
      message:
        "Very innovative way of teaching. My son excelled in Maths and Science.",
      class: "Class 8th",
    },
    {
      name: "Kalpana Mishra",
      message: "Excellent teaching skills and the best teacher",
      class: "Class 10th",
    },
  ];

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
    <div className="w-full overflow-x-hidden">
      {/* NAVBAR */}
      <nav
  className="w-full bg-contain bg-center bg-no-repeat bg-black"
  style={{ backgroundImage: "url('/5.png')" }}
>
  <div className="min-h-[220px] sm:min-h-[260px] md:min-h-[320px] flex items-start justify-center">
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white font-semibold text-sm sm:text-base">
      <li>
        <Link to="/record/courses" className="text-white no-underline">
          Courses
        </Link>
      </li>
      <li>
        <Link to="/record/about" className="text-white no-underline">
          About
        </Link>
      </li>
      <li>
        <Link to="/record/contact" className="text-white no-underline">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/record/policy" className="text-white no-underline">
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link to="/record/blogs" className="text-white no-underline">
          Blogs
        </Link>
      </li>
    </ul>
  </div>
</nav>


      {/* HERO */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium">
              WHERE MIND MEETS MASTERY
            </h1>
            <p className="mt-4 text-sm sm:text-base">
              Learn from top educators and achieve your goals with mentorship.
            </p>
            <Button className="mt-6 bg-black px-6 py-3 rounded-xl">
              <Link to="/record/courses" className="text-white no-underline">
                Explore Courses
              </Link>
            </Button>
          </div>

          <div className="w-full h-[260px] sm:h-[360px] md:h-[480px] relative rounded-xl overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Introducing your expert guide
            </h1>
            <p className="mt-4 text-sm sm:text-base">
              Step into a classroom led by visionaries.
            </p>
          </div>
          <Image
            src="/lamp.jpg"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-12 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>

        {/* Desktop Arrows */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[300px] bg-white p-5 sm:p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
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
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
      </section>

      {/* APP PROMO */}
      <section className="py-10 bg-gray-200 text-center px-4">
        <h1 className="text-xl font-bold">Learn from anywhere</h1>
        <p className="mt-2 text-sm sm:text-base">
          Study from anywhere at your convenience.
        </p>
        <Image src="/google-play-store-badge.png" className="mx-auto w-40 sm:w-48 mt-4" />
      </section>

      {/* CTA */}
      <section className="py-10 text-center px-4">
        <h3 className="font-semibold">Know more about our courses!</h3>
        <p className="text-sm">Book a free counselling session</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
          <User className="w-6 h-6 text-gray-700" />
          <button className="bg-gray-800 text-white px-6 py-2 rounded">
            Speak to an Expert
          </button>
        </div>
      </section>

      <Image src="/personalbrand.png" className="w-full h-auto object-cover" />

      {/* FOOTER */}
      <footer className="bg-blue-400 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <h1 className="text-xl font-bold text-black">MindVsYou</h1>

          <div>
            <h3 className="font-semibold mb-2 font-medium text-black">Explore</h3>
            <ul className="space-y-1">
              <li><Link to="/courses" className="text-black font-medium">Courses</Link></li>
              <li><Link to="/about" className="text-black font-medium">About</Link></li>
              <li><Link to="/contact" className="text-black font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 font-medium text-black">Follow Us</h3>
            <ul className="space-y-1">
              <li className="text-black font-medium">Facebook</li>
              <li className="text-black font-medium">Instagram</li>
              <li className="text-black font-medium">Twitter</li>
            </ul>
          </div>

          <div>
            <label className="font-semibold text-sm text-black">Sign up for updates!</label>
            <input
              className="w-full mt-2 px-4 py-2 rounded border bg-amber-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="mt-3 w-full bg-black" onClick={emailSaveHandle}>
              {loading ? "Please wait..." : "SIGN UP"}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


//git push origin HEAD:frontend
//git add .
//git commit -m "Describe your changes"
//git push origin HEAD:frontend