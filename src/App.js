import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import RecentBlog from "./components/blog/recent-blog";
import Experience from "./components/experience/experience";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Home />
            <About />
            {/* <RecentBlog /> */}
            <Experience></Experience>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
