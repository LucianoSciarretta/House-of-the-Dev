import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import UserCard from "../../commons/UserCard";
import styles from "../../componentsStyles/UsersGrid.css"

function UsersGrid() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("USERS-grid:::", users);
    axios
      .get(
        "http://localhost:3001/api/admin",

        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        // console.log("RES.DATA", res.data);
        setUsers(res.data);
      })
      .catch(() =>
        alert("Algo salió mal y no se pudo mostrar a todos los Usuarios")
      );
  }, []);

  return (
    <div className="grid-container">
      <div>
        <ul className="gridColumns">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UsersGrid;
