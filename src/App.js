import React, { Component } from "react";
import {
  Statistics,
  Feedback,
  Section,
  Notification,
} from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section>
          <Feedback
            options={{ good: "Good", neutral: "Neutral", bad: "Bad" }}
            onLeaveFeedback={this.incrementGood}
          />
        </Section>

        {total > 0 ? (
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
