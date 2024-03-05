import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
const About = () => {
  const nav = useNavigate()
  const navigate = () => {
    nav('/about')
  }
  return (
    <div className='bg-black h-[100vh] text-lightgray font_albertsans panel' id='about me'>
      <div className="h-[96vh] mx-auto max-w-7xl flex justify-center flex-col sm:p-2 lg:p-4 font_albertsans section">
        <div className='flex justify-between items-center flex-col lg:flex-row gap-5 '>
          <div className=' flex flex-col gap-3 '>
            <div className=' text-xl md:text-xl lg:text-left font-light'>
              <p className='text-xl opacity-10'>kristine nyaga</p>
              <p className='text-[80px]'>who am i</p>
            </div>
          </div>

          <div className=" relative flex flex-col gap-5 items-center justify-center max-w-3xl lg:text-[18px] text-base leading-8 ">   
            <p className=''>As a full-stack developer and UI/UX designer, I possess a diverse skill set to create seamless digital experiences.I have expertise in both front-end and back-end technologies, allowing me to craft functional applications. My proficiency spans across various programming languages, frameworks, and databases, empowering me to build dynamic and responsive user interfaces while ensuring smooth functionality. </p>
            <p>My UI/UX design skills enable me to conceptualize, prototype, and design interfaces that prioritize user needs and enhance overall usability. By seamlessly integrating development and design principles, I deliver engaging and user-centric digital solutions.</p>
            <button className="text-white  group cursor-pointer">
            <span className="p-2 text-base md:p-3 rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out group-hover:px-8" onClick={navigate}>more about</span> me <BsArrowRight className='inline group-hover:scale-100 group-hover:ml-3 ' />
          </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
