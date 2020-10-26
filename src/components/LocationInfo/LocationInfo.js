import React from "react";

import "./locationinfo.css";

const LocationInfo = ({ data }) => {
  const { name, country } = data;

  return (
    <div className="location-info">
      <span className="location-info__text">
        {name}, {country.toUpperCase()}
      </span>
      <span className="location-info__text">
        {new Date().toLocaleDateString()}
      </span>
    </div>
  );
};

export default LocationInfo;
