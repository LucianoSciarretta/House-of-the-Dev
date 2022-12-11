import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Sidebar/Sidebar.css";
import { useSearchContext } from "../../state/SearchContext";
import SearchPanel from "../SearchPanel/SearchPanel";
// import SearchByPrice from "../";

function Sidebar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { searchProperties, setSearchProperties } = useSearchContext();

  // console.log("PROPERTIES", searchProperties)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/properties/search/${search}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log("BARRA DE BÚSQUEDA", res.data);
        setSearchProperties(res.data);
        navigate("/Search-Component");
      })
      .catch((error) => console.log("No se pudo encontrar propiedades"));
  };

  const handleProperties = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="sideBar-container">
      <div className="sideBar">
        <h3>Buscar Propiedades</h3>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscador "
              onChange={handleProperties}
              value={search}
            />
          </form>
           <SearchPanel />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
