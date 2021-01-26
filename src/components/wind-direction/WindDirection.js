import "./style.css";
import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

function WindDirection() {
  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  const windAtTimestampArr = data.map(el => {
    return {
      timestamp_utc: el.timestamp_utc,
      windDirectionInDegrees: getWindDirectionInDegrees(el.wind_cdir)
    }
  });

  function getWindDirectionInDegrees(wind_cdir) {
    const directions = wind_cdir.split("");
    let degree = 0;

    directions.forEach((direction) => {
      switch (direction) {
        case "N":
          degree += 0;
          break;
        case "E":
          degree += 90;
          break;
        case "S":
          degree += 180;
          break;
        case "W":
          degree += 270;
          break;
        default:
          console.warn("Invalid direction");
          break;
      }
    })

    return degree / wind_cdir.length;;
  }

  const listItems = windAtTimestampArr.map(el =>
    <li key={el.timestamp_utc}>
      [{el.timestamp_utc}] Windrichtung <span style={{
        display: "inline-block",
        transform: `rotate(${el.windDirectionInDegrees}deg)`
      }}>↑</span>
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

export default WindDirection;