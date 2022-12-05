import React from "react";
import { Link } from "react-router-dom";
import styles from "../componentsStyles/AdminControlPanel.css";

function AdminControlPanel() {
  return (
    <div>
      <div className="dropdown-container">
        <h3>Panel de Administrador</h3>
        <ul>
          <Link to="/create-property">
            <li>Crear Propiedad</li>
          </Link>
          <Link to="/show-users">
            <li>Mostrar Usuarios</li>
          </Link>
          <Link to="delete-user">
            <li>Borrar Usuario</li>
          </Link>
          <Link to="/">
            <li>Editar Propiedad</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminControlPanel;
