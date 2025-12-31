import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      {/* HEADER */}
      <div className="bg-yellow-200">
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-6">
          <h1 className="text-xl font-bold">MindVsYou</h1>

          <ul className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <li><Link to="/" className="text-black">Home</Link></li>
            <li><Link to="/record/courses" className="text-black">Courses</Link></li>
            <li><Link to="/record/about" className="text-black">About</Link></li>
            <li><Link to="/record/contact" className="text-black">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* TITLE */}
      <div className="px-6 mt-10">
        <h1 className="text-4xl md:text-7xl font-bold">Privacy Policy</h1>
      </div>

      {/* CONTENT */}
      <div className="px-6 mt-6 space-y-4 max-w-5xl">
        <p>
          MindvsYou Learning (“we”, “our”, or “us”) operates educational services
          including our WhatsApp-based AI chatbot that provides quizzes, learning
          assistance, and communication to students.
        </p>

        <p>
          This Privacy Policy explains how we collect, use, store, and protect
          your information when you interact with our services.
        </p>

        <p className="font-bold">1. Information We Collect</p>
        <p>We may collect the following information when you use our services:</p>

        <p className="font-semibold">a) Personal Information</p>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Phone number</li>
          <li>Class / grade</li>
          <li>School details (optional)</li>
          <li>Information voluntarily shared during chatbot interaction</li>
        </ul>

        <p className="font-semibold">b) Usage & Interaction Data</p>
        <ul className="list-disc ml-6">
          <li>Quiz responses</li>
          <li>Chat messages</li>
          <li>Preferences and selected subjects</li>
          <li>Time and frequency of usage</li>
          <li>Performance analytics</li>
        </ul>

        <p className="font-semibold">c) Technical Data</p>
        <ul className="list-disc ml-6">
          <li>Device type</li>
          <li>IP address (website users)</li>
          <li>Browser information</li>
        </ul>

        <p className="font-bold">2. How We Use Your Information</p>
        <ul className="list-disc ml-6">
          <li>Delivering quizzes and practice tests</li>
          <li>Personalizing learning experience</li>
          <li>Sending study updates and reminders</li>
          <li>Improving chatbot performance</li>
          <li>Providing customer support</li>
        </ul>
        <p>We do not sell, rent, or trade your data.</p>

        <p className="font-bold">3. Sharing of Data</p>
        <ul className="list-disc ml-6">
          <li>Legal compliance</li>
          <li>WhatsApp Cloud API (Meta)</li>
          <li>Trusted service providers under confidentiality</li>
        </ul>

        <p className="font-bold">4. Data Security</p>
        <p>
          We use secured servers, encrypted communication, and limited access.
          However, no system is 100% secure.
        </p>

        <p className="font-bold">5. Data Retention</p>
        <p>
          Data is retained only as long as necessary. You may request deletion
          anytime.
        </p>

        <p className="font-bold">6. Your Rights</p>
        <ul className="list-disc ml-6">
          <li>Access your data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
          <li>Stop receiving messages</li>
        </ul>

        <p className="font-bold">7. Children’s Privacy</p>
        <p>
          Our services are intended for students of Class 8 to 12. We take extra
          precautions to protect minors.
        </p>

        <p className="font-bold">8. Policy Updates</p>
        <p>
          We may update this policy from time to time. Changes will be posted on
          this page.
        </p>
      </div>

      {/* FOOTER */}
      <div className="bg-yellow-200 mt-16 px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <h1 className="text-xl font-bold">MindVsYou</h1>

          <div>
            <p className="font-bold mb-2">Explore</p>
            <Link to="/record/courses" className="block">Courses</Link>
            <Link to="/record/about" className="block">About</Link>
            <Link to="/record/contact" className="block">Contact</Link>
          </div>

          <div>
            <p className="font-bold mb-2">Follow</p>
            <Link to="/record/courses" className="block">Facebook</Link>
            <Link to="/record/admissionform" className="block">Instagram</Link>
            <Link to="/record/contact" className="block">Twitter</Link>
          </div>

          {/* EMAIL */}
          <div className="max-w-sm">
            <label className="font-bold block mb-2">
              Sign up with your email address to receive news and updates.
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 border border-gray-700 rounded-lg mb-3"
            />
            <Button className="bg-black px-6 py-2">SIGN UP</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
