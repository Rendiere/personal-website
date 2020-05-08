# My personal website

This contains the front-end for my personal website - [www.rbotha.co.za](www.rbotha.co.za).

The site is basically the components of [this template](https://colorlib.com/preview/#jackson) converted to React and adding a few things. I was inspired by [this blog post](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/)


## Deploying

This app can be deployed to Google Cloud App Engine by running
```
gcloud app deploy client.yaml
```

Which creates the `default` service on a Google App Engine project. 

**Important**: Be sure to run `npm run build` before deploying. This creates a `build` folder in this directory, which is what is being served in production. If that doesn't exist, or is not updated, the live website will not reflect changes locally. 