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
      var actionItems = this.props.data.actionItems;
    }

    const actionItemsList = actionItems
      ? Object.entries(actionItems).map((value, index) => {
          return <li>{value[1]}</li>;
        })
      : [];

    return (
      <article
        className="timeline-entry animate-box"
        data-animate-effect="fadeInLeft"
      >
        <div className="timeline-entry-inner">
          <div className={"color-" + this.props.i + " timeline-icon"}>
            <i className="icon-pen2" />
          </div>
          <div className="timeline-label">
            <div className="row">
              <h3 className="col-md-8" style={{ "margin-bottom": "1rem" }}>
                {company}
              </h3>
              <span className="col-md-4 text-right">
                {start_date}-{end_date}
              </span>
            </div>
            <div className="row">
              <h5 className="col-md-12" style={{ "margin-top": 0 }}>
                <em>{title}</em>
              </h5>
            </div>
            <ul>{actionItemsList}</ul>
          </div>
        </div>
      </article>
    );
  }
}
