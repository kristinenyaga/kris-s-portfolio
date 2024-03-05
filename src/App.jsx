import './App.css'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/footer/footer';
import ScrollToTop from './utils/scrollToTop';
import { useState,useEffect } from 'react';
import LoadingScreen from './utils/loadingScreen';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import About from './components/about/About';
import Work from './components/work/Work';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      {isLoading ? (<LoadingScreen />) : (
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </AnimatePresence>
      )}
     
    </Router>
  );
}

export default App;