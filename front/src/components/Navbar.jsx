import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../componentsStyles/Navbar.css"

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <h1>House of the Dev</h1>
            <Link to="/register">
              <button>Registro</button>
            </Link>
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
            <Link to="/logout">
              <button>Cerrar sesión</button>
            </Link>
            <Link to="/home">
              <button>Página principal</button>
            </Link>

        </div>
    </div>
  )
}

export default Navbar