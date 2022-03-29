const favoritos = [];

const listaFavs = (state = favoritos, action) => {
    switch(action.type) {
      case "addFavorite":
        return [...state,state.push(action.payload)];
  
     
      default: return state;
    }    
  }
  
  export default listaFavs;