import React, { useState } from "react";
import { Caja, ALink, CajaItem, Img, Title, Button } from "../Elements/Card";

function MovieCard({props}) {
  let {fullTitle, image} = props;
  let [fav, setFav] = useState(true);

  
  return (
    <>
      <Caja>
        <CajaItem>
          <ALink href="#">
            <Img src={image} />
            <Title>{fullTitle}
          </Title>
          {fav?
            <Button onClick={()=> setFav(!fav)}>⭐️</Button> : 
            <Button onClick={()=> setFav(!fav)}> ❌ </Button>}
          </ALink>
        </CajaItem>
        
      </Caja>
    </>
  );
}

export default MovieCard;
