import { BsArrowUpRight } from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const Cta = () => {
  const nav = useNavigate()
  const navigate = () => {
    nav('/contact')
  }
  return (
    <div className='m-auto flex justify-center items-center'>
      <div className='m-auto max-w-7xl h-[50vh] flex justify-center items-center flex-col'>
        <p className='text-black font_albertsans text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-3xl text-center'>Transforming vision into design & code.</p>
        <button className='bg-black text-white flex justify-center items-center font_albertsans text-sm md:text-base px-5 gap-2 py-2 rounded-md hover:bg-white hover:border hover:border-black hover:text-black' onClick={navigate}>get in touch  <BsArrowUpRight /></button>
      </div>
    </div>
  )
}

export default Cta