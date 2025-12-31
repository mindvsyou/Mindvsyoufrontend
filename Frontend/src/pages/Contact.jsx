import { Link, useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        alert("an error occurred, please check email");
      });
  };

  const contactSaveHandle = () => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/record/contactdata`, {
        firstname,
        secondname,
        email,
        message,
      })
      .then(() => {
        setLoading(false);
        navigate("/record/contactsuccess");
      })
      .catch(() => {
        setLoading(false);
        alert("an error occurred, please fill all the details");
      });
  };

  return (
    <div className="bg-yellow-200">
      {/* NAVBAR */}
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4">
        <h1 className="text-xl font-bold">MindVsYou</h1>

        <ul className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/record/courses" className="text-black">Courses</Link></li>
          <li><Link to="/record/about" className="text-black">About</Link></li>
          <li><Link to="/record/policy" className="text-black">Privacy Policy</Link></li>
          <li><Link to="/record/testimonials" className="text-black">Testimonials</Link></li>
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row px-4 md:px-12 mt-10">
        {/* LEFT INFO */}
        <div className="md:w-1/3">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-4">
            Interested in studying with us? <br />
            Fill out some info and we will be in touch shortly.
          </p>
          <p>
            mindvsyou@gmail.com <br />
            (+91) 8448970354
          </p>
        </div>

        {/* FORM */}
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-16 space-y-3">
          <div>
            <label>First Name</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div>
            <label>Second Name</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg"
              value={secondname}
              onChange={(e) => setSecondname(e.target.value)}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              className="w-full px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-200 border border-gray-700 rounded-lg"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button className="bg-black mt-2" onClick={contactSaveHandle}>
            SUBMIT
          </Button>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/3 mt-10 md:mt-0 md:ml-24 flex justify-center">
          <Image src="/books.jpg" className="h-96 w-72 object-cover" />
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="flex flex-col md:flex-row gap-12 mt-16 px-6 py-8">
        <h1 className="text-xl font-bold">MindVsYou</h1>

        <div>
          <p className="font-bold">Explore</p>
          <Link to="/record/courses" className="block">Courses</Link>
          <Link to="/record/about" className="block">About</Link>
          <Link to="/record/contact" className="block">Contact</Link>
        </div>

        <div>
          <p className="font-bold">Follow</p>
          <Link to="/record/courses" className="block">Facebook</Link>
          <Link to="/record/admissionform" className="block">Instagram</Link>
          <Link to="/record/contact" className="block">Twitter</Link>
        </div>
      </div>

      {/* EMAIL SIGNUP — EACH ITEM ON ITS OWN ROW */}
      <div className="px-6 pb-12">
        <label className="font-bold block mb-2">
          Sign up with your email address to receive news and updates.
        </label>

        <input
          className="block w-full md:w-96 px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="bg-black" onClick={emailSaveHandle}>
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Contact;
