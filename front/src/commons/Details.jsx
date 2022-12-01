import React from "react";
import { useHouseContext } from "../state/houseContext";
import styles from "../componentsStyles/Details.css";
import axios from "axios";
import { useAuthContext } from "../state/userContext";

function Details() {
  const { eachHouse } = useHouseContext();
  const { user } = useAuthContext();
  // console.log(user)
  const handleFavorites = (eachHouse) => {
    // console.log("HOUSE", eachHouse);
    
    axios
      .post(
        "http://localhost:3001/api/users/favorites",
        {
          email: user.email,
          property: eachHouse,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => console.log(res.data))
      .catch(() => alert("No se pudo completar la operación"));
  };

  const handleDelete = () => {
    axios
      .delete(
        `http://localhost:3001/api/admin/house/${eachHouse.id}`,
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then(() => console.log("Propiedad eliminada correctamente"))
      .catch((error) => alert("No se pudo eliminar la propiedad"));
  };

  return (
    <div className="details-container">
      <div>
        <div>
          <img src={eachHouse.image} alt="" />
        </div>

        <h5>Precio: {eachHouse.price}</h5>
      </div>
      <div>
        <h5>Tipo de propiedad: {eachHouse.propertyType}</h5>
      </div>
      <div>
        <h5>Cantidad de ambientes: {eachHouse.rooms}</h5>
      </div>
      <div>
        <h5>País: {eachHouse.country}</h5>
      </div>
      <div>
        <h5>Provincia: {eachHouse.location}</h5>
      </div>
      <div>
        <h5>Barrio: {eachHouse.neighborhood}</h5>
      </div>
      <div>
        <h5>Dirección: {eachHouse.adress}</h5>
      </div>
      <div className="container-favorites">
        <button onClick={() => handleFavorites(eachHouse)}>
          Añadir a favoritos
        </button>
      </div>
      {user.isAdmin && (
        <div className="container-delete">
          <button onClick={handleDelete}>Eliminar Propiedad</button>
        </div>
      )}
    </div>
  );
}

export default Details;
