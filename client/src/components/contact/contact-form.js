import React, { Component } from "react";
import axios from "axios";

const API_URL = "/api";


export default class ContactForm extends Component {
  state = {
    name: "",
    message:"",
    email: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
      subject: "",
    });
  };

  formSubmit(e) {
    //   Prevents page reload (default action)
    e.preventDefault();

    this.setState({ buttonText: "Sending..." });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    console.log(`Mail API URL: ${API_URL}/mail`);

    axios
      .post(`${API_URL}/mail`, data)
      .then((res) => {
        console.log("Respone: ", res);
        this.setState({ send: true }, this.resetForm());
      })
      .catch((e) => {
        console.log("Message was not sent");
        this.setState({ send: false, buttonText: "Failed" });
      });
  }

  render() {
    return (
      <form onSubmit={(e) => this.formSubmit(e)} action>
        <div className="form-group">
          <textarea
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            class="form-control"
            type="text"
            placeholder="Name"
            value={this.state.name}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => this.setState({ email: e.target.value })}
            id="email"
            name="email"
            class="form-control"
            type="email"
            placeholder="Email"
            value={this.state.email}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => this.setState({ subject: e.target.value })}
            name="subject"
            class="form-control"
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            id="message"
            cols={30}
            rows={7}
            className="form-control"
            placeholder="Message"
            value={this.state.message}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-send-message"
            defaultValue="Send Message"
          >
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
