import { useState } from "react";

const Person = ({ key, name, number }) => {
  return (
    <li key={key}>
      {name} {number}
    </li>
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
      Filter shown with{" "}
      <input value={newFilter} onChange={handleFilterChange} />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        {/*<div>debug: {newName}</div>*/}
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        {/*<div>debug: {newNumber}</div>*/}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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
