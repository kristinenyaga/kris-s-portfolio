import projectdummy from '../../assets/projectdummy.png'
import phone from '../../assets/phone.png'
const Projects = () => {
  return (
    <div className="">
      <div className="h-[90vh] m-auto max-w-7xl">
      <div className="flex flex-col justify-center items-center">
        <p className="largeheading font-noto font-light mt-8 text-darkblue">Projects</p>
        <button className="border border-darkblue px-6 py-2 font-cormorant rounded-md text-darkblue hover:bg-darkblue hover:text-white">more projects</button>
      </div>
      <div className="flex flex-col mt-10 gap-6">
          <div className='bg-white w-full border-b border-lightgray '>
            <div className="flex justify-between items-center">
              <div>
                <p className="font_cormorant text-lg font-medium max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="flex gap-5 mt-5">
                  <button className=" font-noto bg-darkblue text-white w-24 py-1.5 rounded-md">view</button>
                  <button className="w-24 border border-darkblue text-darkblue font-noto rounded-md" >github</button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className=" w-72 h-48">
                  <img src={projectdummy} alt="project" className=" h-full w-full object-cover"/>
                </div>
                <div className=" w-20 h-48 rounded-lg">
                  <img src={phone}  className=" h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white w-full border-b border-lightgray '>
            <div className="flex justify-between items-center">
              <div>
                <p className="font_cormorant text-lg font-medium  max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="flex gap-5 mt-5">
                  <button className=" font-noto bg-darkblue text-white w-24 py-1.5 rounded-md">view</button>
                  <button className="w-24 border border-darkblue text-darkblue font-noto rounded-md" >github</button>
                </div>
              </div>
              <div className="flex gap-5">
                <div className=" w-72 h-48">
                  <img src={projectdummy} alt="project" className=" h-full w-full object-cover"/>
                </div>
                <div className=" w-20 h-48 rounded-lg">
                  <img src={phone}  className=" h-full w-full object-cover" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Projects