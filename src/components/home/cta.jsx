import { BsArrowUpRight } from 'react-icons/bs'

const Cta = () => {
  return (
    <div className='bg-black'>
      <div className='m-auto max-w-7xl h-[50vh] flex justify-center items-center flex-col'>
        <p className='text-white font_cormorant text-4xl lg:text-7xl max-w-3xl text-center'>Let's transform your vision to design & code.</p>
        <button className='bg-white flex justify-center items-center font_cormorant text-xl px-5 gap-2 py-2 rounded-md hover:bg-black hover:border hover:border-white'>get in touch  <BsArrowUpRight /></button>
      </div>
    </div>
  )
}

export default Cta