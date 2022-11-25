import React, { createContext, useContext, useState } from "react";

 const AuthContext = createContext();

 const default_value = {}

 export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(default_value);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    return useContext(AuthContext)
}