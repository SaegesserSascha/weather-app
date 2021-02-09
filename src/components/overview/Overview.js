import React, { useContext } from "react";
import "./style.css";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import DailyOverview from "./daily-overview/DailyOverview";
import DataContext from "../../context/DataContext";
import Detail from "../detail/Detail";

function Overview() {
  let location = useLocation();

  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  let dates = [...new Set(data.map(el =>
    el.timestamp_utc.split("T")[0]
  ))].splice(0, 5);

  function getDataforDate(date) {
    return data.filter(el => el.datetime.split(":")[0] === date);
  }

  return (
    <>
      <nav>
        <div className={location.pathname === "/" ? "visible" : "hidden"}>
          <ul className="daily-overview-list">
            <li className="daily-overview-list-item">
              <Link to={`/detail/${dates[0]}`} style={{ width: "100%", height: "100%" }}>
                <DailyOverview date={dates[0]} data={getDataforDate(dates[0])} />
              </Link>
            </li>
            <li className="daily-overview-list-item">
              <Link to={`/detail/${dates[1]}`}>
                <DailyOverview date={dates[1]} data={getDataforDate(dates[1])} />
              </Link>
            </li>
            <li className="daily-overview-list-item">
              <Link to={`/detail/${dates[2]}`}>
                <DailyOverview date={dates[2]} data={getDataforDate(dates[2])} />
              </Link>
            </li>
            <li className="daily-overview-list-item">
              <Link to={`/detail/${dates[3]}`}>
                <DailyOverview date={dates[3]} data={getDataforDate(dates[3])} />
              </Link>
            </li>
            <li className="daily-overview-list-item">
              <Link to={`/detail/${dates[4]}`}>
                <DailyOverview date={dates[4]} data={getDataforDate(dates[4])} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route
          exact path={`/detail/${dates[0]}`}
          component={() => <Detail />}
        />
        <Route
          exact path={`/detail/${dates[1]}`}
          component={() => <Detail />}
        />
        <Route
          exact path={`/detail/${dates[2]}`}
          component={() => <Detail />}
        />
        <Route
          exact path={`/detail/${dates[3]}`}
          component={() => <Detail />}
        />
        <Route exact path={`/detail/${dates[4]}`}
          component={() => <Detail />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default Overview;