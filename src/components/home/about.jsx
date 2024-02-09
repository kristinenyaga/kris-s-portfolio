import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <div className='bg-black h-[100vh] text-lightgray font_albertsans'>
      <div className="h-[96vh] mx-auto max-w-7xl flex justify-center flex-col sm:p-2 lg:p-4 font_albertsans section">
        <div className='flex justify-between items-center flex-col lg:flex-row gap-5 '>
          <div className=' flex flex-col gap-3 '>
            <div className=' text-xl md:text-xl lg:text-left font-light'>
              <p className='text-xl opacity-10'>kristine nyaga</p>
              <p className='text-[80px]'>who am i</p>
            </div>
          </div>
          <div className=" relative flex flex-col gap-5 items-center justify-center max-w-3xl text-xl leading-8 ">   
            <p className=''>Crafting beautiful products that leave a lasting impression is a continuous pursuit for me. I am constantly exploring and seeking out new ways to create beauty..</p>
            <p>Through my work, I aim to evoke emotion and inspire those who experience it. Ultimately, my goal is to make a positive impact on the world through the beauty I create</p>
            <button className="text-white  group cursor-pointer">
            <span className="p-2 text-base md:p-3 rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out group-hover:px-8">more about</span> me <BsArrowRight className='inline group-hover:scale-100 group-hover:ml-3 ' />
          </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
