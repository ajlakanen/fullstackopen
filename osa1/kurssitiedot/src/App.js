const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exerciseCount}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.value}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exerciseCount: 10 };
  const part2 = { name: "Using props to pass data", exerciseCount: 7 };
  const part3 = { name: "State of a component", exerciseCount: 14 };

  return (
    <div>
      <Header course={course}></Header>
      <Part name={part1.name} exerciseCount={part1.exerciseCount} />
      <Part name={part2.name} exerciseCount={part2.exerciseCount} />
      <Part name={part3.name} exerciseCount={part3.exerciseCount} />
      <Total
        value={part1.exerciseCount + part2.exerciseCount + part3.exerciseCount}
      />
    </div>
  );
};

export default App;
