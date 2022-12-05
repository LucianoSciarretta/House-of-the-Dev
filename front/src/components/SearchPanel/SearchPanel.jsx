import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRoomContext } from "../../state/RoomContext";
import Rooms from "../rooms/Rooms";
import styles from "./SearchPanel.css";

function SearchPanel() {
  const navigate = useNavigate();
  const {setRooms} = useRoomContext();

  //Preguntar por la burrada del parámetro del useState. Puse string para que no me pise el placeHolder del input
  const [roomNumber, setRoomNumber]  = useState("")



  const handleRoomNumber = (e) => {
    setRoomNumber(e.target.value);
  };


 


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:3001/api/properties/rooms/${roomNumber}`,
        {},
        {
          withCredentials: true,
        credentials: "include",
        }
      )
      .then((res) => {
        console.log("ROOMS-DATA",res.data)
        setRooms(res.data)

      }).then(() => navigate("/rooms"))
      .catch(() => alert("Hubo un error en  su petición"));
  };
  console.log("ROOMS",roomNumber)

  return (
    <div>
      <div>
        <div className="dropdown-container-filters">
          <h3>Filtros</h3>
          <ul>
            <Link to="/moreValue">
              <li>Mayor a Menor Precio</li>
            </Link>
            <Link to="/lessValue">
              <li>Menor a Mayor Precio</li>
            </Link>
            <form onSubmit={handleSubmit}>
              <li>Ambientes</li>
              <input
                type="number"
                onChange={handleRoomNumber}
                value={roomNumber}
                placeholder="Cantidad"
              />
            </form>
          </ul>
          
        </div>
      </div>
    </div>
     
  );
}

export default SearchPanel;
