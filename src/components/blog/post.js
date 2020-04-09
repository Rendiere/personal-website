import React, { Component } from "react";
import Markdown from "react-markdown";

export default class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.postTitle = props.title;

    // Define some Markdown content
    this.postContent = `
    # Your markdown here \n <h1>This won't be translated into HTML</h1>
    `;
  }
  render() {
    return (
      <div>
        <h1>{this.postTitle}</h1>
        <Markdown source={this.postContent}></Markdown>
      </div>
    );
  }
}
