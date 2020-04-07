import React, { Component } from "react";

import ParticlesBg from "particles-bg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ParticlesBg color="#ff0000" num={20} type="cobweb" bg={true} />
            <ul className="slides">
              <li>
                {" "}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Welcome!</h1>
                          <h2>
                            I'm Renier, a <span>Data Scientist</span> based in{" "}
                            <span>Cape Town</span>.
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Blog</h1>
                          <h2>
                            I write about <span>statistics</span>,{" "}
                            <span>programming</span> and{" "}
                            <span>machine learning</span>.
                          </h2>
                          <p>
                            <a
                              href="#blog"
                              className="btn btn-primary btn-learn"
                            >
                              Check it out
                              <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Resumé</h1>
                          <h2>
                            You can view my education and work experience here,
                            or download a PDF
                          </h2>
                          <p>
                            <a
                              href="https://drive.google.com/open?id=1zH-C43hGTRxTm6X8uM825voxLcM5U5kO"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-learn"
                            >
                              Download CV <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
