import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [doctor, setDoctor] = useState({})
  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
      .then(res => setDoctor(res.data))
      
  }, )

  return (
    <>
      <h1>Detail Dentist</h1>
      <h3>{doctor.name}</h3>
      <h3>{doctor.email}</h3>
      <h3>{doctor.website}</h3>
      <h3>{doctor.phone}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail