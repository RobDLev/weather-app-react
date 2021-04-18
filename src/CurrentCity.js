import axios from "axios";
import React, { useState } from "react";
import "./CurrentCity.css";

export default function CurrentCity() {
  const [results, setResults] = useState({});

  function showPosition(event) {
    navigator.geolocation.getCurrentPosition(getCurrentCityData);
  }

  function getCurrentCityData(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = `59f62e89b6fe8b8e9e10ac59471b14c9`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayCurrentCityData);
  }

  function displayCurrentCityData(response) {
    console.log(response.data);
    setResults({
      cityMain: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      iconCode: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  return (
    <button
      type="button"
      className="btn btn-success"
      id="current-city-button"
      onClick={showPosition}
    >
      Current City
    </button>
  );
}
