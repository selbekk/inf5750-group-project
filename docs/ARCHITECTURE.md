# Architecture

This document will provide an overview over the general technical architecture
of our application. We will discuss which technologies we have decided to use,
as well as how these technologies will work together. Lastly, we'll provide you
with a basic interpretation of the application flow.

## Technologies

This section will give a summary and introduction to all the main technologies
used in this application. We won't go too much into detail, but you will be
able to find more information about the technologies chosen.

### Build and scaffolding tools

In order for this application to maintainable in the future, we decided to use
some tools for dependency management (Bower), running build tasks (Grunt) and
scaffolding out our application (Yeoman). Very IT-hipster.

#### Bower
[Bower](http://bower.io/) is a dependency manager for frontend dependencies. It
simplifies dealing with dependencies, with a central dependency file and
automatic downloads. All dependencies are kept in the file ``bower.json``, where
you can update, delete or add new dependencies with a simple command.

We use Bower because maintaining a web app without a dependency manager is a
huge pain in the rear. Also, whenever we need to depend on a new library - like
``underscore``, we can simply run ``bower install underscore --save``.

Bower is in many ways the javascript version of the dependency management part of
Maven or Gradle.

#### Grunt
[Grunt](http://gruntjs.com/) is a task runner for web apps, which is used to
build the project. It's used to minify and concatenate js and css files, as well
as injecting Bower dependencies into the html.

We use Grunt as a build and watch tool, as well as a development server. It
really boosts productivity and ease of development.

Grunt is in many ways the javascript version of the plugin and build modules in
Maven or Gradle.

#### Yeoman
[Yeoman](http://yeoman.io/) is a scaffolding tool for web applications. Given a
generator, Yeoman will set up all the boiler plate code for a modern web app in
a matter of seconds. This saves us valuable time in the startup of a project.

Yeoman is in many ways the javascript version of Maven archetypes.

### Frontend frameworks
There are many great frameworks available for frontend web app development. We
decided to use a few of the hottest right now - **AngularJS** and **Bootstrap 3**.

#### Angular
[Angular](https://angularjs.org/) is a declarative application framework and tool
belt developed and maintained by Google. It provides a very flexible and
workable frame to develop versatile JavaScript applications in. Also, it's
popular.

We decided to use Angular since we all have been curious about this framework,
and wanted to learn more about it. It has a growing community, and pretty good
documentation. It would cover our needs, and works well with RESTful APIs like
the one DHIS has.

#### Bootstrap
[Bootstrap](http://getbootstrap.com/) (or Twitter Bootstrap, as it was formerly
known) is "is the most popular HTML, CSS, and JS framework for developing
responsive, mobile first projects on the web."

With Bootstrap 3's focus on mobile first design, we found this framework a prime
candidate for our UI needs. Responsive design is important for DHIS, and this
application needs to comply. In addition, it's a great framework to work with,
and has a great community and set of resources included.

## Architectural goals, structure and overview

This section will describe how the web app will be structured.

### Goals

The main goals of the architecture chosen was to create a modular, extendable
and maintainable application.

### Structure

The main file structure of the application is as follows:

    /app
        /views
        /styles
            /fonts
        /images
        /scripts
            /controllers
            /factories
            /routes

The ``/app`` folder will contain all of the source code for the application. Note
that since we're using Grunt to create a build for us, the actual code being run
is found in the ``dist/`` folder.

The ``/views`` folder will contain all Angular partials used in the application.
Examples here could be ``frontpage.html``, ``searchBox.html`` or ``single.html``.

The ``/styles`` folder will contain all the styles used in this application. The
files will be separated by concern - so there will be one CSS per partial view,
as well as a basic stylesheet. The ``/styles`` folder will also contain a sub-
folder with the font files needed (if any).

The ``/images`` folder will contain all the images, logos, icons etc needed.

The ``/scripts`` folder will be separated into the different types of Angular
components - i.e. controllers, factories, routes, services, directives etc. Each
folder will contain a number of files, with one component in each.

    TODO: Add image of structure, created with gliffy or something

## Application flow and usage patterns

The application has a pretty simple interface, with only a few views, a few
controllers and a minimal amount of complexity.

We have designed a single page application with two views:
- list endpoints
- show endpoint

### Usage pattern

The typical usage pattern would be something like this

1. User accesses the API browser, with the default view (list endpoints) being
shown.
2. User browses the list, and clicks an endpoint he or she finds interesting.
3. User reads about endpoint, looks at sample response, and clicks a contextual
link, sending him to another "show endpoint" view.

This heavy focus on providing a simple user interface has left us with only two
views, but these two views are both versatile and reusable. If any other usage
patterns are discovered, the application is easily extendible to cater to those
kinds of users as well.

### Application flow

The application flow is structured around the Angular application flow, which is
pretty straight forward.

The ``scripts/main.js`` file will create the application itself, and wire up the
routes. This wiring will provide a coupling between a view and a controller,
which doesn't know about each other at all.

When a request comes in, the router activates the correct controller, which
fills out the ``$scope`` variable and then renders the view with the
information. A controller might use a factory, service or provider to get some
data to show (i.e. an example response from an endpoint), which will be
autowired in by Angular.

The data layer (the factory, service or provider) will then fetch the data from
a remote source. The data will then be returned to the controller (or a view
service if needed), which will then populate the scope. Due to the data binding
provided by Angular, the view is instantly updated.

And that's it for application flow, and architecture in general.
