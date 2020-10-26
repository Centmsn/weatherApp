import React, { createContext, useState } from "react";

const SearchContext = createContext("");

export const SearchStore = ({ children }) => {
  const [value, setValue] = useState("");

  const setInputValue = (value) => {
    setValue(value);
  };

  return (
    <SearchContext.Provider value={{ value, setValue: setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
