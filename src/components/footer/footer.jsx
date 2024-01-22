import { BsArrowUpRight } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='max-w-full bg-black h-[60vh] relative section'>
      <div className='flex flex-col justify-between items-center gap-14'>
        <p className='absolute left-20 md:left-14 top-7 md:top-20 circle font_poppins text-lightgray'>hello</p>
        <div className='flex justify-items-center gap-3 flex-col content-center items-center text-white font_poppins md:pt-28 pt-20'>
        <p className='lg:text-6xl text-4xl md:text:5xl'>Have a project?</p>
        <p className='lg:text-5xl text-3xl'>Lets talk</p>
        </div>
        <div className='text-center flex'>

          <div className='flex justify-between items-center gap-3 pt-10 md:pt-0'>
            <div className='border border-lightgray p-2 rounded-full'>
              <FaLinkedinIn  className='text-white'   />
            </div>
            <div className='border border-lightgray p-2 rounded-full'>
              <BsWhatsapp  className='text-white' />
            </div>
            <div className='border border-lightgray p-2 rounded-full'>
              <BiSolidPhoneCall className="text-white" />
            </div>
            <div className='border border-lightgray p-2 rounded-full'>
              <BiLogoGmail className="text-white"/>
            </div>
            <div className='border border-lightgray p-2 rounded-full'>
              <BsTwitter  className="text-white"/>
            </div>
          </div>
        </div>
        
        <div className='flex justify-around text-white absolute bottom-10 w-full '>
          <div className='hidden md:block'>
            <p className='font_poppins'>kristine nyaga</p>
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
                <NavLink className='navitem' to="/services">services</NavLink>
              </p>
              <p>
                <NavLink className='navitem' to="/contact">contact</NavLink>
              </p>
            </div>
          </div>
        </div>
        <p className='text-white absolute bottom-0'>copyright</p>
      </div>
    </div>
    
  )
}

export default Footer