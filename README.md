# Web API HTML-view browser

This is a group project for the INF5750 class.

## Features
This DHIS2 application features a responsive and easy-to-use API browser. Start
exploring and experimenting with the DHIS Web API right now! Read more about the
features in the [features document](docs/FEATURES.md).

## Technologies
This app uses [Yeoman](http://yeoman.io) for scaffolding,
[bower](http://bower.io) for dependencies, [grunt](http://gruntjs.com) for
builds and [Angular](http://angularjs.org) for the application framework itself.
Please read more about these technologies, frameworks and libraries in the
[architecture document](docs/ARCHITECTURE.md).

## DHIS2 Web apps
If you're wondering about what makes this a DHIS web app, you might find comfort
in the [DHIS2 Web apps document](docs/DHIS2WEBAPPS.md). Here you'll find a few
lines explaining what makes a web app a DHIS2 installable web app.

## How to install

The process is pretty simple. This guide assumes that you have ``node`` and
``npm`` installed. If you don't please go [here](http://nodejs.org/) and
download it.

First, clone the git repo:

    git clone git@github.com:selbekk/inf5750-group-project.git

Second, install the npm dependencies you need. We use
[grunt](http://gruntjs.com/) and [bower](http://bower.io/).

    sudo npm install -g grunt-cli grunt bower

Third, install all the UI dependencies:

    bower install

Lastly, build the project and start a local http server:

    grunt serve

And that's it! Grunt will open a new browser window with the application running.
