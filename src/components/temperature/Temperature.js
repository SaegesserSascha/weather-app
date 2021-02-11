import React from "react";
import "./style.css";
import { isCurrentDate } from "../../util/IsCurrentDateChecker";

export default function Temperature({ date, data }) {
  const temperatureItems = data.map(el =>
    <li className="temperature-list-item" key={el.timestamp_utc}>
      <p className="temperature-value">
        {el.temp}<span className="temperature-type">°C</span>
      </p>
      <img className="temperature-weather-icon" src={`/images/weather-icons/${el.weather.icon}.png`} alt="" />
      <p className="time-of-day">
        {getTimeOfDay(el.datetime)}
      </p>
    </li>
  );
  
  const currentTemperatureItem = data.slice(0, 1).map(el =>
    <li className="current-temperature-item" key={el.timestamp_utc}>
      <p className="temperature-value">
        {el.temp}<span className="temperature-type">°C</span>
      </p>
      <img className="temperature-weather-icon" src={`/images/weather-icons/${el.weather.icon}.png`} alt="" />
      <p>
        Jetzt
      </p>
    </li>
  );

  function getTimeOfDay(datetime) {
    return datetime.split(":")[1] + ":00";
  }

  return (
    <div className="container">
      <h2 className="subtitle">
        Temperatur und Wetterlage
      </h2>
      <ul className="temperature-list">
        {isCurrentDate(date)
          ? currentTemperatureItem
          : temperatureItems.slice(0, 1)
        }
        {temperatureItems.slice(1, temperatureItems.length)}
      </ul>
    </div>
  );
}