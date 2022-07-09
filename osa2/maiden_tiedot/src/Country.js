import { Weather } from "./Weather";
import { Button } from "./Button";

export const Country = ({ country, toShow, showHandler, isRemovable }) => {
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
      <Weather country={country} />
    </div>
  );
};
