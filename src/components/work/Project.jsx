import React from 'react'
import { motion } from "framer-motion";


const Project = ({name,description,image}) => {
  return (
    <div className='panel w-[100vw] h-[100vh]'>
      <div className=' flex flex-col-reverse justify-center items-center  max-w-7xl'>
        <div>
          <h1 className='text-6xl'>{name}</h1>
          <p>{description}</p>
        </div>
        <img
          src={image}
          alt={name}
          className='w-1/2 h-1/2'
        />
      </div>
    </div>
  )
}

export default Project