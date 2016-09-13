# Create myreact-app exercises 

## setup
This project was bootstrapped with [Create React App v0.3.0](https://github.com/facebookincubator/create-react-app). It provides a great template to start, including componet, styling, test and deployment.

```bash
$npm i -g create-react-app
```

At this version, you will need to install some packages *globally*:

```bash
$npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype
```

Now create the app:

```bash
$create-react-app myreact-app
```

After creation, your project should look like this:

```
my-app/
  README.md
  index.html
  favicon.ico
  node_modules/
  package.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `favicon.ico` is the icon you see in the browser tab;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files. You are ready to go.

## React Compoent

Add two components. One is Counter and the other Button.
Use props and states inside the Counter component.

## Weather Component
Add Weather component.
To get the access to [Open Weather Map](http://openweathermap.org/API), sign in there and get the API key.
So the request is as follows:
```
http://api.openweathermap.org/data/2.5/forecast?
q=New%20York%2C%20USA&APPID=dbe69e56e7ee5f981d76c3e77bbb45c0&units=metric
```

NPM module [xhr](https://github.com/Raynos/xhr) can be found here.

## Plot Component
Add this to the index.html. The forecast is shown in a beatiful graph by Plotly.

```
<script src="https://cdn.plot.ly/plotly-1.8.0.min.js"></script>
```
New component Plot.js is added to the project and Weather component is modified to accommodate the necessary changes.

Pay attention to the usage of lifecycle API of React component in Plot.js.

## Redux
```
$npm i -S redux react-redux
```
This is to introduce Redux for state management. 
* To respond to location chnages, checked both actions.js and reducer.js.
* To respond to the selection on the forecast graph, add more actions in both actions.js and reducer.js.
* Wire up all others
* add redux-thunk middleware
```
npm i -S redux-thunk
```

## immutable.js
```
npm i -S immutable
```

## test with jest
* test pure function such as reducers
* test component
```
$npm i -D react-test-renderer
```
There are still some problems with Weather component while testing with Jest. Need to dive into Jest documents and some examples.

Thanks to Max Stoiber: 
[tutorial](http://academy.plot.ly/react/)
[code](https://github.com/plotly/academy/tree/gh-pages/weather-app)

