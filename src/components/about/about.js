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
                        My background is in Engineering, but apparantly Data
                        Scientists are the{" "}
                        <a
                          href="https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century"
                          target="_blank"
                        >
                          sexiest thing since sliced lists
                        </a>
                        , so I'm a happy convert.
                        <br />I enjoy keeping things balanced, which for me
                        means yoga and{" "}
                        <a
                          href="https://soundcloud.com/renthefox"
                          target="_blank"
                        >
                          DJing
                        </a>{" "}
                        as much as geeking out on data science.
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
                      <h3>Electronics Engineer</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-globe-outline" />
                      </span>
                      <h3>Data Scientist</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-data" />
                      </span>
                      <h3>DJ</h3>
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
                      <a href="#contact" className="btn-hire">
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
