import { Routes, Route} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Portfolio'
import Home from './components/Home'
import Resume from './components/Resume'
import './App.css'
import React from "react";


function App() {
  return (
      <div className="routesContainer">
        {/* <img className="Background" src={require('./images/new-york-city-in-night.jpg')} alt='NYC Gif' /> */}
        <Routes>
          <Route path="/isaak-react-portfolio/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
  );
}

export default App;
