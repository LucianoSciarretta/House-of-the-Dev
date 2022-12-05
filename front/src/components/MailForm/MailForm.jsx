import axios from "axios";
import React from "react";
import { useState } from "react";
import styles from "./MailForm.css";
function MailForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/email",

        {
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        console.log("RESPUESTA", res.data);
        alert("Información recibida correctamente");
      })
      .catch(() => alert("Ocurrió un problema en el envío del mensaje"));
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleName}
              value={name}
              type="text"
              placeholder="Nombre Completo"
            />
          </div>
          <div>
            <input
              onChange={handlePhone}
              value={phone}
              type="text"
              placeholder="Número de Teléfono"
            />
          </div>
          <div>
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              onChange={handleMessage}
              value={message}
              type="text"
              placeholder="Deje su mensaje"
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailForm;
