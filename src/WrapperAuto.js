import React from 'react';
import Count from './Count';

class WrapperAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null
    };
    this.inc = this.inc.bind(this);
    this.double = this.double.bind(this);
    this.exit = this.exit.bind(this);
  }
  
  inc() {
    this.setState({counter: 'inc'});
  }

  double() {
    this.setState({counter: 'double'});
  }

  exit() {
    this.setState({counter: null});
  }

  render() {
    if (this.state.counter) {
      return (
        <Count
          counter={this.state.counter}
          onExit={this.exit}
        />
      )
    } else {
      return (
        <div>
          <h2>Pick a Counter</h2>
          <button onClick={this.inc}>Increment</button><br/>
          <button onClick={this.double}>Double</button><br/>
        </div>
      )
    }
  }
}

export default WrapperAuto;
