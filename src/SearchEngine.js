import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function Form() {
  const [city, setCity] = useState("");

  let apiKey = "59f62e89b6fe8b8e9e10ac59471b14c9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayResults);
  }

  function displayResults(response) {}

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
            <h3 id="current-city">San Francisco, US</h3>
            <h3 id="current-temp">15°C</h3>
            <span className="temp-scale">
              <button id="celsius-link">°C</button>|
              <button id="fahrenheit-link">°F</button>
            </span>
            <div>
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt=""
                id="weather-icon"
              />
            </div>
            <h5 id="weather-description">Few Clouds</h5>
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
                4km/h
                <span id="current-wind-speed" />
              </li>
              <li>
                <i className="bi bi-droplet-half" />
                <br />
                Humidity:
                <br />
                51%
                <span id="current-humidity" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
