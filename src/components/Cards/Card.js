import React, { useState } from "react";
import RainyIcon from "../../assets/RainyIcon";
import CloudyIcon from "../../assets/CloudyIcon";
import SunnyIcon from "../../assets/SunnyIcon";

const Card = ({
  day,
  min,
  max,
  condition,
  checkedState,
  checkInputHandler,
}) => {
  const [state, setState] = useState(false);

  return (
    <div className={`card`} onClick={(e) => e}>
      <input
        className="card__input"
        type="radio"
        name="active_day"
        value="9"
        onChange={(e) => setState(e.target.checked)}
      />
      <div className="card__data">
        <p className="card__data--day">{day}</p>
        <p>
          <span className="card__data--max">{max}°</span>{" "}
          <span className="card__data--min">{min}°</span>
        </p>
        <div className="card__data--icon">
          {condition === "Rain" ? (
            <RainyIcon />
          ) : condition === "Clouds" ? (
            <CloudyIcon />
          ) : (
            <SunnyIcon />
          )}
        </div>
        <p className="card__data--weather">{condition}</p>
      </div>
    </div>
  );
};
export default Card;
