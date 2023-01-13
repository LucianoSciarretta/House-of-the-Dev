import React from "react";
import { Link } from "react-router-dom";
import styles from "../AdminControlPanel/AdminControlPanel.css";

function AdminControlPanel() {
  return (
    <div>
      <div className="dropdown-container">
        <h3>Panel de Administrador</h3>
        <ul>
          <Link className="link"  to="/create-property">
            <li>Crear Propiedad</li>
          </Link>
          <Link className="link"  to="/show-users">
            <li>Mostrar Usuarios</li>
          </Link>
          <Link className="link"  to="delete-user">
            <li>Borrar Usuario</li>
          </Link>
          <Link className="link"  to="/">
            <li>Editar Propiedad</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminControlPanel;
