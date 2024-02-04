import React from 'react'
import { projectsList } from './projects'
import Project from './Project'

const ProjectList = () => {
  return (
    <div className=''>
      {projectsList.map((project, index) => (
        <div key={index} className={`flex flex-col justify-center items-center h-[100vh]`}>
          <Project name={project.name} description={project.description} image={project.image} />
        </div>
      ))}
    </div>
  )
}

export default ProjectList