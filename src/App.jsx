import './App.css'
import Navbar from './components/navbar/navbar'
import router from './utils/routesconfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode='wait'>
      {router} 
      </AnimatePresence>
    </Router>
  );
}

export default App;