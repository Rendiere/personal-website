import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="border js-fullheight"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Renier Botha</a>
            </h1>
            <span className="position">
              <a href="#">Data Scientist</a>
            </span>
          </div>
          {/* Items list */}
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a
                    href="#home"
                    data-nav-section="home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    data-nav-section="about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="experience"
                    data-nav-section="experience"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    data-nav-section="blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    data-nav-section="contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                  {/* <SidebarNavItem to="#contact" name="contact" /> */}
                </li>
              </ul>
            </div>
          </nav>
          {/*  Items list */}
          <div className="colorlib-footer">
            <p>
              <small>
                Made with <i className="icon-heart" aria-hidden="true" />. Based
                on template by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </small>
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon-github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin2" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

function SidebarNavItem(props) {
  return (
    <li data-nav-section="contact">
      <NavLink
        to={props.to}
        className="nav-item"
        exact={props.exact ? true : false}
        activeClassName="active"
      >
        {props.name}
      </NavLink>
    </li>
  );
}
