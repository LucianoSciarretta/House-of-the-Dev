import React, { createContext, useContext, useState } from "react";

 const HouseContext = createContext();

 const default_value = {}

 export const HouseProvider = ({ children }) => {
  const [eachHouse, setEachHouse] = useState(default_value);
  
  return (
    <HouseContext.Provider value={{ eachHouse, setEachHouse }}>
      {children}
    </HouseContext.Provider>
  );
};

export const useHouseContext = () => {
    return useContext(HouseContext)
}