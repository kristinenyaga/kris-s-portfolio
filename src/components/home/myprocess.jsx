import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import diamond from '../../assets/diamond.png'
const Myprocess = () => {
  return (
    <div className='h-[80vh] bg-black text-white'>
      <div className='max-w-7xl m-auto'>
        <p className='flex items-center gap-1 text-xl font_albertsans pt-10'><div className='w-0.5 h-0.5 bg-white'></div>my process</p>
        <div className='flex justify-between items-center mt-5'>
          <p className='text-7xl max-w-xl font_playfair'>Pushing the best <span className='gradient-text'>outcomes</span></p>
          <button className='border px-10 py-5 rounded-md text-base flex items-center gap-2 hover:border-none group border-lightgray hover:bg-white hover:text-black font_poppins border-opacity-10 bg-darkblue text-white'>book a call<BsArrowUpRight className='group-hover:rotate-45 group-hover:bg-lightgray group-hover:text-black group-hover:rounded-full'/></button>
        </div>
        <div className='flex justify-between items-center mt-20 font_opensans '>
          <div>
            <p className='text-4xl flex font_playfair  font-thin items-center'>01 <img src={ diamond} className='h-5' /></p>
            <p className='text-4xl font_ysabeau'>Research</p>
            <p className='text-base max-w-sm  font-thin'>Focussed on understanding your business requirements, users and problems.</p>
          </div>
          <div>
            <p className='text-4xl flex font_playfair  font-thin items-center'>02<img src={ diamond} className='h-5' /></p>
            <p className='text-4xl font_ysabeau'>Design</p>
            <p className='text-base max-w-md  font-thin'>In this stage we work closely to come up with lots of solutions and finalize design.</p>
          </div>
          <div>
            <p className='text-4xl flex font_playfair  font-thin items-center'>03<img src={ diamond} className='h-5' /></p>
            <p className='text-4xl font_ysabeau'>Development</p>
            <p className='text-base   font-thin max-w-md'>I develop your product  and help you with maintainiance</p>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Myprocess