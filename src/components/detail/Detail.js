import React from "react";
import "./style.css";

export default function Detail({ data }) {
  const items = data.map(el =>
    <li key={el.timestamp_utc}>
      <p className="wind-speed">
        {el.wind_spd}
      </p>
      <p className="time-of-day">
        {el.datetime}
      </p>
    </li>
  );

  return (
    <div>
      {items}
    </div>
  );
}