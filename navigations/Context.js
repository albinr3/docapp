import React, { createContext, useState, useContext } from 'react';

const VariablesContext = createContext();

export const VariablesProvider = ({ children }) => {
  const [gps, setGps] = useState({});

  return (
    <VariablesContext.Provider value={{ gps, setGps }}>
      {children}
    </VariablesContext.Provider>
  );
};

export const useVariables = () => useContext(VariablesContext);
