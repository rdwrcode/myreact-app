import React from 'react';

class CounterAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
    this.startCounter = this.startCounter.bind(this);
    this.stopCounter = this.stopCounter.bind(this);
  }
  
  startCounter() {
    if(this.props.initial) {
      this.setState({state: {number: parseInt(this.props.initial, 10)}});
    }
    this.interval = setInterval(() => {
      console.log(this.state.number, this.props.counter)
      if (this.props.counter === 'double') {
        this.setState({number: this.state.number + this.state.number});        
      } else {
        this.setState({number: this.state.number + 1});
      }
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.interval);
  }
/*
  componentDidMount() {
    this.startCounter();
  }
*/  
  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
        <button onClick={this.startCounter}>Start</button>
        <button onClick={this.stopCounter}>Stop</button>
      </div>
    )
  }
}

export default CounterAuto;
