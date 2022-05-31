import { useState } from "react";
import "./barchart.styles.scss";

const BarChart = ({ data, index, currentDay }) => {
  const { day, amount } = data;

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="barchart-container" style={{ left: `${45 * index}px` }}>
      <div
        className={currentDay === day ? "barchart blue" : "barchart"}
        style={{ height: `${3 * amount}px` }}
        onMouseOver={handleHover}
      ></div>
      <p className={hover ? "price" : "price-null"}>{`$${amount}`}</p>
      <p style={{ marginRight: `${index}px` }}>{day}</p>
    </div>
  );
};

export default BarChart;
