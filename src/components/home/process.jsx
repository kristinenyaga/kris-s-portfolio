
const Process = () => {
  return (
    <div className="m-auto h-[100vh] bg-lightgray flex justify-center items-center text-black">
      <div className="w-[80vw] bg-white flex justify-between">
        <div className="flex flex-col font_poppins text-darkblue max-w-md">
          <p className=" text-4xl font-noto font-light">My Process</p>
          <p className="text-sm ">I have developed a perfect process that involves all stakeholders.</p>
        </div>
        <div className="flex justify-between  items-center font_opensans mt-4  gap-4 m-auto">
          <div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center items-center text-center border p-3">
              <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-xl">01</h3>
              <h4 className="text-2xl font-medium">Research</h4>
              <p className="text-base max-w-sm font-medium sm:px-3 ">Focussed on understanding your business requirements, users and problems.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center border p-3">
              <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-3xl">02</h3>
              <h4 className="text-2xl font-medium">Design</h4>
              <p className="text-base max-w-sm font-medium" >In this stage we work closely to come up with lots of solutions and finalize design.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center border p-3">
              <h3 className="border w-14 h-14 justify-center items-center flex rounded-full text-3xl">03</h3>
              <h4 className="text-2xl font-medium">Development</h4>
              <p className="text-base max-w-sm font-medium sm:px-3">I develop your product  and help you with maintainiance</p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Process