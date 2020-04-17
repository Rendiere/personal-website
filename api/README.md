# Contact Form Mail API

This is a simple NodeJS API that handles the contact form submissions on my [personal website](www.rbotha.co.za). 

It uses [Sendgrid](www.sendgrid.com) and Express to do all the heavy lifting.

## Functionality

When a contact form on my website gets submitted, this API does two things:

1. Send me an email with the form information
2. Send a confirmation email to whoever filled in the form.

## Deploying to Google Cloud

Before deploying, add the Sendgrid Web Service API key to `app.yaml`. Then, simply run:

```
gcloud app deploy
```
