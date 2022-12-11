import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.css"
import { useAuthContext } from "../../state/userContext";


const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {user} = useAuthContext()
  

console.log("USERREGISTER", user)
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(() => {
        alert("Usuario creado exitosamente");
        navigate("/login");
      })
      .catch(() => alert("No se pudo crear el usuario"));
  };

  return (
    <div className="register-container">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="nombre"
            onChange={handleName}
            value={name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="apellido"
            onChange={handleLastName}
            value={lastName}
          />
        </div>
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
        {!user.email&&
          <button type="submit">Registrarse</button>
        }
        </div>
        
      </form>
    </div>
  );
};

export default Register;
