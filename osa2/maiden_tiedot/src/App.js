import { useState, useEffect } from "react";
import axios from "axios";
import { Countries } from "./Countries";

const Filter = ({ value, onChange }) => {
  return (
    <p>
      Find countries <input value={value} onChange={onChange} />
    </p>
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
