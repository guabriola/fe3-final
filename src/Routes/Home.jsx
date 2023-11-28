import React, {useState, useEffect} from 'react';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [doctores, setDoctores] = useState([]);

  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    setDoctores(convert)
    }

    //useEffect
    useEffect(() => {
      getData();
      });

  return (
    <main className="" >  
      <h1>Home</h1>
      <div className='card-grid'>
        {doctores.map(doctor => <Card key={doctor.id} name={doctor.name} username={doctor.username} id={doctor.id}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home