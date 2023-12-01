import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import photo from '../images/doctor.jpg'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [doctor, setDoctor] = useState({})
  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    //console.log(url)
    axios(url)
      .then(res => setDoctor(res.data))
      
  }, )

  return (
    <>
      <h1>DR. {doctor.name} </h1>
      <img src={photo} alt='Imagen del doctor'/>
      <h3>Email: {doctor.email}</h3>
      <h3>WebSite: {doctor.website}</h3>
      <h3>Phone: {doctor.phone}</h3>
      <h3>Doctor Id: {doctor.id}</h3>
      <Link to="/" >Volver</Link>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail