import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.number, this.props.counter)
      if (this.props.counter === 'double') {
        this.setState({number: this.state.number + this.state.number});        
      } else {
        this.setState({number: this.state.number + 1});
      }
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
      </div>
    )
  }
}

export default Count;
