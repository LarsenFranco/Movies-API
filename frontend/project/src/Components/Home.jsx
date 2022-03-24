import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios';


import {Div, Text} from "../Elements/HomeMovie";

function Home() {
  
  const [pelis, setpelis] = useState([])
  async function getMovies(){
    const request = await axios.get("http://localhost:8000/hardcode250")
    setpelis(request.data.items)
  }

  getMovies()
 

//pelis.length?<MovieCard props={pelis[1]}/>:null 
  return (
 
 <>
   <Div>
    <Text size="2rem">Recomendados:</Text>
   </Div>
  <Div>
    { pelis.length && pelis.map((peli)=>(
      <MovieCard key={peli.id} props={peli}> </MovieCard>
    )
    )}
  </Div>
  
  </>
  );
}

export default Home;
