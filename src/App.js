import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Experience from './Components/Experience';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
