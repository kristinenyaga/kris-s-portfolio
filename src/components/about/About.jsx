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
              <p className="font_bellafaire text-[3rem] sm:text-[4rem] smsm:text-[5rem] smmd:text-[6rem] p-4 sm:p-0 lg:p-10 md:text-[8rem] lg:text-[9rem] xl:text-[11rem] mt-10 lg:mt-0 ">About <br /> me ^__^</p>
          
            </div> 
            <div className="flex flex-col md:flex-row justify-between lg:px-28 md:mt-20 lg:mt-0 ">
              <div className='flex justify-center items-center place-content-center place-items-center '>
                <p className="font_albertsans lg:max-w-xl max-w-[33em]  text-[14px] mt-10 lg:mt-0 p-2 ">Full-stack developer dedicated to creating long-lasting experiences through web development. With expertise in both frontend and backend technologis</p>
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

  {/* Skills Section */}
  <section className=" w-full px-4 lg:px-28 py-16 bg_image ">
    <p className="text-sm uppercase tracking-wide">Skills</p>
    <h2 className="text-3xl font-semibold mb-8">What I Can Do</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {servicesList.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <img src={item.image} alt={item.name} className="h-6 w-6 mt-1" />
          <div>
            <h3 className="text-xl font-medium mb-1">{item.name}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Technologies Section */}
  <section className="w-full px-4 lg:px-28 py-20 bg_image">
    <p className="text-sm uppercase tracking-wide text-gray-500">What I Use</p>
    <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
    <p className="max-w-3xl text-base leading-relaxed mb-8">I work across the stack to build responsive, high-performance apps. These are the tools I rely on daily:</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Frontend */}
      <div>
        <h4 className="text-lg font-medium mb-2">Frontend</h4>
        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "TailwindCSS"].map((tech) => (
            <span key={tech} className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div>
        <h4 className="text-lg font-medium mb-2">Backend</h4>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "Express", "Django", "Ruby on Rails", "SQL"].map((tech) => (
            <span key={tech} className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-lg font-medium mb-2">Others</h4>
        <div className="flex flex-wrap gap-2">
          {["Figma", "Docker", "Redux", "Git"].map((tool) => (
            <span key={tool} className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">{tool}</span>
          ))}
        </div>
      </div>

    </div>
  </section>

    </div>
  )
}

export default About