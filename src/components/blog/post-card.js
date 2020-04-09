import React, { Component } from "react";
import Markdown from "react-markdown";
import { NavLink } from "react-router-dom";

export default class PostCard extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="blog-entry">
        <a href={this.props.to} className="blog-img">
          <img
            src="images/img_bg_3.jpg"
            className="img-responsive"
            alt="post image"
          />
        </a>

        <div className="desc">
          <span>
            <small>Date, Year </small> | <small> {this.props.category} </small>{" "}
            |{" "}
          </span>
          <h3>
            <a href={this.props.to}>this.props.title</a>
          </h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
