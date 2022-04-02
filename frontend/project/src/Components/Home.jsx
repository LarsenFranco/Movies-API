import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Div, Text, Grid } from "../Elements/HomeMovie";
import { useDispatch, useSelector } from "react-redux";
import {setMovies} from '../../Redux/Actions'
import {Button} from "../Elements/Card";







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


  const  turnPage  = (value) =>{
    switch (value) {
      case "+":
        if(page<500){
          setPage(page+1)
        }
        break;
        case "-":
          if(page>1){
            setPage(page-1)
          }
          break;
      default:
        break;
    }
  }

   
  return (
    <> 
    <Div>
        <Text size="2rem">Most Popular:</Text>        
        <Div>
          <Grid>
            {pelis.length &&
              pelis.map((peli) => <MovieCard key={peli.id} props={peli} />)}
            </Grid>
        </Div>
        <Div  dir={"row"}>
          <Button onClick={()=>turnPage("-")}>PREV</Button>
          <Button onClick={()=>turnPage("+")}>NEXT</Button>
        </Div>
      </Div>
      
    </>
  );
}

export default Home;
