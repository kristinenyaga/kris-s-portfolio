import About from "./about"
import Hero from "./hero"
// import Process from "./Process"
import Projects from "./projects/projects"
import Services from "./Services"
import Shapes from "./shapes"
import transition from "../../utils/transition"
import Cta from "./cta"
import Footer from "../footer/footer"
import Process from "./Process"
import Myprocess from "./myprocess"
const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      {/* <Process /> */}
      {/* <Myprocess /> */}
      {/* <Process /> */}
      {/* <Shapes /> */}
      <Projects />
      <Cta />
      <Footer />
      
    </div>
  )
}

Homepage.displayName = "Homepage"; // Add this line

export default transition(Homepage);