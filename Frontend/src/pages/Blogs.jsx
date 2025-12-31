import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const images = [
    "/MInd vs You  (1)-images-0.jpg",
    "/MInd vs You  (1)-images-1.jpg",
    "/MInd vs You  (1)-images-2.jpg",
    "/MInd vs You  (1)-images-3.jpg",
    "/MInd vs You  (1)-images-4.jpg",
    "/MInd vs You  (1)-images-5.jpg",
    "/MInd vs You  (1)-images-6.jpg",
    "/MInd vs You  (1)-images-7.jpg",
    "/MInd vs You  (1)-images-8.jpg",
    "/MInd vs You  (1)-images-9.jpg",
    "/MInd vs You  (1)-images-10.jpg",
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
    return (
<>
<div className="bg-purple-100">
    <nav
        className="bg-contain bg-center bg-no-repeat min-h-[240px] h-96 pt-8"
        style={{ backgroundImage: "url('/6.png')" }}
      >
        <div className="flex flex-wrap justify-center gap-4 font-semibold text-black text-sm md:text-base">
          <ul className="flex flex-wrap gap-4 mt-6 md:mt-4 text-white font-semibold text-sm md:text-base no-underline">
            <li><Link to="/record/courses" className=" text-white">Courses</Link></li>
            <li><Link to="/record/about" className=" text-white">About</Link></li>
            <li><Link to="/record/contact" className=" text-white">Contact</Link></li>
            <li><Link to="/record/policy" className=" text-white">Privacy Policy</Link></li>
            <li><Link to="/record/chatbot" className=" text-white">Chatbot</Link></li>
          </ul>
        </div>
      </nav>
      <div className="">
        <p className="ml-6 font-medium">
            Every child learns differently.<br/>

            But our education system rarely does.<br/>

            Introducing MindvsYou for you all!!<br/>
 
            A WhatsApp-integrated AI tool, MindvsYou, brings the change, with personalised levels, stress-free progression, and clarity for parents & teachers.<br/>

            👉 Check out the carousel to understand the full journey.<br/>
        </p>
      </div>
       <div className="max-w-6xl mx-auto px-12 mt-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[450px] md:h-[550px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
</div>
</>
    )
}
export default Blogs;