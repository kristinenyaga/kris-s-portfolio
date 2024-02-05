import { useState } from 'react';
import mylogo from '../../assets/mylogo.svg'
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import transition from '../../utils/transition';
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/about" },
    { title: "My Work", href: "/work" },
    { title: "Contact", href: "/contact" },
    { title: "nyagakristine@gmail.com", href: "/" },
  
];
  
  const toggleMenu = () => {
    setOpen(prev => !prev)
  }
    const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    };
    const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    };
  const navbarVars = {
    initial: {
      opacity: 0,
      y:-200,
      transition: {
        delay:5
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      duration:0.7,
      transition: {
        ease: [0.12, 0, 0.39, 0],
        delay:5
      }
    }
  }
  return (
    <div className='max-w-full font_albertsans'>
        <motion.div
          variants={navbarVars}
          initial="initial"
          animate="animate"
          className='flex  justify-between items-center mt-0.55 lg:px-12'>
        <NavLink
          className='navitem'
            to="/">
          <img src={mylogo} className='w-20' />
        </NavLink>
        <ul className='lg:flex hidden justify-center gap-6 items-center'>
          <li>
            <NavLink className='navitem' exact to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
            >
              home</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/about">about</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/work">work</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/services">services</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/contact">contact</NavLink>
          </li>
        </ul>

        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </motion.div>
      <AnimatePresence>
        {open && 
          (<motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className='fixed z-50  h-[100vh] w-screen top-0 mt-0 left-0 bg-black text-lightgray p-2 origin-top px-5 font_albertsans'>
          <div className='flex h-full flex-col'>
            <div className='flex justify-between'>
              <h1>krisnyaga</h1>
              <p onClick={toggleMenu}>Close</p>
            </div>
            <div className='h-full flex justify-center flex-col'>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 ">
                  {navLinks.map((link, index) => (
                    <div className='overflow-hidden' key={index}>
                      <MobileLink  title={link.title} href={link.href} />
                    </div>
                  ))}
                </motion.div>
            </div>
          </div>
          </motion.div>)
        }

      </AnimatePresence>
    </div>
  )
}

export default Navbar
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileLink = ({title,href}) => {
  return (
    <motion.div
      variants={mobileLinkVars}

      className='text-2xl '>
      <NavLink to={href}>{title}</NavLink>
      
    </motion.div>    
  )
}