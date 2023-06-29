// import { Link, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from './About';
import Education from './Education';
import Skill from './Skill'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <>
      <Navbar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skill" Component={Skill} />
          <Route path="/education" Component={Education} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
