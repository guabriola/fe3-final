import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../../Reducers/reducer";

//Esto venia asi en el Repo
//export const initialState = {theme: "", data: []}
//export const ContextGlobal = createContext(undefined);

const DocStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || []
    // theme
}

const Context = ({ children }) => {

  

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
      axios(url)
      .then(res => dispatch({type: 'GET_DOCTORS', payload: res.data}))
  }, [])

  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <DocStates.Provider value={{state, dispatch}}>
      {children}
    </DocStates.Provider>
  );
};

export default Context

export const useDocStates = () => useContext(DocStates) 