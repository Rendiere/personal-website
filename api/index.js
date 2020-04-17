const cors = require("cors");
const bodyParser = require("body-parser");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  let msg = "Please go away. Nothing to see here...";
  res.status(200).send(msg).end();
});

app.post("/mail", (req, res) => {
  var data = req.body;

  console.log("Received Request");
  console.log("Data:");
  console.log(data);

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

  console.log("Sending mail to me...");

  // Send the message to me
  sgMail.send(msgToMe, (err, info) => {
    if (err.response) {
      console.log("Responded with error");
      console.log("Error");
      console.log(error.response.body);
      res.send(error);
    } else {
      console.log("Successfully sent mail from " + data.email);
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

  console.log(`Sending confirmation mail to ${data.email}...`);
  sgMail.send(msgToThem);
  console.log("Sent!");
});

const PORT = 5000
app.listen(PORT, () => {
  console.log(`We are live on PORT ${PORT}`);
});
