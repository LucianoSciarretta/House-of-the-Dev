import React, { useState } from 'react'
import { useEffect } from 'react'
import {useAuthContext } from "../state/userContext"


const  Favorites = ()  =>{
    const {user, setUser} = useAuthContext()
    const [favorites, setFavorites] = useState({})

      


  return (
    <div>Favorites</div>
  )
}

export default Favorites