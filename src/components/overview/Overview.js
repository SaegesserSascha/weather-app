import React, { useContext } from "react";
import "./style.css";
import DailyOverview from "./daily-overview/DailyOverview";
import DataContext from "../../context/DataContext";

function Overview() {
  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  let dates = [...new Set(data.map(el =>
    el.timestamp_utc.split("T")[0]
  ))].splice(0, 5);

  function getDataforDate(date) {
    return data.filter(el => el.datetime.split(":")[0] === date);
  }

  return (
    <div className="overview-container">
      <ul className="daily-overview-list">
        <li className="daily-overview-list-item"><DailyOverview date={dates[0]} data={getDataforDate(dates[0])} /></li>
        <li className="daily-overview-list-item"><DailyOverview date={dates[1]} data={getDataforDate(dates[1])} /></li>
        <li className="daily-overview-list-item"><DailyOverview date={dates[2]} data={getDataforDate(dates[2])} /></li>
        <li className="daily-overview-list-item"><DailyOverview date={dates[3]} data={getDataforDate(dates[3])} /></li>
        <li className="daily-overview-list-item"><DailyOverview date={dates[4]} data={getDataforDate(dates[4])} /></li>
      </ul>
    </div>
  );
}

export default Overview;