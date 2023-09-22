import About from "./about"
import Hero from "./hero"
import Process from "./process"
import Projects from "./projects"
import Services from "./Services"
import Shapes from "./shapes"
import transition from "../../utils/transition"
import Cta from "./cta"
import Footer from "../footer/footer"
const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Process />
      {/* <Shapes /> */}
      {/* <Projects /> */}
      <Cta />
      <Footer />
      
    </div>
  )
}

Homepage.displayName = "Homepage"; // Add this line

export default transition(Homepage);