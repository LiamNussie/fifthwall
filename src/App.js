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
import ViewMedia from './pages/media/viewMedia/viewMedia';
import ViewProjects from './pages/projects/viewProjects/viewProjects';
import ProjectsP from './pages/projects/projects';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  
  return (
      <div className="App">
        <ToastContainer position="bottom-center" />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:mediaId" element={<ViewMedia />} />
            <Route path="/projects" element={<ProjectsP />} />
            <Route path="projects/:projectId" element={<ViewProjects />} />
          </Routes>
      </div>
  );
}

export default App;
