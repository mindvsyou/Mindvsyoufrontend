import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
const About = () => {
    return (
        <>
         <div className="bg-yellow-200">
            <nav className="flex">
                <div className="ml-6 mt-6">
                    <h1>MindVsYou</h1>
                </div>
                <div className="ml-60"> 
                    <ul className="flex space-x-4 mt-2">
                        <li><Link to="/record/courses" className="text-black">Courses</Link></li>
                        <li><Link to="/record/about" className="text-black">About</Link></li>
                        <li><Link to="/record/policy" className="text-black">Privacy Policy</Link></li>
                        <li><Link to="/record/testimonials" className="text-black">Testimonials</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="flex mt-24">
                <div className="ml-24">
                <p className="ml-4 text-5xl font-medium">Who We Are</p>
                <p>MindvsYou is a modern learning space designed for students of<br/> Class 8 to 12 who want clarity, confidence, and consistency in<br/> their studies</p>  
                <p>We combine personal coaching, AI-powered daily practice,<br/> and simple-to-understand teaching to help students score<br/> higher without stress.</p>  
                <p>For years, we noticed one problem:<br/>
                Students don’t fail because they’re weak. They fail because<br/> they don’t practice the right questions every day.</p>
                <p>So we built MindvsYou to fix exactly that.</p>
                </div>
                <div>
                    <Image src="/bookbundle.jpg" className="w-132 ml-56"/>
                </div>
            </div>
            </div>
            <div className="bg-white flex">
            <div>
                <Image src="/bookbundle2.jpg" className="w-120 h-150 ml-24 mt-14"/>
            </div>
            <div className="mt-14 ml-14">
                <h1>AI + Coaching = Better Results</h1>
                <p>MindvsYou is one of the first coaching centers to introduce an<br/> AI quiz chatbot for daily learning.</p>
                <p>Students receive:</p>
                <p>
                    <ol className="list-disc">
                <li>10 daily questions</li>
                <li>Chapter-wise & topic-wise quizzes</li>
                <li>Instant answers</li>
                <li>Smart tracking</li>
                <li>Practice without books or pressure</li>
                    </ol>
                </p>
                <p>This routine helps them stay consistent and score better.</p>
            </div>
            </div>
            <div className="">
                <div className="14">
                    <h1 className="mt-14">Meet The Founder</h1>
                    <p>Shilpi Singh</p>
                </div>

            </div>
            </>
    )
}
export default About;