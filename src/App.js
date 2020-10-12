import React, { useEffect, useState } from "react";
import "./styles/main.css";
import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Time from "./components/Time/Time";
import WeatherCondition from "./components/WeatherCondition/WeatherCondition";
import dailydata from "./data/dailyData";
import hourlyData from "./data/hourlyData";
import timing from "./data/timing";
import Spinner from "./utils/Spinner";

function App() {
  const [state, setState] = useState({
    humidity: 67,
    pressure: 1007,
    sunrise: 7,
    sunset: 7,
    temp: 29,
    condition: "Rain",
    hourly: hourlyData.slice(0, 24),
  });
  const [isLoading, setIsLoading] = useState(true);
  const [daily, setDaily] = useState(dailydata);
  const [city, setCity] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac0a6285171a5e78cc8abcdf306c373e`
      )
        .then((res) => res.json())
        .then((data) => {
          return {
            coords: { latitude: data.coord.lat, longitude: data.coord.lon },
          };
        })
        .then((position) => success(position))
        .catch((err) => console.log(err));
    }
    return () => {};
  }, [city]);

  function success(position) {
    // let {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&
    exclude=current&appid=ac0a6285171a5e78cc8abcdf306c373e`)
      .then((res) => res.json())
      .then((data) => {
        let hourlyTemp = data.hourly.slice(0, 24).map((x, i) => {
          return { temp: (x.temp - 273.5).toFixed(1), time: timing[i].time };
        });
        setState({
          ...state,
          humidity: data.current.humidity,
          pressure: data.current.pressure,
          sunrise: 6,
          sunset: 7,
          temp: Math.round(data.current.temp - 273.5),
          condition: data.current.weather[0].main,
          hourly: hourlyTemp,
        });
        setDaily(data.daily);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  function error() {
    alert("Location not provided");
  }

  const inputChanged = (inputValue) => {
    setCity(inputValue);
  };
  return (
    <div className="container">
      <Search inputChanged={inputChanged} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Cards daily={daily} />
          <main>
            <Charts
              temperature={state.temp}
              condition={state.condition}
              hourly={state.hourly}
            />
            <WeatherCondition
              pressure={state.pressure}
              humidity={state.humidity}
            />
            <Time sunrise={state.sunrise} sunset={state.sunset} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
