import React, { useState } from "react";
import { Caja, ALink, CajaItem, Img, Title, Button } from "../Elements/Card";

function MovieCard(props) {
  //   let {title, image} = props;

  let [fav, setFav] = useState(true);

  let title = "Lost Everything happens";
  let image ="https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6800_AL_.jpg";
  return (
    <>
      <Caja>
        <CajaItem>
          <ALink href="#">
            <Img src={image} />
          </ALink>
          <Title>{title}
            {fav?
            <Button onClick={()=> setFav(!fav)}>⭐️</Button> : 
            <Button onClick={()=> setFav(!fav)}> ❌ </Button>}
          </Title>
          
          
        </CajaItem>
        
      </Caja>
    </>
  );
}

export default MovieCard;
