import React from 'react';
import axios from 'axios';
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailSuccess from './EmailSuccess';


const Home = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const emailSaveHandle = () => {
        const data = {
            email,
        }
        setLoading(true);
        axios.post('http://localhost:5000/record',data).then(()=>{
            setLoading(false);
            navigate('/record/emailsuccess');
        }).catch((error)=>{
            setLoading(false);
            alert('an error occurred, please check email');
            console.log(error);
        })
    }

return (
<div className="background">

   
   
    <nav className="bg-cover bg-center bg-no-repeat h-60" 
     style={{ backgroundImage: "url('/notebook22.jpg')" }}>

    <div className='flex'>
    <div className="mt-40 ml-2">
    <h1 className="text-2xl font-bold text-white">MindVsYou Coaching</h1>
    </div>
    <div className='ml-120 text-white font-bold mt-4'>
    <ul className='flex text-white space-x-2'>
    <li className=""><Link to="/record/courses">Courses</Link></li>
    <li className=""> <Link to="/record/about">About</Link></li>
    <li className=""> <Link to="/record/contact">Contact</Link></li>
    <li className=""> <Link to="/record/policy">Privacy Policy</Link></li>
    <li className=""> <Link to="/record/testimonials">Testimonials</Link></li>
    </ul>
    </div>
    </div>
    
    </nav>
   
<section id="home" className="pt-28 pb-20 bg-linear-to-r from-yellow-200 to-yellow-200 text-black">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-2xl mt-10 text-black font-sans">
WHERE MIND MEETS MASTERY
</h1>
<p className="font-light">
Learn from top educators, access structured courses, and achieve your goals
with personalized mentorship.
</p>
<Button className="bg-black text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-[0_0_30px_#48d3ec]">Explore Courses
</Button>
</div>
<div>
<Image src="\students.jpg" rounded />
</div>
</div>
</section>
<div className="flex">
    <div className="mt-auto ml-8">
        <h1 className="w-3xl text-9xl">Introducing your expert guide</h1>
        <p>Step into a classroom led by visionaries who redefine what it means to educate.
           Our instructors don't just teach; they inspire curiosity, innovation, and the 
           passion for lifelong learning.</p>
    </div>
    <div className="w-3xl h-60 mr-8 mt-8">
        <Image src="\lamp.jpg" />
    </div>
</div>
<div className="mt-auto ml-8">
    <div>
    <h1>FAQs</h1>
    </div>
    <div>
    <h2>-------------------------------------------------------------</h2>
    <h3>Question 1</h3>
    <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a 
        hobby into <br/>something more. Or maybe you have a creative project to share with the world. 
        Whatever it is, the way <br/> you tell your story online can make all the difference. </p>
    <h2>-------------------------------------------------------------</h2>
    </div>
     <div>
    
    <h3>Question 2</h3>
    <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a 
        hobby into <br/>something more. Or maybe you have a creative project to share with the world. 
        Whatever it is, the way <br/>you tell your story online can make all the difference.</p>
    <h2>-------------------------------------------------------------</h2>
    </div>
     <div>
   
    </div>
</div>
    <div className="flex gap-40 mt-14 bg-linear-to-r from-yellow-200 to-yellow-200 h-96">
        <div className="ml-8 mt-14 text-black"><h1>MindVsYou</h1></div>
        <div className="mt-14">
            <ul className=" md:flex space-x-8 text-lg font-sans">
                <li>
                  <li className="hover:text-black-600 font-sans"> Explore </li>
                  <li className="hover:text-blue-600"> <Link to="/courses">Courses</Link></li>
                  <li className="hover:text-blue-600"> <Link to="/admissionform">About</Link></li>
                  <li className="hover:text-blue-600"> <Link to="/contact">Contact</Link></li>
                </li>
            </ul>
        </div>
        <div className="mt-14">
             <ul className=" md:flex space-x-8 text-lg font-sans">
                <li >
                  <li className="hover:text-black-600 font-sans"> Follow Us </li>
                  <li className="hover:text-blue-600"> <Link to="/courses">Facebook</Link></li>
                  <li className="hover:text-blue-600"> <Link to="/admissionform">Instagram</Link></li>
                  <li className="hover:text-blue-600"> <Link to="/contact">Twitter</Link></li>
                </li>
            </ul>
        </div>
        <div className="mt-14  border-0 text-shadow-black font-light flex-col">
            <label className='font-bold'>Sign up with your email address to receive news and updates.</label>
            <input className='w-96 mt-2 px-4 py-2 bg-gray-200 text-black border border-gray-700 rounded-lg
         focus:outline-none focus:ring-2 focus:ring-blue-50' type='text' name='Email' value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
             <div className='mt-2'>
            <Button className="bg-black mb-2 font-extrabold rounded-b-full px-6 py-3 shadow-2xl hover:shadow-white-400" onClick={emailSaveHandle}>SIGN UP </Button>
            </div>
        </div>
    </div>
</div>


)
}
export default Home ;
