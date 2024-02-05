import React from 'react'
import { useState } from "react";
import "./sass/main.scss";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Banner from "./Banner";
import Loader from "./Loader";
import ProjectList from './ProjectList';
import Footer from '../footer/footer';
import './work.css'
const Work = () => {
  const [loading, setLoading] = useState(true);

  return (
        <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
              <Banner />
              <ProjectList />
              {/* <Footer /> */}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default Work