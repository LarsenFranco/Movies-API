import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Div, Text,Grid } from "../Elements/HomeMovie";

function Favorites() {
  const [pelis, setpelis] = useState([]);
  const favs = useSelector((state) => state);
 
   function getMovies() {
    setpelis(favs);
  }

 
  useEffect(() => {
    getMovies()
    return () => {
      
    }
  },[])
  
  return (
    <>
      <Div>
        <Text size="2rem">Favoritas:</Text>
      </Div>
      <Grid>
        {pelis.length &&
          pelis.map((peli) => (
            <MovieCard key={peli.id} props={peli}/>
          ))}
      </Grid>
    </>
  );
}

export default Favorites;
