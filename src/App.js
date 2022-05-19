import { Routes, Route} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Portfolio'
import Home from './components/Home'
import './App.css'

function App() {
  return (
      <div className="routesContainer">
        <img className="Background" src={require('./images/new-york-city-in-night.jpg')} alt='NYC Gif' />
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="About" component={<About />} />
          <Route path="Projects" component={<Projects />} />
          <Route path="Contact" component={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
