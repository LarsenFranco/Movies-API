import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

import { Div, Text,Grid } from "../Elements/HomeMovie";

function Home() {
  const [pelis, setpelis] = useState([]);
  
  async function getMovies() {
    const request = await axios.get("http://localhost:8000/");
    setpelis(request.data.results);
  }

 
  useEffect(() => {
    getMovies()
    return () => {
      alert("Guardando info") 
    }
  },[])
  
  return (
    <>
      <Div>
        <Text size="2rem">Recommended:</Text>
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

export default Home;
