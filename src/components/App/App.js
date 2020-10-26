import React, { useState } from "react";

import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

import { SearchStore } from "../../context/SearchContext";
import openWeather from "../../api/openWeather";

import "./app.css";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const fetchWeather = (value) => {
    openWeather
      .get(
        `data/2.5/forecast?q=${value}&units=metric&appid=b7238569c5de7a001ca295ee92e8c746`
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
        setError(null);
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
