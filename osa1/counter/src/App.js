import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
  };

  const incByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button handleClick={incByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
    </>
  );
};
export default App;
