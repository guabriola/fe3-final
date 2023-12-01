import React from 'react';
import { Link } from 'react-router-dom'
import { useDocStates } from './utils/global.context';


const Card = ({item}) => {

  const {state, dispatch} = useDocStates()
  const findFavorite = state.favs.find((fav) => fav.id === item.id) 

  const addOrDelFav = () => {
    if(!findFavorite){
      dispatch({type: 'ADD_FAV', payload: item})  
    }else {
      dispatch({type: 'DEL_FAV', payload: findFavorite})  
    }
  }

  return (
    
      <div className="card">
        <Link to={'/Detail/'+item.id} > {/****Aquí dejé pronto el link (TOdo el div es el link)*/}
          {/* En cada card deberan mostrar en name - username y el id */}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          <img src="../images/doctor.jpg" alt='Imagen del Doctor'/>
          <h3>{item.name}</h3>
          <h4>{item.username}</h4>
          <h4>ID: {item.id}</h4>
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        </Link>
          <button onClick={addOrDelFav} className="favButton">
            {findFavorite ? 'Delete Favorite' : 'Add to Favorites'}
          </button>
      </div>
    
  );
};

export default Card;
