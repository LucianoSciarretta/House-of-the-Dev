import React, { createContext, useContext, useState } from "react";

 const SearchContext = createContext();

 const default_value = []

 export const SearchProvider = ({ children }) => {
  const [searchProperties, setSearchProperties] = useState(default_value);
  
  return (
    <SearchContext.Provider value={{ searchProperties, setSearchProperties }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
    return useContext(SearchContext)
}