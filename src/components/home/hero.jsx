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
    <div className='relative'>

    <div className="h-[96vh] mx-auto max-w-7xl flex justify-center flex-col sm:p-2 lg:p-4 font_albertsans section">
      <div className='flex justify-between items-center flex-col lg:flex-row gap-5 '>
        <div className=' flex flex-col gap-3 '>
          <div className='text-center text-xl md:text-xl lg:text-left font-light'>
            <p className="pb-5">Hey, I'm Kristine.</p>
            <p className='lg:text-[60px] text-[26px] smsm:text-[30px] smmd:text-[32px] md:text-[35px] xl:text-[70px]'>
            <span className="text-darkblue">UI/UX designer</span> &{' '}
                <span className="text-darkblue">full-stack developer</span>
                {/* I develop outstanding web applications that help your business stand out. */}
          </p>
          </div>
          {/* <p className="text-md p__smallheading flex items-center gap-2">Let's take your brand to new heights <PiArrowSquareOut className='text-black'/></p> */}
          <div className='flex justify-between max-w-md mt-5 items-center'>
            <div className='flex justify-center items-center gap-2  text-xl font-light'>
             reach out <div className='w-14 h-0.5 bg-darkblue hidden sm:block'/>
            </div>
            <div className='border border-textgray p-2 md:pp-2.5 rounded-full  '>
              <FaLinkedinIn  className='text-black'   />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BsWhatsapp  className='text-black' />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BiSolidPhoneCall className="text-black" />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BiLogoGmail className="text-black"/>
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BsTwitter  className="text-black"/>
            </div>
          </div>
        </div>
        <div className=" relative flex items-center justify-center">    
          <img src={minime} className=' circle_container_image' alt="Mini Me" />
          {/* <div className="  absolute top-30 -left-10 w-40 bg-white z-50 h-14 items-center justify-center text-sm text-darkblue ">
          Why compromise on quality when you can have the best?
        </div> */}
          <div className="electron ">
        </div>
      </div>
      </div>
      <div className='flex justify-between bottom-0 mt-10'>
        <div className=''>
          <p className='p__smalltext flex justify-center gap-2 items-center cursor-pointer absolute bottom-10'><span className='border p-2  border-textgray rounded-full text-black'>Hire </span>me<BsArrowRight className='mt-1'/> </p>
        </div>
        <div className='border p-3 rounded-full border-opacity-5 cursor-pointer absolute bottom-10 right-3 '>
          <BsArrowDown/>
        </div>
      </div>
      </div>
    </div>
      
  );
};

export default Hero;
