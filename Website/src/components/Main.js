import React from "react";
import Navbar from "./Navbar";
import { Home } from "./Home";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
};

export default Main;
