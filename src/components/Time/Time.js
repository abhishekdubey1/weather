import React from "react";
import Chart from "./Chart";
const Time = ({ sunrise = "6", sunset = "7", noon = "12" }) => {
  return (
    <div className="time">
      <div className="time__day">
        <div className="time__day--sunrise">
          <b>Sunrise</b>
          <br />
          <span className="time__day--sunrise-timing">{sunrise}am</span>
        </div>
        <div className="time__day--sunset">
          <b>Sunset</b>
          <br />
          <span className="time__day--sunset-timing">{sunset}am</span>
        </div>
      </div>
      <br />
      <Chart />
      <div className="time__position">
        <span className="time__position--morning">{sunrise}am</span>
        <span className="time__position--noon">{noon}pm</span>
        <span className="time__position--night">{sunset}pm</span>
      </div>
    </div>
  );
};

export default Time;
