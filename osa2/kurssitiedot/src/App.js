const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Course = ({ name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      Total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises.
    </>
  );
};

const Content = ({ parts }) => {
  return parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
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
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course name={course.name} parts={course.parts} />
    </div>
  );
};

export default App;
