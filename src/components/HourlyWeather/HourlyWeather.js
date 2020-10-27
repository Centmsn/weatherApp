import React, { useRef } from "react";
import gsap from "gsap";

import { ReactComponent as Scene } from "../../assets/leftArrow.svg";

import "./hourlyweather.css";

const HourlyWeather = ({ toggleVisibility, active, index, data }) => {
  console.log(data);
  const hourlyWeather = useRef(null);

  const renderHourlyForecast = () => {
    if (hourlyWeather.current) {
      const cards = hourlyWeather.current.children;

      if (active[index]) {
        gsap.set(cards, { autoAlpha: 0 });
        gsap.to(cards, { autoAlpha: 1, duration: 0.1, stagger: 0.1 });
      }
    }

    return data.forecast.map((element) => (
      <div className="hourly-weather__forecast" key={element.dt}>
        <span className="hourly-weather__text">
          <img
            src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </span>
        <span className="hourly-weather__text--bold">
          {element.dt_txt.slice(10, -3)}
        </span>
        <span className="hourly-weather__text">
          {element.main.temp.toFixed(1)}
          <sup>o</sup>C
        </span>
        <span className="hourly-weather__text">
          Feels like:
          <br /> {element.main.feels_like.toFixed(1)}
          <sup>o</sup>C
        </span>
      </div>
    ));
  };

  const visibility = active[index]
    ? { visibility: "visible" }
    : { visibility: "hidden" };

  return (
    <div className="hourly-weather" ref={hourlyWeather} style={visibility}>
      <button onClick={toggleVisibility} className="hourly-weather__back-btn">
        <Scene />
      </button>
      {renderHourlyForecast()}
    </div>
  );
};

export default HourlyWeather;
