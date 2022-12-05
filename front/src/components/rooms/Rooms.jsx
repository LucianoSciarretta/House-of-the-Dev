import React from "react";
import { useRoomContext } from "../../state/RoomContext";
import styles from "./Rooms.css";
import HouseCard from "../../commons/HouseCard";

function Rooms() {
  const { rooms } = useRoomContext();
  console.log("ROOMS", rooms);

  return (
    <div className="grid-container">
      <div>
        <ul className="gridColumns">
          {rooms.length === 0
            ? <h3>No se encotraron propiedades con esas características</h3>
            : rooms.map((house, i) => <HouseCard key={i} house={house} />)}
        </ul>
      </div>
    </div>
  );
}

export default Rooms;
