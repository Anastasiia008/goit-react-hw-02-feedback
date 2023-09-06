import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  onNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  onBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  render() {
    return (
      <div >
        <h3>Please leave feedback</h3>
        <button onClick={this.onGood}>Good</button>
        <button onClick={this.onNeutral}>Neutral</button>
        <button onClick={this.onBad}>Bad</button>
        
        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default App;
