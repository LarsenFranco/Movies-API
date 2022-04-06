import MovieCard from "./MovieCard";
import { Div, Text, Grid } from "../Elements/HomeMovie";
import { useEffect, useState } from "react";
function Home(props) {
  let {results, from} = props.movies;
  let [title,setTitle]=useState("Most popular")
  let [path,  setPath]= useState("/")

useEffect(() => {
  setPath(window.location.pathname)
}, results)


  return (
    <>
      <Div>
      <Text size="2rem">{path}</Text>       
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
