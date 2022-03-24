import React, { useState } from "react";
import { Caja, Img,MovieInfo, Overview, Title,Vote} from "../Elements/Card";

function MovieCard({props}) {
  const path="https://image.tmdb.org/t/p/w1280"
  let {original_title, poster_path,vote_average,overview} = props;
  let [fav, setFav] = useState(true);

  
  return (
    <>
      <Caja>
          <Img src={`${path}${poster_path}`}/>
          <MovieInfo>
            <Title>{original_title} </Title>
            <Vote>{vote_average}</Vote>
          </MovieInfo>
          <Overview>
            <h3>Descripcion:</h3>
            {overview} 
            </Overview>
      </Caja>
    </>
  );
}

export default MovieCard;
