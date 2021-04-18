import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TempConversion">
        <h3 id="current-temp">{Math.round(props.celsius)}°C</h3>
        <span className="temp-scale">
          <button id="celsius-button">°C</button>|
          <button id="fahrenheit-button" onClick={convertToFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <h3 id="current-temp">{Math.round(fahrenheit)}°F</h3>
        <span className="temp-scale">
          <button id="celsius-button" onClick={convertToCelsius}>
            °C
          </button>
          |<button id="fahrenheit-button">°F</button>
        </span>
      </div>
    );
  }
}
