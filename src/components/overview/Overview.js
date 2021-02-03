import React, { useState, useContext } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DailyOverview from "./daily-overview/DailyOverview";
import DataContext from "../../context/DataContext";
import Detail from "../detail/Detail";
import Return from "../return/Return";

function Overview() {
  const [overviewIsVisible, setOverviewIsVisible] = useState(true);

  const dataContext = useContext(DataContext);
  const data = dataContext.data;

  let dates = [...new Set(data.map(el =>
    el.timestamp_utc.split("T")[0]
  ))].splice(0, 5);

  function getDataforDate(date) {
    return data.filter(el => el.datetime.split(":")[0] === date);
  }

  return (
    <Router>
      <div className={!overviewIsVisible ? "visible" : "hidden"}>
        <Link to="/" onClick={() => setOverviewIsVisible(true)}>
            <Return />
        </Link>
      </div>
      <div className={overviewIsVisible ? "visible" : "hidden"}>
        <nav className="overview-container">
          <ul className="daily-overview-list">
            <Link to={`/detail/${dates[0]}`} onClick={() => setOverviewIsVisible(false)}>
              <li className="daily-overview-list-item">
                <DailyOverview date={dates[0]} data={getDataforDate(dates[0])} />
              </li>
            </Link>
            <Link to={`/detail/${dates[1]}`} onClick={() => setOverviewIsVisible(false)}>
              <li className="daily-overview-list-item">
                <DailyOverview date={dates[1]} data={getDataforDate(dates[1])} />
              </li>
            </Link>
            <Link to={`/detail/${dates[2]}`} onClick={() => setOverviewIsVisible(false)}>
              <li className="daily-overview-list-item">
                <DailyOverview date={dates[2]} data={getDataforDate(dates[2])} />
              </li>
            </Link>
            <Link to={`/detail/${dates[3]}`} onClick={() => setOverviewIsVisible(false)}>
              <li className="daily-overview-list-item">
                <DailyOverview date={dates[3]} data={getDataforDate(dates[3])} />
              </li>
            </Link>
            <Link to={`/detail/${dates[4]}`} onClick={() => setOverviewIsVisible(false)}>
              <li className="daily-overview-list-item">
                <DailyOverview date={dates[4]} data={getDataforDate(dates[4])} />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route
          exact path={`/detail/${dates[0]}`}
          component={() => <Detail data={getDataforDate(dates[0])} />}
        />
        <Route
          exact path={`/detail/${dates[1]}`}
          component={() => <Detail data={getDataforDate(dates[1])} />}
        />
        <Route
          exact path={`/detail/${dates[2]}`}
          component={() => <Detail data={getDataforDate(dates[2])} />}
        />
        <Route
          exact path={`/detail/${dates[3]}`}
          component={() => <Detail data={getDataforDate(dates[3])} />}
        />
        <Route exact path={`/detail/${dates[4]}`}
          component={() => <Detail data={getDataforDate(dates[4])} />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Overview;