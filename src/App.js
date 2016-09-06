import React, { Component } from 'react';
import Counter from './Counter';
import Weather from './Weather';
import logo from './logo.svg';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers';

import './App.css';

const store = createStore(mainReducer);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter />
        <Provider store={store}>
          <Weather />
        </Provider>
      </div>
    );
  }
}

export default App;
