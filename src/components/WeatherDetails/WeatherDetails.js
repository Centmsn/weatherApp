import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ReactComponent as Scene } from "../../assets/windArrow.svg";
import { ReactComponent as Wind } from "../../assets/wind.svg";
import "./weatherdetails.css";

const WeatherDetails = ({ data }) => {
  const arrow = useRef(null);

  useEffect(() => {
    const windDirection = arrow.current;
    const tl = gsap.timeline();

    const getRandomDirection = () => Math.random() * 150 + 50;

    tl.to(windDirection, {
      duration: 1,
      rotation: getRandomDirection,
    })
      .to(windDirection, { duration: 0.5, getRandomDirection })
      .to(windDirection, { duration: 1, rotation: data[0].wind.deg });
  }, []);

  const renderDetails = () => {
    const current = data[0];

    return (
      <>
        <div className="weather-details__desc">
          <span className="weather-details__info">
            Temperature: {current.main.temp.toFixed(1)}
            <sup>o</sup>C
          </span>
          <span className="weather-details__info">
            Pressue: {current.main.pressure}hPa
          </span>
          <span className="weather-details__info">
            Clouds: {current.clouds.all}% of the sky
          </span>
          <span className="weather-details__info">
            Wind speed: {current.wind.speed}km/h
          </span>
        </div>
        <div className="weather-details__icon">
          <Scene ref={arrow} />
        </div>
      </>
    );
  };

  return <div className="weather-details">{renderDetails()}</div>;
};

export default WeatherDetails;
