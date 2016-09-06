# Create myreact-app exercises 

## setup
This project was bootstrapped with [Create React App v0.3.0](https://github.com/facebookincubator/create-react-app). It provides a great template to start, including componet, styling, test and deployment.

```bash
$npm i -g create-react-app
```

At this version, you will need to install some packages *globally*:

```bash
npm install -g eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype
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

## Compoent

Add two components. One is Counter and the other Button.
Use props and states inside the Counter component.

## Weather
Add Weather component.
To get the access to [Open Weather Map](http://openweathermap.org/API), sign in there and get the API key.
So the request is as follows:
```
http://api.openweathermap.org/data/2.5/forecast?
q=New%20York%2C%20USA&APPID=dbe69e56e7ee5f981d76c3e77bbb45c0&units=metric
```

NPM module [xhr](https://github.com/Raynos/xhr) can be found here.


