const favoritos = [];

const listaFavs = (state= favoritos, action) => {
    switch(action.type) {
      case "addFavorite":
       state.push(action.payload.peli)
        return state ;
      
     
      default: return state;
    }    
  }
  
  export default listaFavs;