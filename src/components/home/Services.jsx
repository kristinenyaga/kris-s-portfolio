import { BsArrowUpRight } from 'react-icons/bs' 
import cornerstonepatternsright from '../../assets/cornerstone-patterns-right.svg'
import {useNavigate} from 'react-router-dom'
const Services = () => {
  const nav = useNavigate()
  const navigate = () => {
    nav('/contact')
  }
  return (
    <div className='m-auto w-[90vw] lg:mt-28 section font_albertsans bg-white panel'>
      <div className='flex flex-col justify-center items-center'>
        <p className='md:text-3xl text-2xl text-black flex justify-center items-center gap-2'><div className='w-1.5 h-1.5 rounded-full bg-black' />Services</p>
        <p className='md:text-3xl text-2xl font-thin text-center'>What i can do</p>

      </div>
      <div className='flex flex-col  justify-center mx-auto max-w-7xl'>
        <div className='flex items-center justify-between lg:mt-20'>
          <div>
            <div className='flex flex-col gap-4'>
              <p className='md:text-3xl text-2xl text-darkblue '>UI/UX design</p>
                <p className=' leading-7 text-sm lg:text-base
                  tracking-wide  max-w-xl'>Ready to embark on a design adventure with me? <br /> Let's work together to create user-friendly and captivating UI/UX designs for your project. Whether it's a web app, mobile app, I'm here to bring your project to life.</p>
            </div>
           <button className='border border-black text-black flex justify-center items-center text-[14px] px-5 gap-2 md:py-2 py-1.5 mt-4 rounded-md hover:bg-black hover:border hover:border-white hover:text-white' onClick={navigate}>get in touch  <BsArrowUpRight /></button>
        </div>
          <img src={cornerstonepatternsright} className=' h-36 hidden md:block' />
        </div>
        <div className='flex lg:gap-10 flex-row-reverse items-center justify-between lg:mt-20 mt-5'>
          <div>
            <div className='flex flex-col gap-4'>
              <p className='md:text-3xl text-2xl text-darkblue '>web Development</p>
                <p className='text-sm lg:text-base
                  tracking-wide leading-7 max-w-xl'>Ready to embark on a design adventure with me? <br /> Let's work together to create user-friendly and captivating UI/UX designs for your project. Whether it's a web app, mobile app, I'm here to bring creativity to your project.</p>
            </div>
           <button className='border border-black text-black flex justify-center items-center text-[14px] px-5 gap-2 md:py-2 py-1.5 mt-4 rounded-md hover:bg-black hover:border hover:border-white hover:text-white' onClick={navigate}>get in touch  <BsArrowUpRight /></button>
        </div>
          <img src={cornerstonepatternsright} className=' h-36 hidden md:block opacity-90' />
      </div>
      </div>
    </div>
  )
}

export default Services