import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
