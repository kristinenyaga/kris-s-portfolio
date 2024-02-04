import React from 'react'
import { motion } from "framer-motion";

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
 }

}
const Project = ({name,description,image}) => {
  return (
    <motion.div
      className='font_opensans'
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
      variants={textAnimate}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className='border border-lightgray shadow-md flex justify-center items-center p-12'>
        <motion.div variants={textAnimate}>
          <motion.h1 className='text-6xl'>{name}</motion.h1>
          <motion.p>{description}</motion.p>
        </motion.div>
        <motion.img
          variants={imageAnimate}
          src={image}
          alt={name}
          className='w-1/2 h-1/2'
        />
      </motion.div>
    </motion.div>
  )
}

export default Project