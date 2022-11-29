import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HouseCardStyles from "../componentsStyles/HouseCardStyles.css";
import { useHouseContext } from "../state/houseContext";

const HouseCard = ({ house }) => {
  const { eachHouse, setEachHouse } = useHouseContext();

  return (
    <div className="HouseCard-Container">
      <div>
        <img
          src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg"
          alt="casa..."
        />

        <div>
          <h5>{house.price}</h5>
        </div>
        <div>
          <Link to="details">
            <button onClick={() => setEachHouse(house)}>
              Detalles de la propiedad
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HouseCard;
