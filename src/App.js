import React, { Component } from 'react';
import Counter from './Counter';
import Weather from './Weather';
import CfgCounter from './CfgCounter';

import logo from './logo.svg';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers';

import thunkMiddleware from 'redux-thunk';

import './App.css';

const store = createStore(
  mainReducer, 
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter />
        <CfgCounter />
        <Provider store={store}>
          <Weather />
        </Provider>
      </div>
    );
  }
}

export default App;
