import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ value, onChange }) => {
  return (
    <p>
      Find countries <input value={value} onChange={onChange} />
    </p>
  );
};

const Button = ({ onClick, text, isVisible }) => {
  if (!isVisible) return <></>;
  else return <button onClick={onClick}>{text}</button>;
};

const Country = ({ country, toShow, showHandler, isRemovable }) => {
  if (!toShow) {
    return (
      <li key={country.cca2}>
        {country.name.common} {country.cca2}{" "}
        <Button
          onClick={() => showHandler(country.cca2)}
          text="Show"
          isVisible={true}
        />
      </li>
    );
  }

  let languages = [];
  for (const key in country.languages) {
    languages.push(country.languages[key]);
  }
  return (
    <div>
      <h1>
        {country.name.common}{" "}
        <Button
          onClick={() => showHandler(country.cca2)}
          text="Remove"
          isVisible={isRemovable}
        />
      </h1>
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
  const [countriesToShow, setCountriesToShow] = useState([]);
  const showHandler = (country) => {
    if (countriesToShow.includes(country)) {
      setCountriesToShow(countriesToShow.filter((c) => c !== country));
    } else {
      setCountriesToShow(countriesToShow.concat(country));
    }
  };

  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} toShow={true} isRemovable={false} />;
  }
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          <Country
            country={country}
            toShow={countriesToShow.includes(country.cca2)}
            showHandler={showHandler}
            isRemovable={true}
          />
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
