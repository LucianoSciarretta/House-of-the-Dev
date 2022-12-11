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
    <div>
      <div className="favorite-container">
        <div>
          <div className="favoritos-div">
          </div>
           <h2>Favoritos</h2>
          <ul className="favorite-columns">
            {favoritesProperties.map((house, i) => (
              <HouseCard house={house} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
