import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../componentsStyles/AdminPanel.js/CreateProperty.css";

function CreateProperty() {
  const [price, setPrice] = useState();
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState();
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [adress, setAdress] = useState("");
  const [image, setImage] = useState("");


  const navigate = useNavigate()
  //Manejadores de estado

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handlePropertyType = (e) => {
    setPropertyType(e.target.value);
  };
  const handleRooms = (e) => {
    setRooms(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleNeighborhood = (e) => {
    setNeighborhood(e.target.value);
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/admin/house", {
      price: price,
      propertyType: propertyType,
      rooms: rooms,
      country: country,
      location: location,
      neighborhood: neighborhood,
      adress: adress,
      image: image,
    }).then(() => {
      alert("Propiedad creada exitosamente")
      navigate("/")
    })
    .catch(() => alert("No se pudo crear la propiedad"))
  };

  return (
    <div>
      <div className="createProperty-container">
        <h3>Ingrese los datos de la Propiedad</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="number"
              placeholder="Precio"
              onChange={handlePrice}
              value={price}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tipo de Propiedad"
              onChange={handlePropertyType}
              value={propertyType}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Ambientes"
              onChange={handleRooms}
              value={rooms}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="País"
              onChange={handleCountry}
              value={country}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ciudad"
              onChange={handleLocation}
              value={location}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Barrio"
              onChange={handleNeighborhood}
              value={neighborhood}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Dirección"
              onChange={handleAdress}
              value={adress}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Link de Imagen"
              onChange={handleImage}
              value={image}
            />
          </div>
          <div>
          <button type="submit">Crear Propiedad</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProperty;
