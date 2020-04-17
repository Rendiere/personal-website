import React, { Component } from "react";
import axios from "axios";

const PORT = 5000;
// const REGION_ID='ue';
// const VERSION_ID='20200415t150236';
// const SERVICE_ID='email-api'
// const PROJECT_ID = 'personal-website-274005'
// const API_URL = `https://${VERSION_ID}-dot-${SERVICE_ID}-dot-${PROJECT_ID}.${REGION_ID}.r.appspot.com`;

const API_URL = "https://mail-api-git-dev.renbotha.now.sh/";

export default class ContactForm extends Component {
  state = {
    name: "Piet Pompies",
    message:
      "Hey Renier, saw your website and wanted to get in contact. Give me a call on 0842001899.",
    email: "r.botha91@gmail.com",
    subject: "Getting in contact",
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

    console.log(`${API_URL}:${PORT}/mail`)

    axios
      .post(`${API_URL}:${PORT}/mail`, data)
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
