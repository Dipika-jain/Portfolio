import React from "react";
import { Icon } from "@iconify/react";

import "..//App.css";
function Myskills() {
  return (
    <>
      <section id="mySkills" className="skills-section">
        <div className="skill-main">
          <h1>My Tech Stack</h1>
          <p>Technologies I have been working with recently</p>
        </div>
        <div className="skill-icon-grp">
          <div className=" skill-icon-grp1">
            <Icon icon="vscode-icons:file-type-cpp3" width="80" height="80" />
            <Icon icon="skill-icons:html" width="80" height="80" />
            <Icon icon="devicon:css3-wordmark" width="80" height="80" />
            <Icon icon="logos:javascript" width="80" height="80" />
          </div>

          <div className="skill-icon-grp1">
            <Icon icon="devicon:python-wordmark" width="80" height="80" />
            <Icon icon="logos:mysql" width="80" height="80" />
            <Icon icon="skill-icons:react-dark" width="80" height="80" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Myskills;
