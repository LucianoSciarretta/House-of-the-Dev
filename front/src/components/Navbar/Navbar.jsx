import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../state/userContext";
import styles from "./Navbar.css";
import { useEffect } from "react";
import AdminControlPanel from "../AdminControlPanel/AdminControlPanel";
import { useFavoritesContext } from "../../state/FavoritesContext";

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
        <div className="container-title">
          <h1>House of the Dev</h1>
        </div>
        <div className="button-container">
          <div className="register-favorites-paginaPrincipal">
            {!user.email && (
              <Link to="/register">
                <div className="button-hover">
                  <h3>Registro</h3>
                </div>
              </Link>
            )}
            {user.email && (
              <div className="button-hover">
                <h3  onClick={handleFavorites}>
                  Favoritos
                </h3>
              </div>
            )}
            <Link to="/">
              <div className="button-hover">
                <h3>Página principal</h3>
              </div>
            </Link>
          </div>
          <div className="admin-logout">
            {!user.email ? (
              <>
                <div className="login-button">
                  <Link to="/login">
                    <div className="button-hover">
                      <h3>Iniciar sesión</h3>
                    </div>
                  </Link>
                </div>
              </>
            ) : (
              <div className="logout-button">
                <h3>{user.name}</h3>
                <Link to="/login">
                  <div className="button-hover">
                    <h3 onClick={handleLogout}>Cerrar sesión</h3>
                  </div>
                </Link>
                {user.isAdmin && (
                  <div>
                    <AdminControlPanel />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
