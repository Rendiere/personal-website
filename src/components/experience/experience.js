import React, { Component } from "react";
import Skills from "./skills";
import ExperienceSection from "./section";

export default class Experience extends Component {
  render() {
    const experience_data = [
      {
        title: "Data Science Consultant",
        dates: {
          start: "Jan. 2020",
          end: "March 2020"
        },
        company: "FastComm",
        city: "Cape Town",
        description: `Using statistical analysis (regression and hypothesis testing) and
        machine learning, I built multiple data products to showcase the
        value of existing raw datasets collected by FastComm.
        <br>
        My role as consultant was project based. The outcome was deemed a
        success and the core components were put into production.`
      },
      {
        title: "Data Scientist",
        dates: {
          start: "Feb. 2019",
          end: "Aug. 2019"
        },
        company: "JUMO",
        company_link: "www.jumo.world",
        city: "Cape Town",
        description: `Using statistical analysis (regression and hypothesis testing) and
        machine learning, I built multiple data products to showcase the
        value of existing raw datasets collected by FastComm.
        <br>
        My role as consultant was project based. The outcome was deemed a
        success and the core components were put into production.`
      },
      {
        title: "Data Scientist",
        dates: {
          start: "Sept. 2018",
          end: "Dec. 2018"
        },
        company: "Jungle.ai",
        company_link: "www.jungle.ai",
        city: "Lisbon",
        description: `Using statistical analysis (regression and hypothesis testing) and
        machine learning, I built multiple data products to showcase the
        value of existing raw datasets collected by FastComm.
        <br>
        My role as consultant was project based. The outcome was deemed a
        success and the core components were put into production.`
      },
      {
        title: "Data Scientist",
        dates: {
          start: "Dec. 2018",
          end: "July 2018"
        },
        company: "Black Swan",
        company_link: "www.blackswan.com",
        city: "Cape Town",
        description: `Using statistical analysis (regression and hypothesis testing) and
        machine learning, I built multiple data products to showcase the
        value of existing raw datasets collected by FastComm.
        <br>
        My role as consultant was project based. The outcome was deemed a
        success and the core components were put into production.`
      },
      {
        title: "Software Engineer",
        dates: {
          start: "Dec. 2016",
          end: "Nov. 2017"
        },
        company: "Black Swan",
        company_link: "www.blackswan.com",
        city: "Cape Town",
        description: `Using statistical analysis (regression and hypothesis testing) and
        machine learning, I built multiple data products to showcase the
        value of existing raw datasets collected by FastComm.
        <br>
        My role as consultant was project based. The outcome was deemed a
        success and the core components were put into production.`
      }
    ];

    const work_experience = Object.entries(experience_data).map((value, index) => {
      const i = value[0]
      return <ExperienceSection data={value[1]} i={i}></ExperienceSection>;
    });

    return (
      <div>
        <Skills></Skills>
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
