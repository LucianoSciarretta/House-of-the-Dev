import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../state/userContext";
import styles from "../componentsStyles/Navbar.css";
import { useEffect } from "react";
import AdminControlPanel from "./AdminControlPanel";
import { useFavoritesContext } from "../state/FavoritesContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  const { favoritesProperties, setFavoritesProperties } = useFavoritesContext();
  // console.log("NAVBAR", user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/auth/me", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data)
      .then((user) => {
        if (!user.email) return;

        setUser(user);
      })
      .catch(() => console.error("Algo salió mal en el /ME"));
  }, []);

  const handleFavorites = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3001/api/users/favorites/${user.email}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log("RES.DATA:::", res.data);
        setFavoritesProperties(res.data);
        navigate("/favorites");
      })
      .catch((error) => console.error("Algo salió mal"));
  };

  //  console.log("PROPIEDADES FAVORITAS",favoritesProperties)

  const handleLogout = (event) => {
    // console.log("evento:", event)
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/auth/logout",
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then(() => {
        setUser({});
        console.log("Tu sesión ha terminado");
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
          <>
            <div className="login-button">
              <Link to="/login">
                <button>Iniciar sesión</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="logout-button">
            <h2>{user.name}</h2>
            <Link to="/login">
              <button onClick={handleLogout}>Cerrar sesión</button>
            </Link>
            {user.isAdmin && (
              <div>
                <AdminControlPanel />
              </div>
            )}
          </div>
        )}
        {user.email && <button onClick={handleFavorites}>Favoritos</button>}
        <Link to="/">
          <button>Página principal</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;


