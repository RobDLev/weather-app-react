import React from "react";
import "./SecondaryDisplay.css";

export default function SecondaryDisplay() {
  return (
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
  );
}
