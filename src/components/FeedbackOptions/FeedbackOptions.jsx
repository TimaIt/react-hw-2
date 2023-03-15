import React from "react";
import "./Option.css";

const Feedback = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
    <div className="feedback-box">
      <h2 className="feedback-title">Please leave feedback</h2>
      {optionNames.map((option) => (
        <button
          className="option-btn"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistic-box">
      <h2 className="statistic-title">Statistics</h2>
      <p className="statistic-text">Good: {good}</p>
      <hr />
      <p className="statistic-text">Neutral: {neutral}</p>
      <hr />
      <p className="statistic-text">Bad: {bad}</p>
      <hr />
      <p className="statistic-text">Total: {total}</p>
      <hr />
      <p className="statistic-text">Positive feedback: {positivePercentage}%</p>
      <hr />
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const Notification = () => {
  return <p className="notifation-text">There is no feedback</p>;
};

export { Statistics, Feedback, Section, Notification };
