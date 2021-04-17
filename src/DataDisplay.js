import React from "react";
import TempConversion from "./TempConversion";
import "./DataDisplay.css";

export default function DataDisplay(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`;

  return (
    <div className="DataDisplay">
      <div className="row">
        <div className="border border-info rounded col-sm" id="current-weather">
          <div className="PrimaryDisplay">
            <h3 id="city-main">
              {props.data.cityMain}, {props.data.country}
            </h3>
            <TempConversion celsius={props.data.temperature} />
            <div>
              <img
                src={iconUrl}
                alt={props.data.description}
                id="weather-icon"
              />
            </div>
            <h5 id="weather-description">{props.data.description}</h5>
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
                {props.data.wind} km/h
                <span id="current-wind-speed" />
              </li>
              <li>
                <i className="bi bi-droplet-half" />
                <br />
                Humidity:
                <br />
                {props.data.humidity}%
                <span id="current-humidity" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
