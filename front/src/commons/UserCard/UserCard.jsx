import React from "react";
import styles from "../UserCard/UserCard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserCard = ({ user }) => {
  // const {cardUser, setCardUser} = useCardUserContext()

  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:3001/api/admin/${user.id}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then(() => window.location.reload(false))

      .then(() => alert("Usuario eliminado correctamente"))
      .catch(() => alert("No se pudo eliminar el usuario"));
  };

  const handleRol = () => {
    axios
      .put(
        `http://localhost:3001/api/admin/${user.id}`,
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then(() => {
        window.location.reload(false);
      })
      .then(() => alert("El usuario ahora tiene permisos de administrador "))
      .catch(() => alert("No se pudo cambiar el rol del usuario"));
  };

  return (
    <div className=" userCard-container">
      <div>
        <h5>Id: {user.id}</h5>
      </div>
      <div>
        <h5>Nombre: {user.name} </h5>
      </div>
      <div>
        <h5> Apellido: {user.lastName}</h5>
      </div>
      <div>
        <h5>Email: {user.email} </h5>
      </div>
      <div>
        <h5>Rol: {user.isAdmin ? "Administrador" : "Usuario"} </h5>
      </div>
      <div className="container-buttons">
        <div>
          <button onClick={handleDeleteUser}>Eliminar Usuario</button>
        </div>
        <div>
          <button onClick={handleRol}>Cambiar Rol</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
