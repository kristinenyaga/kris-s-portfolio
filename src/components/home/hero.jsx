import minime from '../../assets/mini_me.svg';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Hero = () => {
  const scrollToPosition = () => {
    const nextSection = document.getElementById('about me'); // You can adjust the selector as per your HTML structure
    
    if (nextSection) {
      // Scroll to the top position of the next section
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
    };
  return (
    <div className='relative'>

    <div className="h-[96vh] mx-auto max-w-7xl flex justify-center flex-col sm:p-2 lg:p-4 font_albertsans section panel">
      <div className='flex justify-between items-center flex-col lg:flex-row gap-5 '>
        <div className=' flex flex-col gap-3 '>
          <div className='text-center text-xl md:text-xl lg:text-left font-light'>
            <p className="pb-5">Hey, I'm Kristine.</p>
            <p className='lg:text-[60px] text-[26px] smsm:text-[30px] smmd:text-[32px] md:text-[35px] xl:text-[70px]'>
            <span className="text-darkblue">UI/UX designer</span> &{' '}
                <span className="text-darkblue">full-stack developer</span>
          </p>
          </div>
          <div className='flex justify-between max-w-sm mt-5 items-center cursor-pointer'>
            <div className='flex justify-center items-center gap-2  text-xl font-light'>
             reach out <div className='w-14 h-0.5 bg-darkblue hidden sm:block'/>
            </div>
            <div className='border border-textgray p-2 md:pp-2.5 rounded-full cursor-pointer  '>
              <FaLinkedinIn  className='text-black' onClick={()=>window.open('https://www.linkedin.com/in/christine-nyaga-89a691248','_blank')}   />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BsGithub  className='text-black' onClick={()=>window.open('https://github.com/kristinenyaga?tab=overview&from=2024-03-01&to=2024-03-02','_blank')} />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BiLogoGmail className="text-black" onClick={()=>window.open('mailto:kristinenyaga@gmail.com')}/>
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
                <BsTwitter className="text-black" onClick={ ()=>window.open('https://x.com/Itsher57489061?t=2u95OhLY7XwEA3DunzlnIQ&s=03','_blank')} />
            </div>
          </div>
        </div>
        <div className=" relative flex items-center justify-center">    
          <img src={minime} className=' z-40 circle_container_image' alt="Mini Me" />
          <div className="electron ">
        </div>
      </div>
      </div>
      <div className='flex justify-between bottom-0 mt-10'>
        <div className=''>
          <p className='p__smalltext flex justify-center gap-2 items-center cursor-pointer absolute bottom-10'><span className='border p-2  border-textgray rounded-full text-black hover:px-4 focus:px-4' onClick={() => window.location.href = 'mailto:kristinenyaga@gmail.com'}>Hire </span>me<BsArrowRight className='mt-1'/> </p>
        </div>
        <div className='border p-3 rounded-full border-opacity-5 cursor-pointer absolute bottom-10 right-3 ' onClick={scrollToPosition}>
          <BsArrowDown/>
        </div>
      </div>
      </div>
    </div>
      
  );
};

export default Hero;
