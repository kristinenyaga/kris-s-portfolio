import About from "./about"
import Hero from "./hero"
import Projects from "./projects/projects"
import Services from "./Services"
import Cta from "./cta"

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Cta />
    </div>
  )
}



export default Homepage