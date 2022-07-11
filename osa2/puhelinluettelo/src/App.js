import { useState, useEffect } from "react";
import axios from "axios";
import { PersonForm } from "./components/PersonForm";
import { Person } from "./components/Person";
import { Filter } from "./components/Filter";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const modifyPhoneNumber = (person, newNumber) => {
    const changedPerson = { ...person, number: newNumber };
    personsService
      .update(person.id, changedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((p) => (p.id !== person.id ? person : returnedPerson))
        );
      })
      .catch((error) => {
        alert(`Person '${person.name}' was already deleted from server`);
        setPersons(persons.filter((p) => p.id !== person.id));
      });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existing = persons.filter((person) => person.name === newName);
    if (existing.length > 0) {
      if (window.confirm(`Replace ${newName} phone number?`)) {
        modifyPhoneNumber(existing[0], newNumber);
        return;
      }
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
    setNewFilter(event.target.value);
  };

  const handleDeleteClick = ({ person }) => {
    if (window.confirm(`Delete ${person.name}`)) {
      personsService.deletePerson(person.id).then((response) => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />

      <h2>Add new person</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      {/* <Persons newFilter={newFilter} personsToShow={personsToShow} /> */}
      <p>{newFilter.length === 0 ? <></> : <span>Filter in use</span>}</p>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            <Person name={person.name} number={person.number} />{" "}
            <button onClick={() => handleDeleteClick({ person })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
