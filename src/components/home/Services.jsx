import { BsArrowUpRight } from 'react-icons/bs' 
import cornerstonepatternsright from '../../assets/cornerstone-patterns-right.svg'
import {useNavigate} from 'react-router-dom'
const Services = () => {
  const nav = useNavigate()
  const navigate = () => {
    nav('/contact')
  }
  return (
    <div className='m-auto w-[90vw] h-[100vh] lg:mt-28 section bg-white panel'>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='md:text-3xl text-2xl text-black flex justify-center items-center gap-2'><div className='w-1.5 h-1.5 rounded-full bg-black' />Services</p>
        <p className='md:text-xl text-[18px] text-graay font-normal text-center'>What i can do for you</p>

      </div>
      <div className='flex flex-col  justify-center mt-10 m-auto max-w-7xl'>

        <div className='flex lg:gap-10 flex-row-reverse items-center justify-between  lg:mt-20'>
          <img src={cornerstonepatternsright} className=' h-36 hidden md:block opacity-90' />
          <div>
            <div className='flex flex-col md:gap-4 gap-1'>
              <p className='md:text-3xl text-2xl text-darkblue mb-1'>Web Development</p>
                <p className='text-[14px] lg:text-base
                  tracking-wide leading-7 max-w-xl mb-1 '>I build fast, responsive, and scalable web applications using modern frameworks and best practices. Whether it&apos;s a full-stack product, I deliver clean, maintainable code.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">React.js</span>
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">Next.js</span>
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">Node.js</span>
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">Express.js</span>
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">MongoDB</span>
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">MySQL</span>
                
              </div>
            </div>
           <button className='text-white bg-darkblue flex justify-center items-center text-[14px] px-5 gap-2 md:py-2 py-1.5 mt-4 rounded-md hover:bg-black hover:border hover:border-white hover:text-white mb-1' onClick={navigate}>get in touch  <BsArrowUpRight /></button>
        </div>
        </div>
        <div className='flex items-center justify-between mt-10 lg:mt-20'>
          <img src={cornerstonepatternsright} className=' h-36 hidden md:block' />
          <div>
            <div className='flex flex-col md:gap-4 gap-1'>
              <p className='md:text-3xl text-2xl text-darkblue mb-1'>UI/UX design</p>
                <p className=' leading-7 text-[14px] lg:text-base
                  tracking-wide  max-w-xl mb-1'>I design interfaces that feel natural and intuitive. From wireframes to polished prototypes, I craft experiences that are user-focused, accessible, and aligned with your brand.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className=" text-gray-700 bg-coolGray-100 text-coolGray-700 text-[14px] lg:text-base px-3 py-1 rounded-full">Figma</span>
              </div>
            </div>
           <button className=' text-white bg-darkblue flex justify-center items-center text-[14px] px-5 gap-2 md:py-2 py-1.5 mt-4 rounded-md hover:bg-black hover:border hover:border-white hover:text-white mb-1' onClick={navigate}>get in touch  <BsArrowUpRight /></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services