import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ value, onChange }) => {
  return (
    <p>
      Find countries <input value={value} onChange={onChange} />
    </p>
  );
};

const Country = ({ country }) => {
  let languages = [];
  for (const key in country.languages) {
    languages.push(country.languages[key]);
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} width="200px" alt="asdf" />
    </div>
  );
};

const Countries = ({ filter, countries }) => {
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} />;
  }
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          {country.name.common} {country.cca2}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const countriesToShow =
    newFilter === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(newFilter.toLowerCase())
        );

  return (
    <>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Countries filter={newFilter} countries={countriesToShow} />
    </>
  );
}

export default App;
