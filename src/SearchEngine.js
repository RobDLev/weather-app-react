import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState("");

  const apiKey = `59f62e89b6fe8b8e9e10ac59471b14c9`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let iconUrl = `https://openweathermap.org/img/wn/${results.iconCode}@2x.png`;

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayResults);
  }

  function displayResults(response) {
    setResults({
      cityMain: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      iconCode: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  return (
    <div className="SearchEngine">
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <input
                onChange={updateCity}
                type="text"
                className="form-control"
                placeholder="ex. Paris, France"
                id="city-search-bar"
              />
              <label>Search a Different Location</label>
              <input
                className="btn btn-primary"
                type="submit"
                value="Search"
                id="search-button"
              />
              <button
                type="button"
                className="btn btn-success"
                id="current-city-button"
              >
                Current City
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="DateTime">
        <div id="date-and-time">
          Sunday, 10:52
          <br />
          February 28, 2021
        </div>
      </div>
      <div className="row">
        <div className="border border-info rounded col-sm" id="current-weather">
          <div className="PrimaryDisplay">
            <h3 id="city-main">
              {results.cityMain}, {results.country}
            </h3>
            <h3 id="current-temp">{results.temperature}°C</h3>
            <span className="temp-scale">
              <button id="celsius-link">°C</button>|
              <button id="fahrenheit-link">°F</button>
            </span>
            <div>
              <img src={iconUrl} alt={results.description} id="weather-icon" />
            </div>
            <h5 id="weather-description">{results.description}</h5>
          </div>
        </div>
        <div className="border border-info rounded col-sm">
          <div className="SecondaryDisplay">
            <ul>
              <li>
                <i className="fas fa-wind" />
                <br />
                Wind Speed:
                <br />
                {results.wind} km/h
                <span id="current-wind-speed" />
              </li>
              <li>
                <i className="bi bi-droplet-half" />
                <br />
                Humidity:
                <br />
                {results.humidity}%
                <span id="current-humidity" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
