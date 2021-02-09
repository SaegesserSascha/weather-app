import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataContext from "../../context/DataContext";
import Return from "../return/Return";
import Wind from "../wind/Wind";

export default function Detail() {
  let location = useLocation();
  const dataContext = useContext(DataContext);
  const data = dataContext.data;
  const date = location.pathname.split("/")[2];

  const todayData = data.filter(el =>
    el.datetime.split(":")[0] === date
  );

  const items = todayData.map(el =>
    <li key={el.timestamp_utc}>
      {el.wind_spd}
    </li>
  );

  return (
    <div className="detail-container">
      <Link to="/" >
        <Return />
      </Link>
      <Wind date={date} data={todayData} />
      <ul>
        {items}
      </ul>
    </div>
  );
}