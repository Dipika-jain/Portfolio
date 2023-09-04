import React from "react";
import HeroSection from "./HeroSection";
import Myskills from "./Myskills";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MyProjects from "./MyProjects";
import './mediaQuery.css'
import "../App.css"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Myskills />
      <MyProjects />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
