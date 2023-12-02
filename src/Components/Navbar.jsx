import React from 'react'
import { Link } from 'react-router-dom'
import { useDocStates } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  const {state, changeTheme} = useDocStates()

  //Funcion del botón para cambiar el tema
  const handleChangeTheme = () => {
    if (state.theme === 'dark') changeTheme('light')
    if (state.theme === 'light') changeTheme('dark')
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
      <Link to="/">Home</Link>
      <Link to="Favs" >Favorites</Link>
      <Link to="Contact" >Contact</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar