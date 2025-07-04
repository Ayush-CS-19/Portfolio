import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import { Hero } from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Tech from "./Components/Tech.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Tech />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default App;
