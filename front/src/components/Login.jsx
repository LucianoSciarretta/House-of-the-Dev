import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../componentsStyles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      .post("http://localhost:3001/api/auth/login", { email, password })
      .then((res) => {
        console.log(res.data);
        // res.data;
        navigate("/home")
      })
      .catch(() => console.error("Ocurrió un problema"))
  };

  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
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
              type="text"
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
