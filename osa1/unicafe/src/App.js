import { useState } from "react";

const Display = ({ text, counter, postfix }) => (
  <p>
    {text} {counter} {postfix}
  </p>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // tallenna napit omaan tilaansa
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
      <Display text="good" counter={good}></Display>
      <Display text="neutral" counter={neutral}></Display>
      <Display text="bad" counter={bad}></Display>
      <Display text="all" counter={good + neutral + bad}></Display>
      <Display
        text="avg"
        counter={(good - bad) / (good + neutral + bad)}
      ></Display>
      <Display
        text="positive"
        counter={(good / (good + neutral + bad)) * 100}
        postfix="%"
      ></Display>
    </>
  );
};

export default App;
