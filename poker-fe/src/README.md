`index.js` is the JavaScript entry point.

`index.css` The CSS file corresponding to index.js.

`App.css` This is the CSS file corresponding to App Component

`App.jsx` This is the file for App Component. App Component is the main component in React which acts as a container of all routes/pages. Whenever, any user hits any URL in React app, the app.jsx finds the relevent URL in `Switch` and renders the relevant page components. All of the page components are present in `pages` directory.

`pages` directory contains all the pages of react app. These pages renders through the `Switch` statement of react-router-dom which is present in `App.jsx`

`store` directory contains the configurations related to `redux` store.
