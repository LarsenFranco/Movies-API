import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Div, Text, Grid } from "../Elements/HomeMovie";


function Home(props) {

  let {results} = props.movies;


 

  return (
    <>
      <Div>
        <Text size="2rem">Most Popular:</Text>
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
