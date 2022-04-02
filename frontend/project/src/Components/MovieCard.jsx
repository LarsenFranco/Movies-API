import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../Redux/Actions";

import {
  Caja,
  Img,
  MovieInfo,
  Overview,
  Title,
  Vote,
  Button,
} from "../Elements/Card";



function MovieCard({ props }) {
  let { original_title, poster_path, vote_average, overview, id } = props;
  let path = "https://image.tmdb.org/t/p/w1280";
  const dispatch=useDispatch();
  
  if(!poster_path){
    path="https://image.shutterstock.com"
    poster_path="/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg"
  }


  let [btnFav, setBtnFav] = useState({
    state: true
  });

  let [like, setLike] = useState({
    state: true
  });
  const setColorByVote = (votes) => {
    let colorResult = "";
    votes > 0 ? (colorResult = "red") : null;
    votes > 5 ? (colorResult = "yellow") : null;
    votes >= 7 ? (colorResult = "#37ff00") : null;
    return colorResult;
  };

   const onClickFav = () => {
     dispatch(addFavorite({from:"fav",...props}));
  
  };

  const onClickLike = () => {
    setLike({ state: !like.state });
  };

  return (
    <>  
      <Caja>
        <Img src={`${path}${poster_path}`} />
        <MovieInfo>
          <Title>{original_title} </Title>
          <Vote color={setColorByVote(vote_average)}>{vote_average}</Vote>
        </MovieInfo>
        <Overview>
        <Button onClick={()=> onClickFav()}>Fav</Button>             
          <Button onClick={onClickLike}>
            {like.state ? "Like":"UnLike"}
          </Button>
          <h3>Description:</h3>
          {overview}
        </Overview>
      </Caja>
    </>
  );
}

export default MovieCard;
