import axios from 'axios';
import React, { useEffect } from 'react'

function Home() {

    useEffect(() => {
        axios.get("http://localhost:3001/api/auth/me").then((res) => {
          console.log(res);
        })
        .catch(() =>  console.error("Ocurrió un problema"))
      }, []);


  return (
    <h1>Home</h1>
  )
}

export default Home