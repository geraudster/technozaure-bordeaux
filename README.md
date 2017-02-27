# Technozaure Bordeaux website

## Overview

Based on [Web Starter Kit](https://developers.google.com/web/starter-kit) using :

* [Material Design Lite](http://getmdl.io)
* [Sass](http://sass-lang.com/)
* Gulp
* [ESLint](http://eslint.org)
* ...

## Quickstart

### Development

You need npm to resolve dependencies :
```bash
npm install
```

Execute simple http server used to develop :
```bash
gulp serve
```

### Production

Generate production-ready distribution :
```bash
gulp
```

## TZ Bordeaux

Here is the list of steps required to update the site for a new edition :

  1. save the conference response from ZenApp in `zenapp.json` file (go to ZenApp>Conférences in footer menu)
  2. run `gulp import` to transform the ZenApp response into the required `app/assets/devfest.json` file
  3. update the file `app/assets/devfest.json` to correctly set agenda, sessions hours and delete useless sessions
  4. update event date in `app/index.html`
  5. update event details in `app/speakers.html`
  6. update date in `app/scripts/utils.js` (function `getDayLabel`, only needed for `case 1`)
  7. commit

## Web Performance

[Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) of ~1100 (1000 is ideal) and a repeat-visit Speed Index of ~550 thanks to Service Worker precaching. 

## Docs and Recipes

* [File Appendix](https://github.com/google/web-starter-kit/blob/master/docs/file-appendix.md) - What do the different files here do?
* [Using Material Design Lite's Sass](https://github.com/google/web-starter-kit/blob/master/docs/mdl-sass.md) - how to get MDL's Sass working with WSK
* [Deployment guides](https://github.com/google/web-starter-kit/blob/master/docs/deploy.md) - available for Firebase, Google App Engine and other services.
* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Social Login : 

Use https://auth-server.herokuapp.com/#-auth-server as proxy

## License

Apache 2.0  
Copyright 2015 Google Inc
