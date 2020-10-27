import React, { useEffect, useRef, useContext } from "react";
import gsap from "gsap";

import { degreeConverter } from "../../helpers";
import DegreeContext from "../../context/DegreeContext";
import { ReactComponent as Scene } from "../../assets/windArrow.svg";
import "./weatherdetails.css";

const WeatherDetails = ({ data }) => {
  const arrow = useRef(null);
  const { degrees } = useContext(DegreeContext);

  useEffect(() => {
    const windDirection = arrow.current;
    const tl = gsap.timeline();

    const getRandomDirection = () => Math.floor(Math.random() * 150 + 75);

    tl.to(windDirection, {
      duration: 1,
      rotation: getRandomDirection,
    }).to(windDirection, { duration: 1, rotation: data[0].wind.deg });
  }, [data]);

  const renderDetails = () => {
    const current = data[0];

    const temp = degreeConverter(degrees, current.main.temp);

    return (
      <>
        <div className="weather-details__desc">
          <span className="weather-details__info">
            <span className="weather-details__important">Temperature:</span>{" "}
            {temp.toFixed(1)}
            <sup>o</sup>
            {degrees ? "C" : "F"}
          </span>
          <span className="weather-details__info">
            <span className="weather-details__important">Pressure:</span>{" "}
            {current.main.pressure}hPa
          </span>
          <span className="weather-details__info">
            <span className="weather-details__important">Clouds:</span>{" "}
            {current.clouds.all}% of the sky
          </span>
          <span className="weather-details__info">
            <span className="weather-details__important">Wind speed:</span>{" "}
            {current.wind.speed}km/h
          </span>
        </div>
        <div className="weather-details__icon">
          <Scene ref={arrow} className="weather-details__svg" />
        </div>
      </>
    );
  };

  return <div className="weather-details">{renderDetails()}</div>;
};

export default WeatherDetails;
