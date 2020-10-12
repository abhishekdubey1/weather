import React from "react";
import RainyIcon from "../../assets/RainyIcon";
import CloudyIcon from "../../assets/CloudyIcon";
import SunnyIcon from "../../assets/SunnyIcon";
import ChartView from "./ ChartView";
const Charts = ({ temperature = 31, condition = "Clouds", hourly }) => {
  return (
    <div className="chart">
      <div className="chart__header">
        <span className="chart__header--temp">{temperature}&#8451;</span>
        <span className="chart__header--icon">
          {condition === "Rain" ? (
            <RainyIcon />
          ) : condition === "Clouds" ? (
            <CloudyIcon />
          ) : (
            <SunnyIcon />
          )}
        </span>
      </div>
      <ChartView hourly={hourly} />
    </div>
  );
};

export default Charts;
