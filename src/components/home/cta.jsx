import { BsArrowUpRight } from 'react-icons/bs'

const Cta = () => {
  return (
    <div className='m-auto flex justify-center items-center'>
      <div className='m-auto max-w-7xl h-[50vh] flex justify-center items-center flex-col'>
        <p className='text-black font_cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl text-center'>Let's transform your vision to design & code.</p>
        <button className='bg-black text-white flex justify-center items-center font_cormorant text-base px-5 gap-2 py-2 rounded-md hover:bg-white hover:border hover:border-black hover:text-black'>get in touch  <BsArrowUpRight /></button>
      </div>
    </div>
  )
}

export default Cta