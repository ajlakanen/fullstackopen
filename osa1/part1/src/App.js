const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, {props.age}
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 20;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Hello />
      <Footer />
    </>
  );
};

function App2() {
  return <h1>Hello world2</h1>;
}

export default App;
// export default App2;
