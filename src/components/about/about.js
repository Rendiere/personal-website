import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        My background is in Electronics <span>Engineering</span>{" "}
                        and I have worked as a Software Engineer and Data
                        Scientist in various contexts.
                        <br></br>I have experience using statistical modelling
                        and machine learning to extract valuable insights and
                        build useful products from data.
                        <br></br>
                        As much as I revel in autonomy,
                        <strong> collaborating</strong> in a multi-disciplinary
                        team is where I am most useful.
                        <br></br>In both personal and professional projects I
                        tend to zoom in on the details and work{" "}
                        <strong>meticulously</strong>.<br></br>
                        What I love about science and technology is that there
                        is a near endless amount to learn, which makes it easy
                        to stay <strong>curious</strong> and see everything as a
                        learning opportunity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-bulb" />
                      </span>
                      <h3>Engineer</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-group" />
                      </span>
                      <h3>Collaborative</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-diamond" />
                      </span>
                      <h3>Meticulous</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-moon" />
                      </span>
                      <h3>Curious</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="hire">
                      <h2>
                        Looking for a Data Science consultant?
                        <br />
                        If you're reading this, then I've recently completed a
                        project and I'm available again.
                      </h2>
                      <a
                        href="#contact"
                        data-nav-section="contact"
                        rel="noopener noreferrer"
                        className="btn-hire"
                      >
                        Hire me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
