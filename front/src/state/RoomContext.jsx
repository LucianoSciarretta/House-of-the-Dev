import React, { createContext, useContext, useState } from "react";

 const RoomContext = createContext();

 const default_value = []

 export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(default_value);
  
  return (
    <RoomContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => {
    return useContext(RoomContext)
}