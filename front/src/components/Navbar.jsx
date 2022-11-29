import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../state/userContext";
import styles from "../componentsStyles/Navbar.css";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  console.log("NAVBAR", user)
  useEffect(() => {
    
    if(!user.email) return
    axios
      .get("http://localhost:3001/api/auth/me", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data)
      .then((user) => {
        console.log("USER NAVBAR", user);
        setUser(user);
      })
      .catch(() => alert("Algo salió mal en el /ME"));
    
  }, []);

  const handleLogout = (event) => {
    // console.log("evento:", event)
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/logout",{}, {
        withCredentials: true,
        credentials: "include",
      })
      .then(() => {
        setUser({});
        alert("Tu sesión ha terminado");
        navigate("/");
      })
      .catch(() => console.error("Ocurrió un error"));
  };
  return (
    <div>
      <div className="navbar">
        <h1>House of the Dev</h1>
        <Link to="/register">
          <button>Registro</button>
        </Link>
        {!user.email ? (
          <div className="login-button">
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
          </div>
        ) : (
          <div className="logout-button">
            <h2>{user.name}</h2>
            <Link to="/login">
              <button onClick={handleLogout}>Cerrar sesión</button>
            </Link>
          </div>
        )}
        <Link to="/">
          <button>Página principal</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
