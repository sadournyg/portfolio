import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="text-2xl text-red-300">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
