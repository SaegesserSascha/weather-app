import "./style.css";
import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import ActiveDateContext from "../../context/ActiveDateContext";
import { FaLocationArrow } from "react-icons/fa";

function Wind() {
  // https://react-icons.github.io/react-icons/search
  // Icon "FaLocationArrow" points per default at a 45° angle
  const ICONROTATIONOFFSET = -45;

  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  const activeDateContext = useContext(ActiveDateContext);
  const activeDateData = data.filter(el =>
    el.timestamp_utc.split("T")[0] === activeDateContext
  );

  const currentDate = new Date().toISOString().split("T")[0];
  const isActiveDateCurrentDate = activeDateContext === currentDate;

  const windItems = activeDateData.map(el =>
    <li key={el.timestamp_utc}>
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

  const currentWindItem = activeDateData.slice(0, 1).map(el =>
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
    const conversationFactor = 3.6;
    const kilometersPerHour = metersPerSecond * conversationFactor;
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
      <ul>
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