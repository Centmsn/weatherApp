import React, { useState, useEffect } from "react";

import openWeather from "../../api/openWeather";
import { openWeatherKey } from "../../api/keys";
import { ReactComponent as Scene } from "../../assets/error.svg";

import "./error.css";

const Error = ({ fetch }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, []);

  const locationError = () => {
    setError("I need to know Your localization to display local weather");
  };

  const succes = (position) => {
    const { latitude, longitude } = position.coords;

    openWeather
      .get(
        `data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}`
      )
      .then((response) => {
        fetch(response.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLocalWeatherDisplay = () => {
    window.navigator.geolocation.getCurrentPosition(succes, locationError);
  };

  const renderInfo = () => {
    if (error) {
      return <span className="error__text">{error}</span>;
    } else {
      return (
        <span
          className="error__text--active"
          onClick={handleLocalWeatherDisplay}
        >
          but I can display Your local weather
        </span>
      );
    }
  };

  return (
    <div className="error">
      <div className="error__desc">
        <span className="error__text">Oops... couldn't find location</span>
        {renderInfo()}
      </div>
      <div className="error__img">
        <Scene className="error__icon" />
      </div>
    </div>
  );
};

export default Error;
