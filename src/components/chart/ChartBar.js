import React from "react";
import "../css/ChartBar.css";

const ChartBar = (props) => {
    const barFillHeight = Math.round((props.value/props.maxValue)*100).toString()+'%';
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
          <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};
export default ChartBar;
