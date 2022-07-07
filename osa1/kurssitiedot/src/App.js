const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Course = (props) => {
  return (
    <>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exerciseCount}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exerciseCount}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exerciseCount}
      </p>
    </>
  );
};

// test
// test

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
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exerciseCount: 10 },
      { name: "Using props to pass data", exerciseCount: 7 },
      { name: "State of a component", exerciseCount: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
