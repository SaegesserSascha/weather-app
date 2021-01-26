import "./style.css";
import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

function Temperature() {
  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  const windAtTimestampArr = data.map(el => {
    return {
      timestamp_utc: el.timestamp_utc,
      wind_cdir: el.wind_cdir
    }
  });

  const listItems = windAtTimestampArr.map(el =>
    <li key={el.timestamp_utc}>
      [{el.timestamp_utc}] Wind direction: {el.wind_cdir}
    </li>
  );

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  );
}


export default Temperature;