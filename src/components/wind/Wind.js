import "./style.css";
import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { FaLocationArrow } from "react-icons/fa";

function Wind() {
  // https://react-icons.github.io/react-icons/search
  // Icon "FaLocationArrow" points per default at a 45° angle
  const ICONROTATIONOFFSET = -45;

  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  const listItems = data.map(el =>
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
      <p className="date">{getDateInDayAndMonth(el.datetime)}</p>
      <p className="time-of-day">{getTimeOfDay(el.datetime)}</p>
    </li>
  );

  function getWindSpeedInKilometersPerHour(metersPerSecond) {
    const conversationFactor = 3.6;
    const kilometersPerHour = metersPerSecond * conversationFactor;
    return Math.round(kilometersPerHour);
  }

  function getDateInDayAndMonth(datetime) {
    const day = datetime.split(":")[0];
    const dayValues = day.split("-");
    return `${dayValues[2]}.${dayValues[1]}.`;
  }

  function getTimeOfDay(datetime) {
    return datetime.split(":")[1] + ":00";
  }

  return (
    <div className="wind-container">
      <h2 className="wind-title">Windgeschwindigkeit <span className="wind-speed-unit">[in km/h]</span></h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Wind;