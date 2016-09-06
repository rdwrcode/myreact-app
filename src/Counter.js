import React from 'react';
import Button from './Button';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>The button was clicked { this.state.clicks } times.</p>
        <Button text="Click me!" onClick={this.increment} />
      </div>
    );
  }
}

export default Counter;
