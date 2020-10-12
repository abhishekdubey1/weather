import React, { useEffect, useState } from "react";
import "./Search.css";
import "./App.css";
import Search from "./components/Search";
// import Card from "./components/Card";
import ChartComponent from "./components/ChartComponent";
// import Temperature from "./components/Temperature";
import Weather from "./components/Weather";
import Time from "./components/Time";
import Chart from "./assets/Chart";

function App() {
  // const [temp, setTemp] = useState("");
  const [city, setCity] = useState("London");
  const [weekdata, setWeekdata] = useState("");
  const [sunRise, setsunRise] = useState("");
  const [sunSet, setsunSet] = useState("");
  const [charData, setCharData] = useState({});
  // const currentDate = new Date();
  // let ct = currentDate.getHours();
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }, []);
  // function success(position) {
  //   fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&
  //   exclude=current&appid=ac0a6285171a5e78cc8abcdf306c373e`).then((res) =>
  //     res.json()
  //   );
  // }
  // function error() {
  //   alert("Location not provided");
  // }
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09d8037af632c119013c3f87b43072ea`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTemp(Math.round(data.list[0].main.temp - 273));
  //       setWeekdata(data);
  //       // console.log(Math.round(weekdata.list[0].main.temp - 273), "hello");
  //       setsunRise(data.city.sunrise);
  //       setsunSet(data.city.sunset);
  //       setCharData({
  //         labels: [
  //           ct,
  //           ct + 3 > 24 ? ct + 3 - 24 : ct + 3,
  //           ct + 6 > 24 ? ct + 6 - 24 : ct + 6,
  //           ct + 9 > 24 ? ct + 9 - 24 : ct + 9,
  //           ct + 12 > 24 ? ct + 12 - 24 : ct + 12,
  //           ct + 15 > 24 ? ct + 15 - 24 : ct + 15,
  //           ct + 18 > 24 ? ct + 18 - 24 : ct + 18,
  //           ct + 21 > 24 ? ct + 21 - 24 : ct + 21
  //         ],
  //         // labels: ["a", "a", "a", "a", "a", "a", "a", "a"],
  //         datasets: [
  //           {
  //             label: "Temperature",
  //             data: [
  //               Math.round(weekdata.list[0].main.temp - 273),
  //               Math.round(weekdata.list[1].main.temp - 273),
  //               Math.round(weekdata.list[2].main.temp - 273),
  //               Math.round(weekdata.list[3].main.temp - 273),
  //               Math.round(weekdata.list[4].main.temp - 273),
  //               Math.round(weekdata.list[5].main.temp - 273),
  //               Math.round(weekdata.list[6].main.temp - 273),
  //               Math.round(weekdata.list[7].main.temp - 273)
  //             ],
  //             borderWidth: 1,
  //             borderColor: "rgb(0, 166, 250)",
  //             hoverBorderWidth: 3,
  //             hoverBorderColor: "rgba(0, 166, 250, 0.1)"
  //           }
  //         ]
  //       });
  //     })
  //     .catch((err) => {
  //       // alert("Please the City name you entered");
  //       console.log(err, "error");
  //     });
  // }, [city, weekdata.list, ct]);

  const inputChanged = (inputValue) => {
    setCity(inputValue);
  };
  return (
    <div className="container">
      {/* <Search inputChanged={inputChanged} /> */}
      {/* 
      <div className="wrapper">
        <Card weekdata={weekdata} num={1} />
        <Card weekdata={weekdata} num={2} />
        <Card weekdata={weekdata} num={3} />
        <Card weekdata={weekdata} num={4} />
        <Card weekdata={weekdata} num={5} />
        <Card weekdata={weekdata} num={1} />
        <Card weekdata={weekdata} num={2} />
      </div>

      <Temperature temperature={temp} />
      */}
      <div className="chart-container">
        {/* <Chart chardata={charData} />
        <ChartComponent weekdata={weekdata} />
        <Weather weekdata={weekdata} /> */}

        <Time milliseconds={[sunRise, sunSet]} />
      </div>
    </div>
  );
}

export default App;
/*<img
            className="voice"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
            title="Search by Voice"
            alt=""
          />*/

/**/
/*  COLUMN SETUP  */
// .col {
//   display: block;
//   float: left;
//   margin: 1% 0 1% 1.7%;
//   margin-left: 0;
// }
// .pressure,
// .humidity {
//   text-align: center;
//   background-color: rgb(210, 210, 231);
//   opacity: 0.8;
//   color: black;
//   display: inline-block;
//   padding: 1rem;
//   margin: 1rem;
// }
// /* .col:first-child {
//   margin-left: 0;
// } */

// .pressure-data,
// .humidity-data {
//   display: block;
// }

// .container {
//   margin: 0 auto;
// }

// .icon-3x {
//   height: 5rem;
//   width: 5rem;
//   display: inline-block;
//   margin: 10px;
// }
// .icon-1x {
//   height: 3rem;
//   width: 3rem;
//   display: inline-block;
//   margin: 10px;
// }
// .chart-container {
//   width: 60%;
// }

// .center {
//   margin: 0 auto;
// }

// .pressure,
// .humidity {
//   background-color: rgb(210, 210, 231);
//   opacity: 0.8;
//   color: black;
//   display: inline-block;
//   padding: 1rem;
//   margin: 1rem;
//   width: 20%;
// }
