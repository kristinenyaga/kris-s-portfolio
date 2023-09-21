import { BsArrowUpRight } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'


const Services = () => {
  return (
    <div className="m-auto max-w-6xl lg:max-w-5xl mt-28 h-[55vh]  lg:h-[40vh]">
  <div className=" flex lg:flex-row justify-between items-center flex-col sm:gap-10">
    <div className="flex flex-col">
       <p className=" text-3xl font-noto font-light text-black">Services</p>
          <p className="p__smalltext">This is what I can do for you.</p>
          <p className="text-black mt-5">
        <span className="p-3 px-6 text-white bg-darkblue rounded-full">reach</span> out <BsArrowRight className='inline' />
      </p>

    </div>
    <div className="flex flex-col gap-6">
  <div className="border-b border-lightgray md:w-[75vh] w-screen">
    <div className="flex justify-between items-center ">
      <div className="">
        <p className="relative font_cormorant text-2xl lg:text-3xl">
          <p className="inline absolute text-lightgray lg:text-4xl -bottom-3 -z-10">01</p>
          <span className="ml-3 lg:ml-6 z-50">Web Development</span>
        </p>
      </div>
      <div className="border p-2 rounded-full bg-darkblue border-lightblue">
        <BsArrowUpRight className='text-white'/>
      </div>
    </div>
  </div>
  <div className="border-b border-lightgray">
    <div className="flex justify-between items-center">
      <div className="">
        <p className="relative font_cormorant text-2xl lg:text-3xl">
          <p className="inline absolute text-lightgray lg:text-4xl -bottom-3 -z-10">02</p>
          <span className="ml-3 lg:ml-6 z-50">Mobile Development</span>
        </p>
      </div>
      <div className="border p-2 rounded-full bg-darkblue border-lightblue">
        <BsArrowUpRight className='text-white'/>
      </div>
    </div>
  </div>
  <div className="border-b border-lightgray">
    <div className="flex justify-between items-center">
      <div className="">
        <p className="relative font_cormorant text-2xl lg:text-3xl">
          <p className="inline absolute text-lightgray lg:text-4xl -bottom-3 -z-10">03</p>
          <span className="ml-3 lg:ml-6 z-50">Mobile Design</span>
        </p>
      </div>
      <div className="border p-2 rounded-full bg-darkblue border-lightblue">
        <BsArrowUpRight className='text-white'/>
      </div>
    </div>
  </div>
  <div className="border-b border-lightgray">
    <div className="flex justify-between items-center">
      <div className="">
        <p className="relative font_cormorant text-2xl lg:text-3xl">
          <p className="inline absolute text-lightgray lg:text-4xl -bottom-3 -z-10">04</p>
          <span className="ml-3 lg:ml-6 z-50">Web Design</span>
        </p>
      </div>
      <div className="border p-2 rounded-full bg-darkblue border-lightblue">
        <BsArrowUpRight className='text-white'/>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

  )
}

export default Services