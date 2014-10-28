# Web API HTML-view browser

This is a group project for the INF5750 class.

## Features
This DHIS2 application features a responsive and easy-to-use API browser. Start
exploring and experimenting with the DHIS Web API right now! Read more about the
features in the [features document](docs/FEATURES.md).

## Technologies
This app uses Yeoman for scaffolding, bower for dependencies, grunt for builds
and Angular for the application framework itself. Please read more about these
technologies, frameworks and libraries in the
[architecture document](docs/ARCHITECTURE.md).

## How to install

The process is pretty simple. This guide assumes that you have ``npm``
installed. If you don't please go [here](http://www.npmjs.org) and download it.

First, clone the git repo:

    git clone git@github.com:selbekk/inf5750-group-project.git

Second, install the npm dependencies you need. We use grunt and bower.

    sudo npm install -g grunt-cli grunt bower

Third, install all UI dependencies

    bower install

Lastly, build the project and start a local http server:

    grunt serve

And that's it!
