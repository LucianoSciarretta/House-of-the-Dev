import React from "react";
import HouseCard from "../../commons/HouseCard/HouseCard";
import styles from "./Search.css";
import { useSearchContext } from "../../state/SearchContext";

const Search = () => {
  const { searchProperties } = useSearchContext();

  return (
    <div className="grid-container">
      <div>
        <ul className="gridColumns">
          {searchProperties.map((house, i) => (
            <HouseCard key={i} house={house} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
