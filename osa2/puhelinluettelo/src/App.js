import { useState } from "react";

const Person = ({ key, name }) => {
  console.log({ name });
  return <li key={key}>{name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      name: newName,
    };
    setPersons(persons.concat(numberObject));
    setNewName("");
  };
  const handleNumberChange = (event) => {
    {
      /*console.log(event.target.value);*/
    }
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange} />
        </div>
        {/*<div>debug: {newName}</div>*/}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
