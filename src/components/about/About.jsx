import { useEffect } from 'react';
import './about.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { servicesList } from './myservices';
import {useNavigate} from 'react-router-dom'
const About = () => {
  const nav=useNavigate()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".comparisonSection").forEach(section => {
    let tl = gsap.timeline({
        lazy: false, 
        duration: 4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section, 
          start: "top 50%", 
          end: () => "+=550",
          scrub: 3, 
        },
    });

    // animate the container one way...
      tl.fromTo(section.querySelector(".afterImage"), { xPercent: -100, x: 0 }, { xPercent: 0 })
      tl.fromTo(section.querySelector(".afterbg"), { xPercent: 100, x: 0 }, { xPercent: 0 }, 0);
    });
    let t = gsap.timeline({
  // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".animation_container",
        start: "top ", 
        end: "+=100", 
        scrub: 3,    
      },
    });
    // insert exactly 3 seconds from the start of the timeline
    t.fromTo(".text", { y: 150, opacity: 0 }, { y: 0, opacity: 1 });
    t.fromTo(".text-2", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
    t.fromTo(".image", { y: 150,opacity:0, }, { y: 0,opacity:1, duration:.2 });
    
    
  })

  return (
    <div className=" text-textgray bg-gray overflow-x-hidden w-full relative  ">
      <section className="comparisonSection bg-black text-lightgray ">
        <div className="comparisonImage beforeImage">
          <div className='inside'>
            <div className="flex flex-col justify-center items-center place-items-center place-content-center font_albertsans">
              <p className="font_bellafaire text-[4rem] sm:text-[6rem] smsm:text-[6.5rem] smmd:text-[8rem] p-4 sm:p-0 lg:p-10 md:text-[8.5rem] lg:text-[9rem] xl:text-[11rem] mt-10 lg:mt-0 ">About <br /> me ^__^</p>
          
            </div> 
            <div className="flex flex-col md:flex-row justify-between lg:px-28 md:mt-20 lg:mt-0 ">
              <div className='flex justify-center items-center place-content-center place-items-center '>
                <p className="font_albertsans lg:max-w-xl max-w-[33em]  text-[14px] mt-10 lg:mt-0 p-2 ">Full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies</p>
              </div>
              <div className='flex justify-center'>
                <p className="flex justify-center items-center w-[8rem] h-[8rem] text-sm border rounded-full  bottom-0 scroll-down">
                scroll down
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="comparisonImage afterImage bg_image">
          <div className='h-[100vh] w-[100vw] bg_image bg-lightgray text-textgray afterbg relative'>
            <div className='inside  flex flex-col justify-center items-center'>

            <div className="flex flex-col ">
              <p className="font_bellafaire text-[5rem] sm:text-[6.4rem] smsm:text-[7.3rem] smmd:text-[9.2rem] p-4 sm:p-0 lg:p-10 md:text-[10rem] lg:text-[12rem] xl:text-[12.5rem] smmd:mt-28 lg:mt-0 mt-20 about_me">About <br /> me :)</p>
          
            </div> 
            <div className="flex flex-col md:flex-row justify-between lg:px-28 w-full ">
              <div className='flex justify-center items-center place-content-center place-items-center '>
                <p className="font_poppins md:max-w-xl max-w-[450px]  text-[14px] p-2 ">Full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies</p>
              </div>
              <div className='flex justify-center'>
                <p className="flex justify-center items-center w-[8rem] h-[8rem] text-sm border rounded-full   border-textgray text-textgray scroll-down bottom-24 " onClick={()=>nav('/contact')}>
                reach out
              </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className="  w-[100vw] mt-28 relative mx-auto ">
        <div className="flex justify-between lg:px-28 lg:mt-40">
          <div className='p-3 max-w-4xl text-[18px] font_albertsans mb-2'>
            <p className=' opacity-70'>About</p>
            <p className='text-4xl text-textgray mb-5'>My life story</p>
            <p className='mb-2 text-base'>Hey, I'm Kristine Nyaga a fullstack and ui/ux designer based in Kenya. I am currently pursuing my Bachelor's degree in Computer Science.</p>
            <p className='text-base'>full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies, I specialize in building user-friendly interfaces and robust backend systems.full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies, I specialize in building user-friendly interfaces and robust backend systems.  </p>
          </div>
          <div className='radial'/>
        </div>
      </div>
      <div className='smsm:h-[70vh] lg:h-[55vh] h-[100vh] w-[100vw] lg:px-28 p-3 font_albertsans animation_container flex flex-col justify-center '>
        <div className='text-[18px]'>
          <p className=' opacity-70'>My Skills</p>
          <p className='text-3xl text-textgray mb-5'>What i can do</p>
        </div>
        <div className='flex justify-between flex-wrap gap-5' >
          {servicesList.map((item, index) => (
            <div key={index} className=''>
              <p className='text-xl '>{item.name}</p>
              <div className='flex gap-2'>
                <img src={item.image} className='h-5 ' />
                <p className='max-w-2xl text-sm md:text-base'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[60vh] w-[100vw] mx-auto mt-20">
        <div className="flex justify-between lg:px-28 px-3 ">
          <div className=' max-w-4xl text-[18px] font_albertsans mb-2'>
            <p className=' opacity-70'>
              what i use
            </p>
            <p className='text-3xl text-textgray mb-2'>Technologies</p>
            <p className='text-base max-w-3xl'>As a full-stack developer and UI/UX designer, I leverage a variety of technologies to bring projects to life. From front-end frameworks like React.js to back-end technologies such as Node.js and Django, I utilize a diverse toolkit to create dynamic applications.</p>
            <div className='flex justify-between  mt-6  text-base'>
              <div>
                <p className='text-[20px]'>Frontend</p>
                <div className='text-[14px] pl-1.5'> 
                  <p>Html</p>
                  <p>Css</p>
                  <p>ReactJs</p>
                  <p>TailwindCSS</p>
                  <p>JavaScript</p>
                </div>

              </div>
              <div>
                <p className='text-[20px]'>Backend</p>
                <div className='text-[14px] pl-1.5'>
                  <p>Ruby on Rails</p>
                  <p>Django</p>
                  <p>NodeJs</p>
                  <p>ExpressJs</p>
                  <p>SQL</p>
                </div>
              </div>
              <div>
                <p className='text-[20px]'>Others</p>
                <div className='text-[14px] pl-1.5'>
                  <p>Figma</p>
                  <p>Redux</p>
                  <p>Docker</p>
                  <p>Git</p>
                </div>
              </div>
            </div>
          </div>
          <div className='radial'/>
        </div>
      </div>

    </div>
  )
}

export default About