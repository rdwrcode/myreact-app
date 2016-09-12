import React from 'react';
import CounterAuto from './CounterAuto';
import CountAuto from './CountAuto';
import WrapperAuto from './WrapperAuto';
import Button from './Button';

class CfgCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      initialSet: false,
      initialValue: '',
      stopValue: '',
      stepValue: '',
      count: 0,
      tick: 0,
      counter: 'increment'
    };
    this.handleInitial = this.handleInitial.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.stepCounter = this.stepCounter.bind(this);
    this.stopAutoCounter = this.stopAutoCounter.bind(this);
    this.options = this.options.bind(this);
  }

  handleInitial(evt) {
    this.setState({initialValue: evt.target.value});
  };

  handleStop(evt) {
    this.setState({stopValue: evt.target.value});
  };

  handleStep(evt) {
    this.setState({stepValue: evt.target.value});
  };

  resetCounter() {
    const initial = parseInt(this.state.initialValue, 10);  
    this.setState({count: initial});
  };

  stepCounter() {
    if(!this.state.initialSet) {
      const initial = parseInt(this.state.initialValue, 10);  
      this.setState({count: initial});
      this.setState({initialSet: true});
    } else {
      const stop = parseInt(this.state.stopValue, 10);
      const step = parseInt(this.state.stepValue, 10);
      
      if ((this.state.count + step) >= stop) {
        console.log('stop');
      } else {
        this.setState({count: this.state.count+step});  
      }  
    }
  };

  stopAutoCounter() {
    if(this.state.counter) {
      this.setState({counter: null});
    }
  }

  options(evt) {
    console.log(evt.target.value);
  }

  render() {
    return (
      <div>
      <h1>Counter Configure</h1>
      <div>
        <CounterAuto
          counter={this.state.counter}
          initial={this.initialValue}
        />
      </div>
      <WrapperAuto />
      <div>
        <CountAuto
          initialNumber={this.state.initialValue}
          stepNumber={this.state.stepValue}
          stopNumber={this.state.stopValue}
        />
      </div>
      <p>
        <label>Initial Value: 
          <input
            type="text"
            placeholder={"initial value of counter"} 
            value={this.state.initialValue}
            onChange={this.handleInitial}
          />
        </label>
      </p>
      <p>
        <label>Stop Value: 
          <input
            type="text"
            placeholder={"stop value of counter"} 
            value={this.state.stopValue}
            onChange={this.handleStop}
          />
        </label>
      </p>
      <p>
        <label>Step Value: 
          <input
            type="text"
            placeholder={"step value of counter"} 
            value={this.state.stepValue}
            onChange={this.handleStep}
          />
        </label>
      </p>
      <p>
        count: {this.state.count}
      </p>
      <p>
        <Button text="Reset" onClick={this.resetCounter} />
        <Button text="Step" onClick={this.stepCounter} />
      </p>
      <select onChange={this.options}>
        <option value="up" defaultValue="up">Up</option>
        <option value="down">Down</option>
      </select>
      </div>
    );
  }
}

export default CfgCounter;
