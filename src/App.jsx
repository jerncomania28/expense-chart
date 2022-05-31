import { useState, useEffect } from "react";

import { ReactComponent as ChartLogo } from "./assets/logo.svg";
import CHART_DATA from "./data.json";
import BarChart from "./components/barchart.component";

import "./App.scss";

const App = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    const date = new Date();

    const day = date.getDay();

    switch (day) {
      case 1:
        setDay("mon");
        break;
      case 2:
        setDay("tue");
        break;
      case 3:
        setDay("wed");
        break;
      case 4:
        setDay("thu");
        break;
      case 5:
        setDay("fri");
        break;
      case 6:
        setDay("sat");
        break;

      case 7:
        setDay("sun");
        break;

      default:
        console.log("error in date");
    }
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-container-header">
        <div className="chart-container-header-text">
          <small> My Balance</small>
          <h1>$921.48</h1>
        </div>
        <ChartLogo />
      </div>
      <div className="chart-container-body">
        <h2>Spending - Last 7 days</h2>

        <div className="chart">
          {CHART_DATA.map((data, index) => (
            <BarChart
              data={data}
              index={index}
              key={data.day}
              currentDay={day}
            />
          ))}
        </div>

        <div className="chart-container-body-footer">
          <div className="monthly-balance">
            <small>Total this month</small>
            <h1>$478.33</h1>
          </div>
          <div className="increase-rate">
            <small>+2.4% </small> <br />
            <small>from last month</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
