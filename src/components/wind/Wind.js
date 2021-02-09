import "./style.css";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Wind({ date, data }) {
  // https://react-icons.github.io/react-icons/search
  // Icon "FaLocationArrow" points per default at a 45° angle
  const ICONROTATIONOFFSET = -45;

  const currentDate = new Date().toISOString().split("T")[0];
  const isActiveDateCurrentDate = date === currentDate;

  const windItems = data.map(el =>
    <li className="wind-list-item" key={el.timestamp_utc}>
      <p className="wind-direction-icon" style={{
        display: "inline-block",
        transform: `rotate(${el.wind_dir + ICONROTATIONOFFSET}deg)`
      }}>
        <FaLocationArrow />
      </p>
      <p className="wind-speed">
        {getWindSpeedInKilometersPerHour(el.wind_spd)}
      </p>
      <p className="time-of-day">
        {getTimeOfDay(el.datetime)}
      </p>
    </li>
  );

  const currentWindItem = data.slice(0, 1).map(el =>
    <li className="current-wind" key={el.timestamp_utc}>
      <p className="wind-direction-icon" style={{
        display: "inline-block",
        transform: `rotate(${el.wind_dir + ICONROTATIONOFFSET}deg)`
      }}>
        <FaLocationArrow />
      </p>
      <p className="wind-speed">
        {getWindSpeedInKilometersPerHour(el.wind_spd)}
      </p>
      <p className="current-wind-time-label">
        Jetzt
      </p>
    </li>
  );

  function getWindSpeedInKilometersPerHour(metersPerSecond) {
    const CONVERSATIONFACTOR = 3.6;
    const kilometersPerHour = metersPerSecond * CONVERSATIONFACTOR;
    return Math.round(kilometersPerHour);
  }

  function getTimeOfDay(datetime) {
    return datetime.split(":")[1] + ":00";
  }

  return (
    <div className="wind-container">
      <h2 className="wind-title">
        Wind <span className="wind-speed-unit">[in km/h]</span>
      </h2>
      <ul className="wind-list">
        {isActiveDateCurrentDate
          ? currentWindItem
          : windItems.slice(0, 1)
        }
        {windItems.slice(1, windItems.length)}
      </ul>
    </div>
  );
}

export default Wind;