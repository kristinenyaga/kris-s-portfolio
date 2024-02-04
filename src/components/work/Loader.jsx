import React from "react";
import Image from "./Image";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  const container = {
    show: {
      transition: {
      staggerChildren:.8,
      }
    }
  }
  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0, 0.2, 1],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 900,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
      },
    },
  };
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.4, 0, 0.2, 1],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: 900,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
      },
    },
  };
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <img
            src={`/images/image-2.jpg`}
            alt="random alt"
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />

      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id,variants }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
