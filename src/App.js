import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import FindMeOn from "./components/FindMeOn";
import Skills from "./components/Skills/Skills";
import { LanguageProvider } from "./Context/LanguageContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Particle must stay outside LanguageProvider: the lang-transition
          wrapper uses transform during transitions, which creates a new
          containing block for position:fixed and causes the particles to
          glitch/slide with the content. */}
      <Particle />
      <LanguageProvider>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <section id="experiences" style={{ minHeight: "50vh", padding: "80px 0" }} />
          <Projects />
          <section id="education" style={{ minHeight: "50vh", padding: "80px 0" }} />
          <FindMeOn />
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
}
// Portfolio TODO list:
// [x] : présentation + CV / Contact Me button(scroll to contact) + animation
// [x] : About
// TODO : Compétences + stack
// TODO : Expériences / clients
// TODO : Projets
// TODO : Formation + (Certifications)
// [x] : Contact Section : CTA + Liens : Mail / LinkedIn / GitHub
export default App;
