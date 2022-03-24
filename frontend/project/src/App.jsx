import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from  "./App.module.css"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />     
      </Routes>
    </div>
  );
}

export default App;
