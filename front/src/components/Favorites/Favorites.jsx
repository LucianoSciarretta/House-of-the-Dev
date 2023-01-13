import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import HouseCard from "../../commons/HouseCard/HouseCard";
import { useFavoritesContext } from "../../state/FavoritesContext";
import { useAuthContext } from "../../state/userContext";
import styles from "../Favorites/Favorites.css";
const Favorites = () => {
  const { user, setUser } = useAuthContext();
  const { favoritesProperties } = useFavoritesContext();

  return (
      <ul className="favorite-container">
        {favoritesProperties.map((house, i) => (
          <HouseCard house={house} key={i} />
        ))}
      </ul>
  );
};

export default Favorites;
