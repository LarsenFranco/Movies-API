import React, { useEffect, useState } from "react";
import { Caja, Img,MovieInfo, Overview, Title,Vote,Button} from "../Elements/Card";

function MovieCard({props}) {
  const path="https://image.tmdb.org/t/p/w1280"
  let {original_title, poster_path,vote_average,overview} = props;

  let [fav, setFav] = useState({state:true, text:"Fav", text2:"Unfav"});

  let [like, setLike] = useState({state:true, text:"Like", text2:"Unlike"});


   function setColorByVote (votes){
     let colorResult="";
      votes>0?colorResult="red":null;
      votes>5?colorResult="yellow":null;
      votes>=7?colorResult="#37ff00":null;
      return colorResult
   }



 
   
const onClickFav = () =>{
  setFav({...fav,state:!fav.state})
}
  
  return (
    <>
      <Caja>
          <Img src={`${path}${poster_path}`}/>
          <MovieInfo>
            <Title>{original_title} </Title>
            <Vote color={setColorByVote(vote_average)}>{vote_average}</Vote>
          </MovieInfo>
            <Overview>
              <Button  onClick={onClickFav }>{fav.state?fav.text:fav.text2}</Button>
              <Button   onClick={()=>setLike({...like,state:!like.state})}>{like.state?like.text:like.text2}</Button>
              <h3>Description:</h3>
              {overview} 
            </Overview>
      </Caja>
    </>
  );
}

export default MovieCard;
