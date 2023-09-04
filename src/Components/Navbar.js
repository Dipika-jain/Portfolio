
import React, { useState, useEffect } from "react";
import logo from "./Images/logo.png";
import { Link } from "react-scroll";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-scroll";
function Navbar() {
  //navActive-represents whether the mobile navigation menu is active or not
  const [navActive, setNavActive] = useState(false);

  //when hamburger menu is clicked toggleNav toggles the value of navActive
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  //it sets navActive to false, when mobile menu is closed
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <img src={logo} alt="Dipika Jain" />
        </div>
        <a
          className={`nav-hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
          <span className="nav-hamburger-line"></span>
        </a>
        <div className={`navbar-items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar-content"
              >
                Home
              </Link>
            </li>
            
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar-content"
            >
              Skills
            </Link>
          </li>
          <li>
          <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="navbar-content"
            >
              Project
            </Link>
          </li>
          <li>
          <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience"
              className="navbar-content"
            >
              Experience
            </Link>
          </li>
          
          </ul>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
