import { Person } from "./Person";

export const Persons = ({ newFilter, personsToShow }) => {
  return (
    <>
      <p>{newFilter.length === 0 ? <></> : <span>Filter in use</span>}</p>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
    </>
  );
};
