import { BsArrowRight } from 'react-icons/bs';

const About = () => {
  return (
    <div className='bg-black lg:h-[40vh] h-[30vh]'>
      <div className='m-auto flex items-center justify-center h-full'>
        <div className='text-center flex flex-col gap-4'>
          <p className='text-white p__smalltext'>who's Kris?</p>
          <p className='text-white lg:text-7xl text-4xl p__smalltext'>just a girl who loves code</p>
          <p className="text-white">
            <span className="p-3 rounded-full border border-white text-white">more about</span> me <BsArrowRight className='inline' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
