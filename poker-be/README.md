Use the application generator tool, express-generator, to quickly create an application skeleton.

You can run the application generator with the npx command (available in Node.js 8.2.0).

```
$ mkdir poker-be
$ cd poker-be
$ npx express-generator
```

Now we have the package.json file, let’s start installing the packages to get our Express js server up.

```
$ yarn install
```

or

```
$ npm install
```

After the completion of package installation, let's run your express app.

```
$ yarn start
```

or

```
$ npm start
```

Now open your browser and hit this url:

[http://localhost:3000/](http://localhost:3000/)

## Application Structure

The generated Express application starts off with four folders.

### bin

The bin folder contains the executable file that starts your app. It starts the server (on port 3000, if no alternative is supplied) and sets up some basic error handling. You don’t really need to worry about this file, because npm start will run it for you.

### public

The public folder is one of the important ones: ​everything​ in this folder is accessible to people connecting to your application. In this folder, you’ll put JavaScript, CSS, images, and other assets that people need when they load your website.

### routes

The routes folder is where you’ll put your router files. The generator creates two files, index.js and users.js, which serve as examples of how to separate out your application’s route configuration.

Usually, you’ll have a different file here for each major route on your website. So you might have files called blog.js, home.js, and/or about.js in this folder.

### views

The views folder is where you have the files used by your templating engine. The generator will configure Express to look in here for a matching view when you call the render method.

Outside of these folders, there’s one file that you should know well.

### app.js

The app.js file is special, because it sets up your Express application and glues all of the different parts together. Let’s walk through what it does. Here’s how the file starts:

```
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
```

These first six lines of the file are required. If you’re new to Node, be sure to read “Understanding module.exports and exports in Node.js”.

```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```

The next two lines of code require the different route files that the Express generator sets up by default: routes and users.

```
var app = express();
```

After that, we create a new app by calling express(). The app variable contains all of the settings and routes for your application. This object glues together your application.

```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
```

Once the app instance is created, the templating engine is set up for rendering views. This is where you’d change the path to your view files if necessary.

After this, you’ll see Express being configured to use middleware. The generator installs several common pieces of middleware that you’re likely to use in a web application:

```
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
```

#### logger.

When you run your app, you might notice that all the routes that are requested are logged to the console. If you want to disable this, you can just comment out this middleware.

#### express.json.

You might notice that there are two lines for parsing the body of incoming HTTP requests. The first line handles when JSON is sent via a POST request and it puts this data in request.body.

#### express.urlencoded.

The second line parses query string data in the URL (e.g. /profile?id=5) and puts this in request.query.

#### cookieParser.

This takes all the cookies the client sends and puts them in request.cookies. It also allows you to modify them before sending them back to the client, by changing response.cookies.

#### express.static.

This middleware serves static assets from your public folder. If you wanted to rename or move the public folder, you can change the path here.
Next up is the routing:

```
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

Here, the example route files that were required are attached to our app. If you need to add additional routes, you’d do it here.

All the code after this is used for error handling. You usually won’t have to modify this code unless you want to change the way Express handles errors. By default, it’s set up to show the error that occurred in the route when you’re in development mode.
