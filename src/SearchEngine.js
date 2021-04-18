import React, { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";
import FormattedDate from "./FormattedDate";
import DataDisplay from "./DataDisplay";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState({});

  const apiKey = `59f62e89b6fe8b8e9e10ac59471b14c9`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
      temperature: response.data.main.temp,
      iconCode: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
    setReady(true);
  }

  if (ready) {
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
                <CurrentCity />
              </div>
            </div>
          </form>
        </div>
        <div>
          <FormattedDate />
        </div>
        <div>
          <DataDisplay data={results} />
        </div>
      </div>
    );
  } else {
    const apiKey = `59f62e89b6fe8b8e9e10ac59471b14c9`;
    let city = "San Francisco";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResults);
    return "Loading...";
  }
}
