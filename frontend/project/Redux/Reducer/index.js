let pelis={
  favoritos: {results:["favorito"]},
  moviesView:[]
}

const moviesToRender = (state = pelis, action) => {
  let {favoritos, moviesView} = pelis
 
  switch (action.type) {
    case "addFavorite":
      console.log("fav"+action.payload.id)
      if(!favoritos.results.find((ob)=>ob.id === action.payload.id)){
        favoritos.results.push({...action.payload})
        state={...state,favoritos}
      }
      return state;
    
      case "removeFav": 
      favoritos.results=favoritos.results.filter((p)=>p.id !== action.payload)
      state={...state,favoritos}
      return state;
   
    //! ------------------------  

    case "setMovies":

      moviesView=action.payload
      state={...state,moviesView}
      return state
    default: return state;
  }
}

export default moviesToRender;