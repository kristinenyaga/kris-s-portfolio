import { BsArrowUpRight } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" h-[70vh] bg-black flex justify-center relative text-white">
      <div className="text-white mt-24 flex flex-col items-center gap-10">
        <p className='font_poppins text-6xl max-w-lg text-center'>Have a project? Let's talk</p>
        <div className='text-center'>
          <p className='font_opensans text-base'>~Reach out via email~</p>
          <p className='font_poppins text-xl flex justify-center items-center gap-2 cursor-pointer text-lightblue hover:scale-105 border-b'>nyagakristine@gmail.com <BsArrowUpRight className='text-base' /> </p>
        </div>
      </div>
      <div className='absolute border-white bottom-5 w-[80vw] border-t'>
        <div className='flex justify-between mt-2'>
          <div>
            <p>kristine nyaga</p>
          </div>
          <div>
            <ul className='flex  justify-center gap-6 items-center'>
              <li>
                <NavLink className='navitem' exact to="/">01.home</NavLink>
              </li>
              <li>
                <NavLink className='navitem' to="/about">02.about</NavLink>
              </li>
              <li>
                <NavLink className='navitem' to="/work">03.work</NavLink>
              </li>
              <li>
                <NavLink className='navitem' to="/services">04.services</NavLink>
              </li>
              <li>
                <NavLink className='navitem' to="/contact">05.contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className='flex justify-between items-center gap-3'>
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
        </div>
        <p className='font_opensans text-sm'>&copy;2023.Built and designed by kristine nyaga.All rights reserved.</p>

      </div>

    </div>
  )
}

export default Footer