import React, { Component } from "react";
import Post from "./post";
import PostCard from "./post-card";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Switch>
            <div id="colorlib-main">
              <Route path="/" exact component={Home}></Route>
              <Route path="/" exact component={About}></Route>
              <Route path="/" exact component={RecentBlog}></Route>
              <Route path="/" exact component={Contact}></Route>
              <Route path="/blog" component={Blog}></Route>
            </div>
          </Switch>
        </div>
      </div>
    );
  }
}
