import React from 'react'
import { useState } from "react";
import "./sass/main.scss";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Banner from "./Banner";
import Loader from "./Loader";
import ProjectList from './ProjectList';
import Footer from '../footer/footer';
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
              <Footer />
            {/* {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId="main-image-1"
                  transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            )} */}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default Work