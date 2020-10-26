import React, { useState } from "react";

import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

import { SearchStore } from "../../context/SearchContext";
import openWeather from "../../api/openWeather";
import { openWeatherKey } from "../../api/keys";

import morning from "../../assets/mainBgMorning.png";
import day from "../../assets/mainBg.png";
import evening from "../../assets/mainBgEvening.png";
import sunset from "../../assets/mainBgSunSet.png";
import night from "../../assets/mainBgNight.png";
import "./app.css";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const fetchWeather = (value) => {
    setWeatherData({});
    setError(null);
    openWeather
      .get(`data/2.5/forecast?q=${value}&units=metric&appid=${openWeatherKey}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const setBgImg = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 22 || currentTime < 5) {
      return night;
    } else if (currentTime >= 20) {
      return evening;
    } else if (currentTime >= 19) {
      return sunset;
    } else if (currentTime >= 8) {
      return day;
    } else {
      return morning;
    }
  };

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${setBgImg()})` }}
    >
      <SearchStore>
        <SearchBar fetchWeather={fetchWeather} />
        <WeatherContainer data={weatherData} error={error} />
        <Footer />
      </SearchStore>
    </div>
  );
};

export default App;
