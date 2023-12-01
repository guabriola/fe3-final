export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DOCTORS':
            return {...state, list: action.payload}
        case 'ADD_FAV': 
            return {...state, favs: [...state.favs, action.payload]} //Acá primero copiamos lo que ya está en Favs y sumamos el nuevo favorito
        case 'CHANGE_THEME':
            return {} //INCOMPLETO
        case 'GET_DOCTOR':
            return {} //INCOMPLETO
        case 'DEL_FAV': 
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)}
        default:
            return state;
    }
}