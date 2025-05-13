import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs'
import { motion } from "framer-motion";
import { useState } from 'react';

const container = {
  hidden: { opacity: 0,scale:0, y: 150,delay:1.5},
  visible: {
    delay: 1.5,
    opacity: 1,
    scale: 1,
    y: 0,
    ease:"easeInOut",

 
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      duration:0.4
    }
  }
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    ease:"easeInOut"
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    console.log('sending')
    try {
      const response = await fetch('https://formsubmit.co/ajax/859360aa3bec8ea0610b4b3db60f90c7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className='h-[100vh] bg-white text-textgray font_opensans relative'>
      <div className='flex justify-center h-full'>
        <div className=''>
          <p className='absolute  cursor-pointer -right-16 mt-[450px] md:rotate-90  text-[16px] md:flex justify-center items-center gap-14 sm:bottom-8 md:bottom-[20rem] hidden'>kristinenyaga@gmail.com <div className=' h-24 mt-1 border border-textgray rotate-90'/></p>
          <div className='md:flex md:flex-col  justify-between  items-center  absolute md:left-8 bottom-0 md:bottom-[14rem]  cursor-pointer hover:scale-100  smmd:w-0 gap-8 hidden'>
            <div className='border border-textgray p-2 md:pp-2.5 rounded-full cursor-pointer  '>
              <FaLinkedinIn  className='text-black' onClick={()=>window.open('https://www.linkedin.com/in/christine-nyaga-89a691248','_blank')}   />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BsGithub  className='text-black' onClick={()=>window.open('https://github.com/kristinenyaga?tab=overview&from=2024-03-01&to=2024-03-02','_blank')} />
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
              <BiLogoGmail className="text-black" onClick={()=>window.open('mailto:kristinenyaga@gmail.com')}/>
            </div>
            <div className='border border-textgray  p-2 rounded-full'>
                <BsTwitter className="text-black" onClick={ ()=>window.open('https://x.com/Itsher57489061?t=2u95OhLY7XwEA3DunzlnIQ&s=03','_blank')} />
            </div>
          </div>
          <div>
            <h1 className='md:text-7xl text-3xl border-b border-bordergray text-center md:mt-28'>
              Hey there
            </h1>
            <p className='text-center mt-5 text-base'>
              I&apos;m always open to new opportunities. <br />
              Feel free to contact me.
            </p>
            <p className="block md:hidden mt-10 text-center text-base">
              @ 0792032890 <br />
              or drop me a message below!
            </p>


            <motion.div
              className='mt-10 
              font_opensans'
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              {sent && (
                
                <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>
              )}
              <form onSubmit={handleSubmit}
              >
                <motion.p variants={item} className='text-sm md:text-base'>Name</motion.p>
                
                <input className='w-[90vw] md:w-[50vw] p-1 py-2 rounded-md border border-bordergray bg-white outline-none focus:outline-none focus:border-b focus:border-textgray mb-10 placeholder:text-sm ' placeholder="Enter your name"
                  type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required/>
              <motion.p variants={item} className='text-sm md:text-base'>Email</motion.p>
                <input required className='w-full md:w-[50vw] p-1 py-2 rounded-md border border-bordergray bg-white outline-none focus:outline-none mb-10 focus:border-b focus:border-textgray placeholder:text-sm' placeholder="Enter your email" type="email"
                  name="email"
                value={formData.email}
                onChange={handleChange}
                 />
              <motion.p variants={item} className='text-sm md:text-base'>Message</motion.p>
                <textarea required className='w-full md:w-[50vw] p-1 py-2 rounded-md border border-bordergray bg-white outline-none focus:outline-none h-[20vh] mt-2 focus:border-b focus:border-textgray placeholder:text-sm' placeholder="Example text" type="text"
                  name="message"
                value={formData.message}
                onChange={handleChange}
                />
                <button type="submit" disabled={isSending} className='lg:w-[96%] w-full h-10 border-bordergray border text-base font_opensans mt-5 text-textgray rounded-md hover:bg-black hover:text-white'> {isSending ? 'Sending...' : 'Send'}</button>
                
              </form>

            </motion.div>

          </div>
        </div>         
        </div>
    </div>
    
  )
}

export default Contact