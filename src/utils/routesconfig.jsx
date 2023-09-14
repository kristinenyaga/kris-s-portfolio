// routes.js
import { Route, Routes } from 'react-router-dom';
import Contact from '../components/contact/Contact';
import Homepage from '../components/home/Homepage';
import Work from '../components/work/Work';
import Services from '../components/services/Services';
import About from '../components/about/About';

const routes = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work/>} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default routes;
