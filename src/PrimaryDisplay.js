import React from "react";
import "./PrimaryDisplay.css";

export default function PrimaryDisplay() {
  return (
    <div className="PrimaryDisplay">
      <h3 id="current-city">San Francisco, US</h3>
      <h3 id="current-temp">15°C</h3>
      <span className="temp-scale">
        <a href="#" id="celsius-link">
          °C
        </a>
        |
        <a href="#" id="fahrenheit-link">
          °F
        </a>
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
  );
}
