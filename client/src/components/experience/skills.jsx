import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    const skills = [
      {
        name: "Python",
        level: 75,
        color: "color-1",
      },
      {
        name: "Javascript",
        level: 60,
        color: "color-3",
      },
      {
        name: "SQL",
        level: 50,
        color: "color-2",
      },
      {
        name: "Pandas",
        level: 90,
        color: "color-4",
      },
      {
        name: "Machine Learning",
        level: 85,
        color: "color-6",
      },
      {
        name: "Communication & Presentation",
        level: 90,
        color: "color-7",
      },
    ];

    const skillsItems = Object.entries(skills).map((value, index) => {
      const i = value[0];
      const data = value[1];

      return (
        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div className="progress-wrap">
            <h3>{data.name}</h3>
            <div className="progress">
              <div
                className={"progress-bar " + data.color}
                role="progressbar"
                aria-valuenow={data.level}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: data.level + "%" }}
              >
                <span>{data.level}%</span>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Technical Expertise</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p></p>
              </div>
              {skillsItems}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
