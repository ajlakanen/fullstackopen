import { useState } from "react";
import { Country } from "./Country";

export const Countries = ({ filter, countries }) => {
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
        <Country
          country={country}
          toShow={countriesToShow.includes(country.cca2)}
          showHandler={showHandler}
          isRemovable={true}
        />
      ))}
    </ul>
  );
};
