import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HouseCard from "../../commons/HouseCard/HouseCard";
import styles from "./Grid.css"
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
    // width: 100%q
    <div className="grid-container">
      <div  className="grid-container">
        <ul className="gridColumns">
          {properties.map((house, i) => (
            
            <HouseCard key={i} house={house} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grid;

// const  Grid = () =>  {

//   const [houses, setHouses] = useState([])

//   return (
//     // width: 100%q
//     <div className="grid-container">
//       <div>
//         <ul className="gridColumns">
//           {fakeData.map((house, i) => (
//             <HouseCard key={i} house={house} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
