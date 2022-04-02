let pelis={
  favoritos: [],
  moviesView:[]
}

const moviesToRender = (state = pelis, action) => {
  let {favoritos, moviesView} = pelis
 
  switch (action.type) {
    case "addFavorite":
      console.log("fav"+action.payload.peli.id)
      favoritos.push(action.payload.peli)
      return favoritos;
    
      case "removeFav": 
      favoritos=favoritos.filter((p)=>p.id !== action.payload)
      return favoritos;
   
    //! ------------------------  

    case "setMovies":

      moviesView=action.payload
      
      return moviesView
    default: return state;
  }
}

export default moviesToRender;