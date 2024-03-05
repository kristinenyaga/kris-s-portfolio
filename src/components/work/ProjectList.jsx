import { useEffect, useRef } from 'react'
import { projectsList,projects } from './projects'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsArrowRight } from 'react-icons/bs'

import './work.css'
const ProjectList = () => {
  const container = useRef()
  const panel = useRef([])
  panel.current = []
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller:container.current
      })

      gsap.utils.toArray(panel.current).forEach((panel) => {
        gsap.to(panel, {
          backgroundPosition: '-100px',
          duration: 5,
          scrollTrigger: {
            trigger: panel,
            start: "100px",
            bottom:"bottom top",
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
    <section ref={container} className='' id="projects">
      {projectsList.map((slide, index) => {
        return (
          <section className='h-[80vh] text-textgray flex justify-center' key={index}>
            <div className='flex flex-col-reverse  lg:flex-row'>
              <div className='lg:w-[35% h-[40vh]'>
                <div className='font_albertsans leading-7 flex flex-col justify-center  h-full px-5 lg:pl-10 lg:max-w-[45rem]'>
                  <h1 className='text-3xl mb-2'>{slide.name}</h1>
                  <p className='text-sm smsm:text-[base] text-textgray md:text-[18px]'>{slide.description}</p>
                  <div className='flex gap-10 max-w-[90%] text-[base] mt-4'>
                    <button className='border-b  hover:border hover:ease-in hover:duration-100 w-[10rem] h-10 border-black text-textgray rounded-sm ' onClick={() => window.open(slide.github, '_blank')}>Github</button>
                    {slide.livelink ? (
                      
                      <button className='border-b hover:border hover:ease-in hover:duration-100 w-[10rem] h-10 border-black text-textgray rounded-sm' onClick={() => window.open(slide.livelink, '_blank')}>link</button>) : ''}

                  </div>
                </div>
              </div>
              
              <div className='lg:w-[65%'>
                <div
                  ref={addToRef}
                  className='mask lg:h-[60vh] h-[40vh] w-screen lg:w-[50vw] mb-10'
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                </div>
                </div>

            </div>

          </section> 
        )
      })}
      <div>
        <section className=' text-textgray flex flex-col  lg:flex-row justify-center mb-40'>
        {projects.map((slide, index) => {
                
          return (
            <section className=' text-textgray flex flex-row justify-center w-[100%] lg:w-[45%]' key={index}>
                <div className='font_albertsans leading-7 flex flex-col justify-center  h-full px-5 lg:pl-10'>
                  <h1 className='text-3xl mb-4'>{slide.name}</h1>
                  <p className='text-sm smsm:text-base text-textgray md:text-[18px]'>{slide.description}</p>
                  <div className='flex gap-10 max-w-[90%] text-sm mt-4 mb-5 '>
                    <button className='border-b  hover:border hover:ease-in hover:duration-100 w-[10rem]  hover:duration-100-black text-textgray rounded-sm ' onClick={() => window.open(slide.github, '_blank')}>Github</button>
                    {slide.livelink ? (
                      <button className='border-b  hover:border hover:ease-in hover:duration-100 w-[10rem] h-10 border-black text-textgray rounded-sm' onClick={() => window.open(slide.livelink, '_blank')}>link</button>) : ''}
                  </div>
                </div>
            </section>
          )
        })}
        </section>
      </div>
    </section>
  )
}

export default ProjectList;

