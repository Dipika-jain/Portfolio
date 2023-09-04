import React from 'react'
import photo from "./Images/Hero-img2.png"
import Navbar from './Navbar'
import "../App.css"
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <>
    
      <section id="heroSection" className=' container hero-section'>
        <div className='hero-section-content-box'>
          <div className='hero-section-content'>
            <p className='section-title'> Hey, I'm Dipika Jain</p>
            <h1 className='hero-section-title'><span className='hero-section-title-color'>Frontend Web </span>{" "}<br />Developer</h1>

            <p className='hero-section-description'>
              A front-end developer who loves weaving intricate code. Currently acing Data Structures and Algorithms in C++, while also
              exploring the wonders of Data Science. My passion for problem-solving, paired with a dash of creativity, fuels my journey.
              Eager to embrace new challenges and learn relentlessly. Let's shape innovation together
            </p>
          </div>
          <button className='btn btn-primary'>
            <Link 
            to='footer'>Get in Touch</Link>
          </button>
        </div>
        <div className='hero-section-img'>
          <img src={photo} alt="Dipika Jain" />
        </div>
      </section>
    </>
  )
}

export default HeroSection