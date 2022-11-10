import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import NavBar from './components/NavBar/NavBar';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route 
        path='/about'
        element={<About />}
      />
      <Route 
        path='/contact'
        element={<Contact />}
      />
      <Route 
        path='/'
        element={<Home />}
      />
      <Route 
        path='/projects'
        element={<Projects />}
      />
      <Route 
        path='/resume'
        element={<Resume />}
      />
      <Route 
        path='/projects/:url'
        element={<ProjectDetails />}
      />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
