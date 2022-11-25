import React from 'react'
import HouseCardStyles from "../componentsStyles/HouseCardStyles.css"
import { useAuthContext } from '../state/userContext'






const  HouseCard =({house}) => {

const {user, setUser} = useAuthContext()


  return (
    <div>
        <img src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg" alt="casa..." />
        <div>
            <h5>{house.price}</h5>
        </div>
        <div>
            <h5>{house.propertyType}</h5>
        </div>
        <div>
            <h5>{house.rooms}</h5>
        </div>
        <div>
            <h5>{house.country}</h5>
        </div>
        <div>
            <h5>{house.location}</h5>
        </div>
        <div>
            <h5>{house.neighborhood}</h5>
        </div>
        <div>
            <h5>{house.adress}</h5>
        </div>
        <div>
            <h5>{house.image}</h5>
        </div>

    </div>

  )
}

export default HouseCard