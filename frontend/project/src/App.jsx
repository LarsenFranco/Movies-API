import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from  "./App.module.css"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div>
      <NavBar/>
      <MovieCard/>
      <Routes>
        <Route path="/home" element={<Home />} />     
      </Routes>
    </div>
  );
}

export default App;
