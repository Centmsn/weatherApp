import React from "react";

import "./dailyweather.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DailyWeather = ({ data }) => {
  const renderDailyWeather = () => {
    const dataNow = new Date().toISOString().slice(0, 10);
    const today = data.filter((el) => el.dt_txt.slice(0, 10) === dataNow);

    const forecast = [];
    const restOfTheWeek = data.slice(today.length);

    if (today.length === 0) {
      for (let i = 0; i < restOfTheWeek.length; i += 8) {
        forecast.push({ forecast: restOfTheWeek.slice(i, i + 8) });
      }
    } else {
      forecast.push({ forecast: today });
      for (let i = 0; i < restOfTheWeek.length; i += 8) {
        forecast.push({ forecast: restOfTheWeek.slice(i, i + 8) });
      }
    }
    if (forecast.length > 5) {
      forecast.splice(5);
    }
    console.log(forecast);

    return forecast.map((day, index) => {
      const num = index === 0 ? 0 : 4;

      const dayOfTheWeek =
        days[new Date(day.forecast[0].dt_txt.slice(0, 10)).getDay()];

      return (
        <div key={day.forecast[num].dt} className="weather-card">
          <div>{dayOfTheWeek}</div>
          <div>
            {new Date(day.forecast[0].dt_txt.slice(5, 10))
              .toLocaleDateString()
              .slice(0, 5)}
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${day.forecast[num].weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <div>{day.forecast[num].main.temp.toFixed(1)}</div>
        </div>
      );
    });
  };

  return <div className="daily-weather">{renderDailyWeather()}</div>;
};

export default DailyWeather;
