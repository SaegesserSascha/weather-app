import React, { useContext } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { formatDate } from "../../util/DateFormatter";
import Return from "../return/Return";
import Wind from "../wind/Wind";
import Temperature from "../temperature/Temperature";

export default function Detail() {
  let location = useLocation();
  const dataContext = useContext(DataContext);
  const data = dataContext.data;
  const date = location.pathname.split("/")[2];

  const todayData = data.filter(el =>
    el.datetime.split(":")[0] === date
  );

  return (
    <div className="detail-container">
      <div className="detail-content-container">
        <h2 className="detail-subtitle">{formatDate({ date })}</h2>
        <Return />
        <ul className="detail-list">
          <li className="detail-list-item">
            <Temperature date={date} data={todayData} />
          </li>
          <li className="detail-list-item">
            <Wind date={date} data={todayData} />
          </li>
        </ul>
      </div>
    </div>
  );
}