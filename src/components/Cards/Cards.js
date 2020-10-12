import React from "react";
import Card from "./Card";
import dateFunc from "../../utils/dateFunc";

let today = new Date();
let todayDate = today.getDay();
let week = dateFunc(todayDate);

const Cards = ({ daily }) => {
  let daily7 = daily.slice(0, 7);
  return (
    <div className="cards">
      {daily7[0].temp
        ? daily7.map((x, i) => (
            <Card
              key={week[i]}
              day={week[i]}
              min={Math.round(x.temp.min - 273.5)}
              max={Math.round(x.temp.max - 273.5)}
              condition={x.weather[0].main}
            />
          ))
        : daily7.map((x, i) => (
            <Card
              key={week[i]}
              day={week[i]}
              min={x.min}
              max={x.max}
              condition={x.condition}
            />
          ))}
    </div>
  );
};
export default Cards;
