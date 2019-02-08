This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Creating App`

npm install -g create-react-app 
create-react-app react.js          react.js is the folder name
cd react.js
npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `Intergating CSS Framework Bulma`
 cd react.js
 npm install bulma

### `Modify package.json to make sure Bulma works`
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",

### `Create App.sass`
@import '../node_modules/bulma/bulma.sass'
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'

Stop the Server and run the following commands in the folder

npm install --save-dev npm-run-all
npm install node-sass-chokidar --save-dev

### `npm start`




netstat -ano | findstr :3000
taskkill /PID 9424 /F