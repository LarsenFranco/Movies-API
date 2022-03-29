import React, { useEffect, useState } from "react";

import {Caja,Img,  MovieInfo,  Overview,  Title,  Vote,Button,} from "../Elements/Card";

import { addFavorite } from "../../Redux/Actions";
import { useDispatch} from "react-redux";

function MovieCard({ props }) {

  let { original_title, poster_path, vote_average, overview } = props;
  const path = "https://image.tmdb.org/t/p/w1280";


  const dispatch = useDispatch()

  let [btnFav, setBtnFav] = useState({
    state: true,
    text: "Fav",
    text2: "Unfav",
  });
  let [like, setLike] = useState({
    state: true,
    text: "Like",
    text2: "Unlike",
  });

  let [fav, setFav] = useState({});


  const setColorByVote = (votes) => {
    let colorResult = "";
    votes > 0 ? (colorResult = "red") : null;
    votes > 5 ? (colorResult = "yellow") : null;
    votes >= 7 ? (colorResult = "#37ff00") : null;
    return colorResult;
  };

  const onClickFav = () => {
    setBtnFav({ ...btnFav, state: !btnFav.state });
    if (btnFav.state) {
      setFav({ original_title, poster_path, vote_average, overview });
      dispatch(addFavorite({ original_title, poster_path, vote_average, overview }))
    } 
  };

  const onClickLike = () => {
    setLike({ ...like, state: !like.state });
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
          <Button onClick={onClickFav}>
            {btnFav.state ? btnFav.text : btnFav.text2}
          </Button>
          <Button onClick={onClickLike}>
            {like.state ? like.text : like.text2}
          </Button>
          <h3>Description:</h3>
          {overview}
        </Overview>
      </Caja>
    </>
  );
}

export default MovieCard;
