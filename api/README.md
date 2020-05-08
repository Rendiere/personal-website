# Contact Form Mail API

This is a simple NodeJS API that handles the contact form submissions on my [personal website](www.rbotha.co.za). 

It uses [Sendgrid](www.sendgrid.com) and Express to do all the heavy lifting.

## Functionality

When a contact form on my website gets submitted, this API does two things:

1. Send me an email with the form information
2. Send a confirmation email to whoever filled in the form.

## Deploying to Google Cloud

Before deploying, create a file called `env_variables.yaml` within this directory, and add the Sendgrid API as follows:

```yaml
# api/env_variables.yaml
env_variables:
    SENDGRID_API_KEY: 'YOUR API KEY'
```

Then, simply run:

```bash
gcloud app deploy api.yaml
```

This should create a new service called `api` on your Google App Engine project. 

**Important**: For this api and the front-end client to communicate, it is necessary to dispath calls to the api under the route `/api`. 

To do this, run :
```
gcloud app deploy dispatch.yaml
``` 

In the root directory of this repo. 