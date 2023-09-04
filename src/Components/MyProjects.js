import React, { useState } from 'react'
import project from "./dataProject"
import gitIcon from ".//Images/github.svg"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ".//style/Project.css"
const MyProjects=()=> {
  
  return (
    <>
    <div id='projects'></div>
    <section className='project-section' >
      <div className='portfolio-container'>
        <h2 className='project-section-heading'>My Projects</h2>
      </div>
      <div className='project-section-container'>
      {project.map((curElem) => {
        const{id,image,title,description,techStack,codeLink}=curElem;
        return(
          <div key={id} className="project-section-card">
            <div className="project-section-img">
              <img src={image} alt={title} className='project-section-card-image'/>
            </div>
            <div className="project-section-card-content">
              <h3 className="project-section-title">{title}</h3>
              <p className="project-section-description">{description}</p>
              <p className='project-sec-tech'>Tech Stack:<br/>{techStack}</p>
              <div className='project-section-links'>
                
                <div className='project-section-code'>
                <Icon icon="devicon:github" />
                 <Link to={codeLink}
                 className='project-git-link'>View Code</Link> 
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </section>
    </>
  )
}

export default MyProjects