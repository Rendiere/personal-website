import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Blog></Blog>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
