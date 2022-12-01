import React, { createContext, useContext, useState } from "react";

 const FavoritesContext = createContext();

 const default_value = []

 export const FavoritesProvider = ({ children }) => {
  const [favoritesProperties, setFavoritesProperties] = useState(default_value);
  
  return (
    <FavoritesContext.Provider value={{ favoritesProperties, setFavoritesProperties }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
    return useContext(FavoritesContext)
}