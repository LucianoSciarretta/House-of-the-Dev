import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HouseCard from "../../commons/HouseCard";

function MoreValue() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/moreValue", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res.data);
        setProperties(res.data);
      })
      .catch(() => alert("Ocurrió un problema"));
  }, []);

  return (
    <div className="grid-container">
      <div>
        <ul className="gridColumns">
          {properties.map((house, i) => (
            <HouseCard key={i} house={house} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoreValue;
