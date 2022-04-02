import MovieCard from "./MovieCard";
import { Div, Text, Grid } from "../Elements/HomeMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Home(props) {
  let {results, from, movies} = props.movies;
  let [title,setTitle]=useState("Most popular")
//  console.log(props)
useEffect(() => {
  const pathname = window.location.pathname
  if(pathname === "/favs"){
  setTitle("Favorites")
  }else{
    setTitle("Most popular")
  }
 
 
}, [props])


  return (
    <>
      <Div>
      <Text size="2rem">{title}</Text>       
          <Div>
            <Grid>
              {results && results.map((peli) => <MovieCard key={peli.id} props={peli} />)}
            </Grid>
          </Div>
      </Div>
    </>
  );
}

export default Home;
