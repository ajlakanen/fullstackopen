import { useState } from "react";

const StatisticsLine = ({ text, counter, postfix }) => (
  <p>
    {text} {counter} {postfix}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given.</p>;
  }
  return (
    <>
      <StatisticsLine text="good" counter={good}></StatisticsLine>
      <StatisticsLine text="neutral" counter={neutral}></StatisticsLine>
      <StatisticsLine text="bad" counter={bad}></StatisticsLine>
      <StatisticsLine
        text="all"
        counter={good + neutral + bad}
      ></StatisticsLine>
      <StatisticsLine
        text="avg"
        counter={(good - bad) / (good + neutral + bad)}
      ></StatisticsLine>
      <StatisticsLine
        text="positive"
        counter={(good / (good + neutral + bad)) * 100}
        postfix="%"
      ></StatisticsLine>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"></Button>
      <Button handleClick={handleNeutralClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
