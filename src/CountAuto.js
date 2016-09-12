import React from 'react';

class CountAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNumber: 0,
      stepNumber: 1,
      stopNumber: 1,
      number: 0
    };
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  
  reset() {
    this.setState({initialNumber: parseInt(this.props.initialNumber, 10)});
    this.setState({stepNumber: parseInt(this.props.stepNumber, 10)});
    this.setState({stopNumber: parseInt(this.props.stopNumber, 10)});
    
    this.setState({number: this.state.initialNumber});
  }

  start() {
    this.interval = setInterval(() => {
      this.setState({number: this.state.number + this.state.stepNumber});
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
  
  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }
  
  render() {
    return (
      <div>
        <h1>auto: {this.state.number}</h1>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

export default CountAuto;
