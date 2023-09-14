import About from "./about"
import Hero from "./hero"
import Process from "./process"
import Projects from "./projects"
import Services from "./services"
import Shapes from "./shapes"

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Process />
      <Shapes />
      <Projects />
      
    </div>
  )
}

export default Homepage