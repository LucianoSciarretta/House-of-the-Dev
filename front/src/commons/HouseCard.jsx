import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HouseCardStyles from "../componentsStyles/HouseCardStyles.css";
import { useHouseContext } from "../state/houseContext";
import { useAuthContext } from "../state/userContext";

const HouseCard = ({ house }) => {
  const {user} = useAuthContext()
  const { eachHouse, setEachHouse } = useHouseContext();
  return (
    <div className="HouseCard-Container">
      <div>
        <img
          src={house.image}
          alt="casa..."
        />

        <div>
          <h5>Precio: {house.price}</h5>
        </div>
        <div>
          <Link to="/details">
            <button onClick={() => setEachHouse(house)}>
              {user.isAdmin ? "Detalles de la propiedad y opciones de edición" : "Detalles de la propiedad"}
              
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HouseCard;
