import React from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  return (
    <div className="TempConversion">
      <h3 id="current-temp">{props.celcius}°C</h3>
      <span className="temp-scale">
        <button id="celsius-link">°C</button>|
        <button id="fahrenheit-link">°F</button>
      </span>
    </div>
  );
}
