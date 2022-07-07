const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].name} {props.parts[0].exerciseCount}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exerciseCount}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exerciseCount}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exerciseCount +
        props.parts[1].exerciseCount +
        props.parts[2].exerciseCount}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exerciseCount: 10 },
    { name: "Using props to pass data", exerciseCount: 7 },
    { name: "State of a component", exerciseCount: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
