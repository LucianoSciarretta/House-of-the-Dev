import React from 'react'
import HouseCard from '../commons/HouseCard';
import styles from "../componentsStyles/Grid.css"
import fakeData from "../utils/fakeData"

function Grid() {
  return (
    <ul  className="gridColumns">
      
    {fakeData.map((house, i) => {
    
      
      return <HouseCard key={i} house={house} />;
    })}
  </ul>
  )
}

export default Grid