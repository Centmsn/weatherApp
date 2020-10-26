import React from "react";

import openWeather from "../../api/openWeather";
import { openWeatherKey } from "../../api/keys";
import { ReactComponent as Scene } from "../../assets/error.svg";

import "./error.css";

const Error = ({ fetch }) => {
  const error = (err) => {
    console.log(err);
  };

  const succes = (position) => {
    const { latitude, longitude } = position.coords;

    openWeather
      .get(
        `data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLocalWeatherDisplay = () => {
    const location = window.navigator.geolocation.getCurrentPosition(
      succes,
      error
    );
  };

  return (
    <div className="error">
      <div className="error__desc">
        <span className="error__text">Oops... couldn't find location</span>
        <span
          className="error__text--active"
          onClick={handleLocalWeatherDisplay}
        >
          but I can display Your local weather
        </span>
      </div>
      <div className="error__img">
        <Scene className="error__icon" />
      </div>
    </div>
  );
};

export default Error;
