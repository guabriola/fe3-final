import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../../Reducers/reducer";


const DocStates = createContext()

//Estado inicial
const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: 'light',
}

//Context
const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'

  //Cambio el tema
  const changeTheme = (newTheme) => {
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  }

  //Saco listado de Doctores
  useEffect(() => {
      axios(url)
      .then(res => dispatch({type: 'GET_DOCTORS', payload: res.data}))
  }, [])

  //Guardo los favoritos en el Storage
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])


  return (
    <DocStates.Provider value={{state, dispatch, changeTheme}}>
      {children}
    </DocStates.Provider>
  );
};

export default Context

export const useDocStates = () => useContext(DocStates) 