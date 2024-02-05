import React, { useEffect, useRef } from 'react'
import { projectsList } from './projects'
import Project from './Project'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './work.css'
const ProjectList = () => {
  const container = useRef()
  const panel = useRef()
  panel.current = []
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller:container.current
      })

      gsap.utils.toArray(panel.current).forEach((panel, index) => {
        gsap.to(panel, {
          backgroundPosition: '-100px',
          duration: 5,
          scrollTrigger: {
            trigger: panel,
            toggleActions: "play reverse play reverse",
            ease:[]
          }
        })
      })
    })
    return ()=>ctx.revert()
  })

  console.log(panel.current)

  const addToRef = (el)=>{
    if (el && !panel.current.includes(el)) {
      panel.current.push(el)
    }
  }

  return (
    <section ref={container} className='project_container'>
      {projectsList.map((slide, index) => {
        return (
          <section  className='h-screen text-textgray flex flex-col-reverse lg:flex-row justify-center items-center snap-start'>
            <div className='lg:w-[35%] w-screen h-[40vh]'>
              <div className='font_albertsans leading-7 flex flex-col justify-center  h-full px-5 lg:pl-10'>
                <h1 className='text-3xl mb-2'>{slide.name}</h1>
                <p className='text-sm smsm:text-base text-textgray md:text-[18px]'>{slide.description}</p>
                <div className='flex justify-between max-w-[90%] text-sm '>
                  <button className='border w-[10rem] h-10 border-black text-textgray rounded-sm '>Github</button>
                  <button className='border w-[10rem] h-10 border-black text-textgray rounded-sm '>live link</button>
                </div>
              </div>

            </div>
            <div className='lg:w-[65%] w-screen'>
              <div
                ref={addToRef}
                className='mask lg:h-[60vh] h-[40vh] w-screen lg:w-[60vw] mb-10'
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >

              </div>

            </div>

          </section>
          
        )
      })}

    </section>
  )
}

export default ProjectList;


  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.utils.toArray(".panel").forEach(section => {
  //   let tl = gsap.timeline({
  //     lazy: false, // It sets lazy to false, meaning it initializes immediately.
  //     ease: "power1.out", // Easing function for animation.
  //     duration: 1,
  //       scrollTrigger: {
  //           trigger: section, // The trigger element for the scroll animation.
  //           start: "top center ", // The animation starts when the trigger element is at 50% of the viewport.
  //           end: () => "+=50", // The end point of the animation. The element moves by 550 units.
  //         scrub: 3, // The scrubbing amount for the animation.
  //         snap:1
  //       },
  //   });

  //     tl.fromTo(section.querySelector(".image"), { x: -200, opacity: 0, }, { x: 0, opacity: 1, })
  //     tl.fromTo(section.querySelector(".text"), { y: 150, opacity: 0 }, { y: 0, opacity: 1 })
      
  //   });
  // })