import React from "react";

import "./locationinfo.css";

const LocationInfo = ({ data }) => {
  const { name, country } = data;

  return (
    <div className="location-info">
      <span>
        {name}, {country.toUpperCase()}
      </span>
    </div>
  );
};

export default LocationInfo;
