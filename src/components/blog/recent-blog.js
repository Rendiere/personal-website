import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PostCard from "./post-card";

export default class RecentBlog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">Recent Posts</h2>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <PostCard
                  to="/blog"
                  title="Test Blog"
                  category="Category"
                ></PostCard>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 animate-box">
                <p>
                  <a href="#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
