import React from "react";
import { Link } from "react-router-dom";
import HouseCard from "../commons/HouseCard";
import styles from "../componentsStyles/Grid.css";
import fakeData from "../utils/fakeData";

function Grid() {
  return (
    // width: 100%q
    <div className="grid-container">  
      <div>
        <ul className="gridColumns">
          {fakeData.map((house, i) => (
            <HouseCard key={i} house={house} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Grid;
