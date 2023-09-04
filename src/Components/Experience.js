import React from "react";
import experience from "./data/dataExperience";
import { Icon } from "@iconify/react";
function Experience() {
  return (
    <>
      <section id="experience" className="experience-section">
        <div>
          <div className="exp-title">
            <h1>Experience</h1>
          </div>
          <div className="exp-card-group">
            {experience.map((curElem) => {
              const {
                id,
                title,
                type,
                company,
                timePeriod,
                location,
                skill,
                exp,
              } = curElem;
              return (
                <>
                  <div className="exp-card" key={id}>
                    <div className="exp-card-grp">
                      <div className="exp-card-left">{title}</div>
                      <div className="exp-card-type">{type}</div>
                    </div>
                    <div className="exp-card-grp">
                      <div>
                        <Icon
                          icon="heroicons:building-office-2"
                          width="20"
                          height="20"
                        />
                        {company}  &nbsp;&nbsp;&nbsp;&nbsp;
                        <Icon
                          icon="tdesign:location"
                          width="20"
                          height="20"
                        />
                        {location}
                      </div>

                      <div>
                        <Icon icon="uil:calender" width="20" height="20" />
                        {timePeriod}
                      </div>
                    </div>
                    <div className="exp-card-grp">Skills learned: &nbsp; &nbsp; {skill}</div>
                    <div className="exp-card-grp">Experience:&nbsp; &nbsp;{exp}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
