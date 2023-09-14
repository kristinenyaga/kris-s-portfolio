import { BsArrowRight } from 'react-icons/bs'
const About = () => {
  return (
<div className='bg-black relative h-[30vh]'>
  <div className='m-auto max-w-7xl flex items-center justify-center h-full'>
    <div className='text-center'>
      <p className='text-white p__smalltext'>who's Kris</p>
      <p className='text-white text-7xl p__smalltext'>just a girl who loves code</p>
      <p className="text-white">
        <span className="p-3 rounded-full border border-white text-white">more about</span> me <BsArrowRight className='inline' />
      </p>
    </div>
  </div>
</div>

  )
}

export default About;
