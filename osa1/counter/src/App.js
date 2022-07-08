import { useState } from "react";

const Display = ({ counter }) => <>{counter}</>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons.</div>;
  } else {
    return <div>History: {props.allClicks.join(" ")}</div>;
  }
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <>
      <div>
        <Display counter={left}></Display>
        <Button handleClick={handleLeftClick} text="left"></Button>
        <Button handleClick={handleRightClick} text="right"></Button>
        <Display counter={right}></Display>
        <History allClicks={allClicks} />
      </div>
    </>
  );
};
export default App;

//      <Display counter={counter} /> //
//      <Button handleClick={incByOne} text="plus" />
//      <Button handleClick={setToZero} text="zero" />
