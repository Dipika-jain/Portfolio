import React from 'react'
import logo from "./Images/logo.png"
import { Link } from "react-scroll";
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <footer className='footer-container' id='footer'>
      <div className='footer-link-container'>
        <div>
          <img src={logo} alt="Dipika Jain" />
        </div>
        <div className='footer-items'>
        <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            
          <li>
            <Link
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="text-md"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="text-md"
            >
              Skills
            </Link>
          </li>
          <li>
          <Link
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="text-md"
            >
              Project
            </Link>
          </li>
          <li>
          <Link
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience"
              className="text-md"
            >
              Experience
            </Link>
          </li>
          
          </ul>
        </div>
        <div className='footer-social-icon'>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/dipika-jain-34160519b/" target="_blank"><Icon className='footer-icon' icon="skill-icons:linkedin"  /></a>
            </li>
            <li>
              <a href='https://github.com/Dipika-jain' target="_blank"><Icon className='footer-icon' icon="skill-icons:github-light" /></a>
            </li>
            <li>
              <a href='https://leetcode.com/Dipika_Jain/' target="_blank"><Icon className='footer-icon'icon="simple-icons:leetcode" /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer