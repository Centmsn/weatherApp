import React, { useState, createContext } from "react";

const DegreeContext = createContext(true);

export const DegreeStore = ({ children }) => {
  const [degrees, setDegrees] = useState(true);

  const switchDegrees = () => {
    setDegrees((prev) => !prev);
  };

  return (
    <DegreeContext.Provider value={{ degrees, switchDegrees }}>
      {children}
    </DegreeContext.Provider>
  );
};

export default DegreeContext;
