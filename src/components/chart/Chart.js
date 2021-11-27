import React from "react";
import ChartBar from "./ChartBar";
import "../css/Chart.css";
const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
//   const dataMaxValue = Math.add(...valueArray);
  let dataMaxValue=0;
  for(let i=0;i<valueArray.length;i++){
      dataMaxValue+= valueArray[i];
  }
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //unique identifier
          value={dataPoint.value}
          maxValue={dataMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
