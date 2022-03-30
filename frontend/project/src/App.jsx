
import { Routes, Route } from "react-router-dom";
import styled from  "./App.module.css"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Provider } from 'react-redux';
import Favorites from "./Components/Favorites";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/favs" element={<Favorites />} />     
      </Routes>
    </>
  );
}

export default App;
