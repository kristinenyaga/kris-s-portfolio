import { BsArrowUpRight } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'


const Services = () => {
  return (
    <div className="m-auto max-w-7xl mt-20 h-[50vh]">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <h2 className="text-4xl font_cormorant font-normal text-darkblue">Services</h2>
          <p className="p__smalltext">This is what I can do for you.</p>
          <p className="text-black mt-5">
        <span className="p-3 px-6 rounded-full bg-lightblue text-white">reach</span> out <BsArrowRight className='inline' />
      </p>

    </div>
    <div className="flex flex-col gap-14">
      <div className="border-b border-lightgray w-[75vh]">
        <div className="flex justify-between items-center">
              <div className="">
               <p className="relative font_cormorant text-3xl">
                  <p className="inline absolute text-lightgray text-6xl -bottom-5 -z-10">01</p>
                  <span className="ml-6 z-50">Web Development</span>
                </p>

              </div>
              <div className=" border p-2 rounded-full bg-lightblue border-lightblue">
                <BsArrowUpRight className='text-white'/>
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray w-[75vh]">
            <div className="flex justify-between items-center">
              <div className="">
               <p className="relative font_cormorant text-3xl">
                  <p className="inline absolute text-lightgray text-6xl -bottom-5 -z-10">02</p>
                  <span className="ml-6 z-50">Mobile Development</span>
                </p>

              </div>
              <div className=" border p-2 rounded-full bg-lightblue border-lightblue">
                <BsArrowUpRight className='text-white'/>
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray w-[75vh]">
            <div className="flex justify-between items-center">
              <div className="">
               <p className="relative font_cormorant text-3xl">
                  <p className="inline absolute text-lightgray text-6xl -bottom-5 -z-10">03</p>
                  <span className="ml-6 z-50">Mobile Design</span>
                </p>

              </div>
              <div className=" border p-2 rounded-full bg-lightblue border-lightblue">
                <BsArrowUpRight className='text-white'/>
              </div>
            </div>
          </div>
          <div className="border-b border-lightgray w-[75vh]">
            <div className="flex justify-between items-center">
              <div className="">
               <p className="relative font_cormorant text-3xl">
                  <p className="inline absolute text-lightgray text-6xl -bottom-5 -z-10">04</p>
                  <span className="ml-6 z-50">Web Design</span>
                </p>

              </div>
              <div className=" border p-2 rounded-full bg-lightblue border-lightblue">
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