import React, { useEffect, useState, useRef, useContext } from "react";
import gsap from "gsap";

import SearchContext from "../../context/SearchContext";

import "./searchbar.css";

const SearchBar = ({ fetchWeather }) => {
  const { value, setValue } = useContext(SearchContext);
  const [firstSearch, setfirstSearch] = useState(true);
  const searchBtn = useRef(null);
  const mainBar = useRef(null);
  const welcomeInfo = useRef(null);

  useEffect(() => {
    const bar = mainBar.current;
    const btn = searchBtn.current;
    const tl = gsap.timeline();
    const getScreenCenter = () => window.innerHeight / 2;

    gsap.set(bar, { autoAlpha: 0, y: getScreenCenter });
    gsap.set(btn, { x: "100vw" });

    tl.to(bar, { duration: 1.25, autoAlpha: 1, y: "-=100" }).to(
      btn,
      {
        x: 0,
        duration: 0.5,
        ease: "back.out(1)",
      },
      "-=0.5"
    );
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const bar = mainBar.current;
    const info = welcomeInfo.current;
    const weather = document.querySelector(".weather-container");

    //   if first search move bar to the top
    if (firstSearch) {
      setfirstSearch((prev) => !prev);
      const tl = gsap.timeline();

      tl.to(bar, { y: 0 })
        .to(info, { autoAlpha: 0, duration: 0.5, x: -100 })
        .to(weather, { autoAlpha: 1, duration: 0.5, scale: 1 });

      fetchWeather(value);
    } else {
      const tl = gsap.timeline();

      tl.to(weather, { autoAlpha: 0, scale: 0, duration: 0.5 }).to(weather, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
      });

      setTimeout(() => {
        fetchWeather(value);
      }, 400);
    }

    setValue("");
  };

  const renderWelcomeInfo = () => {
    return (
      <div className="search-bar__info" ref={welcomeInfo}>
        <p className="search-bar__info-text">I want to check weather in...</p>
      </div>
    );
  };

  return (
    <div className="search-bar" ref={mainBar}>
      {renderWelcomeInfo()}
      <form className="search-bar__form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="search-bar__input"
          autoFocus={true}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="City name..."
        />
        <button className="search-bar__btn" ref={searchBtn}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
