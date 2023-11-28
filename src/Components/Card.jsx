import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {

  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }



  return (
    <Link to={'Detail/'+id} > {/****Aquí dejé pronto el link (TOdo el div es el link), por el momento solo re dirige a Contacts. */}
      <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          <img src="/public/images/doctor.jpg"/>
          <h3>{name}</h3>
          <h4>{username}</h4>
          <h4>ID: {id}</h4>
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          
          <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    </Link>
  );
};

export default Card;
