import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Secret = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/api/auth/secret")
     .then(res => console.log("RES.DATA.LOGIN",res.data))   

  }, [])


  return <div>Secret</div>;
};

export default Secret;
