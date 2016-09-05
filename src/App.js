import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initialValue || 'placeholder'
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>what's your name?</h1>
        <input type="text" onChange={this.handleTextInput} value={this.state.name}/>
        <p>{this.props.result}, {this.state.name} !</p>
        <Counter />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  initialValue: React.PropTypes.string
};

App.defaultProps = {
  initialValue: ''
};

export default App;
