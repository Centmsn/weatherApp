import React from "react";

import DailyWeather from "../DailyWeather/DailyWeather";
import LocationInfo from "../LocationInfo/LocationInfo";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

import "./weathercontainer.css";

const WeatherContainer = ({ data, error, fetch }) => {
  const renderData = () => {
    if (data.cod === "200" && !error) {
      return (
        <>
          <LocationInfo data={data.city} />
          <WeatherDetails data={data.list} />
          <DailyWeather data={data.list} />
        </>
      );
    } else {
      return <Error fetch={fetch} />;
    }
  };

  return (
    <div className="weather-container">
      {!data.cod && !error ? <Spinner /> : renderData()}
    </div>
  );
};

export default WeatherContainer;
