import MovieCard from "./MovieCard";
import { Div, Text, Grid } from "../Elements/HomeMovie";


function Home(props) {
  let {results, from, movies} = props.movies;
  let title="Most Popular:"
  if(results[0]==="favorito"){
    title="Favorites"
    results.shift();
  }
  return (
    <>
      <Div>
        {from==="search"?<Text size="2rem">Coincidences:</Text>:<Text size="2rem">{title}</Text>}        
        {results && (
          <Div>
            <Grid>
              {results &&
                results.map((peli) => <MovieCard key={peli.id} props={peli} />)}
            </Grid>
          </Div>
        )}        
      </Div>
    </>
  );
}

export default Home;
