import React, { Component } from "react";
import Skills from "./skills";
import ExperienceSection from "./section";
import experience_data from './experience_data.js'

export default class Experience extends Component {
  render() {

    const work_experience = Object.entries(experience_data).map(
      (value, index) => {
        const i = value[0];
        return <ExperienceSection data={value[1]} i={i}></ExperienceSection>;
      }
    );

    return (
      <div>
        {/* <Skills></Skills> */}
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">
                  Work Experience
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">{work_experience}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
