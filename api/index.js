const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  let msg = "Nothing to see here...";
  res.status(200).send(msg).end();
});

app.get("/api", (req, res) => {
  res.status(200).send("Seriously, nothing to see here...");
});

app.get("/api/mail", (req, res) => {
  res.status(200).send("Please go away.");
});

app.post("/api/mail", (req, res) => {
  var data = req.body;

  // console.log("Received Request");
  // console.log("Data:");
  // console.log(data);

  const msgToMe = {
    to: "r.botha91@gmail.com",
    from: "r.botha91@gmail.com",
    subject: "[INQUIRY] - " + data.subject,
    html: `
    <strong>Name:</strong><p>${data.name}</p>
    <strong>Email:</strong><p>${data.email}</p>
    <strong>Message:</strong>
    <br/>
    <p>${data.message}</p>`,
  };

  // console.log("Sending mail to me...");

  // Send the message to me
  sgMail.send(msgToMe, (err, info) => {
    if (err.response) {
      console.log("Responded with error");
      console.log("Error");
      console.log(error.response.body);
      res.send(error);
    } else {
      // console.log("Successfully sent mail from " + data.email);/
      res.send("Success");
    }
  });

  // Also send the mail to the sender
  const msgToThem = {
    to: data.email,
    from: "r.botha91@gmail.com",
    subject: "Automatic Message by Renier Botha",
    html: `
    <div style="line-height: 2rem">
      <h1>Hey there!</h1>
      Thanks for getting in contact ^_^
      <br></br>
      This is just an automatic response to let you know I've received your message. 
      I'll be sure to get back to you ASAP, but if something comes up you can simply reply to this email to contact me directly. 
      <br></br>
      <br></br>
      For reference, here is a copy of what was sent:
      <div style="border: 2rem; padding: 1.5rem; line-height: 1rem;">
        <strong>Name:</strong><p>${data.name}</p>
        <strong>Email:</strong><p>${data.email}</p>
        <strong>Message:</strong>
        <br></br>
        <p>${data.message}</p>
      </div>
    </div>
    `,
  };

  // console.log(`Sending confirmation mail to ${data.email}...`);
  sgMail.send(msgToThem);
  // console.log("Sent!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
