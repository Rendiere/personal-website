import React, { Component } from "react";

// TODO: Render description as HTML
// TODO: Add company & city

export default class ExperienceSection extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var start_date = this.props.data.dates.start;
      var end_date = this.props.data.dates.end;
      var company = this.props.data.company;
      var city = this.props.data.city;
      var description = this.props.data.description;
    }
    return (
      <article
        className="timeline-entry animate-box"
        data-animate-effect="fadeInLeft"
      >
        <div className="timeline-entry-inner">
          <div className={'color-'+this.props.i+" timeline-icon"}>
            <i className="icon-pen2" />
          </div>
          <div className="timeline-label">
            <h2>
              <a href="#">{title}</a>
              <span>
                {start_date}-{end_date}
              </span>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </article>
    );
  }
}
