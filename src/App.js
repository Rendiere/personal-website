import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import RecentBlog from "./components/blog/recent-blog";
import Exprience from "./components/experience/experience";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <Switch>
              <div id="colorlib-main">
                <Route path="/" exact component={Home}></Route>
                <Route path="/" exact component={About}></Route>
                <Route path="/" exact component={Exprience} />
                <Route path="/" exact component={RecentBlog} />
                <Route path="/" exact component={Contact}></Route>
                {/* <Route path="/blog" component={Blog}></Route> */}
              </div>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
