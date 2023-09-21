import minime from '../../assets/mini_me.svg';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="h-[100vh] m-auto max-w-7xl flex flex-col sm:p-2 lg:p-4">
      <p className="lg:text-6xl  font-noto font-light mt-8 text-darkblue opacity-10 sm:text-4xl md:text-5xl text-center mb-5"> 
       creating innovative solutions
      </p>
      <div className='flex justify-between items-center flex-col lg:flex-row '>
        <div className='max-w-2xl flex flex-col gap-5'>
          <p className="p__heading sm:text-center md:text-left">hey, I'm Kristine.</p>
          <p className="font_cormorant font-light text-2xl lg:text-2xl sm:text-center md:text-left lg:max-w-lg ">
            <span className="text-darkblue">UI/UX designer</span> and{' '}
            <span className="text-darkblue">full-stack developer</span>. I develop outstanding web applications that help your business stand out.
          </p>
          {/* <p className="text-md p__smallheading flex items-center gap-2">Let's take your brand to new heights <PiArrowSquareOut className='text-black'/></p> */}
          <div className='flex justify-between max-w-md mt-5 items-center'>
            <div className='flex justify-center items-center gap-2 font_cormorant text-xl'>
              contact me <div className='w-14 h-0.5 bg-darkblue'/>
            </div>
            <div className='border border-black p-2.5  rounded-full'>
              <FaLinkedinIn   />
            </div>
            <div className='border border-black p-2.5  rounded-full'>
              <BsWhatsapp  />
            </div>
            <div className='border border-black p-2.5  rounded-full'>
              <BiSolidPhoneCall  />
            </div>
            <div className='border border-black p-2.5  rounded-full'>
              <BiLogoGmail  />
            </div>
            <div className='border border-black p-2.5  rounded-full'>
              <BsTwitter  />
            </div>
          </div>
        </div>
        <div className="proton proton relative flex items-center justify-center">    
          <img src={minime} className=' circle_container_image' alt="Mini Me" />
          <div className="font_cormorant ml-5 absolute top-30 -left-10 w-48 bg-white z-50 h-20 items-center justify-center text-base font-medium text-darkblue ">
          Why compromise on quality when you can have the best?
        </div>
          <div className="electron ">

        </div>
      </div>
      </div>
      <div className='flex justify-between bottom-0 mt-10'>
        <div className=''>
          <p className='p__smalltext flex justify-center gap-2 items-center cursor-pointer'><span className='border p-2 bg-darkblue border-darkblue rounded-full text-white'>Hire </span>me<BsArrowRight className='mt-1'/> </p>
        </div>
        <div className='border p-3 rounded-full border-opacity-5 cursor-pointer'>
          <BsArrowDown/>
        </div>
   
        
      </div>
      
    </div>
  );
};

export default Hero;
