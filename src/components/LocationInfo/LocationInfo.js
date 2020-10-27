import React, { useContext } from "react";

import DegreeContext from "../../context/DegreeContext";

import "./locationinfo.css";

const LocationInfo = ({ data }) => {
  const { degrees, switchDegrees } = useContext(DegreeContext);
  const { name, country } = data;

  return (
    <>
      <div className="location-info">
        <div className="location-info__box">
          <span>
            <span className="location-info__name">{name}</span>,{" "}
            {country.toUpperCase()}
          </span>
          <br />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="location-info__box--bottom">
          <button className="location-info__btn" onClick={switchDegrees}>
            <sup>o</sup>
            {degrees ? "F" : "C"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
