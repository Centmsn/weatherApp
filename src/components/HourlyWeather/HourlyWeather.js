import React from "react";

import { ReactComponent as Scene } from "../../assets/leftArrow.svg";

import "./hourlyweather.css";

const HourlyWeather = ({ toggleVisibility, active, index, data }) => {
  console.log(data);

  const renderHourlyForecast = () => {
    return data.forecast.map((element) => (
      <div className="hourly-weather__forecast">
        <span>{element.main.temp}</span>
      </div>
    ));
  };

  const visibility = active[index]
    ? { transform: "translateX(-100vw)" }
    : { transform: "translateX(100vw)" };

  return (
    <div className="hourly-weather" style={visibility}>
      <button onClick={toggleVisibility} className="hourly-weather__back-btn">
        <Scene />
      </button>
      {renderHourlyForecast()}
    </div>
  );
};

export default HourlyWeather;
