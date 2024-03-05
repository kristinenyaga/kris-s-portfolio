import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-full bg-black h-[60vh] relative section'>
      <div className='flex flex-col justify-between items-center gap-14'>
        <p className='absolute left-20 md:left-14 top-7 md:top-20 circle font_poppins text-lightgray'>hello</p>
        <div className='flex justify-items-center gap-3 flex-col content-center items-center text-white font_poppins md:pt-28 pt-20'>
        <p className='lg:text-5xl text-3xl md:text:5xl'>Have a project?</p>
        <p className='lg:text-5xl text-3xl'>Lets talk</p>
        </div>
        <div className='text-center flex'>

          <div className='flex justify-between items-center gap-3 pt-10 md:pt-0'>
            <div className='border border-textgray p-2 md:pp-2.5 rounded-full cursor-pointer  '>
              <FaLinkedinIn  className='text-white' onClick={()=>window.open('https://www.linkedin.com/in/christine-nyaga-89a691248','_blank')}   />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BsGithub  className='text-white' onClick={()=>window.open('https://github.com/kristinenyaga?tab=overview&from=2024-03-01&to=2024-03-02','_blank')} />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BiLogoGmail className="text-white" onClick={()=>window.open('mailto:kristinenyaga@gmail.com')}/>
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
                <BsTwitter className="text-white" onClick={ ()=>window.open('https://x.com/Itsher57489061?t=2u95OhLY7XwEA3DunzlnIQ&s=03','_blank')} />
            </div>
          </div>
        </div>
        
        <div className='flex justify-around text-white absolute bottom-10 w-full mb-5 '>
          <div className='hidden md:block'>
            <p className='font_poppins text-base'>kristine nyaga</p>
          </div>
          <div>
            <div className='flex gap-9 justify-between list-none font_poppins'>
              <p>
                <NavLink className='navitem' exact to="/">home</NavLink>
              </p>
              <p>
                <NavLink className='navitem' to="/about">about</NavLink>
              </p>
              <p>
                <NavLink className='navitem' to="/work">work</NavLink>
              </p>
              <p>
                <NavLink className='navitem' to="/contact">contact</NavLink>
              </p>
            </div>
          </div>
        </div>
        <p className='text-white absolute bottom-0 text-sm max-w-[200px] text-center '>&copy; {currentYear} Designed & Built by Kristine Nyaga. All rights reserved</p>
      </div>
    </div>
    
  )
}

export default Footer