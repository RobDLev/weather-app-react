import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  return (
    <div className="FormattedDate">
      <div id="date-and-time">
        {day}, {hours}:{minutes}
        <br />
        {month} {date}, {year}
      </div>
    </div>
  );
}
