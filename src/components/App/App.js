import React, { useState } from "react";

import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

import { SearchStore } from "../../context/SearchContext";
import openWeather from "../../api/openWeather";
import { openWeatherKey } from "../../api/keys";

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

  return (
    <div className="app-container">
      <SearchStore>
        <SearchBar fetchWeather={fetchWeather} />
        <WeatherContainer data={weatherData} error={error} />
        <Footer />
      </SearchStore>
    </div>
  );
};

export default App;
