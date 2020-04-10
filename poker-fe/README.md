##### What's Being Used?

- [react](http://facebook.github.io/react/) for managing the presentation logic of application.
- [redux](http://redux.js.org/) for generating and managing state model.
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) for redux middleware
- [redux-router-dom](https://www.npmjs.com/package/react-router-dom) for handling the page routing
- [axios](https://www.npmjs.com/package/axios) for making AJAX calls to a server.
- [bootstrap](https://www.npmjs.com/package/bootstrap) for frontend template
- [node-sass](https://npmjs.org/package/node-sass) for sass support

## Getting Started

In order to get started developing, you'll need to do a few things first.

1. Install all of the `node_modules` required for the package. Depending on the computer's configuration, you may need to prefix this command with a `sudo`.

```
npm install
```

or

```
sudo npm install
```

`yarn` can be used it is already installed

```
yarn install
```

or

```
sudo yarn install
```

2. Create `.env` environment file by making a duplicate of the `.env-example` and remove the `-example`. In the `.env` file, set the `NODE_PATH` to take advantage of Absolute Path Imports without ejecting.

```
NODE_PATH=./src
```

3. Lastly, run the start command to get the project off the ground.

```
npm start
```

or

```
yarn start
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see the app live!

## File Structure

### jsconfig.json

This file has been added to configure the absolute paths in project.

### .eslintrc

This file has been added to configure the linting operations in application.

### build/

This is where application will be compiled. Assets, like images and fonts, should be placed directly within this folder. Also in this folder is a default `index.html` file for serving up the application.

### src/

The client folder houses the client application for project. This is where client-side Javascript components (and their directly accompanying styles) live.
