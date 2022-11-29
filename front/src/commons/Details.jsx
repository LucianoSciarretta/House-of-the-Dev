import React from "react";
import { useHouseContext } from "../state/houseContext";
import styles from "../componentsStyles/Details.css";

function Details() {
  const { eachHouse } = useHouseContext();
  console.log("HouseContext", eachHouse);
  return (
    <div className="details-container">
      <div>
        <div>
          <img
            src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg"
            alt=""
          />
        </div>
        
        <h5>Precio:  {eachHouse.price}</h5>
      </div>
      <div>
        <h5>Tipo de propiedad:  {eachHouse.propertyType}</h5>
      </div>
      <div>
        <h5>Cantidad de ambientes:  {eachHouse.rooms}</h5>
      </div>
      <div>
        <h5>País:  {eachHouse.country}</h5>
      </div>
      <div>
        <h5>Provincia:  {eachHouse.location}</h5>
      </div>
      <div>
        <h5>Barrio:  {eachHouse.neighborhood}</h5>
      </div>
      <div>
        <h5>Dirección:  {eachHouse.adress}</h5>
      </div>
      <div className="container-button">
        <button>Añadir a favoritos</button>
      </div>
    </div>
  );
}

export default Details;
