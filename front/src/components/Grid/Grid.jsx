import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HouseCard from "../../commons/HouseCard/HouseCard";
import styles from "./Grid.css";
import fakeData from "../../utils/fakeData";

const Grid = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data)
      .then((houses) => setProperties(houses))
      .catch(() => console.error("No se pudo mostrar las propiedades"));
  }, []);

  return (
   
      <ul className="grid-container">
        {properties.map((house, i) => (
          <HouseCard key={i} house={house} />
        ))}
      </ul>
  );
};

export default Grid;


