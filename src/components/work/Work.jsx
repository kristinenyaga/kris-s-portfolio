import "./sass/main.scss";
import {AnimatePresence, LayoutGroup } from "framer-motion";
import Banner from "./Banner";
import Loader from "./Loader";
import ProjectList from './ProjectList';
import './work.css'
const Work = () => {
  return (
    <LayoutGroup>
      <AnimatePresence>
          <>
          <Banner />
          <ProjectList />
          </>
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default Work