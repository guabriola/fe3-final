export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DOCTORS':
            return {...state, list: action.payload}
        case 'ADD_FAV': 
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return {...state, theme: action.payload} 
        case 'DEL_FAV': 
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)}
        default:
            return state;
    }
}