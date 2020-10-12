import React from "react";

const WeatherCondition = ({ pressure, humidity }) => {
  return (
    <div className="weather">
      <div className="weather__pressure">
        Pressure
        <br />
        <span className="weather__pressure--data">{pressure} hpa</span>
      </div>
      <div className="weather__humidity">
        Humidity
        <br />
        <span className="weather__humidity--data">{humidity} %</span>
      </div>
    </div>
  );
};

export default WeatherCondition;
