import React from "react";
import { useHouseContext } from "../state/houseContext";
import styles from "../componentsStyles/Details.css";
import axios  from "axios"
import {useAuthContext} from "../state/userContext"


function Details() {
  const { eachHouse } = useHouseContext();
  
  const { user } = useAuthContext();

  
   const handleDelete = () => {
    axios.delete("http://localhost:3001/api/admin/house/:id",{},    {
      withCredentials: true,
      credentials: "include",
    }).then(() => alert("Propiedad eliminada correctamente"))
    .catch((error) => alert("No se pudo eliminar la propiedad"))
   }




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
      <div className="container-favorites">
        <button>Añadir a favoritos</button>
      </div>
      { user.isAdmin &&
      <div className="container-delete">
        <button onClick={handleDelete} >Eliminar Propiedad</button>
      </div>
      }
    </div>
  );
}

export default Details;
