import { BsArrowUpRight } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

const Services = () => {
  return (
    <div className="m-auto max-w-xs lg:max-w-7xl mt-28 h-[55vh]  lg:h-[100vh]">
      <div className=" flex lg:flex-row justify-between items-center flex-col gap-10">
        <div className="flex flex-col text-center gap-1">
          <p className=" text-4xl font-noto font-light text-black ">Services</p>
          <p className="p__smalltext">This is what I can do for you.</p>
          <p className="text-darkblue font_cormorant group cursor-pointer text-xl mt-2">
            <span className="p-2 px-10 rounded-full border border-darkblue text-darkblue group-hover:bg-darkblue group-hover:text-white transition-all duration-300 ease-in-out">reach</span> out <BsArrowRight className='inline group-hover:scale-100 group-hover:ml-2 ' />
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="border-b border-lightgray md:w-[75vh] w-[90vw]">
            <div className="flex justify-between items-center ">
              <div className="">
                <p className="relative font-noto font-light text-black  text-xl lg:text-2xl ">
                  <p className="inline absolute text-lightgray text-4xl -bottom-3 -z-10">01</p>
                  <span className="ml-4 lg:ml-6 z-5">Web Development</span>
                </p>
              </div>
              <div className="border p-2 rounded-full border-darkblue group cursor-pointer">
                <BsArrowUpRight className='text-darkblue group-hover:rotate-180' />
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="relative font-noto font-light text-black  text-xl lg:text-2xl ">
                  <p className="inline absolute text-lightgray text-4xl -bottom-3 -z-10">02</p>
                  <span className="ml-4 lg:ml-6 z-50">Mobile Development</span>
                </p>
              </div>
              <div className="border p-2 rounded-full border-darkblue group cursor-pointer">
                <BsArrowUpRight className='text-darkblue group-hover:rotate-180' />
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="relative font-noto font-light text-black  text-xl lg:text-2xl ">
                  <p className="inline absolute text-lightgray text-4xl -bottom-3 -z-10">03</p>
                  <span className="ml-4 lg:ml-6 z-50">Mobile Design</span>
                </p>
              </div>
              <div className="border p-2 rounded-full border-darkblue group cursor-pointer">
                <BsArrowUpRight className='text-darkblue group-hover:rotate-180' />
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="relative font-noto font-light text-black  text-xl lg:text-2xl ">
                  <p className="inline absolute text-lightgray text-4xl -bottom-3 -z-10">04</p>
                  <span className="ml-4 lg:ml-6 z-50">Web Design</span>
                </p>
              </div>
              <div className="border p-2 rounded-full border-darkblue group cursor-pointer">
                <BsArrowUpRight className='text-darkblue group-hover:rotate-180' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services