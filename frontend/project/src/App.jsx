import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <>
    <NavBar/>
    <MovieCard/>
    <Routes>
      <Route path="/home" element={<Home />} />     
    </Routes>
    </>
  );
}

export default App;
