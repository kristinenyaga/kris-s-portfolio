import { useEffect,useRef } from 'react';
import minime from '../../assets/mini_me.svg';
import './about.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { servicesList } from './myservices';
const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".comparisonSection").forEach(section => {
    let tl = gsap.timeline({
        lazy: false, // It sets lazy to false, meaning it initializes immediately.
        duration: 3, // Duration of the animation (3 seconds).
        ease: "power1.out", // Easing function for animation.
        scrollTrigger: {
            trigger: section, // The trigger element for the scroll animation.
            start: "top 50%", // The animation starts when the trigger element is at 50% of the viewport.
            end: () => "+=550", // The end point of the animation. The element moves by 550 units.
            scrub: 3, // The scrubbing amount for the animation.
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
        start: "top center", 
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
    <div className=" text-textgray bg-gray overflow-x-hidden w-full relative ">
      <section className="comparisonSection bg-black text-lightgray ">
        <div className="comparisonImage beforeImage">
          <div className='inside'>
            <div className="flex flex-col justify-center items-center place-items-center place-content-center">
              <p className="font_bellafaire text-[5rem] sm:text-[6.4rem] smsm:text-[7.3rem] smmd:text-[9.2rem] p-4 sm:p-0 lg:p-10 md:text-[10rem] lg:text-[12rem] xl:text-[12.5rem] mt-10 lg:mt-0 ">About <br /> me ^__^</p>
          
            </div> 
            <div className="flex flex-col md:flex-row justify-between lg:px-28 md:mt-20 lg:mt-0 ">
              <div className='flex justify-center items-center place-content-center place-items-center '>
                <p className="font_poppins max-w-xl text-[16px] mt-10 lg:mt-0 p-2 ">Full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies</p>
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
          <div className='h-[100vh] w-[100vw] bg-lightgray text-textgray afterbg relative'>
          <div className='inside bg_image'>
            <div className="flex flex-col justify-center items-center place-items-center place-content-center">
              <p className="font_bellafaire text-[5rem] sm:text-[6.4rem] smsm:text-[7.3rem] smmd:text-[9.2rem] p-4 sm:p-0 lg:p-10 md:text-[10rem] lg:text-[12rem] xl:text-[12.5rem] smmd:mt-28 lg:mt-0 mt-52 about_me">About <br /> me :)</p>
          
            </div> 
            <div className="flex flex-col md:flex-row justify-between lg:px-28 ">
              <div className='flex justify-center items-center place-content-center place-items-center '>
                <p className="font_poppins md:max-w-xl max-w-[450px]  text-[16px] p-2 ">Full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies</p>
              </div>
              <div className='flex justify-center'>
                <p className="flex justify-center items-center w-[8rem] h-[8rem] text-sm border rounded-full   border-textgray text-textgray scroll-down bottom-0 ">
                reach out
              </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className=" smsm:h-[70vh] lg:h-[50vh] h-[100vh] w-[100vw] mt-28 relative mx-auto ">
        <div className="flex justify-between lg:px-28 lg:mt-40">
          <div className='p-3 max-w-4xl text-[18px] font_albertsans mb-2'>
            <p className=' opacity-70'>About</p>
            <p className='text-4xl text-textgray mb-5'>My life story</p>
            <p className='mb-2'>full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies, I specialize in building user-friendly interfaces and robust backend systems.</p>
            <p className=''>full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies, I specialize in building user-friendly interfaces and robust backend systems.full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologies, I specialize in building user-friendly interfaces and robust backend systems.  </p>
          </div>
          <div className='radial'/>
        </div>
      </div>
      <div className='smsm:h-[70vh] lg:h-[55vh] h-[100vh] w-[100vw] lg:px-28 p-3 font_albertsans animation_container flex flex-col justify-center '>
        <div className='text-[18px]'>
          <p className=' opacity-70'>My Skills</p>
          <p className='text-4xl text-textgray mb-5'>What i can do</p>
        </div>
        <div className='flex justify-between flex-wrap gap-5' >
          {servicesList.map((item, index) => (
            <div key={index} className=''>
              <p className='text-xl text'>{item.name}</p>
              <div className='flex justify-center items-center gap-2'>
                <img src={item.image} className='h-5 image' />
                <p className='max-w-xl text'>{item.description}</p>
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
            <p className='text-4xl text-textgray mb-2'>Technologies</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
            <div className='flex justify-between  mt-10  text-base'>
              <div>
                <p className='text-[22px]'>Frontend</p>
                <p>Html</p>
                <p>Css</p>
                <p>ReactJs</p>
                <p>TailwindCSS</p>
                <p>JavaScript</p>
              </div>
              <div>
                <p className='text-[22px]'>Backend</p>
                <p>Ruby on Rails</p>
                <p>Django</p>
                <p>NodeJs</p>
                <p>ExpressJs</p>
                <p>SQL</p>
              </div>
              <div>
                <p className='text-[22px]'>Others</p>
                <p>Figma</p>
                <p>Redux</p>
                <p>Docker</p>
                <p>Git</p>
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