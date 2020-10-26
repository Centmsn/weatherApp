import React, { useState, useRef } from "react";
import gsap from "gsap";

import HourlyWeahter from "../HourlyWeather/HourlyWeather";

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
  const [hourlyListVisibility, setHourlyListVisiblity] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const dailyForecast = useRef(null);

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

    return forecast.map((day, index) => {
      // edit required
      const num = index === 0 ? 0 : 4;

      const dayOfTheWeek =
        days[new Date(day.forecast[0].dt_txt.slice(0, 10)).getDay()];

      return (
        <>
          <div
            key={day.forecast[num].dt}
            className="weather-card"
            onClick={(e) => toggleListVisibility(e, index)}
          >
            <div className="weather-card__day">{dayOfTheWeek}</div>
            <div className="weather-card__date">
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
            <div className="weather-card__temp">
              {day.forecast[num].main.temp.toFixed(1)}
              <sup>o</sup>C
            </div>
          </div>
          <HourlyWeahter
            toggleVisibility={() => {
              setHourlyListVisiblity({
                ...hourlyListVisibility,
                [index]: false,
              });

              const tl = gsap.timeline();
              const cards = [...dailyForecast.current.children].filter((card) =>
                card.classList.contains("weather-card")
              );

              tl.to(dailyForecast.current, { x: 0, duration: 0 }).to(cards, {
                stagger: 0.1,
                autoAlpha: 1,
                duration: 0.1,
                ease: "none",
              });
            }}
            active={hourlyListVisibility}
            index={index}
            data={forecast[index]}
          />
        </>
      );
    });
  };

  const toggleListVisibility = (e, index) => {
    const daily = dailyForecast.current;
    const tl = gsap.timeline();

    const cards = [...daily.children].filter((card) =>
      card.classList.contains("weather-card")
    );

    tl.to(cards, {
      stagger: 0.1,
      autoAlpha: 0,
      duration: 0.1,
      ease: "none",
    }).to(daily, {
      x: "100vw",
      duration: 0,
      ease: "none",
    });

    setHourlyListVisiblity({ ...hourlyListVisibility, [index]: true });
  };

  return (
    <div className="daily-weather" ref={dailyForecast}>
      {renderDailyWeather()}
    </div>
  );
};

export default DailyWeather;
