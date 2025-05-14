import { useEffect, useRef } from 'react'
import { projectsList,projects } from './projects'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
<section className="py-20 px-6 bg-white text-black" id="projects">
  {/* <h2 className="text-4xl font-bold font-sans text-center mb-12">Projects</h2> */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projectsList.map((project, index) => (
      <div key={index} className="bg-gray-100 rounded-lg overflow-hidden transition">
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold font-serif mb-2">{project.name}</h3>
          <p className="text-base text-gray-700 mb-4 font-serif">{truncateText(project.description, 200)}</p>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline">GitHub</a>
            {project.livelink && (
              <a href={project.livelink} target="_blank" rel="noopener noreferrer" className="text-sm underline">Live</a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}

export default ProjectList;

