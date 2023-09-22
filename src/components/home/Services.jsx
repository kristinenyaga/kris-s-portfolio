import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs' 
import { AiOutlineAntDesign } from 'react-icons/ai'
import {TbDeviceMobileCheck} from 'react-icons/tb'
import curve from '../../assets/curve.png'
import coding from '../../assets/coding (1).png'
import Shapes from '../../assets/shapes.svg'
import mobiledevelopment from '../../assets/mobile-development.png' 
import cornerstonepatternsright from '../../assets/cornerstone-patterns-right.svg'
const Services = () => {
  return (
    <div className='m-auto  w-[90vw] mt-28 h-[55vh]  lg:h-[100vh]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-noto font-light text-black flex justify-center items-center gap-2'><div className='w-1.5 h-1.5 rounded-full bg-black' />Services</p>
        <p className='text-3xl font-noto font-thin text-center'>This is what i can do for you</p>

      </div>
     <div className='flex items-center justify-around   mt-10'>
        <div className='max-w-xl'>
          <div className='flex flex-col'>
            <p className='text-4xl text-darkblue font_opensans'>UI/UX design</p>
            <div className='py-8'>
              <p className='font_poppins
              text-base tracking-wide font-light'>Ready to embark on a design adventure with me? <br /> Let's work together to create user-friendly and captivating UI/UX designs for your project. Whether it's a web app, mobile app, I'm here to bring creativity and expertise to your project. Let's chat and start crafting digital wonders that leave your users impressed!  .</p>
            </div>
          </div>
           <button className='bg-darkblue text-white flex justify-center items-center font_cormorant text-base px-5 gap-2 py-2 rounded-md hover:bg-black hover:border hover:border-white hover:text-white'>get in touch  <BsArrowUpRight /></button>
        </div>
        <img src={ cornerstonepatternsright} className=' h-36' />
      </div>
      <div className='flex items-center justify-around'>
        <img src={curve} className=' h-36' />
        <div className='max-w-xl'>
          <div className='flex flex-col'>
            <p className='text-4xl text-darkblue font_opensans'>web/mobile Development</p>
            <div className='py-8'>
              <p className='font_poppins
              text-base tracking-wide font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
            </div>
          </div>
           <button className='text-darkblue border border-darkblue flex justify-center items-center font_cormorant text-base px-5 gap-2 py-2 rounded-md hover:bg-black hover:border hover:border-white hover:text-white'>get in touch  <BsArrowUpRight /></button>
        </div>

      </div>
    </div>
  )
}

export default Services