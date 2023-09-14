import './App.css'
import Hero from './components/home/hero'
import Navbar from './components/navbar/navbar'
import router from './utils/routesconfig';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      {router} {/* Render your routes */}
    </Router>
  );
}

export default App;