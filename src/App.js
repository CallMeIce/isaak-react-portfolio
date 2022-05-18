import { Routes, Route} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Portfolio'
import Home from './components/Home'

function App() {
  return (
      <div className="routesContainer">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
