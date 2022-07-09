import { useState } from "react";

const Person = ({ key, name, number }) => {
  return (
    <li key={key}>
      {name} {number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addInfo = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    /*console.log(event.target.value);*/
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    /*console.log(event.target.value);*/
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        {/*<div>debug: {newName}</div>*/}
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        {/*<div>debug: {newName}</div>*/}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
