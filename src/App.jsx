
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Competitive from "./components/Competitive";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingDock from "./components/FloatingDock";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Competitive />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <FloatingDock />
    </>
  );
}

export default App;
