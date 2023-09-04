import React from "react";
import aboutImg from ".//Images/about-me.jpg";
import "../App.css";

function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-sect">
        <img
          src={aboutImg}
          alt="Dipika Jain"
          height="650px"
          className="about-section-image"
        />
      </div>
      <div className="abt-main-div" >
        <div className="about-content">
          <h1 className="about-section-title">About Me</h1>
          <p className="about-section-about-me">
            I'm Dipika Jain, a 3rd-year student from Maharaja Agrasen Institute
            of Technology, Delhi pursuing a B. Tech in Information Technology
            and Engineering(ITE). I'm a front-end web developer, learning and
            practicing DSA in C++ language. I'm looking forward to learning
            Python and exploring the field of data science. I'm a hardworking
            and ambitious individual with a passion for making life simple and
            joyful. I have an upbringing in a joint family and I'm from a
            business family still I want to learn and explore the fields of IT.
            I'm an amateur photographer and love to watch anime in my leisure
            time.
          </p>
        </div>

        <div className="about-content">
          <h1 className="about-section-title">My Education</h1>
          <div className="education-se">
            <div className="education-content">
              <h3>Maharaja Agrasen Institute of Technology </h3>
              <h4>B. Tech, Information Technology and Engineering</h4>
              <p className="edu-year">2021-2025</p>
            </div>
            <div className="education-content">
              <h3>ASN Sr. Sec. School</h3>
              <h4>12th Grade</h4>
              <p className="edu-year">2019-2021</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
