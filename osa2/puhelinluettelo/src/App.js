import { useState } from "react";

const Person = ({ key, name, number }) => {
  return (
    <li key={key}>
      {name} {number}
    </li>
  );
};

const PersonForm = ({ onSubmit, nameInput, numberInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          value={nameInput.newName}
          onChange={nameInput.handleNameChange}
        />
      </div>
      {/*<div>debug: {newName}</div>*/}
      <div>
        number:{" "}
        <input
          value={numberInput.newNumber}
          onChange={numberInput.handleNumberChange}
        />
      </div>
      {/*<div>debug: {newNumber}</div>*/}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Filter = ({ value, onChange }) => {
  return (
    <p>
      Filter shown with <input value={value} onChange={onChange} />
    </p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addPerson = (event) => {
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

  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        );

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />

      {/**/}
      <PersonForm
        onSubmit={addPerson}
        name={[newName, handleNameChange]}
        number={[newNumber, handleNumberChange]}
      />

      {/*
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>*/}
      <h2>Numbers</h2>
      {/*<Persons />*/}
      <p>{newFilter.length === 0 ? <></> : <span>Filter in use</span>}</p>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
