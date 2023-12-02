import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import photo from '../images/doctor.jpg'


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
    <div className='doc-detail'>
      <h1>DR. {doctor.name} </h1>
      <img src={photo} alt='Imagen del doctor'/>
      <div>
        <h3>Email:</h3> <span>{doctor.email}</span>
        <h3>WebSite:</h3> <span>{doctor.website}</span>
        <h3>Phone:</h3> <span>{doctor.phone}</span>
      </div>
      <Link to="/" >Volver</Link>

    </div>
  )
}

export default Detail