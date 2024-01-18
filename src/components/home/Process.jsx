// import designthinking from '../../assets/design-thinking.png'
// import researchanddevelopment from '../../assets/research-and-development.png'
const Process = () => {
  return (
    <div className='h-[100vh] flex flex-col max-w-7xl  m-auto'>
      <div className='flex flex-col justify-center items-center'>
        <p className='font_poppins text-base font-thin'>My Process</p>
        <p className='font_opensans text-4xl max-w-2xl text-center '>I have developed  process that involves all stakeholders.</p>

      </div>
      <div className='flex mt-32 justify-between'>
        <div>
          {/* <img src={researchanddevelopment} /> */}
          <div className='border-y border-lightgray py-6 mt-6 '>
            <p className='font_albertsans text-4xl'>Research</p>
            <p className="text-base  font-medium max-w-sm">Focussed on understanding your business requirements, users and problems.</p>
          </div>
        </div>
        <div>
          {/* <img src={designthinking} /> */}
          <div className='border-y border-lightgray py-6 mt-6 '>
            <p className='font_albertsans text-4xl'>Design</p>
            <p className="text-base  font-medium max-w-sm">In this stage we work closely to come up with lots of solutions and finalize design.</p>
          </div>
        </div>
        <div className=''>
          {/* <img src={layers} className='' /> */}
          <div className='border-y border-lightgray py-6 mt-6 '>
            <p className='font_albertsans text-4xl'>Development</p>
            <p className="text-base  font-medium max-w-sm">I develop your product  and help you with maintainiance</p>
          </div>
        </div>     
      </div>
    </div>
  )
}

export default Process