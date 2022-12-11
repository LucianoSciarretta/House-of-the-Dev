import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../state/userContext";
import styles from "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/auth/login",
        { email, password },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        // console.log("RES login:", res.data);
        //Al usuario del estado global le seteo el payload(name, lastName, email, isAdmin)
        // console.log("USER LOGIN VACÍO", user);
        setUser(res.data);
      }).then(() => navigate("/"))
      .catch(() => alert("Ocurrió un problema en su inicio de sesión"));
      // console.log("USER CON DATA", user);
  };
  //Después que se cumple la promesa el seter del contexto global cambia el estado de user
  // navigate("/");
  
  return (
    <div className=" container-div">
      <div >
        <h1>Login</h1>
        <form className="login" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="email"
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              onChange={handlePassword}
              value={password}
            />
          </div>
          <div>
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
