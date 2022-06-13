import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import {useEffect} from "react"
import Aos from 'aos';
import "aos/dist/aos.css"
import Expertise from './pages/expertise/expertise';
import Services from './pages/services/services';
import Media from './pages/media/media';
import Career from './pages/career/career';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import ViewMedia from './pages/media/viewMedia/viewMedia';

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/view-media" element={<ViewMedia />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </div>
  );
}

export default App;
