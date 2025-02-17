import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="text-2xl text-red-300">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
