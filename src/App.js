import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Experience from './Components/Experience';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Skills />
      <Experience />

    </div>
  );
}

export default App;
