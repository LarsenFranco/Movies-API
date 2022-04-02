import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Div, Text, Grid } from "../Elements/HomeMovie";
import { useDispatch, useSelector } from "react-redux";
import {setMovies} from '../../Redux/Actions'
function Home() {  
  let dispatch = useDispatch();
  let [page, setPage] = useState(1)
  
  let pelis=useSelector((store)=>store)
 
  async function getMovies(page) {
    scrollTo(0, 0);
    const request = await axios.get(`http://localhost:8000?page=${page}`);
    dispatch(setMovies(request.data.results))   
    
  }
 
  useEffect(() => {
   
    getMovies(page);
  },[page]);



   
  return (
    <> 
    <Div>
        <Text size="2rem">Recommended:</Text>        
        <Div>
          <Grid>
            {pelis.length &&
              pelis.map((peli) => <MovieCard key={peli.id} props={peli} />)}
            </Grid>
        </Div>
        <button onClick={()=>setPage(page+1)}>NEXT</button>
        <button onClick={()=>setPage(page-1)}>PREV</button>
      </Div>
      
    </>
  );
}

export default Home;
