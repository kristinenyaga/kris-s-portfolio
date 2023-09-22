
const Process = () => {
  return (
    <div className="m-auto h-[100vh] w-[90vw]">
      <div className="flex justify-center items-center flex-col font_cormorant">
        <p className=" text-4xl font-noto font-light text-black ">My Process</p>
        <p className="lg:text-xl text-base text-center">I have developed a perfect process that involves all stakeholders.</p>

      </div>
      <div className="flex justify-between  items-center font_cormorant mt-4 flex-col lg:flex-row gap-4">
        <div>
          <div className="flex flex-col justify-center items-center text-center font_cormorant">
          <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-3xl text-darkblue">01</h3>
          <h4 className="text-2xl lg:text-3xl font-medium">Research</h4>
          <p className="text-base max-w-sm font-medium sm:px-3 ">Focussed on understanding your business requirements, users and problems.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
           <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-3xl text-darkblue">02</h3>
          <h4 className="text-2xl lg:text-3xl font-medium">Design</h4>
          <p className="text-base max-w-sm font-medium" >In this stage we work closely to come up with lots of solutions and finalize design.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-3xl text-darkblue">03</h3>
          <h4 className="text-2xl lg:text-3xl font-medium">Development</h4>
          <p className="text-base max-w-sm font-medium sm:px-3">I develop your product  and help you with maintainiance</p>
        </div>

        </div>
        

      </div>
    </div>
  )
}

export default Process