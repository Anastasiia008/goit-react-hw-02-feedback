import React, { Component } from 'react';

import Notification from './Notification/Notification';

import Statistics from './Statistics/Statistics';

import Feedback from './Feedback/Feedback';

import  Section  from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {

    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div >
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
