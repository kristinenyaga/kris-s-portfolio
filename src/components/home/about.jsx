import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <div className='bg-black lg:h-[40vh] h-[30vh]'>
      <div className='m-auto flex items-center justify-center h-full'>
        <div className='text-center flex flex-col gap-4'>
          <p className='text-white p__smalltext'>who's Kris?</p>
          <p className='text-white lg:text-6xl text-3xl p__smalltext'>just a girl who loves code</p>
          <p className="text-white font_cormorant group cursor-pointer">
            <span className="p-2 md:p-3 rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out">more about</span> me <BsArrowRight className='inline group-hover:scale-100 group-hover:ml-3 ' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
