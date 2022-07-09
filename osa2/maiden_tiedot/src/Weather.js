import { useState, useEffect } from "react";
import axios from "axios";

export const Weather = ({ country }) => {
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState(0);

  const lat = country.latlng[0];
  const lon = country.latlng[1];
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
      )
      .then((response) => {
        setTemp(response.data.main.temp);
        setIcon(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
        setWind(response.data.wind.speed);
      });
  }, []);

  return (
    <>
      <h2>Weather in {country.capital[0]}</h2>
      <p>Temperature: {(temp - 273.15).toPrecision(3)} &deg;C</p>
      <img src={icon} />
      <p>Wind: {wind} m/s</p>
    </>
  );
};
